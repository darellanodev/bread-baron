import { create } from 'zustand'

interface DailyMoneyRecord {
  day: number
  money: number
}

interface Worker {
  id: string
  emoji: string
  name: string
  level: number
  productivity: number
  upgradePrice: number
}

interface GameState {
  money: number
  currentDay: number
  currentYear: number
  dailyMoneyHistory: DailyMoneyRecord[]
  workers: Worker[]
  maxWorkers: number
  hireWorker: (worker: Worker) => void
  upgradeWorker: (workerId: string) => void
  nextDay: () => void
  updateMoney: (amount: number) => void
  formatMoney: (amount: number) => string
}

export const useGameStore = create<GameState>((set) => ({
  money: 30000,
  currentDay: 1,
  currentYear: 1,
  dailyMoneyHistory: [],
  workers: [],
  maxWorkers: 12,

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

  hireWorker: (worker: Worker) => {
    set((state) => ({
      workers: [...state.workers, worker],
      money: state.money - 500,
    }))
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
