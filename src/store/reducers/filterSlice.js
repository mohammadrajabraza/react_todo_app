import { createReducer } from '@reduxjs/toolkit'

const filter = createReducer([], (builder) => {
  builder
    .addCase('filter/all', (state) => {
      state.status = 'all'
    })
    .addCase('filter/active', (state) => {
      state.status = 'active'
    })
    .addCase('filter/completed', (state) => {
      state.status = 'completed'
    })
})
export default filter
