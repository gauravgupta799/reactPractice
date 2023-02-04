import React from "react";
import SearchInput from "./SearchInput";
import ImagesLists from "./ImagesLists";

const API_Key = "32891189-93985db257ccca44a06460dd7";
const URL = " https://pixabay.com/api";

class ImageList extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			isLoading: true,
			images: [],
		};
	}

	onSerchSumbit = async (entry) => {
		try {
			// this.setState({isLoading:true})
			const res = await fetch(
				`${URL}/?key=${API_Key}&q=${entry}&image_type=photo&pretty=true`
			);
			const data = await res.json();
			this.setState({ isLoading: false });
			this.setState({
				images: data.hits,
			});
		} catch (error) {
			console.log(error);
		}
	};

	//  console.log("Data", this.state.images)

	render() {
		return (
			<div className='ui main-div' >
				<h1>Find Your Images</h1>
				<SearchInput onSerchSumbit={this.onSerchSumbit} />
				{this.state.images.length < 0 ? (
					<h2>We have {this.state.images.length} images</h2>
				) : (
					<ImagesLists imagesData={this.state.images} />
				)}
			</div>
		);
	}
}

export default ImageList;
