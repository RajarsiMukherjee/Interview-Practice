import React, { useEffect, useState } from 'react'
import axios from "axios"

export default function DataFetch() {
    const [data, setData] = useState([])

    useEffect(() => {
        axios("https://cdn-api.co-vin.in/api/v2/appointment/sessions/public/calendarByDistrict?district_id=392&date=02-06-2022").then((res) => setData(res.data.centers))
    }, [])

    var ony = []
    const filterData = data.map((e) => ony.push(...e.sessions))
    console.log("filterrr", ony)

    return (
        <div>
            <h1>data</h1>
        </div>
    )
}
