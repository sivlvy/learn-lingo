import { RootState } from '../../redux/store.ts'

import { useAppSelector } from './useAppSelector.ts'

export const useAuth = () => {
  const user = useAppSelector((state: RootState) => state.auth.user)

  return {
    isAuth: !!user?.email,
    email: user?.email,
    token: user?.token,
    id: user?.id
  }
}
