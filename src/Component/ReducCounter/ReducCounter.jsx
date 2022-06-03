import React from 'react'
import {useSelector} from "react-redux"

export default function ReducCounter() {
    const count = useSelector((store) => store.count)

    console.log("ctttt" , count)

  return (
    <div>
      hello
    </div>
  )
}
