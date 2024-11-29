import { Navigate } from 'react-router-dom'

import { useAuth } from '../helpers/hooks/useAuth.ts'

const HomePage = () => {
  const { isAuth } = useAuth()

  if (isAuth) {
    return <Navigate to="/teachers" />
  }
  return <div>Homepage</div>
}

export default HomePage
