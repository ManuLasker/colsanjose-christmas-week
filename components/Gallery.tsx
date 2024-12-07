"use client"

import { useState } from 'react'
import Image from 'next/image'
import { Modal } from './ui/modal'
import styles from './Gallery.module.css'

interface GalleryImage {
  id: number
  title: string
  description: string
  imageUrl: string
}

const galleryImages: GalleryImage[] = [
  {
    id: 1,
    title: "Christmas Celebration",
    description: "Moments from our festive Christmas celebration",
    imageUrl: "/images/placeholder.svg?height=800&width=1200"
  },
  {
    id: 2,
    title: "Holiday Concert",
    description: "Our annual holiday music performance",
    imageUrl: "/images/placeholder.svg?height=800&width=1200"
  },
  {
    id: 3,
    title: "Santa Visit",
    description: "Special visit from Santa Claus",
    imageUrl: "/images/placeholder.svg?height=800&width=1200"
  },
  {
    id: 4,
    title: "Tree Lighting",
    description: "Annual Christmas tree lighting ceremony",
    imageUrl: "/images/placeholder.svg?height=800&width=1200"
  },
  {
    id: 5,
    title: "Gift Exchange",
    description: "Community gift exchange event",
    imageUrl: "/images/placeholder.svg?height=800&width=1200"
  },
  {
    id: 6,
    title: "Winter Wonderland",
    description: "Our winter wonderland decoration",
    imageUrl: "/images/placeholder.svg?height=800&width=1200"
  }
]

const GalleryItem = ({ image, onClick }: { image: GalleryImage; onClick: () => void }) => (
  <div 
    className={styles.card}
    onClick={onClick}
  >
    <div className={styles.imageWrapper}>
      <Image 
        src={image.imageUrl} 
        alt={image.title}
        fill
        className="object-cover"
      />
    </div>
    <div className={styles.cardContent}>
      <h3 className={styles.cardTitle}>{image.title}</h3>
      <p className={styles.cardDescription}>{image.description}</p>
    </div>
  </div>
)

export default function Gallery() {
  const [selectedImage, setSelectedImage] = useState<GalleryImage | null>(null)

  return (
    <>
      <section className={styles.gallery}>
        <h2 className={styles.title}>Holiday Moments</h2>
        <div className={styles.grid}>
          {galleryImages.map((image) => (
            <GalleryItem 
              key={image.id} 
              image={image} 
              onClick={() => setSelectedImage(image)}
            />
          ))}
        </div>
      </section>

      <Modal 
        isOpen={!!selectedImage} 
        onClose={() => setSelectedImage(null)}
        className="z-50"
      >
        {selectedImage && (
          <div className="relative w-[90vw] h-[80vh] max-w-5xl bg-white rounded-lg overflow-hidden p-8">
            <div className="relative w-full h-full">
              <Image
                src={selectedImage.imageUrl}
                alt={selectedImage.title}
                layout="fill"
                objectFit="contain"
                className="p-8"
              />
            </div>
          </div>
        )}
      </Modal>
    </>
  )
}

