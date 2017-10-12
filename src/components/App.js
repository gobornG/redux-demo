import React, { Component } from 'react';
import Counter from './Counter';
import Player from './Player';
import Todos from './Todos';


class App extends Component {
  render() {
    return (
      <div>
        <Counter />
        <hr/>
        <Player />
        <hr/>
        <Todos />
        <hr/>
      </div>
    );
  }
}

export default App;
