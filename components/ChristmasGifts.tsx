import { motion } from 'framer-motion'

export default function ChristmasGifts() {
  return (
    <svg className="w-full h-40" viewBox="0 0 200 80" xmlns="http://www.w3.org/2000/svg">
      <motion.g
        animate={{ y: [0, -2, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
      >
        {/* Large red gift */}
        <rect x="10" y="40" width="30" height="30" fill="#cc0000" />
        <rect x="10" y="40" width="30" height="7" fill="#ff0000" />
        <rect x="21" y="40" width="8" height="30" fill="#ff0000" />
      </motion.g>

      <motion.g
        animate={{ y: [0, -2, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
      >
        {/* Medium green gift */}
        <rect x="45" y="50" width="25" height="25" fill="#006400" />
        <rect x="45" y="50" width="25" height="6" fill="#008000" />
        <rect x="54" y="50" width="7" height="25" fill="#008000" />
      </motion.g>

      <motion.g
        animate={{ y: [0, -2, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut", delay: 1 }}
      >
        {/* Small gold gift */}
        <rect x="75" y="60" width="20" height="20" fill="#b8860b" />
        <rect x="75" y="60" width="20" height="5" fill="#daa520" />
        <rect x="82" y="60" width="6" height="20" fill="#daa520" />
      </motion.g>

      <motion.g
        animate={{ y: [0, -2, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut", delay: 0.7 }}
      >
        {/* Medium blue gift */}
        <rect x="100" y="45" width="28" height="28" fill="#000080" />
        <rect x="100" y="45" width="28" height="7" fill="#0000ff" />
        <rect x="111" y="45" width="7" height="28" fill="#0000ff" />
      </motion.g>

      <motion.g
        animate={{ y: [0, -2, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut", delay: 1.2 }}
      >
        {/* Small purple gift */}
        <rect x="135" y="65" width="18" height="18" fill="#4b0082" />
        <rect x="135" y="65" width="18" height="4" fill="#8a2be2" />
        <rect x="141" y="65" width="5" height="18" fill="#8a2be2" />
      </motion.g>

      <motion.g
        animate={{ y: [0, -2, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut", delay: 0.3 }}
      >
        {/* Large silver gift */}
        <rect x="160" y="35" width="35" height="35" fill="#c0c0c0" />
        <rect x="160" y="35" width="35" height="8" fill="#d3d3d3" />
        <rect x="173" y="35" width="9" height="35" fill="#d3d3d3" />
      </motion.g>
    </svg>
  )
}

