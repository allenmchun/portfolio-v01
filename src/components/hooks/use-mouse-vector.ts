import { useEffect, useState } from "react"

interface Vector {
  x: number
  y: number
}

interface MouseVector {
  position: Vector
  vector: Vector
}

export function useMouseVector(containerRef?: React.RefObject<HTMLElement>): MouseVector {
  const [position, setPosition] = useState<Vector>({ x: 0, y: 0 })
  const [vector, setVector] = useState<Vector>({ x: 0, y: 0 })
  const [lastPosition, setLastPosition] = useState<Vector>({ x: 0, y: 0 })

  useEffect(() => {
    let frameId: number
    let lastTime = performance.now()

    const handleMouseMove = (e: MouseEvent) => {
      const container = containerRef?.current
      const rect = container?.getBoundingClientRect() || { left: 0, top: 0 }
      
      const x = e.clientX - rect.left
      const y = e.clientY - rect.top

      setPosition({ x, y })

      frameId = requestAnimationFrame((now) => {
        const deltaTime = now - lastTime
        if (deltaTime > 0) {
          const vectorX = (x - lastPosition.x) / deltaTime
          const vectorY = (y - lastPosition.y) / deltaTime
          setVector({ x: vectorX, y: vectorY })
          setLastPosition({ x, y })
          lastTime = now
        }
      })
    }

    window.addEventListener("mousemove", handleMouseMove)

    return () => {
      window.removeEventListener("mousemove", handleMouseMove)
      if (frameId) cancelAnimationFrame(frameId)
    }
  }, [containerRef, lastPosition])

  return { position, vector }
}