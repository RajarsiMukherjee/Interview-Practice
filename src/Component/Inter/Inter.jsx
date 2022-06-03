import axios from 'axios'
import React, { useState } from 'react'

export default function Inter() {

    const [textin, setTextIn] = useState("")
    const [display, setDisplay] = useState(true)

    const handleChange = (e) => {
        setTextIn(e.target.value)
    }

    const handleBlur = () => {
        console.log("blur")
        setDisplay(false)
    }

    const handleAdd = () => {
        console.log("added")
    }

    return (
        <div>

            {
                display ? <>
                <input type="text" placeholder='Text' onChange={(e) => handleChange(e)}  onBlur={handleBlur} />
                </> : <><p>{textin}</p></>
            }

            {/* <input type="text" onFocus={handleFocus} /> */}

            {/* <p>{textin}</p> */}
            <button onClick={() => handleAdd() }>Add</button>
        </div>
    )
}
