import type { GameState } from '../types'
import type { SetState } from '../types'

export const createTimeActions = (set: SetState<GameState>) => ({
  nextDay: () => {
    set((state) => {
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
        }
      }
      const updatedHistory = [...state.dailyMoneyHistory, newRecord]
      return {
        currentDay: state.currentDay + 1,
        money: state.money - 10,
        dailyMoneyHistory: updatedHistory,
      }
    })
  },
})
