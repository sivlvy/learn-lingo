import { useEffect } from 'react'
import { useAppDispatch } from '../../../helpers/hooks/useAppDispatch.ts'
import { getData } from '../../../redux/teachers/teachers.operations.ts'
import { useAppSelector } from '../../../helpers/hooks/useAppSelector.ts'
import { TeacherItem } from '../TeachersItem/TeachersItem.tsx'
import { Toaster } from 'react-hot-toast'
import { Teacher } from '../../../redux/teachers/types.ts'
import { CustomPagination } from '../../../UI-components/CustomPagination/CustomPagination.tsx'
import styles from './TeachersList.module.scss'

const TeachersList = () => {
  const dispatch = useAppDispatch()
  const { data, isLoading, error } = useAppSelector((state) => state.teachers)

  const selectedLanguage = useAppSelector((state) => state.filter.language)
  const selectedLevel = useAppSelector((state) => state.filter.level)
  const selectedPrice = useAppSelector((state) => state.filter.price)

  const filteredTeachers = data.filter((teacher: Teacher) => {
    const matchesLanguage =
      !selectedLanguage || teacher.languages.includes(selectedLanguage)
    const matchesLevel =
      !selectedLevel || teacher.levels.includes(selectedLevel)
    const matchesPrice =
      !selectedPrice || teacher.price_per_hour === parseInt(selectedPrice, 10)
    return matchesLanguage && matchesLevel && matchesPrice
  })

  useEffect(() => {
    dispatch(getData())
  }, [dispatch])

  return (
    <div className={styles.container}>
      <Toaster position="top-center" reverseOrder={false} />

      {!isLoading && !error && filteredTeachers.length > 0 && (
        <CustomPagination
          className={styles.pagination}
          items={filteredTeachers}
          itemsPerPage={4}
          renderItem={(teacher: Teacher) => (
            <TeacherItem
              key={teacher.id}
              teacher={teacher}
              selectedLevel={selectedLevel}
            />
          )}
        />
      )}
      {isLoading && <p>Loading...</p>}
      {error && <p>Error loading data: {error}</p>}
      {filteredTeachers.length === 0 && !isLoading && (
        <p>No teachers found with the selected filters.</p>
      )}
    </div>
  )
}

export { TeachersList }
