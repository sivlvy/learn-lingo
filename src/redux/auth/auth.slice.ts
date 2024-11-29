import { createSlice } from '@reduxjs/toolkit'

import { StateProps } from '../../helpers/types/types.ts'

const initialState: StateProps = {
  name: null,
  email: null,
  token: null,
  id: null
}

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setUser: (state, { payload }) => {
      state.email = payload.email
      state.id = payload.id
      state.token = payload.token
      state.name = payload.name
    },
    removeUser: (state) => {
      state.id = null
      state.token = null
      state.email = null
    }
  }
})

export const { setUser, removeUser } = authSlice.actions
export default authSlice.reducer
