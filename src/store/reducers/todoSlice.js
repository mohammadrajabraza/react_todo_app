import { createReducer } from "@reduxjs/toolkit"
const todos = createReducer([], (builder) => {
    builder
        .addCase('todo/add', (state, action) => {
            state.push({
                id : action.payload.id,
                todo : action.payload.text,
                isCompleted: false
            })
        })
        .addCase('todo/toggle', (state, action) => {
            const todo = state.find((item) => item.id === action.payload.id)
            todo.isCompleted = !todo.isCompleted
        })
        .addCase('todo/update', (state, action) => {
            const todo = state.find((item) => item.id === action.payload.id)
            todo.todo = action.payload.text
        })
        .addCase('todo/delete', (state, action) => {
            return state.filter((item) => item.id !== action.payload.id)
        })
  })
  
export default todos