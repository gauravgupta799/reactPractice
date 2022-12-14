import React,{useState, useCallback} from 'react';
import Child from "../Components/Child";

const UseCallback = () => {
  const [count, setCount] = useState(0);
  const [add,setAdd] = useState(0);

  const fun = useCallback(()=>{
    console.log("Function rendered.")
  },[])

  // const fun =()=>{
  //   console.log("Function rendered.")
  // }

  return (
    <div>
        <h1>useCallback() Hook</h1>
        <Child add={add} fun={fun}/>
        <h2>{count}</h2>
        <button onClick={()=>setCount(count+1)}>Count</button>
        <br/><br/>
        <button onClick={()=>setAdd(add+5)}>Add 5</button>
    </div>
  )
}

export default UseCallback;