import { useAppDispatch } from '../../helpers/hooks/useAppDispatch.ts'
import { useAuth } from '../../helpers/hooks/useAuth.ts'
import { ButtonSize, ButtonType } from '../../helpers/types/types.ts'
import { removeUser } from '../../redux/auth/auth.slice.ts'
import { CustomButton } from '../../UI-components/CustomButton/CustomButton.tsx'

import styles from './logout-button.module.scss'

const LogoutButton = () => {
  const { email } = useAuth()
  const dispatch = useAppDispatch()
  return (
    <div className={styles.wrapper}>
      <p className={styles.email}>{email}</p>
      <CustomButton
        type={ButtonType.BLACK}
        size={ButtonSize.SMALL}
        title="Logout"
        onClick={() => dispatch(removeUser())}
      />
    </div>
  )
}

export { LogoutButton }
