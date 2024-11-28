import { combineReducers } from '@reduxjs/toolkit'

import authReducer from './auth/auth.slice.ts'

const rootReducer = combineReducers({
  auth: authReducer
})

export default rootReducer
