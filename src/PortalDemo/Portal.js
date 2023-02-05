import React, { Component } from "react";
import Modal from "./Modal"

class Portal extends Component {
    state= { showModal:false }
    handleShowModal = ()=>{
        this.setState({ showModal:true})
    }
    handleCloseModal = ()=>{
        this.setState({ showModal:false})
    }
	render() {
		return (
			<div className='portal-container'>
				<div className='portal-innerContainer'>
					<h1>My Portal App</h1>
					<h3>
						Portals provide a first-class way to render children into a DOM node that exists outside the DOM hierarchy
                        for the parent component.
					</h3>
					<p>
						This is an example of how you might use React.createPortal. I think
						it is a pretty neat API that is yet another awesome escape hatch
						that React provides for practical reasons. Sometimes you just need
						to render something completely outside the React Tree
					</p>
                    <button onClick={this.handleShowModal}>Show Modal</button>
				    {this.state.showModal ? (
                        <Modal onClose = {this.handleCloseModal}>
                          <h2>This is the secret modal message!</h2>
                          
                        </Modal>
                    ): null}
                </div>
			
			</div>
		);
	}
}

export default Portal;
