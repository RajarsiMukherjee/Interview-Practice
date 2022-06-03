import { useEffect, useState } from "react";

export const StopWatch = () => {
    const [isStart, setIsStart] = useState(false);
    const [min, setMin] = useState(0);
    const [sec, setSec] = useState(0);

    let interval = null;

    useEffect(() => {
        // if (isStart !== false) {
        //     interval = setTimeout(() => {
        //         if (sec === 60) {
        //             setTimeout(() => {
        //                 setSec(0);
        //                 setMin(min + 1);
        //             }, 1000);
        //         } else {
        //             setSec(sec + 1);
        //         }
        //     }, 1000);
        // }


        setTimeout(() => {
            if(isStart){
                if(sec === 60){
                    setSec(0)
                    setMin(min+1)
                }
                else{
                    setSec(sec+1)
                }
            }
                
        },10)

    }, [sec, min, isStart]);

    function handleStart() {
        setIsStart(!isStart);
    }

    function handlePause() {
        setIsStart(false);
    }

    function handleReset() {
        setMin(0);
        setSec(0);
        setIsStart(false);
        clearInterval(interval);
    }

    return (
        <>
            <div>
                <div>
                    {min}m {sec}s
                </div>
                <div>
                    <button onClick={handleStart}>START</button>
                    <button onClick={handlePause}>STOP</button>
                    <button onClick={handleReset}>RESET</button>
                </div>
            </div>
        </>
    );
};



// sec=== 0 
// sec++   59sec
// min+1 
// sec0

