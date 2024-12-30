import React from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'
import { CustomInput } from '../../../UI-components/CustomInput/CustomInput.tsx'
import styles from './LessonForm.module.scss'
import { yupResolver } from '@hookform/resolvers/yup'
import { lessonFormValidationSchema } from '../../../helpers/yup/yup.ts'
import { CustomButton } from '../../../UI-components/CustomButton/CustomButton.tsx'
import { ButtonSize, ButtonType } from '../../../helpers/types/types.ts'

interface LessonFormInputs {
  fullName: string
  email: string
  phone: string
  preference: string
}

const preferenceOptions = [
  { label: 'Career and Business', value: 'careerAndBusiness' },
  { label: 'Lesson for Kids', value: 'lessonForKids' },
  { label: 'Living Abroad', value: 'livingAbroad' },
  { label: 'Exams and Coursework', value: 'examsAndCoursework' },
  { label: 'Culture, Travel or Hobby', value: 'cultureTravelHobby' }
]

interface LessonFormProps {
  onSubmit: (lessonData: LessonFormInputs) => void
}

const LessonForm: React.FC<LessonFormProps> = ({ onSubmit }) => {
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<LessonFormInputs>({
    resolver: yupResolver(lessonFormValidationSchema)
  })

  const onSubmitHandler: SubmitHandler<LessonFormInputs> = (data) => {
    onSubmit(data)
  }

  return (
    <form
      className={styles.lessonForm}
      onSubmit={handleSubmit(onSubmitHandler)}
    >
      <div className={styles.radioGroup}>
        {preferenceOptions.map((option) => (
          <label key={option.value} className={styles.radioLabel}>
            <input
              type="radio"
              value={option.value}
              {...register('preference', {
                required: 'Please select a preference'
              })}
            />
            {option.label}
          </label>
        ))}
        {errors.preference && (
          <span className={styles.errorMessage}>
            {errors.preference.message}
          </span>
        )}
      </div>

      <div className={styles.inputGroup}>
        <CustomInput
          id="fullName"
          placeholder="Full Name"
          type="text"
          register={register}
          errors={errors}
          required="Full Name is required"
        />
        <CustomInput
          id="email"
          placeholder="Email"
          type="email"
          register={register}
          errors={errors}
          required="Email is required"
        />
        <CustomInput
          id="phone"
          placeholder="Phone Number"
          type="tel"
          register={register}
          errors={errors}
          required="Phone number is required"
        />
      </div>

      <CustomButton
        type={ButtonType.ORANGE}
        title="Book Lesson"
        size={ButtonSize.FULLWIDTH}
      />
    </form>
  )
}

export { LessonForm }
