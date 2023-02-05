import React,{useRef } from 'react';
import ReactDOM from "react-dom";

const Tooltip = ({children , text}) => {
    // const tooltipRoot = useRef(document.createElement('div'));
    const tooltipRoot =document.getElementById('tooltip');

  return ReactDOM.createPortal(
    <div className="tooltip"
      style={{
        height:'100px',
        width:'100px',
        border:'1px solid gray',
        color:'black'
        }}
     >
      <p style={{color:'black'}}>{text}</p>
    </div>,
    tooltipRoot
  )
}

export default Tooltip