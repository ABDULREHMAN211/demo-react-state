import React, { useState } from 'react';
import './ROOM.css';
function ROOM() {
  //const state = useState(true);
  //console.log("State =",state);
    let [isLit, setLit] = useState(false);
    let [Temperature, setTemperature] = useState(72);
  //let age=45;
  //islit=!islit;
  //age = 67;
  
  return (
    <div className={`room ${isLit? "lit": "dark"}`}>
      This room is: {isLit? "lit": "dark"}
      <br/>
      <br/>
    Temperature is: {Temperature}
      <br/>
      <br/>
    <button onClick={()=>setTemperature(++Temperature)}>IncTemp</button>
    <button onClick={()=>setTemperature(--Temperature)}>DecTemp</button>
      <br/>
      <br/>
    <button onClick={()=>setLit(true)}>ON</button>
    <button onClick={()=>setLit(false)}>OFF</button>
    </div>
  );
      }
export default ROOM;