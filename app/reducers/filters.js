import {SET_NAME_FILTER, SET_DONE_FILTER, SET_CATEGORY_FILTER} from '../actions/actions'

function visibilityFilters(state = {}, action) {
  switch (action.type) {
    case SET_NAME_FILTER:
      return Object.assign({}, state, {string: action.string});
    case SET_DONE_FILTER:
      return Object.assign({}, state, {done: action.done});
      case SET_CATEGORY_FILTER:
      return Object.assign({}, state, {category: action.id});
    default:
      return state;
  }
}

export default visibilityFilters;