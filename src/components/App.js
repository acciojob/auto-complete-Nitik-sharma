
import React, { useEffect, useState } from "react";
import './../styles/App.css';


const App = () => {
let fruits = ["apple", "banana", "cherry", "date", "elderberry", "fig"];
const [input,setInput]=useState('');


const [get,setGet]=useState([]);


useEffect(() => {
  const filterData = fruits.filter((item) =>
    item.toLowerCase().includes(input.toLowerCase())
  );
  setGet(filterData);
}, [input]);

console.log(get);
  const handleChange=(e)=>{
     setInput(e.target.value);
  }
  
  return (
   
    <div className="container">
       <h1>Search item</h1>
       <input type="text" onChange={handleChange} value={input}/>
       {
        get.map((item,index)=>(
          <li key={index}>{item}</li>
        ))
       }
    </div>
  )
}

export default App
