import { useRef } from 'react'
import { useFrame } from '@react-three/fiber'
import { Mesh } from 'three'

export default function FloatingGeometry() {
  const meshRef = useRef<Mesh>(null!)

  useFrame((state) => {
    const time = state.clock.getElapsedTime()
    meshRef.current.position.y = Math.sin(time) * 0.5
    meshRef.current.rotation.x = time * 0.5
    meshRef.current.rotation.y = time * 0.2
  })

  return (
    <mesh ref={meshRef}>
      <octahedronGeometry args={[1, 0]} />
      <meshStandardMaterial color="#8b5cf6" wireframe />
    </mesh>
  )
}
