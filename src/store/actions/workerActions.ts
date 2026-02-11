import type { GameState, Worker, SetState, AvailableHelper } from '../types'
import {
  workerNames,
  workerEmojis,
  workerProductivityRange,
  workerPriceRange,
} from '../../data/gameData'

// Variable global para IDs secuenciales de workers
let nextWorkerId = 6

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
        upgradePrice: Math.floor(helper.hirePricePerMonth * 1.5),
        contractDuration,
        daysRemaining: contractDuration * 30,
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
              productivity: worker.productivity * 1.2,
              upgradePrice: Math.floor(worker.upgradePrice * 1.5),
            }
          : worker,
      ),
    }))
  },

  postJobOffer: () => {
    set((state) => {
      // Verificar que no haya workers disponibles y que haya suficiente dinero
      if (state.availableHelpers.length > 0 || state.money < 500) {
        return state
      }

      // Generar número aleatorio de workers (3-6)
      const numWorkers = Math.floor(Math.random() * 4) + 3
      const newHelpers: AvailableHelper[] = []

      for (let i = 0; i < numWorkers; i++) {
        // Seleccionar nombre aleatorio
        const nameIndex = Math.floor(Math.random() * workerNames.length)
        const workerName = workerNames[nameIndex]

        // Seleccionar emoji aleatorio
        const emojiIndex = Math.floor(Math.random() * workerEmojis.length)
        const workerEmoji = workerEmojis[emojiIndex]

        // Generar productividad aleatoria
        const productivity =
          Math.random() *
            (workerProductivityRange.max - workerProductivityRange.min) +
          workerProductivityRange.min

        // Generar precio aleatorio
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
        money: state.money - 500,
      }
    })
  },
})
