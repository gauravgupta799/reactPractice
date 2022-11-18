import React,{useReducer} from 'react';
import "./App.css";

const initialState = 1;
const reducer = (state= initialState, action) => {
    switch (action.type) {
        case "Increment":
            return state + 1;
        case "Decrement":
            return state - 1; 
        case "Multiply":
            return state *2;
        case "Reset":
            return state=1;
         default:
            return state;      
    }
}

const UseReducer = () => {
    const [count, dispatch] = useReducer(reducer, initialState);

    return (
        <div>
            <h1>Learning <span style={{color:"red"}}> useReducer()</span> Hook</h1>
            <h2>Count: {count}</h2>
            <div className="btn-wrapper">
                <button onClick={()=>dispatch({type:"Increment"})}>Increment</button>
                <button onClick={()=>dispatch({type:"Decrement"})}>Decrement</button>
                <button onClick={()=>dispatch({type:"Multiply"})}>Product</button>
                <button onClick={()=>dispatch({type:"Reset"})}>Reset</button>
            </div>
        </div>
    )
}

export default UseReducer;
