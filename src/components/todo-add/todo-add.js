import React, { Component } from 'react';

class TodoAdd extends Component {
  render() {
    return(
      <form noValidate>
        <input type="text" />
        <button>Add</button>
      </form>
    );
  }
}

export default TodoAdd;