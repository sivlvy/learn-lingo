import { SubmitHandler, useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth'

import { ButtonSize, ButtonType } from '../../helpers/types/types.ts'
import { signInValidationSchema } from '../../helpers/yup/yup.ts'
import { CustomButton } from '../../UI-components/CustomButton/CustomButton.tsx'
import { CustomInput } from '../../UI-components/CustomInput/CustomInput.tsx'

import styles from './sign-in-form.module.scss'

interface FormValues {
  email: string
  password: string
}
const SignInForm = () => {
  const {
    handleSubmit,
    register,
    formState: { errors }
  } = useForm<FormValues>({
    resolver: yupResolver(signInValidationSchema)
  })

  const onSubmit: SubmitHandler<FormValues> = (data) => {
    const auth = getAuth()
    console.log(auth)
    signInWithEmailAndPassword(auth, data.email, data.password)
      .then(console.log)
      .catch(console.log)
    console.log(auth)
  }

  return (
    <div className={styles.wrapper}>
      <h2 className={styles.title}>Log in</h2>
      <p className={styles.description}>
        Welcome back! Please enter your credentials to access your account and
        continue your search for an teacher.
      </p>
      <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
        <div className={styles.inputWrapper}>
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
          title="Log In"
        />
      </form>
    </div>
  )
}

export { SignInForm }