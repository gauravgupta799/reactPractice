import React, { useState } from "react";

const USERS = [
	{ id: 1, name: "Andy", age: 32 },
	{ id: 2, name: "Bob", age: 30 },
	{ id: 3, name: "Tom Hulk", age: 40 },
	{ id: 4, name: "Tom Hank", age: 50 },
	{ id: 5, name: "Audra", age: 30 },
	{ id: 6, name: "Anna", age: 68 },
	{ id: 7, name: "Tom", age: 34 },
	{ id: 8, name: "Tom Riddle", age: 28 },
	{ id: 9, name: "Bolo", age: 23 },
];

const SearchUser = () => {
	const [name, setName] = useState("");
	const [users, setUsers] = useState(USERS);

	const filter = (e) => {
		e.preventDefault();
		const keyword = e.target.value;
		if (keyword !== "") {
			const results = USERS.filter((user) => {
				return user.name.toLowerCase().startsWith(keyword.toLowerCase());
			});
			setUsers(results);
		} else {
			setUsers(USERS);
		}
		setName(keyword);
	};

	// console.log(users)
	return (
		<div>
			<h2>Search User</h2>
			<form>
				<input
					type='text'
					value={name}
					placeholder='Search here...'
					onChange={filter}
					// onChange={(e) => setName(e.target.value)}
				/>
				{/* <button>Search User</button> */}
			</form>
			<div
				style={{
					display: "flex",
					alignItems: "center",
					justifyContent: "center",
					marginTop: "20px",
				}}
			>
				<table style={{ border: "1px solid black", width: "400px" }}>
					<tbody>
						{users && users.length > 0 ? (
							users.map((user) => (
								<tr key={user.id}>
									<td>{user.id}</td>
									<td>{user.name}</td>
									<td>{user.age}</td>
								</tr>
							))
						) : (
							<h2>No User Found</h2>
						)}
					</tbody>
				</table>
			</div>
		</div>
	);
};

export default SearchUser;
