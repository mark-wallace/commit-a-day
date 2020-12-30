import React from 'react';
import './button.css';

function Button(props) {

  function clickMe() {
    alert(props.myMsg)
  }
  
  return( 
    <div >
      <button onClick={clickMe}>
        Button
      </button>
    </div>
  ); 
}

export default Button;