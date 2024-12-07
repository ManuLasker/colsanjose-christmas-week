'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X, Gift } from 'lucide-react'

const images = [
  '/placeholder.svg',
  '/placeholder.svg',
  '/placeholder.svg',
  '/placeholder.svg',
  '/placeholder.svg',
  '/placeholder.svg',
];

export default function Gallery() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null)

  return (
    <section id="gallery" className="mx-auto px-4 py-12 mb-16">
      <motion.h2
        className="text-4xl text-yellow-300 text-center mb-8 flex items-center justify-center"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <Gift className="mr-4" size={36} />
        Festividades y Celebraciones
      </motion.h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {images.map((_, index) => (
          <motion.div
            key={index}
            className="aspect-square rounded-lg overflow-hidden cursor-pointer bg-red-800 hover:bg-red-700 transition-colors"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            onClick={() => setSelectedImage(images[index])}
          >
            <img
              src={images[index]}
              alt={`Holiday moment ${index + 1}`}
              className="w-full h-full object-cover"
            />
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
              className="bg-red-800 rounded-lg overflow-hidden max-w-4xl w-full max-h-[80vh] h-full relative flex items-center justify-center"
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.9 }}
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={selectedImage}
                alt="Selected holiday moment"
                className="max-w-full max-h-full w-auto h-auto object-contain"
              />
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

