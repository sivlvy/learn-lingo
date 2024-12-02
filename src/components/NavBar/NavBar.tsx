import { NavLink } from 'react-router-dom'
import clsx from 'clsx'

import { LogoIcon } from '../../assets/icons'
import { useAuth } from '../../helpers/hooks/useAuth.ts'
import { AuthBar } from '../AuthBar/AuthBar.tsx'

import styles from './navbar.module.scss'

const NavBar = () => {
  const { isAuth } = useAuth()

  return (
    <div className={styles.navbar}>
      <div className={styles.logoWrapper}>
        <LogoIcon size="28" />
        <span className={styles.logoSpan}>Learn Lingo</span>
      </div>
      <div className={styles.linksWrapper}>
        <NavLink
          className={({ isActive }) =>
            clsx(styles.link, { [styles.active]: isActive })
          }
          to="/"
        >
          Home
        </NavLink>
        <NavLink
          className={({ isActive }) =>
            clsx(styles.link, { [styles.active]: isActive })
          }
          to="/teachers"
        >
          Teachers
        </NavLink>
        {isAuth && (
          <NavLink
            className={({ isActive }) =>
              clsx(styles.link, { [styles.active]: isActive })
            }
            to="/favorites"
          >
            Favorites
          </NavLink>
        )}
      </div>
      <div>
        <AuthBar />
      </div>
    </div>
  )
}

export default NavBar
