import React, { useState, useEffect } from 'react'
import "./Counter.css"

export default function Counter() {
    //Normal counter
    //   const [count1 , setCount] = useState(0)
    //   console.log(count1)
    // return (
    //   <div>
    //     <h1>Counter</h1>

    //     <h1>{count1}</h1>
    //     <button onClick={() => setCount(count1 + 1 )}>Add</button>
    //     {
    //         count1 > 0 ? <button onClick={() => setCount(count1-1)}>Subtract</button> : <></>
    //     }

    //     {/* {
    //       count1 %2 === 0 ? <><p className='Even'>Even</p></> : <><p className='Odd'>Odd</p></>
    //     } */}
    //     {/* <button onClick={() => setCount(count1-1)}>Subtract</button> */}
    //   </div>
    // )

    //counter with aleart amd max = 20
    const [count, setCount] = useState(0);
    const [dis, setDis] = useState(false)

    // useEffect(() => {
    //     setTimeout(() => {
    //         // setCount(count + 1)
    //         // setDis(true)
    //         handleAdd()

    //     },1000)
    // },[count])

    const handleAdd = () => {
        if (count <= 19) {
            setDis(false)
            setCount(count + 1)
        }
        else {
            setDis(true)
        }
    }

    const handleSub = () => {
        if (count > 0) {
            setDis(false)
            setCount(count - 1)
        }
        else {
            setDis(true)
        }

    }

    return (
        <div>
            <p>Counter</p>
            <p>Count : {count}</p>
            <div className='Btn'>
                <button onClick={() => handleAdd()}>Add</button>
                <button onClick={() => handleSub()}>Subtract</button>
            </div>

            {
                dis === true ? <>Exceed</> : <></>
            }
        </div>
    )
}
