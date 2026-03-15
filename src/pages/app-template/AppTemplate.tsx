import { Footer } from "@/shared/components/footer/Footer";
import { Header } from "@/shared/components/header/Header";
import { Outlet } from "react-router-dom";
import styles from './AppTemplate.module.css';

export function AppTemplate() {
  return (
    <div className={styles.app}>
      <Header />
      <main className={styles.content}>
        <Outlet/>
      </main>
      <Footer/>
    </div>
  )
}