import { useEffect, useRef } from 'react'

interface Snowflake {
  x: number
  y: number
  radius: number
  speed: number
}

export default function useSnowAnimation() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d')
    if (!ctx) return

    let animationFrameId: number

    // Set canvas size
    const resizeCanvas = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }

    // Create snowflakes
    const createSnowflakes = (count: number): Snowflake[] => {
      return Array.from({ length: count }, () => ({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        radius: Math.random() * 3 + 1,
        speed: Math.random() * 3 + 1,
      }))
    }

    // Animate snowflakes
    const snowflakes = createSnowflakes(100)
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)
      ctx.fillStyle = '#ffffff'

      snowflakes.forEach((snowflake) => {
        ctx.beginPath()
        ctx.arc(snowflake.x, snowflake.y, snowflake.radius, 0, Math.PI * 2)
        ctx.fill()

        snowflake.y += snowflake.speed
        if (snowflake.y > canvas.height) {
          snowflake.y = 0
          snowflake.x = Math.random() * canvas.width
        }
      })

      animationFrameId = requestAnimationFrame(animate)
    }

    // Initialize
    resizeCanvas()
    animate()

    // Handle window resize
    window.addEventListener('resize', resizeCanvas)

    // Cleanup
    return () => {
      cancelAnimationFrame(animationFrameId)
      window.removeEventListener('resize', resizeCanvas)
    }
  }, [])

  return <canvas ref={canvasRef} style={{ position: 'absolute', top: 0, left: 0, zIndex: 0 }} />
}

