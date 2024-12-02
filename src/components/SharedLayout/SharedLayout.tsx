import React, { Suspense } from 'react'
import { Outlet } from 'react-router-dom'

import Container from '../Container/Container.tsx'
import NavBar from '../NavBar/NavBar.tsx'

const SharedLayout = () => {
  return (
    <React.Fragment>
      <Container padding="0 128px">
        <NavBar />
      </Container>
      <Suspense fallback={<div>Loading...</div>}>
        <Outlet />
      </Suspense>
    </React.Fragment>
  )
}

export default SharedLayout
