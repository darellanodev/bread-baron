import { useEffect } from 'react'
import { useGameStore } from '@/store/gameStore'

export function DayTimer() {
  const { nextDay, isPaused } = useGameStore()

  useEffect(() => {
    const interval = setInterval(() => {
      nextDay()
    }, 5000)

    return () => clearInterval(interval)
  }, [nextDay, isPaused])

  return null
}
