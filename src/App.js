import React, { Component }from 'react';
import './App.css';
import ToDoForm from './component/ToDoForm';
import ToDoList from './component/ToDoList';

class App extends Component {
  constructor() {
    super();
    this.state = {
      message: 'This is my todo list',
      userTodo: '',
      todos: [{
        name: 'Walk the dog'
      }, {
        name: 'Pat the dog'
      }] // this will hold our todos
    }
  };

  handleForm(event) {
    event.preventDefault();
    this.setState({
      userTodo: '',
      todos: [...this.state.todos, {
        name: this.state.userTodo
      }]
    })
  };

  handleInputChange(event) {
    this.setState({
      userTodo: event.target.value
    })
  };

  deleteTodo(index) {
    const todos = [...this.state.todos]
    todos.splice(index, 1)
    this.setState({
      todos
    })
  }

  render() {
  return (
    <div>
      <h1>{this.state.message}</h1>
      <ToDoForm
        handleForm={this.handleForm.bind(this)}
        handleInputChange={this.handleInputChange.bind(this)}
        userTodo={this.state.userTodo}
      />
      <ToDoList
        todos={this.state.todos}
        deleteTodo={() => this.deleteTodo()}
      />
    </div>
    )
  }
}

export default App;