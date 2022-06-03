import React, { useState } from 'react'

export default function HideBTNAfterSomeCount() {
    const [count, setCount] = useState(0)
    return (
        <div>
            <h1>hello</h1>
            <h1>{count}</h1>

            {/* {
          count >= 10 ? <></> : <><button onClick={() => setCount(count + 1)} >Add</button></>
      } */}


            <button disabled={count >= 10} onClick={() => setCount(count + 1)} >Add</button>


        </div>
    )
}
