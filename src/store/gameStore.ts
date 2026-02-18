import { create } from 'zustand'
import type { GameState } from '@/store/types'
import { initialAvailableHelpers, initialCustomers } from '@/data/gameData'
import { createTimeActions } from '@/store/actions/timeActions'
import { createBakingActions } from '@/store/actions/bakingActions'
import { createOrderActions } from '@/store/actions/orderActions'
import { createWorkerActions } from '@/store/actions/workerActions'
import { createPromotionActions } from '@/store/actions/promotionActions'
import {
  createIndustryActions,
  INDUSTRY_LEVELS,
} from '@/store/actions/industryActions'
import { formatMoney } from '@/utils/formatters'
import {
  INITIAL_MONEY,
  INITIAL_DAY,
  INITIAL_YEAR,
  INITIAL_OVEN_LEVEL,
} from '@/constants/gameStateConstants'

export const useGameStore = create<GameState>((set) => ({
  money: INITIAL_MONEY,
  currentDay: INITIAL_DAY,
  currentYear: INITIAL_YEAR,
  dailyMoneyHistory: [],
  workers: [],
  availableHelpers: initialAvailableHelpers,
  maxWorkers: INDUSTRY_LEVELS[0].maxWorkers,
  ovenLevel: INITIAL_OVEN_LEVEL,
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
