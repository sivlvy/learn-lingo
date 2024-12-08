import React, { useState } from 'react'

import { ButtonSize, ButtonType } from '../../../helpers/types/types.ts'
import { CustomModal } from '../../../UI-components'
import { CustomButton } from '../../../UI-components/CustomButton/CustomButton.tsx'

import styles from './TeachersItem.module.scss'
import TeacherPopUp from '../TeacherPopUp/TeacherPopUp.tsx'

interface Teacher {
  avatar_url: string
  lessons_done: number
  rating: number
  price_per_hour: number
  name: string
  surname: string
  languages: string[]
  lesson_info: string
  conditions: string[]
  experience: string
  reviews?: Array<{
    reviewer_name: string
    reviewer_rating: number
    comment: string
  }>
}

interface TeacherItemProps {
  teacher: Teacher
}

const TeacherItem: React.FC<TeacherItemProps> = ({ teacher }) => {
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
    <li className={styles.teacherContainer}>
      <div className={styles.teacherImageWrapper}>
        <img
          className={styles.teacherImage}
          src={teacher.avatar_url}
          alt={`${teacher.name} avatar`}
          width="120"
          height="120"
        />
      </div>
      <div className={styles.teacherContent}>
        <div className={styles.teacherTopInfo}>
          <p className={styles.teacherLanguages}>Languages</p>
          <p className={styles.teacherDesc}>Lessons online</p>
          <p className={styles.teacherDesc}>
            Lessons done: {teacher.lessons_done}
          </p>
          <p className={styles.teacherDesc}>Rating: {teacher.rating}</p>
          <p className={styles.teacherDesc}>
            Price / 1 hour: {teacher.price_per_hour}
          </p>
        </div>

        <h3 className={styles.teacherName}>
          {teacher.name} {teacher.surname}
        </h3>
        <p className={styles.teacherSpeaks}>
          Speaks:{' '}
          <span className={styles.boldText}>
            {teacher.languages.join(', ')}
          </span>
        </p>
        <p className={styles.teacherLessonInfo}>
          Lesson Info:{' '}
          <span className={styles.boldText}>{teacher.lesson_info}</span>
        </p>
        <p className={styles.teacherConditions}>
          Conditions:{' '}
          <span className={styles.boldText}>
            {teacher.conditions.join(' ')}
          </span>
        </p>

        {!isExpanded && (
          <p className={styles.readMore} onClick={toggleCard}>
            Read more
          </p>
        )}

        {isExpanded && (
          <div className={styles.expandedContent}>
            <p className={styles.teacherExperience}>{teacher.experience}</p>

            <div className={styles.teacherReviews}>
              {teacher.reviews && teacher.reviews.length > 0 ? (
                teacher.reviews.map((reviewer, idx) => (
                  <div key={idx} className={styles.reviewItem}>
                    <p className={styles.reviewerName}>
                      {reviewer.reviewer_name}
                    </p>
                    <p className={styles.reviewerRating}>
                      {reviewer.reviewer_rating}
                    </p>
                    <p className={styles.reviewerComment}>{reviewer.comment}</p>
                  </div>
                ))
              ) : (
                <p className={styles.noReviews}>No reviews available.</p>
              )}
            </div>

            <div className={styles.actionButtons}>
              <p className={styles.readLess} onClick={toggleCard}>
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
      </div>
    </li>
  )
}

export { TeacherItem }
