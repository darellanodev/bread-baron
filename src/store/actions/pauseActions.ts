import type { GameState } from '@/store/types'
import type { SetState } from '@/store/types'

export const createPauseActions = (set: SetState<GameState>) => ({
  togglePause: () => {
    set((state) => ({
      isPaused: !state.isPaused,
    }))
  },
})
