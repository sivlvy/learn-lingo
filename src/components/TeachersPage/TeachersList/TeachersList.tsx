import { TeacherItem } from '../TeachersItem/TeachersItem.tsx'
import { Toaster } from 'react-hot-toast'
import { Teacher } from '../../../redux/teachers/types.ts'
import { CustomPagination } from '../../../UI-components/CustomPagination/CustomPagination.tsx'
import styles from './TeachersList.module.scss'
import { FC } from 'react'

interface TeachersListProps {
  filteredTeachers: Teacher[]
  selectedLevel?: string
}

const TeachersList: FC<TeachersListProps> = ({
  filteredTeachers,
  selectedLevel
}) => {
  return (
    <div className={styles.container}>
      <Toaster position="top-center" reverseOrder={false} />
      <ul className={styles.teachersList}>
        <CustomPagination
          className={styles.pagination}
          items={filteredTeachers}
          itemsPerPage={4}
          renderItem={(teacher: Teacher) => (
            <li key={teacher.id} className={styles.teacherItem}>
              <TeacherItem teacher={teacher} selectedLevel={selectedLevel} />
            </li>
          )}
        />
      </ul>
    </div>
  )
}

export { TeachersList }
