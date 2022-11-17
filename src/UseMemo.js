import React,{useState, useMemo} from 'react'

const UseMemo = () => {
    const [add, setAdd] = useState(0);
    const [minus ,setMinus] = useState(100);

// With useMemo Hook >>>>>>>
    const multiplication = useMemo(()=>{
           console.log("Multiply Function is called")
            return add * 5
    },[add]);
    
// Without useMemo Hook >>>>>>>
    // const multiply=()=>{
    //     console.log("Multiply Function is called")
    //     return add * 5
    // }

  return (
    <div>
      <h1>useMemo() Hook </h1>
      {/* <h2>{multiply()}</h2> */}
      <h2>{multiplication}</h2>
      <div>
        <button onClick={()=>setAdd(add+1)}>Add</button>
        <span style={{marginLeft:"20px",fontSize:"24px"}}>{add}</span>
      </div>
      <div>
        <button onClick={()=>setMinus(minus-1)}> Subtract</button>
        <span style={{marginLeft:"20px",fontSize:"24px"}}>{minus}</span>
      </div>
    </div>
  )
}

export default UseMemo
