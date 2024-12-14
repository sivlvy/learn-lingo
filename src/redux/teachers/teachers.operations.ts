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

const bookLesson = createAsyncThunk(
  'teachers/bookLesson',
  async (
    { teacherId, lessonData }: { teacherId: number; lessonData: object },
    { rejectWithValue }
  ) => {
    try {
      const res = await axios.post(`${baseUrl}/book`, { teacherId, lessonData })
      return res.data
    } catch (err) {
      if (err instanceof Error) {
        return rejectWithValue(err.message)
      }
    }
  }
)

export { bookLesson }
