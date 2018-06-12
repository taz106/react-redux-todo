import { FETCH_ALL_TODOS, NEW_TODO, FETCH_FINISHED_TODOS } from '../actions/types';

const initialState = {
  todos: [],
  newTodo: {}
};

export default function(state = initialState, action) {
  switch (action.type) {
    case FETCH_ALL_TODOS:
      return {
        ...state,
        todos: action.payload
      };

    case NEW_TODO:
      return {
        ...state,
        newTodo: action.payload
      }
    
    case FETCH_FINISHED_TODOS:
      return {
        ...state,
        todos: state.todos.filter(val => val.finished)
      }
    default:
      return state;
  }
};