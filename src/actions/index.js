import { getAll } from '../constants/action-types';

const actions = {
  getAllTodo: () => ({
    type: getAll,
    payload: [{
        name: "Learn Js",
        finished: false
      }, {
        name: "Learn Python",
        finished: false
      }, {
        name: "Learn Spanish",
        finished: false
      }, {
        name: "Learn Java",
        finished: true
      }
    ]
  })
};

export default actions;
