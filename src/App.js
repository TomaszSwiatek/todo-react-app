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
  addTodo = (todo) => {
    todo.id = Math.random();
    const todos = [...this.state.todos, todo];
    this.setState({
      todos
    })

  }
  componentDidUpdate() {
    console.log(this.state.todos)
  }
  render() {
    return (
      <div className="App" >
        <AddTodo addTodo={this.addTodo} />
        <Todos todos={this.state.todos} />
      </div>
    )
  }
}

export default App;
