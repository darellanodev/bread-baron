import type { GameState, SetState } from '../types'

export const createBakingActions = (set: SetState<GameState>) => ({
  increaseBakingProgress: () => {
    set((state) => {
      const newProgress = state.bakingProgress + 10
      if (newProgress >= 100) {
        // Find prioritized order, or use the first one if none is prioritized
        const prioritizedOrder = state.orders.find(
          (order) => order.isPrioritized && !order.isInactive,
        )
        const targetOrder = prioritizedOrder || state.orders[0]
        const targetOrderIndex = state.orders.findIndex(
          (order) => order.id === targetOrder?.id,
        )

        if (targetOrder && !targetOrder.isInactive) {
          const newOrderProgress = targetOrder.progress + 1

          if (newOrderProgress >= targetOrder.maxProgress) {
            const updatedOrders = state.orders.filter(
              (_, index) => index !== targetOrderIndex,
            )
            return {
              bakingProgress: 0,
              showProduct: true,
              orders: updatedOrders,
              money: state.money + targetOrder.price,
            }
          } else {
            const updatedOrders = [...state.orders]
            updatedOrders[targetOrderIndex] = {
              ...targetOrder,
              progress: newOrderProgress,
            }
            return {
              bakingProgress: 0,
              showProduct: true,
              orders: updatedOrders,
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
