import Hero from './Hero'
import Gallery from './Gallery'
import styles from './MainContent.module.css'

export default function MainContent() {
  return (
    <main className={styles.mainContent}>
      <Hero />
      <Gallery />
    </main>
  )
}

