import React, { Component } from 'react';
import { connect } from 'react-redux';


class Counter extends Component {
  onIncrement(e) {
    this.props.dispatch({ type: 'INCREMENT' })
  }

  onDecrement(e) {
    this.props.dispatch({ type: 'DECREMENT' })
  }

  onIncrementTen(e) {
    this.props.dispatch({ type: 'INCREMENT_TEN'})
  }

  onDecrementTen(e) {
    this.props.dispatch({ type: 'DECREMENT_TEN'})
  }

  render() {
    return (
      <div>
        <h1>Counter: {this.props.counter}</h1>
        <button onClick={this.onIncrement.bind(this)}>increment</button>
        <button onClick={this.onDecrement.bind(this)}>decrement</button>
        <hr />
        <button onClick={this.onIncrementTen.bind(this)}>increment by Ten</button>
        <button onClick={this.onDecrementTen.bind(this)}>Decrement by Ten</button>
      </div>
    );
  }
}

export default connect(state => state)(Counter);
