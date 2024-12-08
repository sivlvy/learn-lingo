import { useEffect } from 'react'

import Container from '../../components/Container/Container.tsx'
import { Selectors } from '../../components/Selectors/Selectors.tsx'
import { useAppDispatch } from '../../helpers/hooks/useAppDispatch.ts'
import { useAppSelector } from '../../helpers/hooks/useAppSelector.ts'
import { getData } from '../../redux/teachers/teachers.operations.ts'
import { filterTeachers } from '../../utils/filterTeachers.ts'

const DEFAULT_LEVEL = ''
const DEFAULT_LANGUAGE = ''
const DEFAULT_PRICE = ''

const TeachersPage = () => {
  const dispatch = useAppDispatch()

  useEffect(() => {
    dispatch(getData())
  }, [dispatch])

  const useFilteredTeachers = () => {
    const teachersData = useAppSelector((state) => state.teachers.data)
    const level = useAppSelector((state) => state.filter.level) ?? DEFAULT_LEVEL
    const language =
      useAppSelector((state) => state.filter.language) ?? DEFAULT_LANGUAGE
    const price = useAppSelector((state) => state.filter.price) ?? DEFAULT_PRICE

    return filterTeachers(teachersData, level, language, price)
  }

  const filteredTeachers = useFilteredTeachers()

  console.log(filteredTeachers)

  return (
    <Container>
      <Selectors />
    </Container>
  )

}

export { TeachersPage }
