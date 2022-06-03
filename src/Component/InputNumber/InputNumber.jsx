import React, { useState } from 'react'

export default function InputNumber() {
    
const[num , setNum] = useState("")

    const handleChange = (e) => {
 
console.log(e.target.value[num.length])

        if(e.target.value[num.length] >= 0){
          // for Number input only
            setNum(e.target.value)
        }
        else{
          // for only Alphabets
            // setNum(e.target.value)
        }
    }

  return (
    <div>
      <input type="text" placeholder='Number Enter' value={num} onChange={(e) => handleChange(e)}/>
      <h1>{num}</h1>
    </div>
  )
}
