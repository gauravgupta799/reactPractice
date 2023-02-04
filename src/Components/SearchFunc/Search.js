import React, { useState, useEffect } from "react";

const url = "https://jsonplaceholder.typicode.com/users";

const Search = () => {
	const [query, setQuery] = useState("");
	const [users, setUsers] = useState([]);
    const [searchApiData, setSearchApiData] = useState([]);
	const [isLoading, setLoading] = useState(true);

	useEffect(() => {
		setLoading(true);
		async function getusers() {
			await fetch(url)
				.then((response) => response.json())
				.then((data) => {
					setUsers(data);
                    setSearchApiData(data)
					setLoading(false);
				});
		}
		getusers();
	}, []);

	const haddleFilterUsers = (e) => {
		e.preventDefault();
        setQuery(e.target.value);
	}

	useEffect(() => {
		const handler = setTimeout(() => {
            if(query !== ""){
                const filteredResult = searchApiData.filter((user)=>
                 user.name.toLowerCase().includes(query.toLowerCase())
                )
                if(filteredResult.length > 0){
                    setUsers(filteredResult);
                }else{
                    setUsers([{"name":"No Data Found"}])
                }  
            }else{
                setUsers(searchApiData)
            }
		}, 300);
		return () => {
			clearTimeout(handler);
		};
	}, [query, searchApiData]);

	if (isLoading) {
		return (
            <div className="container">
                <div className="spinner-border text-center text-danger" 
                    style={{width: '5rem', height: '5rem' ,marginTop:'22rem'}} 
                    role="status">
                </div>
            </div>
        )
	}

	return (
		<div className='container mt-2'>
			<h2 className="text-primary">Search Functionality</h2>
			<div className='col-md-3 col-lg-3 sm-12 xs-12 m-auto'>
				<input
					type='text'
					placeholder='Search users'
					className='form-control'
					id='searchInput'
					value={query}
					onChange={haddleFilterUsers}
					required
				/>
			</div>
			<table className='table table-hover'>
				<thead>
					<tr>
						<th scope='col'>Id</th>
						<th scope='col'>Username</th>
						<th scope='col'>Name</th>
						<th scope='col'>Email</th>
						<th scope='col'>Phone</th>
						<th scope='col'>City</th>
					</tr>
				</thead>
				<tbody>
					{users.length > 0 &&
						users.slice(0, 20).map((user) => {
							const { id, username, name, email, phone, address } = user;
							return (
								<tr key={id}>
									<td>{id}</td>
									<td>{username}</td>
									<td>{name}</td>
									<td>{email}</td>
									<td>{phone}</td>
									<td>{address?.city}</td>
								</tr>
							);
						})}
				</tbody>
			</table>
		</div>
	);
};

export default Search;
