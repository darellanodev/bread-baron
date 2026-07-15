import { useEffect } from 'react'
import { useGameStore } from '@/store/gameStore'
import { SAVE_KEY, SAVE_VERSION, SAVE_INTERVAL_MS, type SaveData } from '@/types/saveTypes'

const SAVEABLE_KEYS = [
  'playerName', 'money', 'activeDebt', 'currentDay', 'currentYear',
  'dailyMoneyHistory', 'workers', 'availableHelpers', 'customers',
  'ovenLevel', 'maxWorkers', 'bakingProgress', 'showProduct',
  'isPaused', 'totalProductsCreated',
] as const

function saveToStorage() {
  const state = useGameStore.getState()
  const saveable: Record<string, unknown> = {}
  for (const key of SAVEABLE_KEYS) {
    saveable[key] = state[key]
  }
  const data: SaveData = {
    version: SAVE_VERSION,
    savedAt: Date.now(),
    state: saveable as SaveData['state'],
  }
  localStorage.setItem(SAVE_KEY, JSON.stringify(data))
}

export function useAutoSave() {
  useEffect(() => {
    if (typeof window === 'undefined') return

    const id = setInterval(saveToStorage, SAVE_INTERVAL_MS)

    const handleBeforeUnload = () => saveToStorage()
    window.addEventListener('beforeunload', handleBeforeUnload)

    return () => {
      clearInterval(id)
      window.removeEventListener('beforeunload', handleBeforeUnload)
    }
  }, [])
}
