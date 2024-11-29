import React, { ReactNode } from 'react'
import clsx from 'clsx'

import { ButtonSize, ButtonType } from '../../helpers/types.ts'

import styles from './custom-button.module.scss'

interface Props {
  children?: ReactNode
  title: string
  size: ButtonSize
  type: ButtonType
}

const CustomButton: React.FC<Props> = ({
  children,
  title,
  size = ButtonSize.MEDIUM,
  type = ButtonType.ORANGE
}) => {
  const buttonStyles = clsx(
    styles.btn,
    styles[`btn-${size}`],
    styles[`btn-${type}`]
  )

  return (
    <button className={buttonStyles}>
      <span className={styles.span}>
        {title}
        {children}
      </span>
    </button>
  )
}

export default CustomButton
