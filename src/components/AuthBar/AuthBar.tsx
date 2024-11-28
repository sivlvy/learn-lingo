import { LoginIcon } from '../../../icons'
import { ButtonSize, ButtonType } from '../../helpers/types.ts'
import Button from '../../UI-components/Button/Button.tsx'

import styles from './auth-bar.module.scss'

const AuthBar = () => {
  return (
    <div className={styles.authBar}>
      <div className={styles.logoWrapper}>
        <LoginIcon />
        <button className={styles.btnLogIn} onClick={() => alert('Log in')}>
          Log in
        </button>
      </div>
      <Button
        onClick={() => alert('Register')}
        size={ButtonSize.SMALL}
        type={ButtonType.BLACK}
        title="Registration"
      />
    </div>
  )
}

export { AuthBar }
