import { motion } from 'framer-motion'

export default function Snowman() {
  return (
    <svg className="w-32 h-48" viewBox="0 0 100 150" xmlns="http://www.w3.org/2000/svg">
      {/* Body */}
      <circle cx="50" cy="120" r="30" fill="white" />
      <circle cx="50" cy="70" r="25" fill="white" />
      <circle cx="50" cy="30" r="20" fill="white" />

      {/* Eyes */}
      <circle cx="45" cy="25" r="3" fill="black" />
      <circle cx="55" cy="25" r="3" fill="black" />

      {/* Carrot Nose */}
      <polygon points="50,30 50,35 60,32.5" fill="orange" />

      {/* Mouth */}
      <path d="M40 40 Q50 50 60 40" fill="none" stroke="black" strokeWidth="2" />

      {/* Hat */}
      <rect x="35" y="5" width="30" height="10" fill="black" />
      <rect x="40" y="0" width="20" height="15" fill="black" />

      {/* Scarf */}
      <circle cx="50" cy="58" r="8" fill="red" />
      <rect x="45" y="60" width="10" height="20" fill="red" />

      {/* Arms */}
      <motion.line
        x1="0" y1="70" x2="25" y2="75"
        stroke="brown"
        strokeWidth="3"
        animate={{ rotate: [0, 25, 0] }}
        transition={{ duration: 2, repeat: Infinity, repeatType: "reverse" }}
      />
      <line x1="75" y1="75" x2="100" y2="70" stroke="brown" strokeWidth="3" />

      {/* Buttons */}
      <circle cx="50" cy="70" r="3" fill="black" />
      <circle cx="50" cy="85" r="3" fill="black" />
      <circle cx="50" cy="100" r="3" fill="black" />
    </svg>
  )
}

