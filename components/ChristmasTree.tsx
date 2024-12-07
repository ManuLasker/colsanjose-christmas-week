import { motion } from 'framer-motion'

export default function ChristmasTree() {
  return (
    <svg className="w-64 h-96" viewBox="-10 -25 120 175" xmlns="http://www.w3.org/2000/svg">
      <motion.g
        animate={{ rotate: [0, 1, 0, -1, 0] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
      >
        {/* Star */}
        <motion.path
          d="M50 -15 L53.5 -5 L64 -5 L55.5 1.5 L59 12 L50 5 L41 12 L44.5 1.5 L36 -5 L46.5 -5 Z"
          fill="#FFD700"
          animate={{ scale: [1, 1.2, 1], opacity: [0.7, 1, 0.7] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        />

        {/* Tree */}
        <polygon points="50,10 20,70 80,70" fill="#0f8a5f" />
        <polygon points="50,30 25,80 75,80" fill="#0a6e4e" />
        <polygon points="50,50 30,90 70,90" fill="#0a5f40" />
        <rect x="45" y="90" width="10" height="20" fill="#8b4513" />

        {/* Ornaments */}
        <motion.circle cx="50" cy="25" r="3" fill="#ffff00" animate={{ scale: [1, 1.2, 1] }} transition={{ duration: 2, repeat: Infinity }} />
        <motion.circle cx="35" cy="45" r="3" fill="#ff0000" animate={{ scale: [1, 1.2, 1] }} transition={{ duration: 2, repeat: Infinity, delay: 0.5 }} />
        <motion.circle cx="65" cy="55" r="3" fill="#0000ff" animate={{ scale: [1, 1.2, 1] }} transition={{ duration: 2, repeat: Infinity, delay: 1 }} />
        <motion.circle cx="45" cy="65" r="3" fill="#ffff00" animate={{ scale: [1, 1.2, 1] }} transition={{ duration: 2, repeat: Infinity, delay: 1.5 }} />
        <motion.circle cx="55" cy="75" r="3" fill="#ff00ff" animate={{ scale: [1, 1.2, 1] }} transition={{ duration: 2, repeat: Infinity, delay: 2 }} />
      </motion.g>
    </svg>
  )
}

