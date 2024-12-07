'use client'

import { useState, useEffect } from 'react'
import Header from '@/components/Header'
import MainContent from '@/components/MainContent'
import Footer from '@/components/Footer'
import SnowAnimation from '@/components/SnowAnimation'
import styles from './page.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <SnowAnimation />
      <Header />
      <MainContent />
      <Footer />
    </div>
  )
}

