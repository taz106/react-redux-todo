import React, { Component } from 'react';
import { Provider } from 'react-redux';
import logo from './logo.svg';
import './App.css';

import store from "./store";
import TodoAdd from './components/todo-add/todo-add';
import TodoList from './components/todo-list/todo-list';
import TodoFilter from './components/todo-filter/todo-filter';

class App extends Component {
  render() {

    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>

        <Provider store={ store }>
          <div className="App-content">
            <TodoAdd />
            <TodoList />
            <TodoFilter />
          </div>
        </Provider>
      </div>
    );
  }
}

export default App;
