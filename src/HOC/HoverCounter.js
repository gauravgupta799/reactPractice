import React, { Component } from "react";
import withCounter from "./WithCounter";

export class HoverCounter extends Component {
	render() {
		const { count, incrementCount, name } = this.props;
		return (
			<div>
				<h2
					onMouseOver={incrementCount}
					style={{
						border: "1px solid black",
                        width:"50%",
                        margin:"auto",
                        marginTop:"10px"
					}}
				>
				{name} Hover {count} times
				</h2>
			</div>
		);
	}
}

export default withCounter(HoverCounter,5);
