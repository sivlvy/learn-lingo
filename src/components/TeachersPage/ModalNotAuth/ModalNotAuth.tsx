import { FC } from 'react'
import { CustomButton } from '../../../UI-components/CustomButton/CustomButton.tsx'
import { ButtonSize, ButtonType } from '../../../helpers/types/types.ts'
import styles from './ModalNotAuth.module.scss'
import { LoginIcon } from '../../../assets/icons'

interface Prop {
  favoriteModal: () => void
  onSelect: (type: 'login' | 'signup') => void
}

const ModalNotAuth: FC<Prop> = ({ favoriteModal, onSelect }) => {
  const openLoginModal = () => {
    favoriteModal()
    setTimeout(() => onSelect('login'), 300)
  }

  const openSignUpModal = () => {
    favoriteModal()
    setTimeout(() => onSelect('signup'), 300)
  }

  return (
    <div className={styles.container}>
      <h1 className={styles.mainText}>
        To add a teacher to your favorites please register or log in
      </h1>
      <div className={styles.authBar}>
        <div className={styles.logoWrapper}>
          <LoginIcon />
          <button className={styles.btnLogIn} onClick={openLoginModal}>
            <p className={styles.btnText}>Log in</p>
          </button>
        </div>
        <CustomButton
          size={ButtonSize.SMALL}
          type={ButtonType.ORANGE}
          title="Registration"
          onClick={openSignUpModal}
        />
        <CustomButton
          size={ButtonSize.SMALL}
          type={ButtonType.ORANGE}
          title="Continue as guest"
          onClick={favoriteModal}
        />
      </div>
    </div>
  )
}

export { ModalNotAuth }
