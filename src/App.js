import React, { Component } from 'react';
import { connect } from 'react-redux';


class App extends Component {
  onIncrement(e) {
    this.props.dispatch({ type: 'INCREMENT' })
  }

  onDecrement(e) {
    this.props.dispatch({ type: 'DECREMENT' })
  }

  onNewPlayer(e) {
    this.props.dispatch({ type: 'NEW_PLAYER', payload: this.refs.newPlayer.value })
  }

  onNewTodo(e) {
    this.props.dispatch({ type: 'ADD_TODO', payload: this.refs.newTodo.value })
  }

  render() {
    return (
      <div>
        <h1>Counter: {this.props.counter}</h1>
        <button onClick={this.onIncrement.bind(this)}>increment</button>
        <button onClick={this.onDecrement.bind(this)}>decrement</button>

        <hr />

        <h2>Current player: {this.props.currentPlayer}</h2>
        <input ref='newPlayer' placeHolder='type new player' type="text" />
        <button onClick={this.onNewPlayer.bind(this)}>enter new player</button>

        <hr />

        <h2>Todos:</h2>
        {
          this.props.todos.map(todo => <div><em>{todo}</em></div>)
        }

        <br /><input ref='newTodo' placeHolder='type new todo' type="text" />
        <button onClick={this.onNewTodo.bind(this)}>enter new todo</button>

        <hr />
      </div>
    );
  }
}

export default connect(state => state)(App);
