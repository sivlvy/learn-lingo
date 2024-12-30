import { createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'

const baseUrl = import.meta.env.VITE_DATABASE_URL

const getData = createAsyncThunk(
  'teachers/getData',
  async (_, { rejectWithValue }) => {
    try {
      const res = await axios.get(baseUrl)
      return res.data
    } catch (err) {
      if (err instanceof Error) {
        return rejectWithValue(err.message)
      }
    }
  }
)

export { getData }
