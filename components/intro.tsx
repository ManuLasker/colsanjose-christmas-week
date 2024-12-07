'use client'

import { motion } from 'framer-motion'
import ChristmasTree from './christmas-tree'

export default function Intro() {
  return (
    <section className="container mx-auto px-4 py-12 text-center">
      <motion.h1
        className="text-6xl text-yellow-300 mb-8"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        Merry Christmas!!
      </motion.h1>
      <div className="flex flex-col md:flex-row items-center justify-center">
        <div className="md:w-1/2">
          <ChristmasTree />
        </div>
        <motion.p
          className="text-white text-2xl mt-8 md:mt-0 md:w-1/2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          Celebrate the joy of the season with us!
        </motion.p>
      </div>
    </section>
  )
}

