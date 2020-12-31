import { useState } from 'react';
function ROOM() {
  //const state = useState(true);
  //console.log("State =",state);
  let [isLit, setLit] = useState(false);
  let [Age, setAge] = useState(24);
  //let age=45;
  //islit=!islit;
  //age = 67;
  
  return (
    <div>
      This room is {isLit? "lit": "dark"}
      <br/>
      Age:{Age}
      <br/>
      <button onClick={()=> setLit(!isLit) } >Toggle Light</button>
      <br/>
      <button onClick={ ()=> {
                        console.log("Increase Age Button clicked");
                        setAge(++Age);
                        }}>
    Increase Age
    </button>
    </div>
  );
      }
export default ROOM;