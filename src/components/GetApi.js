import { useEffect, useState } from 'react';
import Table from 'react-bootstrap/Table';

function GetApi() 
{
    const [data1,setData]=useState([])
    useEffect(()=>
    {
      fetch("https://hclapi-9wny.onrender.com/").then((result)=>{
        result.json().then((data)=>
        {
            setData(data)
        })
      })
    },[])
  return (
    <Table striped bordered hover variant="dark">
      <tbody>
      <tr>
            <td>rollno</td>
            <td>name</td>
            <td>Marks</td>
      </tr>
        {
          data1.map((item)=>
          <tr>
                <td>{item.rollno}</td>
                <td>{item.name}</td>
                <td>{item.marks}</td>
          </tr>
          )
        }
      </tbody>
    </Table>
  );
}

export default GetApi;