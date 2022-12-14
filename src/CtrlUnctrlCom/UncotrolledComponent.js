import React,{useRef,useState} from 'react'

const UncotrolledComponent = () => {
    const[name,setName]= useState("")
    const refObj = useRef();

    const handleSubmit= (e) => {
        e.preventDefault();
        const Name= refObj.current.value;
        setName(Name);
    }
 
  return (
    <div>
        <h1>Uncotrolled Component</h1>
        <h3>Name: {name}</h3>
        <div>
        <form onSubmit={handleSubmit}>
            <input type="text"  placeholder="First Name" ref={refObj}/><br/>
            <button>Sumbit</button>
        </form>
        </div>
    </div>
  )
}

export default UncotrolledComponent