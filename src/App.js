import React, { Component } from 'react';
// import { BroswerRouter as Router, Route } from 'react-router-dom';
import Header from './components/layout/header';
import Todos from './components/Todos'
import AddTodos from './components/AddTodos'
import uuid from 'uuid';

import './App.css';

class App extends Component {
  state = {
    todos: [
      {
        id: uuid.v4(),
        title: 'Take out the trash',
        completed: false
      },
      {
        id: uuid.v4(),
        title: 'Meeting with Quan',
        completed: false
      },
      {
        id: uuid.v4(),
        title: 'Wash the dishes',
        completed: false
      },
    ]
  }

  // Toggle Complete
  markComplete = (id) => {
    this.setState({ todos: this.state.todos.map( todo => {
      if(todo.id === id) {
        todo.completed = !todo.completed
      }
      return todo;
    }) })
  }
  // Delete Todo
  delTodo = (id) => {
    this.setState({ todos:[...this.state.todos.filter(todo => todo.id !== id)] })
  }

  //Add Todo
  addTodo = (title) => {
    const newTodo = {
      id: uuid.v4(),
      title,
      completed: false
    }
    this.setState({ todos: [...this.state.todos, newTodo] })
  }


  render() {
    return (
      // <Router>
        <div className="App">
          <div className="container">
            <Header />
            <AddTodos addTodo={this.addTodo} />
            <Todos todos={this.state.todos} markComplete={this.markComplete} 
            delTodo={this.delTodo} />
          </div>
        </div>
      // </Router>
      
    );
  }
}

export default App;
