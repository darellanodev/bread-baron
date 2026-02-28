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
import { getRandomInRange, getRandomItem } from '@/utils/randomUtils'
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
    set((state) => {
      const worker = state.workers.find((w) => w.id === workerId)
      if (!worker || state.money < worker.upgradePrice) {
        return state
      }

      return {
        workers: state.workers.map((w) =>
          w.id === workerId
            ? {
                ...w,
                level: w.level + 1,
                productivity:
                  Math.round(
                    w.productivity * WORKER_PRODUCTIVITY_INCREASE * 10,
                  ) / 10,
                upgradePrice: Math.floor(
                  w.upgradePrice * WORKER_UPGRADE_PRICE_MULTIPLIER,
                ),
              }
            : w,
        ),
        money: state.money - worker.upgradePrice,
      }
    })
  },

  postJobOffer: () => {
    set((state) => {
      // Check that no workers are available and that there is enough money
      if (state.availableHelpers.length > 0 || state.money < JOB_OFFER_COST) {
        return state
      }

      // Generate random number of workers
      const numWorkers = getRandomInRange(
        MIN_WORKERS_PER_OFFER,
        MAX_WORKERS_PER_OFFER,
      )
      const newHelpers: AvailableHelper[] = []
      let nextWorkerId = getNextWorkerId(state)

      for (let i = 0; i < numWorkers; i++) {
        const workerName = getRandomItem(workerNames)
        const workerEmoji = getRandomItem(workerEmojis)

        const productivity =
          Math.random() *
            (workerProductivityRange.max - workerProductivityRange.min) +
          workerProductivityRange.min

        const hirePricePerMonth = getRandomInRange(
          workerPriceRange.min,
          workerPriceRange.max,
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
