import React,{useReducer} from 'react'

const initialState = {
    firstCounter: 0,
    secondCounter: 10,
};
const reducer = (state, action) => {
    switch (action.type) {
        case "Increment":
            return {...state, firstCounter: state.firstCounter + action.value}
        case "Decrement":
            return {...state, firstCounter: state.firstCounter - action.value}; 
        case "Increment2":
            return {...state, secondCounter: state.secondCounter + action.value}
        case "Decrement2":
            return {...state, secondCounter: state.secondCounter - action.value}
        case "Reset":
            return initialState;
         default:
            return state;      
    }
}
const UseReducerObj = () => {
    const [count, dispatch] = useReducer(reducer, initialState);

    return (
        <div>
            <h1>Learning <span style={{color:"red"}}> useReducer()</span> Hook</h1>
            <div className="btn-wrapper">
                <button onClick={()=>dispatch({type:"Increment", value:1})}>Increment</button>
                <h2>FirstCounter: {count.firstCounter}</h2>
                <button onClick={()=>dispatch({type:"Decrement", value:1})}>Decrement</button>
            </div><br/>
            <div className="btn-wrapper">
                <button onClick={()=>dispatch({type:"Increment2",value:10})}>Increment2</button>
                <h2>SecondCounter: {count.secondCounter}</h2>
                <button onClick={()=>dispatch({type:"Decrement2",value:10})}>Decrement2</button>
            </div>
            <button onClick={()=>dispatch({type:"Reset"})}>Reset</button>
        </div>
    )
}

export default UseReducerObj