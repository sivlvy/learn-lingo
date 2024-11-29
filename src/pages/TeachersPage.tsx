import { useState } from 'react'

import { ButtonSize, ButtonType } from '../helpers/types.ts'
import { CustomModal } from '../UI-components'
import { CustomButton } from '../UI-components/CustomButton/CustomButton.tsx'
//Testing netlify
const TeachersPage = () => {
  const [isModalOpen, setIsModalOpen] = useState(false)

  const openModal = () => {
    setIsModalOpen(true)
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
