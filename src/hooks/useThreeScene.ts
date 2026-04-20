// Custom hook for Three.js scene setup
import { useThree } from '@react-three/fiber'
import { useEffect } from 'react'

export function useThreeScene() {
  const { camera, gl } = useThree()

  useEffect(() => {
    // Add custom camera or renderer logic here
  }, [camera, gl])
}
