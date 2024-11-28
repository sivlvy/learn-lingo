import { createSlice } from '@reduxjs/toolkit'

import { StateProps } from '../../helpers/types.ts'

const initialState: StateProps = {
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
