import { Link } from 'react-router-dom'

import { ButtonSize, ButtonType } from '../../../helpers/types/types.ts'
import { CustomButton } from '../../../UI-components/CustomButton/CustomButton.tsx'

import styles from './main-started-box.module.scss'

const MainStartedBox = () => {
  return (
    <div className={styles.wrapper}>
      <h2 className={styles.title}>
        Unlock your potential with the best{' '}
        <span className={styles.span}>language</span> tutors
      </h2>
      <p className={styles.description}>
        Embark on an Exciting Language Journey with Expert Language Tutors:
        Elevate your language proficiency to new heights by connecting with
        highly qualified and experienced tutors.
      </p>
      <Link to="/teachers">
        <CustomButton
          size={ButtonSize.MEDIUM}
          type={ButtonType.ORANGE}
          title="Get started"
        />
      </Link>
    </div>
  )
}

export { MainStartedBox }
