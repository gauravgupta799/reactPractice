import React, { Component } from 'react'

class RegCom extends Component {
  render() {
    console.log("&&& Regular Component Rendered. &&&")
    return (
      <div>
        Regular Component {this.props.name}
      </div>
    )
  }
}

export default RegCom
