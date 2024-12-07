import Link from 'next/link'
import Image from 'next/image'
import styles from './Header.module.css'

export default function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.lightsContainer}>
        {[...Array(20)].map((_, index) => (
          <div key={index} className={styles.light} style={{animationDelay: `${index * 0.1}s`}} />
        ))}
      </div>
      <div className={styles.navContent}>
        <Link href="/">
          <Image src="/placeholder.svg?height=100&width=300" alt="School Logo" width={300} height={100} className={styles.logo} />
        </Link>
        <nav className={styles.nav}>
          <Link href="#home" className={styles.navLink}>Home</Link>
          <Link href="#gallery" className={styles.navLink}>Gallery</Link>
          <Link href="#about" className={styles.navLink}>About</Link>
          <Link href="#contact" className={styles.navLink}>Contact</Link>
        </nav>
      </div>
    </header>
  )
}

