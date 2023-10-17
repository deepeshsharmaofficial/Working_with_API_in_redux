import { createSlice } from "@reduxjs/toolkit";
import { actions } from "./todoReducer";

const initialState = {
    message: ""
}

const notificationSlice = createSlice({
    name: "notification",
    initialState,

    reducers: {
        reset: (state, action) => {
            state.message ="";
        }
    },

    // 1st Method
    // extraReducers:{
    //     "todo/add": (state, action) => {
    //         state.message="Todo is created";
    //     }
    // }
    
    // 2nd Method (Recommended)
    // extraReducers:(builder) => {
    //     builder.addCase(actions.add, (state, action) => {
    //         state.message="Todo is created";
    //     })
    // }

    // 3rd Method (Recommended)
    extraReducers:{
        // map objects: [key]: value
        [actions.add]: (state, action) => {
            state.message="Todo is created";
        }
    }
});

export const notificationReducer = notificationSlice.reducer;

export const resetNotification = notificationSlice.actions.reset;

export const notificationSelector = (state) => state.notificationReducer.message;