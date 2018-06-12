import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

import { fetchAllTodos } from "../../actions/todoListActions";

class TodoList extends Component {
  
  componentWillMount = () => {
    this.props.fetchAllTodos();
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.todos.newTodo) {
      this.props.todos.todos.unshift(nextProps.todos.newTodo);
    }
  }
  
  render() {
    return(
      <div>
        <h1>Todo List Component</h1>
        <ul>
          { this.props.todos.todos.map((todo, index) => <li key={ index }>{ todo.name }</li>) }
        </ul>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  todos: state.todos,
  newTodo: state.newTodo
});

export default connect(mapStateToProps, {fetchAllTodos})(TodoList);