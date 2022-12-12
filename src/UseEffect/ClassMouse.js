import React, { Component } from 'react'

class ClassMouse extends Component {
    constructor(props) {
        super(props)
        this.state = {
             x:0,
             y:0,
        }
    }
    logMousePosition=(e) => {
        this.setState({x:e.clientX,y:e.clientY})
    }
    
    componentDidMount() {
        window.addEventListener('mouseover', this.logMousePosition)
    }
    
    render() {
        return (
            <div>
            <h1>X - {this.state.x} </h1>
            <h1> Y- {this.state.y} </h1>
            </div>
        )
    }
}

export default ClassMouse
