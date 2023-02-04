import React, { Component } from "react";
import "./style.css";

class SearchInput extends Component {
    constructor(props) {
        super(props)
        this.state={
            entry:""
        }
        // this.handleFormSubmit = this.handleFormSubmit.bind(this)
    }

    // Always goint to lead to braoken value of this
    // Automatically bind the value of this for all the code inside the function
    handleFormSubmit=(event)=> {
        event.preventDefault();
        this.props.onSerchSumbit(this.state.entry)
    }

    //onSubmit={this.handleFormSubmit.bind(this)}
	render() {
		return (
			<div className='search-container'>
				<form className='ui form form-container' onSubmit={this.handleFormSubmit}>
					<div className='field'>
						<div className='ui massive icon input'>
							<input type='text'
                            className="searchInput"
                             placeholder='Search...' 
                            onChange={(e)=>this.setState({entry:e.target.value})}
                            value={this.state.entry}
                             />
                            <i className='search icon'></i>
						</div>
					</div>
				</form>
			</div>
		);
	}
}

export default SearchInput;
