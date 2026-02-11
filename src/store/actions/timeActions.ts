import type { GameState } from '../types'
import type { SetState } from '../types'

export const createTimeActions = (set: SetState<GameState>) => ({
  nextDay: () => {
    set((state) => {
      // Don't advance days when game is paused
      if (state.isPaused) return state

      // Update contract days and remove expired workers
      const updatedWorkers = state.workers
        .map((worker) => ({
          ...worker,
          daysRemaining: worker.daysRemaining - 1,
        }))
        .filter((worker) => worker.daysRemaining > 0)

      const newRecord = { day: state.currentDay, money: state.money }

      if (state.currentDay >= 365) {
        console.log(
          '[End of Year] Clearing dailyMoneyHistory:',
          state.dailyMoneyHistory,
        )
        return {
          currentDay: 1,
          currentYear: state.currentYear + 1,
          money: state.money - 10,
          dailyMoneyHistory: [],
          workers: updatedWorkers,
        }
      }
      const updatedHistory = [...state.dailyMoneyHistory, newRecord]
      return {
        currentDay: state.currentDay + 1,
        money: state.money - 10,
        dailyMoneyHistory: updatedHistory,
        workers: updatedWorkers,
      }
    })
  },
})
