import React, { useState } from 'react'
import "./TodoWithoutBack.css"

export default function TodoWithoutBack() {

    const [todo, setTodo] = useState("")
    const [data, setData] = useState([])
    const [check1, setCheck] = useState(false)

    const HandleData = () => {
        // console.log("datttt", todo)
        setData([...data, todo])
        setTodo("")

    }

    const HandleDelete = (idd) => {
        const filterdata = data.filter((e) => e !== idd)
        setData(filterdata)
    }

    return (
        <div>

            <div>
                <input type="text" value={todo} onChange={(e) => { setTodo(e.target.value) }} />
                <button onClick={() => HandleData()}>Add</button>
            </div>

            <div>
                {
                    data.map((e) => (
                        <div>
                            <input type="checkbox" value={e} onClick={(e) => setCheck(!check1)} />
                            {
                                check1 === true ? <><span className='eline'>{e}</span>
                                    <button onClick={() => HandleDelete(e)}>delete</button><br /><br /></> :
                                    <><span >{e}</span>
                                        <button onClick={() => HandleDelete(e)}>delete</button><br /><br /></>
                            }

                        </div>
                    ))
                }
            </div>

        </div>
    )
}
