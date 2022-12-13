import React from "react";

const withCounter =(WrappedComponent,incNum)=>{
class WithCounter extends React.Component{
        constructor(props) {
            super(props)
            this.state = {
               count:0
            }
          }
      
          handleIncrementCount= ()=>{
              this.setState(prevState=>{
                  return {
                      count:prevState.count + incNum
                  }
              })
          }
        render() {
            return (
                <WrappedComponent
                count={this.state.count} 
                incrementCount={this.handleIncrementCount} 
                {...this.props}
                />
            )
        }
    }
    return WithCounter
}

export default withCounter