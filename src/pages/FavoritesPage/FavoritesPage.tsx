import { FC } from 'react'
import { RootState } from '../../redux/store'
import styles from './FavoritesPage.module.scss'
import { useAppSelector } from '../../helpers/hooks/useAppSelector.ts'
import { Teacher } from '../../redux/teachers/types.ts'
import { FavoritesList } from '../../components/FavoritesList/FavoritesList.tsx'
import Container from '../../components/Container/Container.tsx'

interface FavPage {
  teacher: Teacher[]
}

const FavoritesPage: FC<FavPage> = () => {
  const favorites = useAppSelector(
    (state: RootState) => state.teachers.favorites
  )

  return (
    <Container>
      <div className={styles.favoritesPage}>
        {favorites.length === 0 ? (
          <p>No favorite teachers yet.</p>
        ) : (
          <FavoritesList favorites={favorites} />
        )}
      </div>
    </Container>
  )
}

export default FavoritesPage
