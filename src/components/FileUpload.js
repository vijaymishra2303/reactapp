 


// import { useState } from "react"
// import axios from "axios"

// function FileUpload() {
//     const [name, setName] = useState()
//     const [image, setImage] = useState()

//     const handleChange = (e) => {
//         setImage(e.target.files[0])
//     }

//     const handleApi = (e) => {
//         e.preventDefault(); // Prevent default form submission behavior

//         const url = "http://localhost:4000/" 
//         const formData = new FormData()
//         formData.append('file', image)
//         formData.append('name', name)
//         axios.post(url, formData)
//             .then(result => {
//                 console.log(result.data)
//                 alert("Success")
//             })
//             .catch(error => {
              
//                 alert("Error uploading file")
//             })
           
//     }

//     return (
//         <div>
//             <form encType="multipart/form-data">
//                 <input type="text" onChange={(e) => setName(e.target.value)} placeholder="enter name" /><br />
//                 <input type="file" onChange={handleChange} /><br />
//                 <button onClick={handleApi}>Submit</button>
//             </form>
//         </div>
//     )
// }

// export default FileUpload














