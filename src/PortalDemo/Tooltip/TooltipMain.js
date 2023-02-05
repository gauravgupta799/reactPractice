import React,{useState} from 'react'
import Tooltip from "./Tooltip";

const ToolMain = () => {
    const [tooltipText, setTooltipText] = useState("");
  return (
    <div>
    <h2 
      onMouseEnter={()=>setTooltipText("This is a tooltip")}
      onMouseLeave={()=>setTooltipText("")}
    >
    Hover over me
    </h2>
    {tooltipText && (
      <Tooltip text={tooltipText}>
          <p>This tooltip has created by 
            using the portal</p>
      </Tooltip>               
    )
    }
  </div>
  )
}

export default ToolMain