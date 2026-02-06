import { useEffect } from 'react'
import { useGameStore } from '../store/gameStore'

export function DayTimer() {
  const { nextDay } = useGameStore()

  useEffect(() => {
    const interval = setInterval(() => {
      nextDay()
    }, 5000)

    return () => clearInterval(interval)
  }, [nextDay])

  return null
}
