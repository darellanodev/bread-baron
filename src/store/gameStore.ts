import { create } from 'zustand'

interface DailyMoneyRecord {
  day: number
  money: number
}

interface GameState {
  money: number
  currentDay: number
  currentYear: number
  dailyMoneyHistory: DailyMoneyRecord[]
  nextDay: () => void
  updateMoney: (amount: number) => void
  formatMoney: (amount: number) => string
}

export const useGameStore = create<GameState>((set) => ({
  money: 30000,
  currentDay: 1,
  currentYear: 1,
  dailyMoneyHistory: [],

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
      // console.log('[Day Ended] dailyMoneyHistory:', updatedHistory)
      return {
        currentDay: state.currentDay + 1,
        money: state.money - 10,
        dailyMoneyHistory: updatedHistory,
      }
    })
  },

  updateMoney: (amount: number) => {
    set((state) => ({
      money: state.money + amount,
    }))
  },

  formatMoney: (amount: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(amount)
  },
}))
