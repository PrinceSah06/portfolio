import { useEffect } from 'react'
import { animate } from 'animejs'

export function useScrollAnimation(targetSelector: string) {
  useEffect(() => {
    // Example: fade in on mount
    animate(targetSelector, {
      opacity: [0, 1],
      y: [50, 0], // translateY -> y in v4
      duration: 1000,
      ease: 'outExpo' // easing is now 'ease' and uses shortened syntax in v4
    })
  }, [targetSelector])
}
