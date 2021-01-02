import React, { useState } from 'react';
import './button.css';

function Button(props) {
  const [msg, setMsg] = useState(props.myMsg);
  const [fontSize, setFontSize] = useState(100);
  
  function clickMe() {
    setMsg(msg + "...again");
    setFontSize(fontSize + 10);
  }
  
  return( 
    <div >
      <button onClick={clickMe}>
        Button
      </button>
      <p style={{fontSize: fontSize+"%"}}>{msg}</p>
    </div>
  ); 
}

export default Button;