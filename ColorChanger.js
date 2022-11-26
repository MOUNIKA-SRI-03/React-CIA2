import React,{useState} from 'react'
import "./ColorChanger.css";
 
function ColorChanger() {
  
    const [color,setColor] = useState("white");


  return (
    <div className='outer-box'>
    <div><h2><center>COLOR CHANGER</center></h2>
    <select onChange={e=>setColor(e.target.value)}  >
      <option value="lime">  LIME</option>
      <option value="lavender">  LAVENDER</option>
      <option value="crimson">  CRIMSON</option>
      <option value="darkblue">  DARK BLUE</option>
      <option value="teal">  TEAL</option>
      <option value="#663399">  REBECCA PURPLE</option>
      <option value="ghostwhite">  GHOST WHITE</option>
      <option value="aquamarine">  AQUAMARINE</option>
      <option value="aliceblue">  ALICE BLUE</option>
    </select>
    <div className='display' onChange={e=>setColor(e.target.value)} style={{backgroundColor:color}}>
    </div>
    
    </div>
    </div>
  )
}

export default ColorChanger