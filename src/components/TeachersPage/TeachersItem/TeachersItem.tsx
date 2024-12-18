import React, { useState } from 'react'
import clsx from 'clsx'

import styles from './TeachersItem.module.scss'
import type { Teacher } from '../../../redux/teachers/types.ts'
import { TeacherReviews } from '../TeacherReviews/TeacherReviews.tsx'
import { CustomButton } from '../../../UI-components/CustomButton/CustomButton.tsx'
import { ButtonSize, ButtonType } from '../../../helpers/types/types.ts'
import { CustomModal } from '../../../UI-components'
import { TeacherPopUp } from '../TeacherPopUp/TeacherPopUp.tsx'
import { FavoriteIcon, NonFavoriteIcon } from '../../../assets/icons'
import { selectIsUserLoggedIn } from '../../../redux/auth/auth.slice.ts'
import { useAppSelector } from '../../../helpers/hooks/useAppSelector.ts'
import {
  addToFavorite,
  removeFromFavorite
} from '../../../redux/teachers/teachers.slice.ts'
import { useAppDispatch } from '../../../helpers/hooks/useAppDispatch.ts'

interface TeacherItemProps {
  teacher: Teacher
  selectedLevel?: string
}

const TeacherItem: React.FC<TeacherItemProps> = ({
  teacher,
  selectedLevel
}) => {
  const [isModalOpen, setIsModalOpen] = useState(false)

  const isUserLoggedIn = useAppSelector(selectIsUserLoggedIn)

  const openModal = () => {
    setIsModalOpen(true)
  }

  const closeModal = () => {
    setIsModalOpen(false)
  }

  const dispatch = useAppDispatch()

  const favorites = useAppSelector((state) => state.teachers.favorites)

  const isFavorite = favorites.some(
    (item: Teacher) =>
      item.name === teacher.name && item.surname === teacher.surname
  )

  const handleFavoriteClick = () => {
    if (isFavorite) {
      dispatch(removeFromFavorite(teacher))
    } else {
      dispatch(addToFavorite(teacher))
    }
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
            Price / 1 hour:{' '}
            <span style={{ color: 'green' }}>{teacher.price_per_hour}$</span>
          </p>
          {isUserLoggedIn ? (
            <div style={{ cursor: 'pointer' }}>
              <NonFavoriteIcon onClick={handleFavoriteClick} color="#8a8a89" />
              <FavoriteIcon onClick={handleFavoriteClick} color="red" />
            </div>
          ) : (
            ''
          )}
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
        <div className={styles.levelsContainer}>
          {teacher.levels.map((level, index) => (
            <p
              key={index}
              className={clsx(styles.levelBadge, {
                [styles.activeBadge]: level === selectedLevel
              })}
            >
              #{level}
            </p>
          ))}
        </div>

        <TeacherReviews teacher={teacher} />

        <div>
          <CustomButton
            onClick={openModal}
            size={ButtonSize.MEDIUM}
            type={ButtonType.ORANGE}
            title="Book trial lesson"
          />
          <CustomModal openModal={isModalOpen} setOpenModal={setIsModalOpen}>
            <TeacherPopUp teacher={teacher} closeModal={closeModal} />
          </CustomModal>
        </div>
      </div>
    </li>
  )
}

export { TeacherItem }
