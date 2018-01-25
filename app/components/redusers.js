import { combineReducers } from 'redux'
import {
  ADD_TODO,
  RENAME_TODO,
  TOGGLE_TODO,
  FETCH_TODOS,
  SET_VISIBILITY_FILTER,
  VisibilityFilters
} from './actions'
const { SHOW_ALL } = VisibilityFilters

function visibilityFilter(state = SHOW_ALL, action) {
  switch (action.type) {
    case SET_VISIBILITY_FILTER:
      return action.filter
    default:
      return state
  }
}

function todos(state = [], action) {
  switch (action.type) {
    case ADD_TODO:
      return [
        ...state,
        {
          text: action.text,
          completed: false
        }
      ]
    case TOGGLE_TODO:
      return state.map((todo, index) => {
        if (index === action.index) {
          return Object.assign({}, todo, {
            completed: !todo.completed
          })
        }
        return todo
      })
      case RENAME_TODO:
      return state.map((todo, index) => {
        if (index === action.todoId) {
          return Object.assign({}, todo, {
            text: action.text
          })
        }
        return todo
      })
      case FETCH_TODOS:
      return state.map((todo, index) => {
        if (index === action.todoId) {
          return Object.assign({}, todo, {
            text: action.text
          })
        }
        return todo
      })
    default:
      return state
  }
}

const todoApp = combineReducers({
  visibilityFilter,
  todos
})

export default todoApp