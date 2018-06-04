import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import TodoAdd from './components/todo-add/todo-add';
import TodoList from './components/todo-list/todo-list';
import TodoFilter from './components/todo-filter/todo-filter';

import store from './store/index';
import { getAll } from './constants/action-types';

class App extends Component {
  render() {
    store.dispatch(getAll);
    console.log(store.getState());
  
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        
        <div className="App-content">
          <TodoAdd />
          <TodoList />
          <TodoFilter />
        </div>
      </div>
    );
  }
}

export default App;
