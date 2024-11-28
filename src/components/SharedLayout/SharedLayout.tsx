import React, { Suspense } from 'react'
import { Outlet } from 'react-router-dom'

import Container from '../Container/Container.tsx'
import NavBar from '../NavBar/NavBar.tsx'

const SharedLayout = () => {
  return (
    <React.Fragment>
      <Container>
        <NavBar />
        <Suspense fallback={<div>Loading...</div>}>
          <Outlet />
        </Suspense>
      </Container>
    </React.Fragment>
  )
}

export default SharedLayout
