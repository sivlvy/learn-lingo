import React, { useState } from 'react'

import { LoginIcon } from '../../assets/icons'
import { useAuth } from '../../helpers/hooks/useAuth.ts'
import { ButtonSize, ButtonType } from '../../helpers/types/types.ts'
import { CustomModal } from '../../UI-components'
import { CustomButton } from '../../UI-components/CustomButton/CustomButton.tsx'
import { LogoutButton } from '../LogoutButton/LogoutButton.tsx'
import { SignInForm } from '../SignInForm/SignInForm.tsx'
import { SignUpForm } from '../SignUpForm/SignUpForm.tsx'

import styles from './auth-bar.module.scss'

const AuthBar = () => {
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false)
  const [isSignUpModalOpen, setIsSignUpModalOpen] = useState(false)

  const { isAuth } = useAuth()

  const openLoginModal = () => setIsLoginModalOpen(true)
  const openSignUpModal = () => setIsSignUpModalOpen(true)

  return (
    <React.Fragment>
      {!isAuth ? (
        <div className={styles.authBar}>
          <div className={styles.logoWrapper}>
            <LoginIcon />
            <button className={styles.btnLogIn} onClick={openLoginModal}>
              Log in
            </button>
          </div>
          <CustomButton
            size={ButtonSize.SMALL}
            type={ButtonType.BLACK}
            title="Registration"
            onClick={openSignUpModal}
          />
        </div>
      ) : (
        <LogoutButton />
      )}

      <CustomModal
        openModal={isLoginModalOpen}
        setOpenModal={setIsLoginModalOpen}
      >
        <SignInForm />
      </CustomModal>
      <CustomModal
        openModal={isSignUpModalOpen}
        setOpenModal={setIsSignUpModalOpen}
      >
        <SignUpForm />
      </CustomModal>
    </React.Fragment>
  )
}

export { AuthBar }
