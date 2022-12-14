import React, { Component } from 'react'

export class ClassTimer extends Component {
    constructor(props) {
        super(props)
        this.state = {
          timer: 0,   
        }
    }
    componentDidMount() {
        this.interval = setInterval(() =>{
            this.setState(prevState => ({
                timer: prevState.timer - 1
            }))
        },1000)
    }
    componentWillUnmount() {
        clearInterval(this.interval)
    }
    
  render() {
    return (
      <div>
        <h2>Class Timer : {this.state.timer}</h2>
        {/* <input type="text" value={this.state.timer}/> */}
        <button onClick={()=> clearInterval(this.interval)}>Stop Timer</button>
      </div>
    )
  }
}

export default ClassTimer