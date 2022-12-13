import React,{useState, useMemo} from 'react'

const CounterMemo = () => {
    const [counterOne, setCounterOne] = useState(0);
    const [counterTwo, setCounterTwo] = useState(0);

    const incrementOne=()=>{
        console.log("CounterOne rendered!")
        setCounterOne(counterOne + 1)
    }
    const incrementTwo=()=>{
        console.log("CounterTwo rendered!")
        setCounterTwo(counterTwo + 1)
    }
    const isEven = useMemo(()=>{
        let i =0;
        while(i < 2000000000)
        i++;
        return counterOne % 2 ===0
    },[counterOne]);
    
  return (
    <div>
      <button onClick={incrementOne}>CounterOne: {counterOne}</button>
      <span>{isEven ? "Even":"Odd"}</span><br/>
      <button onClick={incrementTwo}>CounterTwo: {counterTwo}</button>
    </div>
  )
}

export default CounterMemo
