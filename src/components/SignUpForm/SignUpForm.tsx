import { SubmitHandler, useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'

import { useAppDispatch } from '../../helpers/hooks/useAppDispatch.ts'
import { ButtonSize, ButtonType } from '../../helpers/types/types.ts'
import { signUpValidationSchema } from '../../helpers/yup/yup.ts'
import { signUpUser } from '../../redux/auth/auth.operations.ts'
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
  } = useForm<FormValues>({
    resolver: yupResolver(signUpValidationSchema)
  })

  const onSubmit: SubmitHandler<FormValues> = (data) => {
    const { email, password } = data

    dispatch(signUpUser({ email, password }))
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
