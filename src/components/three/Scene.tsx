// src/components/three/Scene.jsx
import { useEffect, useRef } from 'react'
import * as THREE from 'three'

export default function Scene() {
  const mountRef = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    const mountNode = mountRef.current
    if (!mountNode) return

    const scene = new THREE.Scene()
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000)
    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true })

    renderer.setSize(window.innerWidth, window.innerHeight)
    renderer.setPixelRatio(window.devicePixelRatio)
    mountNode.appendChild(renderer.domElement)

    // Subtle floating torus
    const geometry = new THREE.TorusGeometry(1, 0.3, 16, 100)
    const material = new THREE.MeshStandardMaterial({ color: 0x6366f1, wireframe: true })
    const torus = new THREE.Mesh(geometry, material)
    scene.add(torus)

    const light = new THREE.AmbientLight(0xffffff, 0.5)
    scene.add(light)
    camera.position.z = 5

    const animate = () => {
      requestAnimationFrame(animate)
      torus.rotation.x += 0.003
      torus.rotation.y += 0.005
      renderer.render(scene, camera)
    }
    animate()

    return () => {
      mountNode.removeChild(renderer.domElement)
      renderer.dispose()
    }
  }, [])

  return <div ref={mountRef} className="absolute inset-0 -z-10" />
}
