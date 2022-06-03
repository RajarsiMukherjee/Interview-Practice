import React, { useEffect, useState } from 'react'

export default function StopClock() {

    const [play, setPlay] = useState(false)
    const [sec, setSec] = useState(0)
    const [min, setMin] = useState(0)

    useEffect(() => {
        if (play) {
            setTimeout(() => {
                if (sec === 60) {
                    setSec(0)
                    setMin(min + 1)
                }
                else {
                    setSec(sec + 1)
                }

            }, 1000)
        }
    }, [sec, min, play])

    const handleStart = () => {
        setPlay(true)
    }

    const handleStop = () => {
        setPlay(false)
    }

    const handleReset = () => {
        setMin(0)
        setSec(0)
        setPlay(false)
    }

    return (
        <div>
            <h1> Min : {min}</h1>
            <h1>Sec : {sec}</h1>

            <button onClick={() => handleStart()}>Start</button>
            <button onClick={() => handleStop()}>Stop</button>
            <button onClick={() => handleReset()}>Reset</button>
        </div>
    )
}
