import React, { useEffect, useState } from 'react'
import "./InstagramStories.css"

export default function InstagramStories() {

    const [data, setData] = useState("")
    const[count, setCount] = useState(0)

    const arr = ["https://i.pinimg.com/564x/12/3c/47/123c470a7b81a14bc5deb301d6c62b4f.jpg" , "https://i.pinimg.com/564x/1d/ac/87/1dac870b20a5bebfd71c794fcb2ace66.jpg" , "https://i.pinimg.com/564x/67/9c/e6/679ce625dd1c8009e9523629042e036c.jpg"]

    useEffect(() => {

        for(let i=0 ; i< arr.length ; i++){
            
            setTimeout(function() {  
                console.log("hello",i) 
                setData(arr[i])
            },i*2000)
          }
    }, []);

    return (
        <div>

            <p>{data}</p>
            <img src={data} alt="" width={300} height = {400}/>
            <button>previous</button>
            <button>next</button>
        </div>
    )
}
