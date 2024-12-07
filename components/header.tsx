'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import Image from 'next/image'

export default function Header() {
  return (
    <header className="bg-red-900 relative">
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
      <nav className="container mx-auto px-4 py-6 flex justify-between items-center">
        <Link href="/" className="text-white text-2xl">
          <Image src="/escudo_colegio.png" width={100} height={100} alt='Escudo'></Image>
        </Link>
        <div className="space-x-8 text-white text-xl">
          <Link href="/" className="hover:text-yellow-300 transition-colors">
            Inicio
          </Link>
          <Link href="#gallery" className="hover:text-yellow-300 transition-colors">
            Galería
          </Link>
          <Link href="#contact" className="hover:text-yellow-300 transition-colors">
            Contacto
          </Link>
          <Link href="#owner" className="hover:text-yellow-300 transition-colors">
            Creador
          </Link>
        </div>
      </nav>
    </header>
  )
}

