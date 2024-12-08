'use client'
import { motion } from 'framer-motion'
import { Phone, Mail, MapPin } from 'lucide-react'

export default function Footer() {
  return (
    <footer id="contact" className="bg-red-900 text-white">
      <div className="relative top-0 left-0 right-0 flex justify-between px-4 pb-2">
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
          <h3 className="text-2xl font-display text-yellow-300 mb-4">Colegio San José</h3>
          <p>Educando para la paz y un futuro brillante en el corazón de Barranquilla.</p>
          <div className="flex items-center space-x-4">
            <a href="tel:6053670600" className="flex items-center text-sm">
              <Phone className="w-4 h-4 mr-1" /> 6053670600
            </a>
            <a href="mailto:pastoral@colsanjose.edu.co" className="flex items-center text-sm">
              <Mail className="w-4 h-4 mr-1" /> pastoral@colsanjose.edu.co
            </a>
          </div>
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
          <h3 className="text-2xl font-display text-yellow-300 mb-4">Contacto</h3>
          <address className="not-italic">
            <li className="flex items-center"><Phone className="mr-2 h-5 w-5" /> 6053670600</li>
            <li className="flex items-center"><a href='mailto:pastoral@colsanjose.edu.co' className='flex items-center text-sm'><Mail className="mr-2 h-5 w-5" /> pastoral@colsanjose.edu.co</a></li>
            <li className="flex items-center"><MapPin className="mr-2 h-5 w-5" /> Calle 66 No. 42 - 45, Barranquilla, Colombia</li>
          </address>
        </div>
      </div>
    </footer>
  )
}

