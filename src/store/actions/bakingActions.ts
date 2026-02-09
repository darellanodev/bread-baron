import type { GameState, SetState } from '../types'

export const createBakingActions = (set: SetState<GameState>) => ({
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
})
