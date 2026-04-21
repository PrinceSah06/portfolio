import { useEffect, useRef } from 'react'
import * as THREE from 'three'

export default function Hero() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const renderer = new THREE.WebGLRenderer({ canvas, alpha: true })
    renderer.setSize(window.innerWidth, window.innerHeight)

    const scene  = new THREE.Scene()
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000)
    camera.position.z = 5

    const geometry = new THREE.TorusGeometry(1, 0.3, 16, 100)
    const material = new THREE.MeshBasicMaterial({ color: 0x334155, wireframe: true })
    const torus    = new THREE.Mesh(geometry, material)
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
    <section className="relative flex min-h-screen items-center justify-center bg-transparent px-6">

      <canvas
        ref={canvasRef}
        className="pointer-events-none absolute inset-0 h-full w-full opacity-10"
      />

      <div className="relative z-10 max-w-xl text-center">

        <p className="mb-3 text-sm text-slate-400">
          Hi, I'm
        </p>

        <h1 className="mb-3 text-5xl font-bold text-slate-50 sm:text-6xl">
          Prince Sah
        </h1>

        <p className="mb-6 text-xl text-slate-400">
          Full Stack Developer
        </p>

        <p className="mx-auto mb-8 max-w-md text-base leading-relaxed text-slate-500">
          I enjoy building web apps and learning new technologies.
          Currently looking for my first developer role.
        </p>

        <a
          href="#contact"
          className="inline-block rounded-lg bg-slate-800 px-6 py-3 text-sm text-slate-100 transition-colors hover:bg-slate-700"
        >
          Contact Me
        </a>

      </div>
    </section>
  )
}