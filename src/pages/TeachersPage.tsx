import { useState } from 'react'
import { Navigate } from 'react-router-dom'

import { useAuth } from '../helpers/hooks/useAuth.ts'
import { ButtonSize, ButtonType } from '../helpers/types/types.ts'
import { CustomModal } from '../UI-components'
import { CustomButton } from '../UI-components/CustomButton/CustomButton.tsx'
//Testing netlify
const TeachersPage = () => {
  const [isModalOpen, setIsModalOpen] = useState(false)

  const openModal = () => {
    setIsModalOpen(true)
  }
  const { isAuth } = useAuth()

  if (!isAuth) {
    return <Navigate to="/" />
  }
  return (
    <div>
      <CustomButton
        onClick={openModal}
        size={ButtonSize.SMALL}
        type={ButtonType.BLACK}
        title="Click"
      />
      <CustomModal openModal={isModalOpen} setOpenModal={setIsModalOpen}>
        <p>Hello</p>
      </CustomModal>
    </div>
  )
}

export default TeachersPage
