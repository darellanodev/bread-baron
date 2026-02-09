import { create } from 'zustand'
import type { GameState } from './types'
import { initialAvailableHelpers, initialOrders } from '../data/gameData'
import { createTimeActions } from './actions/timeActions'
import { createBakingActions } from './actions/bakingActions'
import { createOrderActions } from './actions/orderActions'
import { createWorkerActions } from './actions/workerActions'

export const useGameStore = create<GameState>((set) => ({
  money: 30000,
  currentDay: 1,
  currentYear: 1,
  dailyMoneyHistory: [],
  workers: [],
  availableHelpers: initialAvailableHelpers,
  maxWorkers: 12,
  bakingProgress: 0,
  showProduct: false,
  orders: initialOrders,

  ...createTimeActions(set),
  ...createBakingActions(set),
  ...createOrderActions(set),
  ...createWorkerActions(set),

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
