import React, { useState } from 'react'
import './Todo.css';


const Todo = () => {
    // state for todo 
    const [name, setName] = useState("");
    const [allData, setAllData] = useState([]);
    const [show, setShow] = useState(false);
    const [editIndex, setEditIndex] = useState();


    const handleAdd = () => {
        if (name.length !== 0) {
            setAllData(newData => [...newData, name]);
            setName("")
        }
    }

    const handleUpdate = () => {
        allData.splice(editIndex, 1, name);
        setAllData([...allData]);
        setShow(false);
        setName("");

    }

    const handleEdit = (i) => {

        setName(allData[i]);
        setShow(true);
        setEditIndex(i);

    }

    const handleDelete = (index) => {
        allData.splice(index, 1);
        setAllData([...allData]);

    }

    return (
        <div>
            <h2>Todo-app</h2>

            <input value={name} onChange={(e) => setName(e.target.value)} type="text" placeholder='write todo here ...' />
            {!show ? <button onClick={handleAdd}>Add</button> :
                <button onClick={handleUpdate}>Update</button>}

            {
                allData.map((val, i) =>
                    <div>
                        <h1>{val}</h1>
                        <button className='edit' onClick={() => handleEdit(i)}>Edit</button>
                        <button className='delete' onClick={() => handleDelete(i)}>Delete</button>
                    </div>
                )
            }

        </div>
    )
}

export default Todo
