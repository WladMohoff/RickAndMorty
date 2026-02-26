import styles from './Header.module.css'
import logo from '../../media/logo.png'

export function Header() {
  return (
    <header>
      <div className={styles.wrapper}>
        <div className={styles.logo}><img src={logo} alt="logo" /></div>
        <div className={styles.icons}>
          <div className={styles.theme}></div>
          <div className={styles.language}></div>
        </div>
      </div>
    </header>
  )
}