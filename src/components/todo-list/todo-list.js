import React, { Component } from 'react';

class TodoList extends Component {
  todos = [{
    name: 'Learn Js',
    finished: false
  }, {
    name: 'Learn Python',
    finished: false
  }, {
    name: 'Learn Spanish',
    finished: false
  }, {
    name: 'Learn Java',
    finished: true
  }];
  
  render() {
    return(
      <div>
        <h1>Todo List Component</h1>
        <ul>
          { this.todos.map((todo, index) => <li key={ index }>{ todo.name }</li>) }
        </ul>
      </div>
    );
  }
}

export default TodoList;