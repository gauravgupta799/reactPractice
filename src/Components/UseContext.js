import React, {useContext} from 'react';
import {context1,context2} from "../App";

const UseContext = () => {
    const fname = useContext(context1);
    const gender = useContext(context2);

    return (
        <div>
            <h2>Get Data From App Component With The Help Of useContext Hook</h2>
            <h1>Name: {fname}</h1>
            <h1>Gender: {gender}</h1>
        </div>
    )
}

export default UseContext
