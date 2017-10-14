import React, { Component } from 'react';
import { connect } from 'react-redux';


class Todos extends Component {
  constructor(){
    super();
    this.deleteItem = this.deleteItem.bind(this);

  }

  onNewTodo(e) {
    this.props.dispatch({ type: 'ADD_TODO', payload: this.refs.newTodo.value })
  }

  deleteItem(todo) {
    this.props.dispatch({ type: 'DELETE_ONE', data: todo })
  }


  onDeleteTodo(e) {
    this.props.dispatch({ type: 'DELETE_TODO', })
  }

  render() {
    return (
      <div>
        <h2>Todos:</h2>
        {
          this.props.todos.map(todo => <div><em>{todo}</em><button onClick={ () => {this.deleteItem({todo})}}>delete</button></div>)
        }

        <br /><input ref='newTodo' placeHolder='type new todo' type="text" />
        <button onClick={this.onNewTodo.bind(this)}>enter new todo</button>
        <br />
        <button onClick={this.onDeleteTodo.bind(this)}>delete all</button>
      </div>
    );
  }
}

export default connect(state => state)(Todos);
