import React, { useEffect, useState } from 'react'
import "./SearchInData.css";
import axios from "axios"

export default function SearchInData() {
    const[findText , setFindText] = useState("")
    const [data , setData] = useState([])


    useEffect(() => {
        axios.get("https://fakestoreapi.com/users").then((res) => setData(res.data)) .catch((err) => alert("error in api"))
        console.log(data)
    },[])

    const handleSearch = () => {
        // console.log("asda" , findText)
       const finded =  data.filter((x) => x.username === findText)
       setData(finded)
       console.log("findeee" , finded)
       setFindText("")
    }



  return (
    <div>
      <input type="text" placeholder='Search input' value={findText} onChange={(e) => setFindText(e.target.value)} />
      <button onClick={() => handleSearch()}>Search</button>

      <div className='mainDivData'>
          {
              data.map((e) => (
                  <div className='individual'>
                      <p>email :{e.email}</p>
                      <p>username: {e.username}</p>
                      <p>phone :{e.phone}</p>
                      <p>city :{e.address.city}</p>
                      <p>street : {e.address.street}</p>
                      <p>phone : {e.phone}</p>
                      <p>zipcode : {e.address.zipcode}</p>
                  </div>
              ))
          }
      </div>
    </div>
  )
}
