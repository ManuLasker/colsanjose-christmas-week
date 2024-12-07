'use client'
import { motion } from 'framer-motion'
import ChristmasTree from './ChristmasTree'
import ChristmasGifts from './ChristmasGifts'
import Snowman from './Snowman'
import { Gift } from 'lucide-react'

export default function Hero() {
  return (
    <section className="bg-green-900 text-white py-12 overflow-hidden">
      <motion.h1 
        className="text-6xl font-bold text-yellow-300 text-center mb-8 flex items-center justify-center"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <Gift className="mr-4" size={48} />
        Merry Christmas!
      </motion.h1>
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-center">
        <div className="w-full md:w-1/2 flex justify-center items-end relative">
          <div className="absolute bottom-0 left-0 right-0 h-40 bg-blue-100 rounded-full transform scale-x-105" />
          <motion.div 
            className="absolute bottom-0 left-0 right-0 h-40 bg-blue-200 rounded-full transform scale-x-105"
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.5 }}
            transition={{ duration: 1 }}
          />
          <div className="relative z-10 flex items-end justify-center w-full">
            <div className="mb-8">
              <Snowman />
            </div>
            <div className="relative mx-4">
              <ChristmasTree />
              <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-full">
                <ChristmasGifts />
              </div>
            </div>
          </div>
        </div>
        <motion.p 
          className="text-2xl text-center md:text-left mt-8 md:mt-0 md:ml-8 md:w-1/3"
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          Celebrate the joy of the season with us! Gather 'round our festive tree, surrounded by a bounty of colorful gifts, each holding the promise of holiday cheer and warm memories.
        </motion.p>
      </div>
    </section>
  )
}

