import axios from 'axios'
import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'

export default function SearchApi() {
    const [data, setData] = useState([])
    const [data2, setData2] = useState([])

    const [name, setname] = useState("")

    useEffect(() => {
        axios.get("https://fakestoreapi.com/users").then((res) => { setData(res.data); setData2(res.data) }).catch((err) => console.log(err))
    }, [])

    const handleSearch = () => {
        console.log(data)
        const datafill = name.length === 0 ? data2 : data.filter((e) => name.toLowerCase().includes(e.username.toLowerCase()))
        console.log(datafill)
    }
    return (
        <div>
            <p>Api data search</p>
            <input type="text" value={name} onChange={(e) => setname(e.target.value)} />
            <button onClick={() => handleSearch()}>submit</button>
        </div>
    )
}
