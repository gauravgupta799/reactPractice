import React, { useState, useEffect } from "react";
import axios from "axios";
import Posts from "../Posts/Posts";

const Pagination = () => {
	const url = "https://jsonplaceholder.typicode.com/posts";
	const [posts, setPosts] = useState([]);
	const [loading, setLoading] = useState(false);
	const [currentPage, setCurrentPage] = useState(1);
	const [postsPerPage] = useState(10);

	useEffect(() => {
		const fetchPosts = async () => {
			setLoading(true);
			const res = await axios.get(url);
			setPosts(res.data);
			setLoading(false);
		};
		fetchPosts();
	}, []);

	const indexOfLastPage = currentPage * postsPerPage;
	const indexOfFirstPage = indexOfLastPage - postsPerPage;
	const currentPosts = posts.slice(indexOfFirstPage, indexOfLastPage);

	const pageNumbers = [];
	const postLength = Math.ceil(posts.length / postsPerPage);
	for (let i = 1; i <= postLength; i++) {
		pageNumbers.push(i);
	}

    const paginate=(pageNumber)=>{
        setCurrentPage(pageNumber)
    }

	// console.log(posts);
	return (
		<div className='container mt-5'>
			<h1 className='text-primary mb-3'>My Blog</h1>
			<Posts posts={currentPosts} loading={loading} />
			<nav className='mt-3'>
				<ul className='pagination pagination-md'>
					{pageNumbers.map((number) => {
						return (
							<li className='page-item' key={number}>
								<a href='!#' className='page-link'
                                  onClick={() =>paginate(number)}
                                >
                                    {number}
                                </a>
							</li>
						);
					})}
				</ul>
			</nav>
		</div>
	);
};

export default Pagination;
