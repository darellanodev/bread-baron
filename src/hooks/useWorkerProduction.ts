import { useGameStore } from '@/store/gameStore'
import { useEffect, useRef } from 'react'

export function useWorkerProduction() {
  const {
    workers,
    increaseBakingProgress,
    isPaused,
  } = useGameStore()
  const progressRef = useRef(0)

  useEffect(() => {
    if (workers.length === 0) return

    const interval = setInterval(() => {
      if (isPaused) return

      const totalProductivity = workers.reduce(
        (sum, worker) => sum + worker.productivity,
        0,
      )

      progressRef.current += totalProductivity * 0.1

      while (progressRef.current >= 1) {
        increaseBakingProgress(1)
        progressRef.current -= 1
      }
    }, 100)

    return () => clearInterval(interval)
  }, [workers, isPaused, increaseBakingProgress])
}
