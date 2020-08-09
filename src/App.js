import React from 'react';
import './App.css';
import AddTodo from './AddTodo';
import Todos from './Todos';

class App extends React.Component {
  state = {
    todos: [
      { content: "biće bolsze", id: 1 },
      { content: "nioki nioki", id: 2 }
    ]
  }
  render() {
    return (
      <div className="App" >
        <AddTodo />
        <Todos todos={this.state.todos} />
      </div>
    )
  }
}

export default App;
