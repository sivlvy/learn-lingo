import { FieldErrors, Path, UseFormRegister } from 'react-hook-form'

import { PatterProps } from '../../helpers/types.ts'

import styles from './custom-input.module.scss'

type CustomInputProps<T extends Record<string, string>> = {
  id: Path<T>
  placeholder: string
  register: UseFormRegister<T>
  errors: FieldErrors<T>
  type?: string
  pattern?: PatterProps
}

const CustomInput = <T extends Record<string, string>>({
  id,
  register,
  errors,
  placeholder,
  pattern,
  type
}: CustomInputProps<T>) => {
  const errorMessage = errors[id]?.message as string

  return (
    <div className={styles.fieldWrapper}>
      <input
        type={type}
        placeholder={placeholder}
        aria-invalid={errors[id] ? 'true' : 'false'}
        className={styles.input}
        id={String(id)}
        {...register(id, {
          required: `${String(placeholder)} is required`,
          pattern: pattern
        })}
      />
      {errors[id] && <span className={styles.spanError}>{errorMessage}</span>}
    </div>
  )
}

export { CustomInput }
