import React from 'react'
import styles from './TeacherPopUp.module.scss'
import { LessonForm } from '../LessonForm/LessonForm.tsx'
import { useAppDispatch } from '../../../helpers/hooks/useAppDispatch.ts'
import toast from 'react-hot-toast'
import { bookLesson } from '../../../redux/teachers/teachers.slice.ts'

import { Teacher } from '../../../redux/teachers/types.ts'

interface TeacherPopUpProps {
  teacher: Teacher
  closeModal: () => void
}

const TeacherPopUp: React.FC<TeacherPopUpProps> = ({ teacher, closeModal }) => {
  const dispatch = useAppDispatch()

  const handleBookLesson = (lessonData: object) => {
    dispatch(bookLesson({ teacherId: teacher.id, lessonData }))
    toast.success('Lesson booked successfully!')
    closeModal()
  }

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Book trial lesson</h1>
      <p className={styles.text}>
        Our experienced tutor will assess your current language level, discuss
        your learning goals, and tailor the lesson to your specific needs.
      </p>
      <div className={styles.teacherContainer}>
        <img
          className={styles.teacherImage}
          src={teacher.avatar_url}
          alt={`${teacher.name} avatar`}
          width="44"
          height="44"
        />
        <div>
          <p className={styles.desc}>Your teacher</p>
          <p className={styles.teacherName}>
            {teacher.name} {teacher.surname}
          </p>
        </div>
      </div>
      <h2 className={styles.question}>
        What is your main reason for learning English?
      </h2>

      <LessonForm onSubmit={handleBookLesson} />
    </div>
  )
}

export { TeacherPopUp }
