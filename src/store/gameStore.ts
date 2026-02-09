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

interface AvailableHelper {
  id: string
  emoji: string
  name: string
  hirePrice: number
  level: number
  productivity: number
}

interface Order {
  id: string
  difficulty: string
  difficultyColor: string
  title: string
  price: number
  progress: number
  maxProgress: number
  isInactive?: boolean
}

interface GameState {
  money: number
  currentDay: number
  currentYear: number
  dailyMoneyHistory: DailyMoneyRecord[]
  workers: Worker[]
  availableHelpers: AvailableHelper[]
  orders: Order[]
  maxWorkers: number
  bakingProgress: number
  showProduct: boolean
  increaseBakingProgress: () => void
  hideProduct: () => void
  hireWorker: (helperId: string) => void
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
  availableHelpers: [
    {
      id: '1',
      emoji: '👩',
      name: 'Apprentice Sue',
      hirePrice: 150,
      level: 1,
      productivity: 1.2,
    },
    {
      id: '2',
      emoji: '👨',
      name: 'Kneader Dan',
      hirePrice: 400,
      level: 1,
      productivity: 2.5,
    },
    {
      id: '3',
      emoji: '👴',
      name: 'Master Baker Joe',
      hirePrice: 800,
      level: 2,
      productivity: 3.0,
    },
    {
      id: '4',
      emoji: '👩‍🍳',
      name: 'Chef Maria',
      hirePrice: 1200,
      level: 3,
      productivity: 4.2,
    },
    {
      id: '5',
      emoji: '🧑‍🍳',
      name: 'Pastry Expert Tom',
      hirePrice: 600,
      level: 2,
      productivity: 2.8,
    },
  ],
  maxWorkers: 12,
  bakingProgress: 0,
  showProduct: false,
  orders: [
    {
      id: '1',
      difficulty: 'Medium',
      difficultyColor: 'text-primary',
      title: 'Rustic Bread Batch',
      price: 150,
      progress: 0,
      maxProgress: 10,
    },
    {
      id: '2',
      difficulty: 'Hard',
      difficultyColor: 'text-orange-600',
      title: 'Gourmet Croissants',
      price: 500,
      progress: 0,
      maxProgress: 25,
    },
    {
      id: '3',
      difficulty: 'Easy',
      difficultyColor: 'text-green-500',
      title: 'Daily Baguettes',
      price: 40,
      progress: 0,
      maxProgress: 5,
      isInactive: true,
    },
  ],

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
