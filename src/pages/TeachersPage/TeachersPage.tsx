import { useEffect, useState } from 'react'

import { useAppDispatch } from '../../helpers/hooks/useAppDispatch.ts'
import { ButtonSize, ButtonType } from '../../helpers/types/types.ts'
import { getData } from '../../redux/teachers/teachers.operations.ts'
import { CustomModal } from '../../UI-components'
import { CustomButton } from '../../UI-components/CustomButton/CustomButton.tsx'
//Testing netlify
const TeachersPage = () => {
  const [isModalOpen, setIsModalOpen] = useState(false)

  const openModal = () => {
    setIsModalOpen(true)
  }

  const dispatch = useAppDispatch()

  useEffect(() => {
    dispatch(getData())
  }, [dispatch])

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
