import axios from 'axios'
import React, { useEffect, useState } from 'react'
import "./DataAppendStyle.css"

export default function DataAppendStyle() {
    const [data, setData] = useState([])

    useEffect(() => {
        axios.get("http://localhost:8080/dataapp").then((res) => setData(res.data))
    }, [])
    return (
        <div>
            <h1>data</h1>

            {
                data.map((e) => (
                    <div style={{ border: `2px solid ${e.color}` }} >
                        <p>{e.name}</p>
                        <p>{e.city}</p>
                    </div>
                ))
            }
        </div>
    )
}
