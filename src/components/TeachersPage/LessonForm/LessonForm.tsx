import React from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'
import { CustomInput } from '../../../UI-components/CustomInput/CustomInput.tsx'
import styles from './LessonForm.module.scss'
import toast from 'react-hot-toast'

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

const LessonForm: React.FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<LessonFormInputs>()

  const onSubmit: SubmitHandler<LessonFormInputs> = (data) => {
    toast.success('Lesson booked successfully!')
    console.log('Form Data:', data)
  }

  return (
    <form className={styles.lessonForm} onSubmit={handleSubmit(onSubmit)}>
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
          pattern={{
            value: /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
            message: 'Invalid email address'
          }}
        />
        <CustomInput
          id="phone"
          placeholder="Phone Number"
          type="tel"
          register={register}
          errors={errors}
          required="Phone number is required"
          pattern={{
            value: /^[0-9]{10}$/,
            message: 'Invalid phone number'
          }}
        />
      </div>
    </form>
  )
}

export default LessonForm
