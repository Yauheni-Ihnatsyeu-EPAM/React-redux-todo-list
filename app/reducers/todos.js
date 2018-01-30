import {ADD_TODO, EDIT_TODO, TOGGLE_TODO} from '../actions/actions'

var todoID = 0;

function todos(state = [], action) {
    switch (action.type) {
        case ADD_TODO:
            return [
                {
                    name: action.name,
                    done: false,
                    categoryId: action.categoryId,
                    id: todoID++
                },
                ...state
            ];
        case TOGGLE_TODO:
            return state.map((todo) => {
                if (todo.id === action.id) {
                    return Object.assign({}, todo, {
                        done: !todo.done
                    });
                }
                return todo;
            });
        case EDIT_TODO:
            return state.map((todo) => {
                if (todo.id === action.todoId) {
                    return Object.assign({}, todo, {name: action.name, description: action.description, text: action.text, done:action.done});
                }
                return todo;
            });
        default:
            return state;
    }
}


export default todos;