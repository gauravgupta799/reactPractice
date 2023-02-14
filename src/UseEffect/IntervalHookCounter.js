// import React, { useState, useEffect } from "react";

// const IntervalHookCounter = () => {
// 	const [count, setCount] = useState(0);

// 	useEffect(() => {
// 		console.log("second useEffect");
// 	}, []);

// 	useEffect(() => {
// 		const doSomething = () => {
// 			console.log("dosomething");
// 		};
// 		doSomething();
// 		let intervalId = setInterval(() => {
// 			setCount((prevCount) => prevCount + 1);
// 		}, 1000);
// 		return () => {
// 			clearInterval(intervalId);
// 		};
// 	}, []);

// 	return (
// 		<div>
// 			<h1>{count}</h1>
// 		</div>
// 	);
// };

// export default IntervalHookCounter;

import React, { useState, useEffect } from "react";

function App() {
	const [users, setUsers] = useState([]);

	useEffect(() => {
		function fetchUsers() {
			fetch("https://jsonplaceholder.tyicode.com/users")
				.then((response) => response.json())
				.then((data) => setUsers(data));
		}
		fetchUsers();
	}, []);

	return (
		<div>
			<ul>
				{users.map((user) => (
					<li key={user.id}>{user.username}</li>
				))}
			</ul>
		</div>
	);
}
export default App;
