import { RootState } from '../../redux/store.ts'

import { useAppSelector } from './useAppSelector.ts'

export const useAuth = () => {
  const { email, token, id } = useAppSelector((state: RootState) => state.auth)

  return {
    isAuth: !!email,
    email,
    token,
    id
  }
}
