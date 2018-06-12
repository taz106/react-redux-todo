import { FETCH_ALL_TODOS, NEW_TODO, FETCH_FINISHED_TODOS } from "./types";

let todos = [{
    name: 'Learn Js',
    finished: false
  }, {
    name: 'Learn Python',
    finished: true
  }, {
    name: 'Learn Spanish',
    finished: false
  }, {
    name: 'Learn Java',
    finished: true
  }];

export const fetchAllTodos = () => dispatch => {
  console.log('fetching all todos');
  return dispatch({
    type: FETCH_ALL_TODOS,
    payload: todos
  });
}

export const fetchFinishedTodos = () => dispatch => {
  console.log('fetching finished todos');
  return dispatch({
    type: FETCH_FINISHED_TODOS,
    payload: ''
  });
}

export const addNewTodo = newTodo => dispatch => {
  console.log('adding', newTodo);
  return dispatch({
    type: NEW_TODO,
    payload: newTodo
  });
}
