/*
 * action types
 */

export const ADD_TODO = 'ADD_TODO';
export const RENAME_TODO = 'RENAME_TODO';
export const TOGGLE_TODO = 'TOGGLE_TODO';
export const FETCH_TODOS = 'FETCH_TODOS';
//
export const ADD_CATEGORY = 'ADD_CATEGORY';
export const RENAME_CATEGORY = 'RENAME_CATEGORY';
export const DELETE_CATEGORY = 'DELETE_CATEGORY';
export const SELECT_CATEGORY = 'SELECT_CATEGORY';
//

export const RENAME_NESTED_CATEGORY = 'RENAME_NESTED_CATEGORY';
export const ADD_NESTED_CATEGORY = 'ADD_NESTED_CATEGORY';



export const SET_VISIBILITY_FILTER = 'SET_VISIBILITY_FILTER';

/*
 * other constants
 */

export const VisibilityFilters = {
    SHOW_ALL: 'SHOW_ALL',
    SHOW_COMPLETED: 'SHOW_COMPLETED',
    SHOW_ACTIVE: 'SHOW_ACTIVE'
}

/*
 * action creators for todos
 */

export function addTodo(text, categoryId) {
    return {type: ADD_TODO, text, categoryId}
}
export function renameTodo(categoryId, todoId, text) {
    return {type: RENAME_TODO, categoryId, todoId, text}
}
export function toggleTodo(todoId) {
    return {type: TOGGLE_TODO, todoId}
}
export function fetchTodos(categoryId) {
    return {type: FETCH_TODOS, categoryId}
}


/*
 * action creators for categories
 */
export function addCategory(text) {
    return {type: ADD_CATEGORY, text}
}

export function addNestedCategory(text) {
    return {type: ADD_NESTED_CATEGORY, text}
}

export function renameCategory(text) {
    return {type: RENAME_CATEGORY, text}
}

export function renameNestedCategory(text) {
    return {type: RENAME_NESTED_CATEGORY, text}
}



export function setVisibilityFilter(filter) {
    return {type: SET_VISIBILITY_FILTER, filter}
}