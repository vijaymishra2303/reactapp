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
            <td>Image</td>
      </tr>
        {
          data1.map((item)=>
          <tr>
                <td>{item.rollno}</td>
                <td>{item.name}</td>
                <td>{item.marks}</td>
                <td><img src={item.image} alt={item.name} /></td>
          </tr>
          )
        }
      </tbody>
    </Table>
  );
}

export default GetApi;