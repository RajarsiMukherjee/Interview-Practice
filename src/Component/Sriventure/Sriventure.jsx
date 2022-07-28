import React from 'react'
import "./Sriventure.css";
import axios from 'axios';
export default function Sriventure() {

    const handelAdd = () => {
        axios.get("https://jsonplaceholder.typicode.com/todos").then((res) =>
        console.log(res.data[0])).catch((err)=> console.log(err))
    }
  return (
    <div>
        <h1>Hello StackBlitz!</h1>
        <p>Start editing to see some magic happen</p>
        <div className='Btn'>
            <button onClick={() => handelAdd()}>Add</button>
        </div>
    </div>
  )
}
//https://jsonplaceholder.typicode.com/todos
