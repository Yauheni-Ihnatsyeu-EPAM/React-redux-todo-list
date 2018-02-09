import {ADD_CATEGORY, ADD_NESTED_CATEGORY, RENAME_CATEGORY, DELETE_CATEGORY, FORCE_RELOAD} from '../actions/actions';
import undoable, {distinctState} from 'redux-undo';

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
        state.map(val => {
          if (val.id == action.parentId) {
            if (val.nestedCategories == undefined) 
              val.nestedCategories = [];
            val
              .nestedCategories
              .push({
                name: action.name,
                id: categoriesId++
              });
            return val;
          }
        });
        
        return [...state];
      }
    case RENAME_CATEGORY:
      {
        
        let arr = state.map(item => {
          if (item.id == action.id) 
            item.name = action.name
          if (item.nestedCategories) 
            item.nestedCategories = item.nestedCategories.map(nested => {
              if (nested.id === action.id) 
              nested.name = action.name;
              return nested
            })
            return item;
        })
        return arr;
      }
    case DELETE_CATEGORY:
      {
        
        let arr = state.filter(item => {
          if (item.id == action.deleteID) 
            return false;
          if (item.nestedCategories) 
            item.nestedCategories = item.nestedCategories.filter(nested => nested.id === action.deleteID
              ? false
              : true);
          return true;
        });
        return arr;
      }
      case FORCE_RELOAD:
      {
        return state;
      }

    default:
      return state;
  }
}


const undoableCategories = undoable(categories);
export default undoableCategories;