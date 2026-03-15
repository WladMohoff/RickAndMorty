import styles from './Loader.module.css';
import {LoadingComponent} from '@/shared';

export function Loader() {
  return (
    <>
      <div className={styles.loader}><LoadingComponent/></div>
    </>
  )
}