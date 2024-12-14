import React, { useState } from 'react'
import clsx from 'clsx'
import styles from '../TeachersItem/TeachersItem.module.scss'
import { CustomButton } from '../../../UI-components/CustomButton/CustomButton.tsx'
import { ButtonSize, ButtonType } from '../../../helpers/types/types.ts'
import { CustomModal } from '../../../UI-components'
import { TeacherPopUp } from '../TeacherPopUp/TeacherPopUp.tsx'
import { Teacher } from '../../../redux/teachers/types.ts'

interface TeacherLevelProps {
  teacher: Teacher
}

const TeacherLevel: React.FC<TeacherLevelProps> = ({ teacher }) => {
  const [isExpanded, setIsExpanded] = useState(false)
  const [isModalOpen, setIsModalOpen] = useState(false)

  const toggleCard = () => {
    setIsExpanded((prev) => !prev)
  }

  const openModal = () => {
    setIsModalOpen(true)
  }

  const closeModal = () => {
    setIsModalOpen(false)
  }

  return (
    <div>
      {isExpanded && (
        <div className={styles.expandedContent}>
          <p className={styles.teacherExperience}>{teacher.experience}</p>

          <div className={styles.teacherReviews}>
            {teacher.reviews && teacher.reviews.length > 0 ? (
              teacher.reviews.map((reviewer, idx) => (
                <div key={idx} className={styles.reviewItem}>
                  <div className={styles.reviewerAvatar}>
                    {reviewer.reviewer_name[0].toUpperCase()}
                  </div>
                  <div className={styles.reviewContent}>
                    <div className={styles.reviewerInfo}>
                      <p className={styles.reviewerName}>
                        {reviewer.reviewer_name}
                      </p>
                      <p className={styles.reviewerRating}>
                        Rating: {reviewer.reviewer_rating}
                      </p>
                    </div>
                    <p className={styles.reviewerComment}>{reviewer.comment}</p>
                  </div>
                </div>
              ))
            ) : (
              <p className={styles.noReviews}>No reviews available.</p>
            )}
          </div>

          <div className={styles.actionButtons}>
            <p
              className={clsx(styles.toggleText, styles.readLess)}
              onClick={toggleCard}
            >
              Read less
            </p>

            <div>
              <CustomButton
                onClick={openModal}
                size={ButtonSize.MEDIUM}
                type={ButtonType.ORANGE}
                title="Book trial lesson"
              />
              <CustomModal
                openModal={isModalOpen}
                setOpenModal={setIsModalOpen}
              >
                <TeacherPopUp teacher={teacher} closeModal={closeModal} />
              </CustomModal>
            </div>
          </div>
        </div>
      )}
      {!isExpanded && (
        <p
          className={clsx(styles.toggleText, styles.readMore)}
          onClick={toggleCard}
        >
          Read more
        </p>
      )}
    </div>
  )
}

export default TeacherLevel
