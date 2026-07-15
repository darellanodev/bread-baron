import { useState, useEffect } from 'react'
import { SAVE_KEY } from '@/types/saveTypes'

export function useHasSave(): boolean {
  const [hasSave, setHasSave] = useState(false)

  useEffect(() => {
    if (typeof window === 'undefined') return

    try {
      const raw = localStorage.getItem(SAVE_KEY)
      if (!raw) return

      const parsed = JSON.parse(raw)
      if (
        typeof parsed === 'object' &&
        parsed !== null &&
        'version' in parsed &&
        'savedAt' in parsed &&
        'state' in parsed
      ) {
        setHasSave(true)
      }
    } catch {
      // Corrupted data — treat as no save
    }
  }, [])

  return hasSave
}
