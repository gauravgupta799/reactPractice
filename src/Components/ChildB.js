import React from 'react'
// import ChildC from './ChildC'
import UseContext from "./UseContext";

const ChildB = () => {
  return (
    <div>
        <h2>Child B</h2>
        <UseContext/>
        {/* <ChildC/> */}
    </div>
  )
}

export default ChildB