import React from 'react'
import { useNavigate } from 'react-router-dom'

export default function Home1() {
  const navigate = useNavigate()
  return (
    <div>
      <button onClick={() => navigate("/h2")}>home 2</button>
      <h1>home 1</h1>
      <h1>Welocome to home of 1 starting web</h1>
    </div>
  )
}
