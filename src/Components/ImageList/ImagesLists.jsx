import React from "react";
import "./style.css";

const ImagesLists = ({ imagesData }) => {
	return (
		<div  className="ui stackable four column grid container image-container">
			{imagesData.map((image) => (
				<div className='ui segment imageWrapper'>
					<img
						src={image.webformatURL}
						alt='searchedImg'
						key={image.id}
						className='ui medium rounded image'
            id="Image"
					/>
				</div>
			))}
		</div>
	);
};

export default ImagesLists;
