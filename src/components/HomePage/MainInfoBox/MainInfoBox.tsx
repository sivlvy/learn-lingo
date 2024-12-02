import styles from './main-info-box.module.scss'

const MainInfoBox = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.itemWrapper}>
        <p className={styles.summary}>32,000 +</p>
        <p className={styles.subtitle}>Experienced tutors</p>
      </div>
      <div className={styles.itemWrapper}>
        <p className={styles.summary}>300,000 +</p>
        <p className={styles.subtitle}>5-star tutor reviews</p>
      </div>
      <div className={styles.itemWrapper}>
        <p className={styles.summary}>120 +</p>
        <p className={styles.subtitle}>Subjects taught</p>
      </div>
      <div className={styles.itemWrapper}>
        <p className={styles.summary}>200 +</p>
        <p className={styles.subtitle}>Tutor nationalities</p>
      </div>
    </div>
  )
}

export { MainInfoBox }
