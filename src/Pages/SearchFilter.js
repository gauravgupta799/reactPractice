import React, { useState, useEffect } from "react";
import "./searchProduct.css"

const url = "https://fakestoreapi.com/products";

const SearchFilter = () => {
	const [name, setName] = useState("");
    const [products ,setProducts] = useState([]);

    useEffect(() => {
         fetch(url)
        .then(res => res.json())
        .then((data) => setProducts(data));
    },[])

    const handleFilter = (e) => {
        e.preventDefault();
        const keyword = e.target.value;
        if(keyword !== ""){
            const results = products.filter((item)=>{
                return item.title.toLowerCase().includes(keyword.toLowerCase());
            })
            setProducts(results)
        }else{
            fetch(url)
            .then(res => res.json())
            .then((data) => setProducts(data));
            // setProducts(products)
        }
        setName(keyword)
    }
     console.log("Photos",products)
	return (
		<div>
			<h1>Product Page</h1>
			<form>
				<input
					type='text'
					value={name}
					placeholder='Search your product...'
					onChange={handleFilter}
				/>
				{/* <button>Search</button> */}
			</form>
            <div className="productsContainer">
              {
                products && products.length > 0 ? (
                    products.slice(0,11).map(product=>(
                    <div key={product.id} className="prdWrapper">
                        <div id = "prdtImage">
                            <img src={product.image} alt="productImage"/>
                        </div>
                        <div className="prdtDesc">
                          <h2>{product.title}</h2>
                          <p>{product.description}</p>
                          <div className="prdtPriceWrapper">
                            <h3>Rs. {product.price}</h3>
                            <h3>Rating: {product.rating.rate}</h3>
                          </div>
                        </div>
                       
                    </div>
                ))
                ) :(
                    <h1 id="message">No Data found</h1>
                )
            }
            </div>
		</div>
	);
};

export default SearchFilter;
