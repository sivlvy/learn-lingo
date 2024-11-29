import { Navigate } from 'react-router-dom'

import { useAuth } from '../helpers/hooks/useAuth.ts'

const FavoritesPage = () => {
  const { isAuth } = useAuth()

  if (!isAuth) {
    return <Navigate to="/" />
  }

  return <div>FavoritesPage</div>
}

export default FavoritesPage
