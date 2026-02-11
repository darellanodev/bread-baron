import type { GameState, Worker, SetState } from '../types'

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
})
