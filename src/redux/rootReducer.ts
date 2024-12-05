import { combineReducers } from '@reduxjs/toolkit'

import authReducer from './auth/auth.slice.ts'
import filterReducer from './filter/filter.slice.ts'

const rootReducer = combineReducers({
  auth: authReducer,
  filter: filterReducer
})

export default rootReducer
