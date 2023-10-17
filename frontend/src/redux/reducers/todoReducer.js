import { createSlice } from "@reduxjs/toolkit"

// initial state
const initialState = {
  todos: [
    {"text": "Meeting at 9", completed: true},
    {"text": "Dinner at 2", completed: false},
  ]
}

// Creating Reducer using Redux Toolkit

const todoSlice = createSlice({

  name: 'todo',
  initialState: initialState,

  reducers: {

    // this is add action
    add: (state, action) => {
      state.todos.push({
        text: action.payload,
        completed: false
      })
    },

    toggle: (state, action) => {
      state.todos.map((todo, i) => {
        if(i == action.payload) {
          todo.completed = !todo.completed;
        }
        return todo;
      })
    }
  
  }

})

export const todoReducer = todoSlice.reducer;

export const actions = todoSlice.actions;

// selector
export const todoSelector = (state) => state.todoReducer.todos;