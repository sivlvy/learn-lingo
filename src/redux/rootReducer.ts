import { combineReducers } from '@reduxjs/toolkit'

import authReducer from './auth/auth.slice.ts'
import teachersReducer from './teachers/teachers.slice.ts'

const rootReducer = combineReducers({
  auth: authReducer,
  teachers: teachersReducer
})

export default rootReducer
