import MainBg from '../../assets/main-bg.jpg'
import Container from '../../components/Container/Container.tsx'
import { MainInfoBox } from '../../components/HomePage/MainInfoBox/MainInfoBox.tsx'
import { MainStartedBox } from '../../components/HomePage/MainStartedBox/MainStartedBox.tsx'

import styles from './home-page.module.scss'

const HomePage = () => {
  return (
    <Container>
      <div className={styles.wrapper}>
        <MainStartedBox />
        <img src={MainBg} alt="main bg" style={{ borderRadius: '30px' }} />
      </div>
      <MainInfoBox />
    </Container>
  )
}

export default HomePage
