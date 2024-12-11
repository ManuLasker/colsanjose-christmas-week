'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X, Gift } from 'lucide-react'

const media = [
  {
    type: 'image',
    src: '/media/media_1.jpg',
    title: 'Capitanes Navideños',
    description: 'Líderes juveniles y niños celebrando juntos la magia de la Navidad con entusiasmo y unidad.'
  },
  {
    type: 'image',
    src: '/media/media_2.jpg',
    title: 'Alegría Navideña Escolar',
    description: 'Estudiantes reunidos junto al árbol navideño, simbolizando el espíritu de comunidad y festividad en la escuela.'
  },
  {
    type: 'video',
    src: '/media/video_1.mp4',
    title: 'Cantando la Novena',
    description: '"Un momento especial de devoción y tradición, donde los estudiantes entonan canciones de la novena navideña.'
  },
  {
    type: 'image',
    src: '/media/media_4.jpg',
    title: 'Preparativos Navideños en el Aula',
    description: 'Estudiantes organizando una celebración navideña en el aula, compartiendo risas y momentos especiales.'
  },
  {
    type: 'video',
    src: '/media/video_2.mp4',
    title: 'Lectura de la Novena',
    description: 'Un momento especial donde los estudiantes leen y reflexionan juntos durante la Novena de Navidad.'
  },
  {
    type: 'image',
    src: '/media/media_3.jpg',
    title: 'Encuentro Navideño Escolar',
    description: 'Niños y niñas celebrando juntos el espíritu navideño con entusiasmo y alegría comunitaria.'
  },
];

export default function Gallery() {
  const [selectedMedia, setSelectedMedia] = useState<typeof media[0] | null>(null)

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
        {media.map((item, index) => (
          <motion.div
            key={index}
            className="bg-red-800 bg-opacity-50 flex flex-col justify-between items-center p-5 rounded-3xl text-white h-full"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
          >
            <div className="mb-4">
              {item.type === 'image' ? (
                <img
                  src={item.src}
                  alt={item.title}
                  className="w-full h-full object-cover rounded-lg cursor-pointer"
                  onClick={() => setSelectedMedia(item)}
                />
              ) : (
                <video
                  src={item.src}
                  className="w-full h-full object-cover rounded-lg cursor-pointer"
                  onClick={() => setSelectedMedia(item)}
                  controls
                />
              )}
            </div>
            <div className="text-center">
              <h5 className="text-lg font-semibold mb-2">{item.title}</h5>
              <p className="text-sm">{item.description}</p>
            </div>
          </motion.div>
        ))}
      </div>

      <AnimatePresence>
        {selectedMedia && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-md flex items-center justify-center p-4 z-50"
            onClick={() => setSelectedMedia(null)}
          >
            <motion.div
              className="bg-red-800 bg-opacity-50 rounded-lg overflow-hidden max-w-4xl w-full max-h-[80vh] h-full relative flex flex-col items-center justify-center"
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.9 }}
              onClick={(e) => e.stopPropagation()}
            >
              {selectedMedia.type === 'image' ? (
                <img
                  src={selectedMedia.src}
                  alt={selectedMedia.title}
                  className="max-w-full max-h-[60vh] w-auto h-auto object-contain mb-4"
                />
              ) : (
                <video
                  src={selectedMedia.src}
                  className="max-w-full max-h-[60vh] w-auto h-auto object-contain mb-4"
                  controls
                  autoPlay
                />
              )}
              <h3 className="text-2xl font-bold text-white mb-2">{selectedMedia.title}</h3>
              <p className="text-white text-center px-4">{selectedMedia.description}</p>
              <button
                onClick={() => setSelectedMedia(null)}
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