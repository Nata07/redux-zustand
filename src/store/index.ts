import { configureStore, createSlice } from "@reduxjs/toolkit";

const todoSlice = createSlice({
    name: 'todo',
    initialState: ['Fazer cafe', 'Estudar Redux', 'Estudar Elixir'],

    reducers: {
        add: (state, action) => {
            console.log(state, action)
        }
    }
})

export const store = configureStore({
    reducer: {
        todo: todoSlice.reducer
    }
})

export const {add} = todoSlice.actions