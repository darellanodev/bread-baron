import { useEffect } from 'react'
import { useGameStore } from '@/store/gameStore'
import { DAY_DURATION_MS } from '@/constants/timeConstants'

export function DayTimer() {
  const { nextDay, isPaused } = useGameStore()

  useEffect(() => {
    const interval = setInterval(() => {
      nextDay()
    }, DAY_DURATION_MS)

    return () => clearInterval(interval)
  }, [nextDay, isPaused])

  return null
}
