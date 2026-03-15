import styles from './Header.module.css'
import { LogoIcon } from '@/shared';

export function Header() {
  return (
    <header>
      <div className={styles.wrapper}>
        <div className={styles.logo}>
          <LogoIcon />
        </div>
        <div className={styles.icons}>
          <div className={styles.theme}></div>
          <div className={styles.language}></div>
        </div>
      </div>
    </header>
  )
}