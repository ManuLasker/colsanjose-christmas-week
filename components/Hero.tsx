import Image from 'next/image'
import styles from './Hero.module.css'

export default function Hero() {
  return (
    <section className={styles.hero}>
      <h1 className={styles.greeting}>Merry Christmas!</h1>
      <div className={styles.content}>
        <div className={styles.illustration}>
          <ChristmasTree />
        </div>
        <p className={styles.message}>Celebrate the joy of the season with us!</p>
      </div>
    </section>
  )
}

function ChristmasTree() {
  return (
    <svg className={styles.tree} viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
      <polygon points="50,0 20,60 80,60" fill="#0f8a5f" />
      <polygon points="50,20 25,70 75,70" fill="#0a6e4e" />
      <polygon points="50,40 30,80 70,80" fill="#0a5f40" />
      <rect x="45" y="80" width="10" height="20" fill="#8b4513" />
      <circle cx="50" cy="15" r="3" fill="#ffff00" className={styles.ornament} />
      <circle cx="35" cy="35" r="3" fill="#ff0000" className={styles.ornament} />
      <circle cx="65" cy="45" r="3" fill="#0000ff" className={styles.ornament} />
      <circle cx="45" cy="55" r="3" fill="#ffff00" className={styles.ornament} />
      <circle cx="55" cy="65" r="3" fill="#ff00ff" className={styles.ornament} />
    </svg>
  )
}

