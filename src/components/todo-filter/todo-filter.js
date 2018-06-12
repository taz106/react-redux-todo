import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchAllTodos, fetchFinishedTodos } from "../../actions/todoListActions";

class TodoFilter extends Component {
  constructor() {
    super();
    this.showAllTodo = this.showAllTodo.bind(this);
    this.showFinishedTodo = this.showFinishedTodo.bind(this);
  }

  showAllTodo() {
    this.props.fetchAllTodos();
  }

  showFinishedTodo() {
    this.props.fetchFinishedTodos();
  }

  render() {
    return(
     <div>
       <span>Filter: </span>
       <span>
        <button onClick={ this.showAllTodo }>All</button>
       </span>
       <span>
        <button onClick={ this.showFinishedTodo }>Finished</button>
       </span>
     </div>
    );
  }
}

export default connect(null, {fetchAllTodos, fetchFinishedTodos})(TodoFilter);