import { createSlice, PayloadAction } from '@reduxjs/toolkit'

import { signInUser, signUpUser } from './auth.operations.ts'
import { StateProps, User } from './types.ts'

const initialState: StateProps = {
  user: null,
  isLoading: false,
  error: null
}

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setUser: (state, { payload }: PayloadAction<User>) => {
      state.user = payload
    },
    removeUser: (state) => {
      state.user = null
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(signInUser.pending, (state) => {
        state.isLoading = true
      })
      .addCase(signInUser.rejected, (state, { payload }) => {
        state.isLoading = false
        // @ts-expect-error fix later
        state.user = payload
      })

      .addCase(
        signInUser.fulfilled,
        (state, { payload }: PayloadAction<User>) => {
          state.user = payload
          state.isLoading = false
          state.error = null
        }
      )
      .addCase(signUpUser.pending, (state) => {
        state.isLoading = true
        state.error = null
      })
      .addCase(signUpUser.rejected, (state, { payload }) => {
        state.error = payload
        state.isLoading = false
      })
      .addCase(
        signUpUser.fulfilled,
        (state, { payload }: PayloadAction<User>) => {
          state.user = payload
          state.isLoading = false
          state.error = null
        }
      )
  }
})

export const { setUser, removeUser } = authSlice.actions
export default authSlice.reducer
