import type { GameState, SetState } from '../types'

export const createOrderActions = (set: SetState<GameState>) => ({
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
})
