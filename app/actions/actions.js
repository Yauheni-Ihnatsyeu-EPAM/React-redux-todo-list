/*
 * action types
 */

export const ADD_TODO = 'ADD_TODO';
export const EDIT_TODO = 'EDIT_TODO';
export const TOGGLE_TODO = 'TOGGLE_TODO';
//
export const ADD_CATEGORY = 'ADD_CATEGORY';
export const RENAME_CATEGORY = 'RENAME_CATEGORY';
export const DELETE_CATEGORY = 'DELETE_CATEGORY';
//

export const RENAME_NESTED_CATEGORY = 'RENAME_NESTED_CATEGORY';
export const ADD_NESTED_CATEGORY = 'ADD_NESTED_CATEGORY';



export const SET_NAME_FILTER = 'SET_NAME_FILTER';
export const SET_DONE_FILTER = 'SET_DONE_FILTER';
export const SET_CATEGORY_FILTER = 'SET_CATEGORY_FILTER';

/*
 * other constants
 */

/*
 * action creators for todos
 */

export function addTodo(name, categoryId) {
    return {type: ADD_TODO, name, categoryId}
}
export function editTodo(id, name, done, description) {
    return {type: EDIT_TODO, id, name, done, description}
}
export function toggleTodo(id) {
    return {type: TOGGLE_TODO, id}
}

/*
 * action creators for categories
 */
export function addCategory(name) {
    return {type: ADD_CATEGORY, name}
}

export function addNestedCategory(text, parentId) {
    return {type: ADD_NESTED_CATEGORY, text, parentId}
}

export function renameCategory(text) {
    return {type: RENAME_CATEGORY, text}
}

export function renameNestedCategory(text) {
    return {type: RENAME_NESTED_CATEGORY, text}
}



export function setNameFilter(string) {
    return {type: SET_NAME_FILTER, string}
}
export function setCategoryFilter(id) {
    return {type: SET_CATEGORY_FILTER, id}
}
export function setDoneFilter(done) {
    return {type: SET_DONE_FILTER, done}
}