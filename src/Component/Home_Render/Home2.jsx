import React from 'react'
import { useNavigate } from 'react-router-dom'

export default function Home2() {
  const navigate = useNavigate()
  return (
    <div>
      <button onClick={() => navigate("/")}>Home 1</button>
      <h1>home 2</h1>
      <h1>Welocome to home of 2</h1>
    </div>
  )
}
