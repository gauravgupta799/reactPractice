import React,{useState, useEffect} from 'react'

const UseEffect = () => {
    const [count, setCount] = useState(0);
    const [startTimer, setStartTimer] = useState(false);
    const [timerId, setTimerId] = useState(0)

    useEffect(()=>{
      let intervalId =null;
        if(startTimer){
            intervalId = setInterval(()=>{
               setCount(prev => prev-1);
            },1000);
            setTimerId(intervalId)
        }else{
           clearInterval(timerId);
        }
    },[startTimer]);

  return (
    <div>
       <h1>Learning <span style={{color:"red"}}> useEffect()</span> Hook</h1>
       <h2>CountDown: {count}</h2>
       <div>
         <input type="number" onChange={(e)=>setCount(e.target.value)}/>
        <div style={{marginTop:"10px"}}>
            <button onClick={()=>setStartTimer(true)}>Start Timer</button>
            <button onClick={()=>setStartTimer(false)}>Pause Timer</button>
        </div>
       </div>
    </div>
  )
}

export default UseEffect
