import { createSlice } from '@reduxjs/toolkit'

import { bookLesson, getData } from './teachers.operations.ts'
import { StateProps } from './types.ts'

const initialState: StateProps = {
  data: [],
  isLoading: false,
  error: null
}

const teachersSlice = createSlice({
  name: 'teachers',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getData.pending, (state) => {
        state.isLoading = true
        state.error = null
      })
      .addCase(getData.fulfilled, (state, { payload }) => {
        state.data = payload
        state.isLoading = false
        state.error = null
      })
      .addCase(bookLesson.pending, (state) => {
        state.isLoading = true
        state.error = null
      })
      .addCase(bookLesson.fulfilled, (state) => {
        state.isLoading = false
        state.error = null
      })
      .addCase(bookLesson.rejected, (state) => {
        state.isLoading = false
        state.error = null
      })
  }
})

export default teachersSlice.reducer
