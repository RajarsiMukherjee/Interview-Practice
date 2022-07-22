import React from 'react'
import { useState } from 'react';

export default function SearchFromArr() {
    let data = ["Sun", "Son", "Some", "Rest", "Test", "Clear", "Many"];
    const[word, setWord] = useState([]);
    console.log(word);

    const dataChange = (e) => {
        const {value} = e.target;
        console.log(value);

        let arr = data.filter((post)=> 
            post.toLowerCase().includes(value.toLowerCase())
        );
        if(value.length != 0){
            setWord([...arr]);
        }
    };

  return (
    <div>
        <h1>Search</h1>

        <input type="text" placeholder='type here...' 
        onChange={dataChange} />
        {word.map((element) => {
            return <p>{element}</p>;
        })}
        
    </div>
  )
}
