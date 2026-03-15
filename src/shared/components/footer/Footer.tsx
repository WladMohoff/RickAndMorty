import styles from './Footer.module.css';

export function Footer() {
  return (
    <footer>
      <div className={styles.wrapper}>
        <p className={styles.credits}>Сделано с любовью от VladMohoff</p>
      </div>
    </footer>
  )
}