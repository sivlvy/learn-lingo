import { useDispatch } from 'react-redux'

import { RootDispatch } from '../../redux/store.ts'

export const useAppDispatch = () => useDispatch<RootDispatch>()
