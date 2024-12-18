import React from 'react'
import { removeFromFavorite } from '../../redux/teachers/teachers.slice.ts'
import { RootState } from '../../redux/store'
import styles from './FavoritesPage.module.scss'
import { useAppDispatch } from '../../helpers/hooks/useAppDispatch.ts'
import { useAppSelector } from '../../helpers/hooks/useAppSelector.ts'
import { Teacher } from '../../redux/teachers/types.ts'

interface FavPage {
  teacher: Teacher
}

const FavoritesPage: React.FC<FavPage> = () => {
  const dispatch = useAppDispatch()

  const favorites = useAppSelector(
    (state: RootState) => state.teachers.favorites
  )

  const handleRemoveFromFavorites = ({ teacher }: { teacher: Teacher }) => {
    dispatch(removeFromFavorite(teacher))
  }

  return (
    <div className={styles.favoritesPage}>
      <h2>Favorites</h2>
      {favorites.length === 0 ? (
        <p>No favorite teachers yet.</p>
      ) : (
        <ul className={styles.favoritesList}>
          {favorites.map((teacher: Teacher) => (
            <li key={`${teacher.name}-${teacher.surname}`}>
              <h3>
                {teacher.name} {teacher.surname}
              </h3>
              <p>Lessons done: {teacher.lessons_done}</p>
              <p>Rating: {teacher.rating}</p>
              <button
                className={styles.removeButton}
                onClick={() => handleRemoveFromFavorites({ teacher: teacher })}
              >
                Remove from Favorites
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}

export default FavoritesPage
