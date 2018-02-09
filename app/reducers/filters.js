import {SET_NAME_FILTER, SET_DONE_FILTER, SET_CATEGORY_FILTER, SET_EDIT_TODO_FILTER} from '../actions/actions';

function filters(state = {}, action) {
  switch (action.type) {
    case SET_NAME_FILTER:
      return Object.assign({}, state, {string: action.string});
    case SET_DONE_FILTER:
      return Object.assign({}, state, {done: action.done});
    case SET_CATEGORY_FILTER:
      return Object.assign({}, state, {category: action.category});
    case SET_EDIT_TODO_FILTER:
    debugger;
      return Object.assign({}, state, {editingTodo: action.todo});
    default:
      return  state;
  }
}

export default filters;