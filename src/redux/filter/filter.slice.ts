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
    }
  }
})

export default filterSlice.reducer
export const { setFilterPrice, setFilterLevel, setFilterLanguage } =
  filterSlice.actions
