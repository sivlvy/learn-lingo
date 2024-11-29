import { SubmitHandler, useForm } from 'react-hook-form'

import { ButtonSize, ButtonType } from '../../helpers/types.ts'
import CustomButton from '../../UI-components/CustomButton/CustomButton.tsx'
import { CustomInput } from '../../UI-components/CustomInput/CustomInput.tsx'

import styles from './sign-up-form.module.scss'

interface FormValues {
  email: string
  password: string
}
const SignUpForm = () => {
  const {
    handleSubmit,
    register,
    formState: { errors }
  } = useForm<FormValues>()

  const onSubmit: SubmitHandler<FormValues> = (data) => {
    console.log(data)
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

export { SignUpForm }
