import { SubmitHandler, useForm } from 'react-hook-form'
import { createUserWithEmailAndPassword, getAuth } from 'firebase/auth'

import { useAppDispatch } from '../../helpers/hooks/useAppDispatch.ts'
import { ButtonSize, ButtonType } from '../../helpers/types.ts'
import { setUser } from '../../redux/auth/auth.slice.ts'
import { CustomButton } from '../../UI-components/CustomButton/CustomButton.tsx'
import { CustomInput } from '../../UI-components/CustomInput/CustomInput.tsx'

import styles from '../SignInForm/sign-in-form.module.scss'

interface FormValues {
  email: string
  password: string
  name: string
}

const SignUpForm = () => {
  const dispatch = useAppDispatch()

  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<FormValues>()

  const onSubmit: SubmitHandler<FormValues> = (data) => {
    const { email, password, name } = data

    const auth = getAuth()

    createUserWithEmailAndPassword(auth, email, password)
      .then(async ({ user }) => {
        const token = await user.getIdToken()
        console.log(user)
        dispatch(
          setUser({
            email: user.email,
            id: user.uid,
            token,
            name
          })
        )
      })
      .catch(console.error)
  }

  return (
    <div className={styles.wrapper}>
      <h2 className={styles.title}>Registration</h2>
      <p className={styles.description}>
        Thank you for your interest in our platform! In order to register, we
        need some information. Please provide us with the following information
      </p>
      <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
        <div className={styles.inputWrapper}>
          <CustomInput
            id="name"
            placeholder="Name"
            register={register}
            errors={errors}
          />
          <CustomInput
            id="email"
            placeholder="Email"
            register={register}
            errors={errors}
          />
          <CustomInput
            type="password"
            id="password"
            placeholder="Password"
            register={register}
            errors={errors}
          />
        </div>
        <CustomButton
          type={ButtonType.ORANGE}
          size={ButtonSize.FULLWIDTH}
          title="Sign Up"
        />
      </form>
    </div>
  )
}

export { SignUpForm }
