import React from "react";
import "./style.css";

const ImagesLists = ({ imagesData }) => {
	console.log(imagesData)
	return (
		<div  className="ui stackable four column grid container image-container">
			{imagesData.map((image) => (
				<div className='ui segment imageWrapper'>
					<a href={image.largeImageURL} target="_blank" rel="noreferrer" id="open-link">
						<img
							src={image.webformatURL}
							alt='searchedImg'
							key={image.id}
							className='ui medium rounded image'
							id="Image"
							title="Click on it to view in full size"
						/>
					</a>
				</div>
			))}
		</div>
	);
};

export default ImagesLists;
