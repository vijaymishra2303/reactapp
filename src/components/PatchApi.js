import React, { useState } from "react";

function PatchApi() {
   // Initialize id state
    const [rollno, setRollno] = useState("");
    const [name, setName] = useState("");
    const [marks, setMarks] = useState("");

    function Submitform(e) {
        e.preventDefault();
        const data = { rollno, name, marks }; // Include id in the data
        fetch("https://hclapi-9wny.onrender.com/" + rollno, { // Make sure to include "/" before id
            method: "PATCH",
            headers: {
                "Accept": "application/json",
                "Content-Type": "application/json"
            },
            body: JSON.stringify(data)
        })
        .then((result) => {
            if (result.ok) {
                return result.json();
            } else {
                throw new Error('Failed to patch data');
            }
        })
        .then((data1) => {
            console.log(data1);
        })
        .catch((error) => {
            console.error('Error:', error);
        });
    }

    return (
        <div>
            <form onSubmit={Submitform}>
               
                <input type="number" placeholder="Enter Roll no" value={rollno} onChange={(e) => setRollno(e.target.value)}></input><br></br>
                <input type="text" placeholder="Enter name" value={name} onChange={(e) => setName(e.target.value)}></input><br></br>
                <input type="number" placeholder="Enter marks" value={marks} onChange={(e) => setMarks(e.target.value)}></input><br></br>
                <button type="submit">Submit</button>
            </form>
        </div>
    );
}

export default PatchApi;
