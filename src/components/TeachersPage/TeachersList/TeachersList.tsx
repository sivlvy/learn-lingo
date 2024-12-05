import { useEffect } from 'react'
import { useAppDispatch } from '../../../helpers/hooks/useAppDispatch.ts'
import { getData } from '../../../redux/teachers/teachers.operations.ts'
import { useAppSelector } from '../../../helpers/hooks/useAppSelector.ts'
import TeacherItem from '../TeachersItem/TeachersItem.tsx'

const TeachersList = () => {
  const dispatch = useAppDispatch()
  const { data, isLoading, error } = useAppSelector((state) => state.teachers)

  console.log(data)

  useEffect(() => {
    dispatch(getData())
  }, [dispatch])

  return (
    <div>
      {!isLoading && !error && (
        <ul>
          {data.map((teacher, index) => (
            <TeacherItem key={index} teacher={teacher} />
          ))}
        </ul>
      )}
    </div>
  )
}

export default TeachersList
