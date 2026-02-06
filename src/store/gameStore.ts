import { create } from 'zustand'

interface GameState {
  money: number
  currentDay: number
  currentYear: number
  nextDay: () => void
  updateMoney: (amount: number) => void
  formatMoney: (amount: number) => string
}

export const useGameStore = create<GameState>((set) => ({
  money: 30000,
  currentDay: 1,
  currentYear: 1,

  nextDay: () => {
    set((state) => {
      if (state.currentDay >= 365) {
        return {
          currentDay: 1,
          currentYear: state.currentYear + 1,
          money: state.money - 10,
        }
      }
      return {
        currentDay: state.currentDay + 1,
        money: state.money - 10,
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
