import { useState } from 'react'

import { ButtonSize, ButtonType } from '../helpers/types.ts'
import { CustomModal } from '../UI-components'
import Button from '../UI-components/Button/Button.tsx'

const TeachersPage = () => {
  const [isModalOpen, setIsModalOpen] = useState(false)

  const openModal = () => {
    setIsModalOpen(true)
  }

  return (
    <div>
      <Button
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
