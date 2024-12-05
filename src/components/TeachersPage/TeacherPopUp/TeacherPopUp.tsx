import React from 'react'
import styles from '../TeachersItem/TeachersItem.module.scss'
import LessonForm from '../LessonForm/LessonForm.tsx'
import { ButtonSize, ButtonType } from '../../../helpers/types/types.ts'
import { CustomButton } from '../../../UI-components/CustomButton/CustomButton.tsx'
import toast, { Toaster } from 'react-hot-toast'

interface Teacher {
  name: string
  surname: string
  avatar_url: string
}

interface TeacherPopUpProps {
  teacher: Teacher
}

const TeacherPopUp: React.FC<TeacherPopUpProps> = ({ teacher }) => {
  const notify = () => toast.success('Lesson booked!')
  return (
    <div>
      <h1>Book trial lesson</h1>
      <p>
        Our experienced tutor will assess your current language level, discuss
        your learning goals, and tailor the lesson to your specific needs.
      </p>
      <div>
        <img
          className={styles.teacherImage}
          src={teacher.avatar_url}
          alt={`${teacher.name} avatar`}
          width="44"
          height="44"
        />
        <div>
          <p>Your teacher</p>
          <p>
            {teacher.name} {teacher.surname}
          </p>
        </div>
      </div>
      <h2>What is your main reason for learning English?</h2>
      <LessonForm />
      <CustomButton
        onClick={notify}
        size={ButtonSize.FULLWIDTH}
        type={ButtonType.ORANGE}
        title="Book"
      />
      <Toaster position="top-center" reverseOrder={false} />
    </div>
  )
}

export default TeacherPopUp
