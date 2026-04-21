import { useEffect, useRef } from 'react'
import * as THREE from 'three'

export default function Scene() {
  const mountRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const mountNode = mountRef.current
    if (!mountNode) return

    // basic scene setup
    const scene    = new THREE.Scene()
    const camera   = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000)
    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true })

    renderer.setSize(window.innerWidth, window.innerHeight)
    renderer.setPixelRatio(window.devicePixelRatio)
    mountNode.appendChild(renderer.domElement)
    camera.position.z = 80

    // --- PARTICLE SYSTEM ---

    const PARTICLE_COUNT = 120

    // store x,y,z for each particle
    const positions  = new Float32Array(PARTICLE_COUNT * 3)
    const velocities: { x: number; y: number; z: number }[] = []

    for (let i = 0; i < PARTICLE_COUNT; i++) {
      // random position in a wide spread
      positions[i * 3]     = (Math.random() - 0.5) * 160  // x
      positions[i * 3 + 1] = (Math.random() - 0.5) * 100  // y
      positions[i * 3 + 2] = (Math.random() - 0.5) * 60   // z

      // random slow drift velocity
      velocities.push({
        x: (Math.random() - 0.5) * 0.04,
        y: (Math.random() - 0.5) * 0.04,
        z: (Math.random() - 0.5) * 0.02,
      })
    }

    const geometry = new THREE.BufferGeometry()
    geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3))

    const material = new THREE.PointsMaterial({
      color:       0x94a3b8,  // slate-400
      size:        0.6,
      transparent: true,
      opacity:     0.8,
    })

    const particles = new THREE.Points(geometry, material)
    scene.add(particles)

    // --- CONNECTING LINES ---
    // draw lines between particles that are close to each other

    const lineMaterial = new THREE.LineBasicMaterial({
      color:       0x475569,  // slate-600
      transparent: true,
      opacity:     0.2,
    })

    // we update lines every frame so store them in a group
    const linesGroup = new THREE.Group()
    scene.add(linesGroup)

    // --- MOUSE TRACKING ---
    const mouse = { x: 0, y: 0 }

    const handleMouseMove = (e: MouseEvent) => {
      // convert mouse position to Three.js coordinate space
      mouse.x = (e.clientX / window.innerWidth  - 0.5) * 160
      mouse.y = (e.clientY / window.innerHeight - 0.5) * -100
    }
    window.addEventListener('mousemove', handleMouseMove)

    // --- RESIZE HANDLER ---
    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight
      camera.updateProjectionMatrix()
      renderer.setSize(window.innerWidth, window.innerHeight)
    }
    window.addEventListener('resize', handleResize)

    // --- ANIMATION LOOP ---
    let animId: number

    const animate = () => {
      animId = requestAnimationFrame(animate)

      const pos = geometry.attributes.position.array as Float32Array

      for (let i = 0; i < PARTICLE_COUNT; i++) {
        const ix = i * 3
        const iy = i * 3 + 1
        const iz = i * 3 + 2

        // drift movement
        pos[ix] += velocities[i].x
        pos[iy] += velocities[i].y
        pos[iz] += velocities[i].z

        // mouse repulsion — particles near mouse get pushed away gently
        const dx = pos[ix] - mouse.x
        const dy = pos[iy] - mouse.y
        const dist = Math.sqrt(dx * dx + dy * dy)

        if (dist < 20) {
          const force = (20 - dist) / 20
          pos[ix] += dx * force * 0.03
          pos[iy] += dy * force * 0.03
        }

        // wrap around edges so particles never disappear
        if (pos[ix] >  80) pos[ix] = -80
        if (pos[ix] < -80) pos[ix] =  80
        if (pos[iy] >  50) pos[iy] = -50
        if (pos[iy] < -50) pos[iy] =  50
      }

      // tell Three.js positions changed
      geometry.attributes.position.needsUpdate = true

      // rebuild connecting lines every frame
      linesGroup.clear()

      for (let i = 0; i < PARTICLE_COUNT; i++) {
        for (let j = i + 1; j < PARTICLE_COUNT; j++) {
          const ax = pos[i * 3],     ay = pos[i * 3 + 1]
          const bx = pos[j * 3],     by = pos[j * 3 + 1]

          const dist = Math.sqrt((ax - bx) ** 2 + (ay - by) ** 2)

          // only draw line if particles are close enough
          if (dist < 18) {
            const lineGeo = new THREE.BufferGeometry().setFromPoints([
              new THREE.Vector3(ax, ay, pos[i * 3 + 2]),
              new THREE.Vector3(bx, by, pos[j * 3 + 2]),
            ])
            linesGroup.add(new THREE.Line(lineGeo, lineMaterial))
          }
        }
      }

      renderer.render(scene, camera)
    }

    animate()

    return () => {
      cancelAnimationFrame(animId)
      window.removeEventListener('mousemove', handleMouseMove)
      window.removeEventListener('resize', handleResize)
      mountNode.removeChild(renderer.domElement)
      renderer.dispose()
    }
  }, [])

  return <div ref={mountRef} className="absolute inset-0 -z-10" />
}