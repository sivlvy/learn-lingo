import { createSlice } from '@reduxjs/toolkit'

import { StateProps } from './types.ts'

const initialState: StateProps = {
  language: null,
  level: null,
  price: null
}

const filterSlice = createSlice({
  name: 'filter',
  initialState,
  reducers: {
    setFilterLanguage: (state, { payload }) => {
      state.language = payload
    },
    setFilterLevel: (state, { payload }) => {
      state.level = payload
    },
    setFilterPrice: (state, { payload }) => {
      state.price = payload
    },
    resetFilter: (state) => {
      state.language = null
      state.level = null
      state.price = null
    }
  }
})

export default filterSlice.reducer
export const {
  setFilterPrice,
  setFilterLevel,
  setFilterLanguage,
  resetFilter
} = filterSlice.actions
