import { TeacherItem } from '../TeachersItem/TeachersItem.tsx'
import { Toaster } from 'react-hot-toast'
import { Teacher } from '../../../redux/teachers/types.ts'
import { CustomPagination } from '../../../UI-components/CustomPagination/CustomPagination.tsx'
import styles from './TeachersList.module.scss'

interface TeachersListProps {
  filteredTeachers: Teacher[]
  selectedLevel?: string
}

const TeachersList: React.FC<TeachersListProps> = ({
  filteredTeachers,
  selectedLevel
}) => {
  return (
    <div className={styles.container}>
      <Toaster position="top-center" reverseOrder={false} />

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
    </div>
  )
}

export { TeachersList }
