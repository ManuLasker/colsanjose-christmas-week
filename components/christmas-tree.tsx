'use client'

import { motion } from 'framer-motion'

export default function ChristmasTree() {
  return (
    <div className="relative w-64 h-96 mx-auto">
      <motion.svg
        className="w-full h-full"
        viewBox="0 0 100 100"
        xmlns="http://www.w3.org/2000/svg"
        animate={{ rotate: [0, 1, 0, -1, 0] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
      >
        <polygon points="50,0 20,60 80,60" fill="#0f8a5f" />
        <polygon points="50,20 25,70 75,70" fill="#0a6e4e" />
        <polygon points="50,40 30,80 70,80" fill="#0a5f40" />
        <rect x="45" y="80" width="10" height="20" fill="#8b4513" />
        <motion.circle
          cx="50" cy="15" r="3" fill="#ffff00"
          animate={{ scale: [1, 1.2, 1] }}
          transition={{ duration: 2, repeat: Infinity, delay: 0 }}
        />
        <motion.circle
          cx="35" cy="35" r="3" fill="#ff0000"
          animate={{ scale: [1, 1.2, 1] }}
          transition={{ duration: 2, repeat: Infinity, delay: 0.4 }}
        />
        <motion.circle
          cx="65" cy="45" r="3" fill="#0000ff"
          animate={{ scale: [1, 1.2, 1] }}
          transition={{ duration: 2, repeat: Infinity, delay: 0.8 }}
        />
        <motion.circle
          cx="45" cy="55" r="3" fill="#ffff00"
          animate={{ scale: [1, 1.2, 1] }}
          transition={{ duration: 2, repeat: Infinity, delay: 1.2 }}
        />
        <motion.circle
          cx="55" cy="65" r="3" fill="#ff00ff"
          animate={{ scale: [1, 1.2, 1] }}
          transition={{ duration: 2, repeat: Infinity, delay: 1.6 }}
        />
      </motion.svg>
    </div>
  )
}

