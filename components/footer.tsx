'use client'
import { motion } from 'framer-motion'

export default function Footer() {
  return (
    <footer id="contact" className="bg-red-900 text-white relative pt-10">
      <div className="absolute top-0 left-0 right-0 flex justify-between px-4">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="w-4 h-4 bg-yellow-300 rounded-full"
            animate={{
              opacity: [0.4, 1, 0.4],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              delay: i * 0.1,
            }}
          />
        ))}
      </div>
      <div className="container mx-auto px-4 pt-12 pb-8 grid grid-cols-1 md:grid-cols-3 gap-8">
        <div>
          <h3 className="text-2xl font-display text-yellow-300 mb-4">About Us</h3>
          <p>Celebrating the joy of learning and the spirit of the holidays.</p>
        </div>
        <div>
          <h3 className="text-2xl font-display text-yellow-300 mb-4">Quick Links</h3>
          <ul className="space-y-2">
            <li><a href="/" className="hover:text-yellow-300 transition-colors">Inicio</a></li>
            <li><a href="#gallery" className="hover:text-yellow-300 transition-colors">Galeria</a></li>
            <li><a href="#contact" className="hover:text-yellow-300 transition-colors">Contacto</a></li>
            <li><a href="#owner" className="hover:text-yellow-300 transition-colors">Creador</a></li>
          </ul>
        </div>
        <div>
          <h3 className="text-2xl font-display text-yellow-300 mb-4">Contact</h3>
          <address className="not-italic">
            <p>123 School Street, City, State 12345</p>
            <p>Phone: (123) 456-7890</p>
            <p>Email: info@school.edu</p>
          </address>
        </div>
      </div>
    </footer>
  )
}

