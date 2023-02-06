import React, { useState } from "react";

const styles = {
	button: {
		padding: "5px 15px",
		fontSize: "2rem",
		margin: "0 10px",
	},
	span: {
		fontSize: "2.5rem",
	},
};

// 2.
// function countIntial(){
//     console.log("Run countIntial Fun");
//     return 4
// }

function UseState() {
	const [count, setCount] = useState(0);
	// const [count, setCount] = useState(()=> countIntial()); // Render countIntial() only one time
    const [user , setUser] = useState({
        username:'', 
        email:'',
    })
	const decrementCount = () => {
		// 1. setCount(count - 1) // Incorrect way to set the value
		// setCount(count - 1) // This will not decrease by 2 it descrease by 1 because it overwrites the value
		// For exmaple first setCount 4 - 1 result 3 and second setCount will also return same result count value is still same

		setCount((prevCount) => prevCount - 1);
		setCount((prevCount) => prevCount - 1);
	};
	const incrementCount = () => {
		// setCount(count + 1) // Incorrect way to set the value
		setCount((prevCount) => prevCount + 1);
	};

    const handleChange =(e) => {
     setUser({...user, [e.target.name]:e.target.value })
    }
	console.log("Main");
	return (
		<>
			<h2>UseState() Hook</h2>
			<br />
			<button onClick={decrementCount} style={styles.button}>
				-
			</button>
			<span style={styles.span}>{count}</span>
			<button onClick={incrementCount} style={styles.button}>
				+
			</button>
			<br /><br />
			<div>
				<input 
                    type='text' 
                    name='username' 
                    value={user.username} 
                    onChange={handleChange}
                /> &nbsp; &nbsp;
				<input 
                    type='email'
                    name='email' 
                    value={user.email}  
                    onChange={handleChange}
                 />
			</div>
            <h2>{JSON.stringify(user)}</h2>
		</>
	);
}
export default UseState;
