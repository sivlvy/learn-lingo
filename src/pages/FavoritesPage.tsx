import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

import { useAuth } from '../helpers/hooks/useAuth.ts'

const FavoritesPage = () => {
  const { isAuth } = useAuth()

  const navigate = useNavigate()

  useEffect(() => {
    if (!isAuth) {
      navigate('/')
    }
  }, [isAuth, navigate])

  return <div>FavoritesPage</div>
}

export default FavoritesPage
