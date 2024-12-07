'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X, Gift } from 'lucide-react'

const images = [
  {
    src: '/placeholder.svg',
    title: 'Celebración Navideña',
    description: 'Momentos especiales de nuestra comunidad celebrando la navidad'
  },
  {
    src: '/placeholder.svg',
    title: 'Luces Festivas',
    description: 'Iluminando nuestras calles con el espíritu navideño'
  },
  {
    src: '/placeholder.svg',
    title: 'Regalos Compartidos',
    description: 'La alegría de dar y recibir en esta temporada especial'
  },
  {
    src: '/placeholder.svg',
    title: 'Cena Familiar',
    description: 'Reuniones llenas de amor y tradiciones navideñas'
  },
  {
    src: '/placeholder.svg',
    title: 'Decoraciones Festivas',
    description: 'Adornando nuestros hogares con el espíritu de la Navidad'
  },
  {
    src: '/placeholder.svg',
    title: 'Villancicos en Comunidad',
    description: 'Compartiendo la música y alegría de la temporada'
  },
];

export default function Gallery() {
  const [selectedImage, setSelectedImage] = useState<typeof images[0] | null>(null)

  return (
    <section id="gallery" className="mx-auto px-4 py-12 mb-16">
      <motion.h2
        className="text-4xl text-yellow-300 text-center mb-8 flex items-center justify-center"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <Gift className="mr-4" size={36} />
        Momentos Navideños
      </motion.h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {images.map((image, index) => (
          <motion.div
            key={index}
            className="bg-red-800 bg-opacity-50 flex flex-col justify-between items-center p-5 rounded-3xl text-white h-full"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
          >
            <div className="mb-4">
              <img
                src={image.src}
                alt={image.title}
                className="w-full h-full object-cover rounded-lg cursor-pointer"
                onClick={() => setSelectedImage(image)}
              />
            </div>
            <div className="text-center">
              <h5 className="text-lg font-semibold mb-2">{image.title}</h5>
              <p className="text-sm">{image.description}</p>
            </div>
          </motion.div>
        ))}
      </div>

      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-md flex items-center justify-center p-4 z-50"
            onClick={() => setSelectedImage(null)}
          >
            <motion.div
              className="bg-red-800 bg-opacity-50 rounded-lg overflow-hidden max-w-4xl w-full max-h-[80vh] h-full relative flex flex-col items-center justify-center"
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.9 }}
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={selectedImage.src}
                alt={selectedImage.title}
                className="max-w-full max-h-[60vh] w-auto h-auto object-contain mb-4"
              />
              <h3 className="text-2xl font-bold text-white mb-2">{selectedImage.title}</h3>
              <p className="text-white text-center px-4">{selectedImage.description}</p>
              <button
                onClick={() => setSelectedImage(null)}
                className="absolute top-4 right-4 bg-red-600 hover:bg-red-700 text-white rounded-full p-2 transition-colors duration-200 ease-in-out"
              >
                <X className="w-6 h-6" />
                <span className="sr-only">Close</span>
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}

