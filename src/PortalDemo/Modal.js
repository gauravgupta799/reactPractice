import React, { Component } from "react";
import ReactDOM from "react-dom";
import "./Styles.css";

const modalRoot = document.getElementById("modal-root");

class Modal extends Component {
	render() {
		return ReactDOM.createPortal(
			<div className='modal-container' onClick={this.props.onClose}>
				<div className='modal-innerContainer'>
					{this.props.children}
					<hr />
					<button onClick={this.props.onClose} id="close-btn">Close</button>
				</div>
			</div>,
			modalRoot
		);
	}
}

export default Modal;
