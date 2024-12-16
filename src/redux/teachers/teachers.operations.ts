import { createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'

const baseUrl = import.meta.env.VITE_DATABASE_URL

const getData = createAsyncThunk(
  'teachers/getData',
  async (_, { rejectWithValue }) => {
    try {
      const res = await axios.get(baseUrl)
      const teachersWithIds = res.data.map(
        (teacher: object, index: number) => ({
          ...teacher,
          id: index + 1
        })
      )
      return teachersWithIds
    } catch (err) {
      if (err instanceof Error) {
        return rejectWithValue(err.message)
      }
    }
  }
)

export { getData }
