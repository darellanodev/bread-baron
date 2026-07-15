import { useGameStore } from '@/store/gameStore'
import { SAVE_KEY } from '@/types/saveTypes'
import type { SaveData } from '@/types/saveTypes'

export function loadFromStorage(): boolean {
  if (typeof window === 'undefined') return false

  try {
    const raw = localStorage.getItem(SAVE_KEY)
    if (!raw) return false

    const parsed: SaveData = JSON.parse(raw)

    if (
      typeof parsed !== 'object' ||
      parsed === null ||
      !('version' in parsed) ||
      !('savedAt' in parsed) ||
      !('state' in parsed)
    ) {
      return false
    }

    useGameStore.setState(parsed.state)
    return true
  } catch {
    return false
  }
}
