import React, { useState } from 'react'

export default function Validation() {

  const[numb , setNum ] = useState("")
  const[textin , setTextin] = useState("")

  const handleNumber = (e) => {
   console.log(numb.length)
    if(e.target.value > 0 && numb.length < 3){
      console.log(e.target.value)
      setNum(e.target.value)
    }
    else{
      alert("not number inavlid")
    }
  }

  const handleText  = (e) => {
   
    if(e.target.value[textin.length] > 0 ){  
      alert("not text ")
    }
    else{
      if(textin.length <8){
        setTextin(e.target.value)
      console.log(e.target.value)
      }
      else{
        alert("limit exceed")
      }
    }
    
  }

  return (
    <div>
        {/* <label htmlFor="">Check only number</label> */}
      <input type="text" value={numb}  onChange={(e) => handleNumber(e)}/>Number

      <input type="text" value={textin} onChange={(e) => handleText(e)}/>text
    </div>
  )
}
