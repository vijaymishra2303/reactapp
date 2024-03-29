import { useState } from "react"

function DeleteApi()
{
    const [rollno,setRollno]=useState()
    function Submitform(e)
    {
         e.preventDefault()
        const data={rollno}
        fetch("https://hclapi-9wny.onrender.com",{
            method:"DELETE",
            headers:{
                "Accept":"application/json",
                "Content-Type":"application/json"
            },
            body:JSON.stringify(data)
        }).then((result)=>{
            result.json().then((data1)=>{
                console.log(data1)
            })
        })

        alert(rollno + " Has Been Deleted")
    }

    return(
        <div>
            <h1>Delet data</h1>
            <form onSubmit={Submitform}>
                <input type="number" placeholder="Enter Roll no" onChange={(e)=>setRollno(e.target.value)}></input><br></br>
               <button variant="flat">Submit</button>
               
            </form>
        </div>
    )
}
export default DeleteApi