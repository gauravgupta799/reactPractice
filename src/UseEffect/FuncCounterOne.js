import React, {useState, useEffect} from 'react'

const FuncCounterOne = () => {
    const [count ,setCount] = useState(0)
    const [inputVal, setInputVal] = useState("")
    
    useEffect(() => {
        console.log("Useffect called")
        document.title = `Clicked ${count} times.`
    },[count])

    const handleChange =(e)=>{
    // console.log(" HanldeChnge called.")
    setInputVal(e.target.value);
    }

  return (
    <div>
       <h1>Functional Component</h1>
      <div>
       <input type="text" value ={inputVal} onChange={handleChange} />
      </div>
      <button onClick={()=>setCount(count+1)}>
       Count {count} times
      </button>
    </div>
  )
}

export default FuncCounterOne
