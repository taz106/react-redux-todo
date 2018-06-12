import { combineReducers } from 'redux';
import todoListReducer from './todoListLReducer';

export default combineReducers({
  todos: todoListReducer
})
