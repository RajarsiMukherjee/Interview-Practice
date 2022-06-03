import React, { useState } from 'react'
import "./Counter.css"

export default function Counter() {
    const [count1 , setCount] = useState(0)
    console.log(count1)
  return (
    <div>
      <h1>Counter</h1>
      
      <h1>{count1}</h1>
      <button onClick={() => setCount(count1 + 1 )}>Add</button>
      {
          count1 > 0 ? <button onClick={() => setCount(count1-1)}>Subtract</button> : <></>
      }

      {
        count1 %2 === 0 ? <><p className='Even'>Even</p></> : <><p className='Odd'>Odd</p></>
      }
      {/* <button onClick={() => setCount(count1-1)}>Subtract</button> */}
    </div>
  )
}
