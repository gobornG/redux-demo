import { createStore, combineReducers } from 'redux';


function counter(state = 0, action) {
  switch (action.type) {
    case 'INCREMENT':
      return state + 1;
    case 'DECREMENT':
      return state - 1;
    case 'INCREMENT_TEN':
      return state + 10;
    case 'DECREMENT_TEN':
      return state - 10;
    default:
      return state;
  }
}

function currentPlayer(state = 'John', action) {
  switch (action.type) {
    case 'NEW_PLAYER':
      return action.payload;
    default:
      return state;
  }
}

function todos(state = ['laundry', 'study Redux'], action) {
  switch (action.type) {
    case 'ADD_TODO':
      return [...state, action.payload];  //3 dots means spreadout
    case 'DELETE_TODO':
      return [];
    case 'DELETE_ONE':
      const item = action.data.todo;
      return state.filter((todo) => {
        return todo !== item;
      })
    default:
      return state;
  }
}

function myFunction(state = 'Garry', action) {
  switch (action.type) {
    default: 
    return state;
  }
}

export default combineReducers({ counter, currentPlayer, todos, myFunction });
