import type { GameState } from '@/store/types'
import type { SetState } from '@/store/types'
import { DAYS_PER_YEAR, DEBT_INTEREST_RATE } from '@/constants/timeConstants'

export const createTimeActions = (set: SetState<GameState>) => ({
  nextDay: () => {
    set((state) => {
      // Don't advance days when game is paused
      if (state.isPaused) return state

      // Calculate daily operational cost (0.04% of active debt)
      const dailyDebtCost = Math.round(state.activeDebt * DEBT_INTEREST_RATE)

      // Update contract days and remove expired workers
      const updatedWorkers = []
      for (const worker of state.workers) {
        const updated = { ...worker, daysRemaining: worker.daysRemaining - 1 }
        if (updated.daysRemaining > 0) updatedWorkers.push(updated)
      }

      const newRecord = { day: state.currentDay, money: state.money }

      if (state.currentDay >= DAYS_PER_YEAR) {
        return {
          currentDay: 1,
          currentYear: state.currentYear + 1,
          money: state.money - dailyDebtCost,
          dailyMoneyHistory: [],
          workers: updatedWorkers,
        }
      }
      const updatedHistory = [...state.dailyMoneyHistory, newRecord]
      return {
        currentDay: state.currentDay + 1,
        money: state.money - dailyDebtCost,
        dailyMoneyHistory: updatedHistory,
        workers: updatedWorkers,
      }
    })
  },
})
