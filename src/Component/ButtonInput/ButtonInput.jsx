import React, { useEffect, useState } from 'react'
import axios from 'axios';
import "./ButtonInput.css"

export default function ButtonInput() {
// initialize all the useState
    const [textt, setText] = useState("");
    const [num, setNum] = useState("")
    const [display, setDisplay] = useState([])

    // useeffect to run the get data function
    useEffect((e) => {
        dataShow()
    }, [])

    // add task button function
    const handleAddtask = () => {
        const data = {
            textt,
            num
        }
        axios.post("http://localhost:8080/data", data).then((res) => { dataShow(); clearAll() }).catch((err) => console.log(err))
    }

    // clear the state of the variable initialise 
    const clearAll = () => {
        setNum("")
        setText("")
    }

    // get data from api function
    const dataShow = () => {
        axios.get("http://localhost:8080/data").then((res) => setDisplay(res.data))
    }

    // delete the task form frontend function
    const handleDelete = (id) => {
        // console.log("isssssss", id)
        axios.delete(`http://localhost:8080/data/${id}`).then((res) => { dataShow() })
    }

    return (
        <div>
            <label htmlFor="">Name : </label>
            <input type="text" value={textt} onChange={(e) => { setText(e.target.value) }} />  <br /><br />

            <label htmlFor="">Phone : </label>
            <input type="text" value={num} onChange={(e) => { setNum(e.target.value) }} /> <br /><br />

            <button onClick={() => { handleAddtask() }}>Add Task</button> <br />

{/* turnary operation 
if(display.length !== 0){
    data show
}
else{
    no data found
}
*/}
            {
                display.length !== 0 ?
                    <div className='TableMain'>
                        <table>
                            <tr>
                                <th>ID</th>
                                <th>Name</th>
                                <th>Number</th>
                                <th>Delete</th>
                            </tr>
                            <tfoot>
                                {
                                    display.map((e) => (
                                        <tr key={e.id}>
                                            <td>{e.id}</td>
                                            <td>{e.num}</td>
                                            <td>{e.textt}</td>
                                            <td onClick={() => handleDelete(e.id)}> <i class="material-icons">delete</i></td>
                                        </tr>
                                    ))
                                }
                            </tfoot>
                        </table>
                    </div> :
                    <><h1>No Data Found</h1></>
            }
        </div>
    )
    
}

