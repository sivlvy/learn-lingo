import React, { useState } from 'react'
import clsx from 'clsx'

import styles from './TeachersItem.module.scss'
import type { Teacher } from '../../../redux/teachers/types.ts'
import { TeacherReviews } from '../TeacherReviews/TeacherReviews.tsx'
import { CustomButton } from '../../../UI-components/CustomButton/CustomButton.tsx'
import { ButtonSize, ButtonType } from '../../../helpers/types/types.ts'
import { CustomModal } from '../../../UI-components'
import { TeacherPopUp } from '../TeacherPopUp/TeacherPopUp.tsx'
import { useAuth } from '../../../helpers/hooks/useAuth.ts'
import { useAppSelector } from '../../../helpers/hooks/useAppSelector.ts'
import { useAppDispatch } from '../../../helpers/hooks/useAppDispatch.ts'
import {
  addToFavorite,
  removeFromFavorite
} from '../../../redux/teachers/teachers.slice.ts'
import { FavoriteIcon, NonFavoriteIcon } from '../../../assets/icons'
import { ModalNotAuth } from '../ModalNotAuth/ModalNotAuth.tsx'
import { SignUpForm } from '../../SignUpForm/SignUpForm.tsx'
import { SignInForm } from '../../SignInForm/SignInForm.tsx'

interface Props {
  teacher: Teacher
  selectedLevel?: string
}

const TeacherItem: React.FC<Props> = ({ teacher, selectedLevel }) => {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [modalType, setModalType] = useState<
    'notAuth' | 'login' | 'signup' | null
  >(null)

  const { isAuth } = useAuth()
  const dispatch = useAppDispatch()
  const favorites = useAppSelector((state) => state.teachers.favorites)

  const handleFavoriteClick = () => {
    if (isAuth) {
      if (favorites.includes(teacher)) {
        dispatch(removeFromFavorite(teacher))
      } else {
        dispatch(addToFavorite(teacher))
      }
    } else {
      setModalType('notAuth')
    }
  }

  return (
    <div className={styles.teacherContainer}>
      <div className={styles.teacherImageWrapper}>
        <img
          className={styles.teacherImage}
          src={teacher.avatar_url}
          alt={teacher.name}
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
          <div style={{ cursor: 'pointer' }}>
            <button onClick={handleFavoriteClick} className={styles.btnAdd}>
              {favorites.includes(teacher) ? (
                <FavoriteIcon />
              ) : (
                <NonFavoriteIcon color="#8a8a89" className={styles.favIcon} />
              )}
            </button>
          </div>
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
            onClick={() => setIsModalOpen(true)}
            size={ButtonSize.MEDIUM}
            type={ButtonType.ORANGE}
            title="Book trial lesson"
          />
          <CustomModal openModal={isModalOpen} setOpenModal={setIsModalOpen}>
            <TeacherPopUp
              teacher={teacher}
              closeModal={() => setIsModalOpen(false)}
            />
          </CustomModal>

          <CustomModal
            openModal={!!modalType}
            setOpenModal={() => setModalType(null)}
          >
            {modalType === 'notAuth' && (
              <ModalNotAuth
                favoriteModal={() => setModalType(null)}
                onSelect={(type) => setModalType(type)}
              />
            )}
            {modalType === 'login' && <SignInForm />}
            {modalType === 'signup' && <SignUpForm />}
          </CustomModal>
        </div>
      </div>
    </div>
  )
}

export { TeacherItem }
