import { useEffect, useRef } from 'react'
import { animate } from 'animejs'



type AnimeParams = Parameters<typeof animate>[1]


export function useScrollAnimation(animationConfig: AnimeParams) {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const element = ref.current
    if (!element) return

    const targets = animationConfig.targets
      ? element.querySelectorAll(animationConfig.targets as string)
      : [element]

      targets.forEach((el) => {
      (el as HTMLElement).style.opacity = '0'
    })


    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          animate(targets.length > 1 ? targets : element, animationConfig)
          observer.disconnect()
        }
      },
      { threshold: 0.15 }
    )

    observer.observe(element)
    return () => observer.disconnect()
  }, [animationConfig])

  return ref
}
