import axios from 'axios';
import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import "./FilterApi.css";

export default function FilterApi() {
    const[data , setData] = useState([])
    console.log(data)
    // category
    useEffect(() => {
        axios.get("https://fakestoreapi.com/products").then((res) => setData(res.data)).catch((err) => console.log(err))
    },[])

    const HANDLEmen = () => {
        const fil = data.filter((e) => e.category === "men's clothing")
        setData(fil)
    }

    const handleSort = () => {
        const sor = data.sort((a,b) => {return (a.price - b.price)} )
        console.log("sort", sor)
        setData(sor)
    }

    const HandleDESC = () => {
        const desc = data.sort((a,b) => {return (b.price - a.price)})
        setData(desc)
    }
  return (
    <div><p>FilterApi</p>

    <button onClick={() => HANDLEmen()}>men's clothing</button>
    <button onClick={() => handleSort()}>Sort</button>
    <button onClick={() => HandleDESC()}>desc</button>
    
    {
        data.map((e) => (
            <p>{e.price}</p>
        ))
    }
    
    </div>
  )
}
