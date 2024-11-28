import { CSSProperties, Dispatch, FC, ReactNode, SetStateAction } from 'react'

import styles from './custom-modal.module.scss'

type TModalWindow = {
  sx?: CSSProperties
  children: ReactNode
  openModal: boolean
  setOpenModal: Dispatch<SetStateAction<boolean>>
  callback?: () => void
  onAnimationEnd?: () => void
}

const CustomModal: FC<TModalWindow> = ({
  sx,
  children,
  openModal,
  setOpenModal,
  callback
}) => {
  const handleCloseModal = () => {
    setOpenModal(false)
    if (callback) {
      callback()
    }
  }

  if (!openModal) return null

  return (
    <div className={styles.modalBackdrop} onClick={handleCloseModal}>
      <div
        className={styles.modalContent}
        style={sx}
        onClick={(e) => e.stopPropagation()}
      >
        <div className={styles.closeButton} onClick={handleCloseModal}>
          &#x2715;
        </div>
        {children}
      </div>
    </div>
  )
}

export default CustomModal
