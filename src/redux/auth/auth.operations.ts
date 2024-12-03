import { createAsyncThunk } from '@reduxjs/toolkit'
import {
  createUserWithEmailAndPassword,
  getAuth,
  signInWithEmailAndPassword
} from 'firebase/auth'

import { User } from './types.ts'

export const signInUser = createAsyncThunk<
  User,
  { email: string; password: string },
  { rejectValue: string }
>('auth/signIn', async (body, { rejectWithValue }) => {
  const auth = getAuth()

  try {
    const { user } = await signInWithEmailAndPassword(
      auth,
      body.email,
      body.password
    )

    const token = await user.getIdToken()

    return {
      email: user.email,
      id: user.uid,
      token
    } as User
  } catch (err) {
    if (err instanceof Error) {
      return rejectWithValue(err.message)
    }
    return rejectWithValue('Unknown error')
  }
})

export const signUpUser = createAsyncThunk<
  User,
  { email: string; password: string },
  { rejectValue: string }
>('auth/signUp', async (body, { rejectWithValue }) => {
  const auth = getAuth()

  try {
    const { user } = await createUserWithEmailAndPassword(
      auth,
      body.email,
      body.password
    )

    const token = await user.getIdToken()

    return {
      email: user.email,
      id: user.uid,
      token
    } as User
  } catch (err) {
    if (err instanceof Error) {
      return rejectWithValue(err.message)
    }
    return rejectWithValue('Unknown error')
  }
})
