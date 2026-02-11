import { create } from 'zustand'
import type { GameState } from './types'
import { initialAvailableHelpers, initialCustomers } from '../data/gameData'
import { createTimeActions } from './actions/timeActions'
import { createBakingActions } from './actions/bakingActions'
import { createOrderActions } from './actions/orderActions'
import { createWorkerActions } from './actions/workerActions'
import { createPromotionActions } from './actions/promotionActions'
import { createIndustryActions } from './actions/industryActions'
import { formatMoney } from '../utils/formatters'

export const useGameStore = create<GameState>((set) => ({
  money: 30000,
  currentDay: 1,
  currentYear: 1,
  dailyMoneyHistory: [],
  workers: [],
  availableHelpers: initialAvailableHelpers,
  maxWorkers: 12,
  ovenLevel: 1,
  bakingProgress: 0,
  showProduct: false,
  customers: initialCustomers,
  isPaused: false,
  totalProductsCreated: 0,

  ...createTimeActions(set),
  ...createBakingActions(set),
  ...createOrderActions(set),
  ...createWorkerActions(set),
  ...createPromotionActions(set),
  ...createIndustryActions(set),

  updateMoney: (amount: number) => {
    set((state) => ({
      money: state.money + amount,
    }))
  },

  togglePause: () => {
    set((state) => ({
      isPaused: !state.isPaused,
    }))
  },

  formatMoney,
}))
