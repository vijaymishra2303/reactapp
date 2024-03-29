import { useState } from "react";

function PutApi() {
    const [name, setName] = useState("");
    const [rollno1, setRollno] = useState("");
    const [marks1, setMarks] = useState("");

    function submitForm() {
        const rollno = parseInt(rollno1);
        const marks = parseInt(marks1);
        const data = { rollno, name, marks };

        fetch("https://hclapi-9wny.onrender.com/", {
            method: "PUT",
            headers: {
                "Accept": "application/json",
                "Content-Type": "application/json"
            },
            body: JSON.stringify(data)
        })
        .then(result => result.json())
        .then(data => {
            console.log(data);
            // Optionally, handle the response data here
        })
        .catch(error => {
            console.error("Error:", error);
            // Optionally, handle errors here
        });
    }

    return (
        <div>
            <input type="number" placeholder="Enter Roll no" value={rollno1} onChange={(e) => setRollno(e.target.value)} /> <br />
            <input type="text" placeholder="Enter Name" value={name} onChange={(e) => setName(e.target.value)} /> <br />
            <input type="number" placeholder="Enter Marks" value={marks1} onChange={(e) => setMarks(e.target.value)} /> <br />
            <button onClick={submitForm}>Submit</button>
        </div>
    );
}

export default PutApi;
