import React, { ReactNode } from 'react'
import clsx from 'clsx'

import { ButtonSize, ButtonType } from '../../helpers/types.ts'

import styles from './button.module.scss'

interface Props {
  children?: ReactNode
  title: string
  onClick: () => void
  size?: ButtonSize
  type?: ButtonType
}

const Button: React.FC<Props> = ({
  children,
  title,
  size = ButtonSize.MEDIUM,
  type = ButtonType.ORANGE,
  onClick
}) => {
  const buttonStyles = clsx(
    styles.btn,
    styles[`btn-${size}`],
    styles[`btn-${type}`]
  )

  return (
    <button className={buttonStyles} onClick={onClick}>
      <span className={styles.span}>
        {title}
        {children}
      </span>
    </button>
  )
}

export default Button
