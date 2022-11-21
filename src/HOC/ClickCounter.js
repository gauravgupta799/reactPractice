import React, { Component } from 'react';
import withCounter from './WithCounter';

export class ClickCounter extends Component {
  render() {
    const {count,incrementCount,name} = this.props;
    return (
      <div>
        <button onClick ={incrementCount}> {name} Click {count} times</button>
      </div>
    )
  }
}

export default withCounter(ClickCounter,10)