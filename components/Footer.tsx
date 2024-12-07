import Link from 'next/link'
import styles from './Footer.module.css'

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.lightsContainer}>
        {[...Array(20)].map((_, index) => (
          <div key={index} className={styles.light} style={{animationDelay: `${index * 0.1}s`}} />
        ))}
      </div>
      <div className={styles.content}>
        <div className={`${styles.section} mr-8`}>
          <h4 className={styles.sectionTitle}>About Us</h4>
          <p>Celebrating the joy of learning and the spirit of the holidays.</p>
        </div>
        <div className={styles.section}>
          <h4 className={styles.sectionTitle}>Quick Links</h4>
          <nav>
            <Link href="#home" className={styles.link}>Home</Link>
            <Link href="#gallery" className={styles.link}>Gallery</Link>
            <Link href="#about" className={styles.link}>About</Link>
            <Link href="#contact" className={styles.link}>Contact</Link>
          </nav>
        </div>
        <div className={styles.section}>
          <h4 className={styles.sectionTitle}>Contact</h4>
          <p>123 School Street, City, State 12345</p>
          <p>Phone: (123) 456-7890</p>
          <p>Email: info@school.edu</p>
        </div>
      </div>
    </footer>
  )
}

