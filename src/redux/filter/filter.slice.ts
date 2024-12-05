import { createSlice } from '@reduxjs/toolkit'

import { StateProps } from './types.ts'

const initialState: StateProps = {
  category: null
}

const filterSlice = createSlice({
  name: 'filter',
  initialState,
  reducers: {
    setCategory: (state, { payload }) => {
      state.category = payload
    }
  }
})

export default filterSlice.reducer
