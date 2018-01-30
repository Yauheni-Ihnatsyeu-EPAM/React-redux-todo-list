import {ADD_CATEGORY} from '../actions/actions'

var categoriesId = 0;

function categories(state = [], action) {
  switch (action.type) {
    case ADD_CATEGORY:
      {
        return [
          {
            name: action.name,
            id: categoriesId++
          },
          ...state
        ]
      }
    default:
      return state;
  }
}

export default categories;