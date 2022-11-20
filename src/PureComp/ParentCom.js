import React, { PureComponent } from 'react'
import PureCom from './PureCom'
import RegCom from './RegCom'

class ParentCom extends PureComponent {
    constructor(props) {
      super(props)  
      this.state = {
         name:"Gaurav"
      }
    }

    componentDidMount(){
        setInterval(() =>{
            this.setState({name:"Gaurav"})
        },2000)
    }
    
  render() {
    console.log("**** Parent Component Rendered ****")
    return (
      <div>
      ParentCom
        <RegCom name={this.state.name}/>
        <PureCom name={this.state.name}/>
      </div>
    )
  }
}

export default ParentCom