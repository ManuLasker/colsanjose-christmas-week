import type { Metadata } from 'next'
import { Roboto, Mountains_of_Christmas } from 'next/font/google'
import './globals.css'

const roboto = Roboto({ weight: ['400', '700'], subsets: ['latin'] })
const mountainsOfChristmas = Mountains_of_Christmas({ 
  weight: ['400', '700'],
  subsets: ['latin'],
  variable: '--font-mountains-of-christmas',
})

export const metadata: Metadata = {
  title: 'Colegio San Jose - Navidad',
  description: 'Celebrando la Navidad en Colegio San Jose de Barranquilla',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${mountainsOfChristmas.variable}`}>
      <body className={`${roboto.className} relative min-h-screen`}>
        <div className="snow-animation absolute inset-0 pointer-events-none z-10" aria-hidden="true"></div>
        <div className="christmas-lights absolute top-0 left-0 w-full z-20" aria-hidden="true">
          {[...Array(20)].map((_, i) => (
            <div 
              key={i}
              className="light"
              style={{
                left: `${i * 5}%`,
                animationDelay: `${i * 0.1}s`
              }}
            ></div>
          ))}
        </div>
        <div className="relative z-30">
          {children}
        </div>
      </body>
    </html>
  )
}

