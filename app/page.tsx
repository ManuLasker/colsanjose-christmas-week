import Header from '@/components/header'
import Hero from '@/components/Hero'
import Gallery from '@/components/gallery'
import Footer from '@/components/footer'
import SnowAnimation from '@/components/snow-animation'

export default function Home() {
  return (
    <div className="min-h-screen bg-green-900 relative overflow-hidden">
      <SnowAnimation />
      <Header />
      <main>
        <Hero/>
        <Gallery />
      </main>
      <Footer />
      <div id="owner" className="bg-red-900 py-4 text-center">
        <a
          href="https://github.com/yourusername"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center text-white hover:text-yellow-300 transition-colors"
        >
          <img src="/github.svg" className="w-6 h-6 mr-2" />
          Created by Your Name
        </a>
      </div>
    </div>
  )
}

