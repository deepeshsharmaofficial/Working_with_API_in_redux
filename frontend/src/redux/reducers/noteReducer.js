import { createSlice } from "@reduxjs/toolkit";

// initial state
const initialState = {
    notes: [
        {
            text: "This is the most used method present online. In this case, the parent div is assigned a position ‘relative’ while the child divs are assigned position ‘absolute’",
            createdOn: new Date().toDateString()
        },

        {
            text: "Elements inside ‘absolute’ divs can be aligned in whatever way you want. Consider the following example. It shows all possible alignments a DOM element, in this case, buttons can have.",
            createdOn: new Date().toDateString()
        },
    ]
}

// Creating Reducer using Redux Toolkit

const noteSlice = createSlice({
    name: 'note',
    initialState: initialState,

    reducers: {
        add : (state, action) => {
            state.notes.push({
                text: action.payload,
                createdOn: new Date().toDateString()
            })
        },

        delete: (state, action) => {
            state.notes.splice(action.payload, 1);
        }
    }
})

export const noteReducer = noteSlice.reducer;

export const actions = noteSlice.actions;

// selector
export const noteSelector = (state) => state.noteReducer.notes;