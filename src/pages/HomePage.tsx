import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

import { useAuth } from '../helpers/hooks/useAuth.ts'

const HomePage = () => {
  const { isAuth } = useAuth()

  const navigate = useNavigate()

  useEffect(() => {
    if (isAuth) {
      navigate('/teachers')
    }
  }, [isAuth, navigate])
  return <div>Homepage</div>
}

export default HomePage
