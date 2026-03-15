import styles from './Footer.module.css';

export function Footer() {
  return (
    <footer>
      <div className={styles.wrapper}>
        <p className={styles.credits}>Made with love by frontovichok_username</p>
      </div>
    </footer>
  )
}