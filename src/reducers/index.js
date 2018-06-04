import { getAll } from '../constants/action-types';

const initialState = {
  todos: []
}

const rootReducer = (state = initialState, action) => {
  switch(action.type) {
    case getAll:
      return [...state, action.payload];

    default:
      return state;
  }
}

export default rootReducer;