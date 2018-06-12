import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { addNewTodo } from "../../actions/todoListActions";

class TodoAdd extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todo: ''
    }

    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onChange(evt) {
    this.setState({ [evt.target.name]: evt.target.value })
  }

  onSubmit(evt) {
    evt.preventDefault();

    const newTodo = {
      name: this.state.todo,
      finished: false
    }
    // console.log(newTodo);

    // call action
    this.props.addNewTodo(newTodo);
    this.setState({
      todo: ''
    });
  }

  render() {
    return(
      <form noValidate onSubmit={ this.onSubmit }>
        <input type="text" name="todo" value={ this.state.todo } onChange={ this.onChange } />
        <button type="submit">Add</button>
      </form>
    );
  }
}

export default connect(null, {addNewTodo})(TodoAdd);