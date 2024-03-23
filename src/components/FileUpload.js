// import { useState } from "react"
// import axios from "axios"
// function FileUpload(){
//     const [name ,setName]=useState()
//     const [image,setImage]=useState()
//     const handleChange =(e)=>{
//         console.log(e.target.files)
//        setImage(e.target.files[0])
//     }

// const handleApi = (e)=>{
// const url="https://hclapi-9wny.onrender.com"
// const formData=new formData()
// formData.append('file',image)
// formData.append('name',name)
// axios.post(url.formData).then(result=>{
//     console.log(result.data)
//     alert("Succes")
// })
// }

//     return(
//         <div>
//         <input type="text" onChange={(e)=>setName(e.target.value)} placeholder="enter name"></input><br></br>
//         <input type="file" onChange={handleChange}  placeholder="upload file"></input>
//         <button onClick={handleApi}>Submit</button>
//         </div>
//     )
// }
// export default FileUpload




import { useState } from "react"
import axios from "axios"

function FileUpload() {
    const [name, setName] = useState("")
    const [image, setImage] = useState(null)

    const handleChange = (e) => {
        setImage(e.target.files[0])
    }

    const handleApi = (e) => {
        e.preventDefault(); // Prevent default form submission behavior

        const url = "https://hclapi-9wny.onrender.com/"; // Correct endpoint URL
        const formData = new FormData()
        formData.append('file', image)
        formData.append('name', name)

        axios.post(url, formData)
            .then(result => {
                console.log(result.data)
                alert("Success")
            })
            .catch(error => {
                console.error("Error:", error);
                alert("Error occurred while uploading.")
            })
    }

    return (
        <div>
            <input type="text" onChange={(e) => setName(e.target.value)} placeholder="enter name"></input><br></br>
            <input type="file" onChange={handleChange} placeholder="upload file"></input>
            <button onClick={handleApi}>Submit</button>
        </div>
    )
}

export default FileUpload

//interview -- diffrence between put and patch 