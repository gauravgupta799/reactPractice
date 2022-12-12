import React, { Component } from 'react'

class ClassCounterOne extends Component {
    constructor(props) {
        super(props);
        this.state = {
          count: 0,
          name:""
        };
      }
      componentDidMount() {
        // console.log("ComponentDidMount rendered.");
        document.title = `Clicked ${this.state.count} times.`;
      }
      componentDidUpdate(prevProps, prevState) {
          if(prevState.count !== this.state.count){
            console.log("ComponentDidUpdate rendered.");
            document.title = `Clicked ${this.state.count} times.`;   
        }
      }

      handleChange =(e)=>{
        this.setState({name: e.target.value})
      }
      render() {
        return (
          <div>
          <h1>Class Component</h1>
            <div>
                <input type="text" value ={this.state.name}
                 onChange={this.handleChange} />
            </div>
            <button
              onClick={() =>
                this.setState({
                  count: this.state.count + 1
                })
              }
            >
              Click {this.state.count} times.
            </button>
          </div>
        );
      }
    }

export default ClassCounterOne