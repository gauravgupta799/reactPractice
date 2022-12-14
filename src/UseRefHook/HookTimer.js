import React,{useState,useEffect,useRef} from 'react'

const HookTimer = () => {
    const [timer,setTimer] = useState(0);
    const [startTimer,setStartTimer] = useState(false);
    const [inputVal ,setInputVal] = useState("");

    const inputRef = useRef()
    const intervalRef = useRef()

    useEffect(() => {
       if(startTimer){
        intervalRef.current = setInterval(()=>{
            // setTimer(prevVal=> prevVal + 1)
            setInputVal(prevInvVal=> prevInvVal - 1)
            inputRef.current.disabled= true
         },1000)
       }
       return () => {
        clearInterval(intervalRef.current)
       }
    },[startTimer])
    
    const handleStartTimer =()=>{
        setStartTimer(true)
    }
    const handleClearInterval=()=>{
        setStartTimer(false)
        inputRef.current.disabled= false
        clearInterval(intervalRef.current)
    }
  return (
    <div>
      <h2>Hook Timer: {inputVal}</h2>
      <input type="number" ref={inputRef} value={inputVal} onChange={(e)=>setInputVal(e.target.value)}/><br/>
      <button onClick={handleStartTimer}>Start Time</button>
      <button onClick={handleClearInterval}>Clear Timer</button>
    </div>
  )
}

export default HookTimer
