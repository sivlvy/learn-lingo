import { createSlice } from '@reduxjs/toolkit'

import { getData } from './teachers.operations.ts'
import { StateProps } from './types.ts'

const initialState: StateProps = {
  data: [],
  favorites: [],
  isLoading: false,
  error: null
}

const teachersSlice = createSlice({
  name: 'teachers',
  initialState,
  reducers: {
    addToFavorite: (state, action) => {
      const teacher = action.payload
      if (
        !state.favorites.some(
          (item) =>
            item.name === teacher.name && item.surname === teacher.surname
        )
      ) {
        state.favorites.push(teacher)
      }
    },
    removeFromFavorite: (state, action) => {
      const teacher = action.payload
      state.favorites = state.favorites.filter(
        (item) => item.name !== teacher.name || item.surname !== teacher.surname
      )
    }
  },
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
  }
})

export default teachersSlice.reducer

export const { addToFavorite, removeFromFavorite } = teachersSlice.actions
