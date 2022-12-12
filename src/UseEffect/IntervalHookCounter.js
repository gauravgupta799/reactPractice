import React,{useState, useEffect} from 'react'

const IntervalHookCounter = () => {
    const [count, setCount] = useState(0);
     useEffect(() => {
      console.log("second useEffect")
     },[])

    useEffect(()=>{
        const doSomething = () => {
            console.log("dosomething")
        }
        doSomething();
        let intervalId = setInterval(()=>{
           setCount(prevCount=> prevCount + 1 )
        },1000)
        return ()=>{
            clearInterval(intervalId)
        }
    },[])

  return (
    <div>
        <h1>{count}</h1>
    </div>
  )
}

export default IntervalHookCounter