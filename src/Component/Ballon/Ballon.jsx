import React, { useEffect, useState } from "react";
import "./Ballon.css";

export default function Ballon() {
    // --------------data initialise ---------------
    const circle = [
        {
            color: "blue",
            index: 1,
        },
        {
            color: "black",
            index: 2,
        },
        {
            color: "Cyan",
            index: 3,
        },
        {
            color: "Yellow",
            index: 4,
        },
        {
            color: "Lime",
            index: 5,
        },
    ];

    // -----------------  useState initilise --------------

    const [Circle, setCircle] = useState([]);
    const [shootnum, setShootnum] = useState("");
    const [emptyDiv, setEmptyDiv] = useState([]);

    useEffect(() => {
        setCircle(circle);
    }, []);

    // ------------------ sort the input -----------------------

    Circle.sort((x, y) => x.index - y.index);

    //   onclick buttion event shoot button
    const shootChange = () => {

        const filter1 = Circle.filter((e) => e.index === +shootnum)

        setEmptyDiv([...emptyDiv, filter1[0]])

        const afteradd = Circle.filter(
            (e) => filter1[0].index !== e.index
        );
        setCircle(afteradd);
        setShootnum("")

    };

    //  ------------------- onclick circle event -----------------------

    const onclickingCircle = (e) => {
        setCircle([...Circle, e]);
        const filterData = emptyDiv.filter((x) => e.index !== x.index);
        setEmptyDiv(filterData);
    };

    return (
        <div className="HomeMain">
            {/* input and button */}
            <div className="InputMainDiv">

                {/* -------input box to shoot the no. --------- */}
                <input
                    type="text"
                    placeholder=" Type Number to shoot "
                    value={shootnum}
                    onChange={(e) => setShootnum(e.target.value)}
                />
                <button onClick={() => shootChange()}>Shoot</button>
            </div>

            <span className="EmptyName">Empty Div</span>
            <span className="Circles5">5 Circles</span>
            <div className="MainDiv">

                {/* --------------empty circle div ----------------*/}


                <div className="Empty_Div">



                    {/* data append */}

                    {emptyDiv.map((e) => (
                        <div
                            className=" EmtySingleDiv"
                            style={{ background: `${e.color}` }}
                            key={e.index}
                            onClick={() => onclickingCircle(e)}
                        >

                            {/* //-------- indexing circle -------- */}

                            <p>{e.index}</p>

                        </div>
                    ))}
                </div>

                {/*------------ circle main div of origin ----------------*/}

                <div>
                    {/* data append */}
                    {Circle.map((e) => (
                        <div
                            className="SingleDiv"
                            style={{ background: `${e.color}` }}
                            key={e.index}
                        >

                            {/* //---------- indexing circle------------ */}

                            <p>{e.index}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}