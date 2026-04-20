import { useEffect, useRef } from 'react'
import { animate } from 'animejs'

export function useAnime() {
  const nodeRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (nodeRef.current) {
      animate(nodeRef.current, {
        scale: [0.9, 1],
        opacity: [0, 1],
        delay: 200,
      })
    }
  }, [])

  return nodeRef
}
