import React from 'react'
import { Route, Routes } from 'react-router-dom'

import { FavoritesPage, HomePage, TeachersPage } from '../pages/index.ts'

import SharedLayout from './SharedLayout/SharedLayout.tsx'

function App() {
  return (
    <React.Fragment>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/teachers" element={<TeachersPage />} />
          <Route path="/favorites" element={<FavoritesPage />} />
        </Route>
      </Routes>
    </React.Fragment>
  )
}

export default App
