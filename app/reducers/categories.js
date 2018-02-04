import {ADD_CATEGORY, ADD_NESTED_CATEGORY} from '../actions/actions'

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
    case ADD_NESTED_CATEGORY:
      {
        debugger;
        state.map(val => {
          if (val.id == action.parentId) {
            if (val.nestedCategories == undefined) 
              val.nestedCategories = [];
            val
              .nestedCategories
              .push({name: action.name, id: categoriesId});
            return val;
          }
        });
        return state;
      }
      case ADD_NESTED_CATEGORY:
      {
        debugger;
        state.map(val => {
          if (val.id == action.parentId) {
            if (val.nestedCategories == undefined) 
              val.nestedCategories = [];
            val
              .nestedCategories
              .push({name: action.name, id: categoriesId});
            return val;
          }
        });
        return state;
      }
    default:
      return state;
  }
}

export default categories;