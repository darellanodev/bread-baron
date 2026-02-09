import { create } from 'zustand'
import type { GameState, Worker } from './types'
import { initialAvailableHelpers, initialOrders } from '../data/gameData'

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

  increaseBakingProgress: () => {
    set((state) => {
      const newProgress = state.bakingProgress + 10
      if (newProgress >= 100) {
        const firstOrder = state.orders[0]
        if (firstOrder && !firstOrder.isInactive) {
          const newOrderProgress = firstOrder.progress + 1

          if (newOrderProgress >= firstOrder.maxProgress) {
            return {
              bakingProgress: 0,
              showProduct: true,
              orders: state.orders.slice(1),
              money: state.money + firstOrder.price,
            }
          } else {
            return {
              bakingProgress: 0,
              showProduct: true,
              orders: [
                { ...firstOrder, progress: newOrderProgress },
                ...state.orders.slice(1),
              ],
            }
          }
        }
        return {
          bakingProgress: 0,
          showProduct: true,
        }
      }
      return {
        bakingProgress: newProgress,
      }
    })
  },

  hideProduct: () => {
    set(() => ({
      showProduct: false,
    }))
  },

  updateOrderProgress: (orderId: string) => {
    set((state) => ({
      orders: state.orders.map((order) =>
        order.id === orderId
          ? { ...order, progress: order.progress + 1 }
          : order,
      ),
    }))
  },

  completeOrder: (orderId: string) => {
    set((state) => {
      const order = state.orders.find((o) => o.id === orderId)
      if (order) {
        return {
          orders: state.orders.filter((o) => o.id !== orderId),
          money: state.money + order.price,
        }
      }
      return state
    })
  },

  hireWorker: (helperId: string) => {
    set((state) => {
      const helper = state.availableHelpers.find((h) => h.id === helperId)
      if (
        !helper ||
        state.money < helper.hirePrice ||
        state.workers.length >= state.maxWorkers
      ) {
        return state
      }

      const newWorker: Worker = {
        id: helper.id,
        emoji: helper.emoji,
        name: helper.name,
        level: helper.level,
        productivity: helper.productivity,
        upgradePrice: Math.floor(helper.hirePrice * 1.5),
      }

      return {
        workers: [...state.workers, newWorker],
        availableHelpers: state.availableHelpers.filter(
          (h) => h.id !== helperId,
        ),
        money: state.money - helper.hirePrice,
      }
    })
  },

  upgradeWorker: (workerId: string) => {
    set((state) => ({
      workers: state.workers.map((worker) =>
        worker.id === workerId
          ? {
              ...worker,
              level: worker.level + 1,
              productivity: worker.productivity * 1.2,
              upgradePrice: Math.floor(worker.upgradePrice * 1.5),
            }
          : worker,
      ),
    }))
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
