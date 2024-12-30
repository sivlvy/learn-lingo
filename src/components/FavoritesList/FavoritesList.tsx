import { FC } from 'react'
import styles from './FavoritesList.module.scss'
import { Teacher } from '../../redux/teachers/types.ts'
import { TeacherItem } from '../TeachersPage/TeachersItem/TeachersItem.tsx'
import { Toaster } from 'react-hot-toast'

interface FavoriteListProps {
  favorites: Teacher[]
}

const FavoritesList: FC<FavoriteListProps> = ({ favorites }) => {
  return (
    <div>
      <Toaster position="top-center" reverseOrder={false} />
      <ul className={styles.favoritesList}>
        {favorites.map((teacher: Teacher) => (
          <li key={teacher.id}>
            <TeacherItem teacher={teacher} />
          </li>
        ))}
      </ul>
    </div>
  )
}

export { FavoritesList }
