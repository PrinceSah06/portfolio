import { useEffect, useRef } from 'react'
import * as THREE from 'three'

export default function Hero() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    // Basic Three.js setup
    const renderer = new THREE.WebGLRenderer({ canvas, alpha: true })
    renderer.setSize(window.innerWidth, window.innerHeight)

    const scene = new THREE.Scene()
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000)
    camera.position.z = 5

    // Simple rotating torus
    const geometry = new THREE.TorusGeometry(1, 0.3, 16, 100)
    const material = new THREE.MeshBasicMaterial({ color: 0x94a3b8, wireframe: true })
    const torus = new THREE.Mesh(geometry, material)
    scene.add(torus)

    let animId: number

    const animate = () => {
      animId = requestAnimationFrame(animate)
      torus.rotation.x += 0.003
      torus.rotation.y += 0.005
      renderer.render(scene, camera)
    }
    animate()

    return () => {
      cancelAnimationFrame(animId)
      renderer.dispose()
    }
  }, [])

  return (
    <section className="relative flex min-h-[calc(100vh-3.5rem)] items-center justify-center bg-white px-4 py-16 sm:px-6 md:min-h-screen md:px-8">

      {/* Three.js background */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full opacity-15 pointer-events-none"
      />

      {/* Content */}
      <div className="relative z-10 max-w-xl text-center">

        <p className="text-slate-400 text-sm mb-3">
          Hi, I'm
        </p>

        <h1 className="mb-3 text-4xl font-bold text-slate-800 sm:text-5xl md:text-6xl">
          Prince Sah
        </h1>

        <p className="mb-6 text-lg text-slate-500 sm:text-xl">
          Full Stack Developer
        </p>

        <p className="mx-auto mb-8 max-w-md text-sm leading-relaxed text-slate-400 sm:text-base">
          I enjoy building web apps and learning new technologies.
          Currently looking for my first developer role.
        </p>

        <a
          href="#contact"
          className="inline-block rounded-lg bg-slate-800 px-6 py-3 text-sm text-white transition-colors hover:bg-slate-700"
        >
          Contact Me
        </a>

      </div>
    </section>
  )
}
