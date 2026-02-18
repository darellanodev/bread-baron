import type {
  GameState,
  Worker,
  SetState,
  AvailableHelper,
} from '@/store/types'
import {
  workerNames,
  workerEmojis,
  workerProductivityRange,
  workerPriceRange,
} from '@/data/gameData'
import {
  JOB_OFFER_COST,
  MIN_WORKERS_PER_OFFER,
  MAX_WORKERS_PER_OFFER,
  WORKER_UPGRADE_PRICE_MULTIPLIER,
  WORKER_PRODUCTIVITY_INCREASE,
  DAYS_PER_MONTH,
} from '@/constants/workerConstants'

const getNextWorkerId = (state: GameState): number => {
  const allIds = [
    ...state.workers.map((w) => parseInt(w.id, 10)),
    ...state.availableHelpers.map((h) => parseInt(h.id, 10)),
  ].filter((id) => !isNaN(id))
  return allIds.length > 0 ? Math.max(...allIds) + 1 : 1
}

export const createWorkerActions = (set: SetState<GameState>) => ({
  hireWorker: (helperId: string, contractDuration: number) => {
    set((state) => {
      const helper = state.availableHelpers.find((h) => h.id === helperId)
      if (!helper) return state

      const totalPrice = helper.hirePricePerMonth * contractDuration
      if (
        state.money < totalPrice ||
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
        upgradePrice: Math.floor(
          helper.hirePricePerMonth * WORKER_UPGRADE_PRICE_MULTIPLIER,
        ),
        contractDuration,
        daysRemaining: contractDuration * DAYS_PER_MONTH,
      }

      return {
        workers: [...state.workers, newWorker],
        availableHelpers: state.availableHelpers.filter(
          (h) => h.id !== helperId,
        ),
        money: state.money - totalPrice,
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
              productivity: worker.productivity * WORKER_PRODUCTIVITY_INCREASE,
              upgradePrice: Math.floor(
                worker.upgradePrice * WORKER_UPGRADE_PRICE_MULTIPLIER,
              ),
            }
          : worker,
      ),
    }))
  },

  postJobOffer: () => {
    set((state) => {
      // Check that no workers are available and that there is enough money
      if (state.availableHelpers.length > 0 || state.money < JOB_OFFER_COST) {
        return state
      }

      // Generate random number of workers (MIN_WORKERS_PER_OFFER to MAX_WORKERS_PER_OFFER)
      const workerRange = MAX_WORKERS_PER_OFFER - MIN_WORKERS_PER_OFFER + 1
      const numWorkers =
        Math.floor(Math.random() * workerRange) + MIN_WORKERS_PER_OFFER
      const newHelpers: AvailableHelper[] = []
      let nextWorkerId = getNextWorkerId(state)

      for (let i = 0; i < numWorkers; i++) {
        // Select random name
        const nameIndex = Math.floor(Math.random() * workerNames.length)
        const workerName = workerNames[nameIndex]

        // Select random emoji
        const emojiIndex = Math.floor(Math.random() * workerEmojis.length)
        const workerEmoji = workerEmojis[emojiIndex]

        // Generate random productivity
        const productivity =
          Math.random() *
            (workerProductivityRange.max - workerProductivityRange.min) +
          workerProductivityRange.min

        // Generate random price
        const hirePricePerMonth = Math.floor(
          Math.random() * (workerPriceRange.max - workerPriceRange.min) +
            workerPriceRange.min,
        )

        newHelpers.push({
          id: String(nextWorkerId),
          name: workerName,
          emoji: workerEmoji,
          hirePricePerMonth,
          level: 1,
          productivity: Math.round(productivity * 10) / 10,
        })

        nextWorkerId++
      }

      return {
        availableHelpers: newHelpers,
        money: state.money - JOB_OFFER_COST,
      }
    })
  },
})
