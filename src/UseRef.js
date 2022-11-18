import React,{useState,useRef} from 'react';

const UseRef = () => {
    const [name, setName] = useState("");

    const refVal = useRef();
    const refTitle =useRef();

    const handleName = (e)=>{
      setName(e.target.value)
      refVal.current.focus();
    }

    const handleReset = ()=>{
        setName("");
        refVal.current.focus();
        refVal.current.style.color="black";
        refTitle.current.style.color="red";
    }
    const handleInput = ()=>{
           refVal.current.style.color="red";
           refTitle.current.style.color="blue";
    }

    return (
        <div>
            <h1>Learning <span style={{color:"red"}}  ref={refTitle}> useRef()</span> Hook</h1>
            <h2>Name: {name}</h2>
            <div>
                <input type="text" value={name} onChange={handleName} ref={refVal}/>
            </div><br/>
            <div>
               <button onClick={handleReset}>Reset</button>
               <button onClick={handleInput} style={{ marginLeft: "10px" }}>Handle Input</button>
            </div>
        </div>
    )
}

export default UseRef
