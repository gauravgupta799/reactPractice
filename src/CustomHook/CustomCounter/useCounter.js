import {useState} from 'react'

const useCounter = (initialCount = 0,value) => {
    const [count,setCount] = useState(0);

    const handleIncrement = () => {
        setCount(prevCount=> prevCount + value);
    }
    const handleDecrement = () => {
        setCount(prevCount=> prevCount - value);
    }
    const handleReset = () => {
      setCount(initialCount)
    }
  return [count, handleIncrement, handleDecrement, handleReset]
    
}

export default useCounter