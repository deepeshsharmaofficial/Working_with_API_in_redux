// action constants
export const ADD_TODO = "Add Todo";
export const TOGGLE_TODO = "Toggle Todo";

// actions creators
export const addTodo = (text) => ({
    type: ADD_TODO,
    text 
});
export const toggleTodo = (index) => ({
    type: TOGGLE_TODO,
    index 
});