import type { GameState, SetState } from '@/store/types'

export const createOrderActions = (set: SetState<GameState>) => ({
  updateOrderProgress: (orderId: string) => {
    set((state) => {
      const currentCustomer = state.customers[0]
      if (!currentCustomer) return state

      const updatedCustomers = [...state.customers]
      updatedCustomers[0] = {
        ...currentCustomer,
        orders: currentCustomer.orders.map((order) =>
          order.id === orderId
            ? { ...order, progress: order.progress + 1 }
            : order,
        ),
      }

      return { customers: updatedCustomers }
    })
  },

  completeOrder: (orderId: string) => {
    set((state) => {
      const currentCustomer = state.customers[0]
      if (!currentCustomer) return state

      const order = currentCustomer.orders.find((o) => o.id === orderId)
      if (!order) return state

      const updatedOrders = currentCustomer.orders.filter(
        (o) => o.id !== orderId,
      )

      // Check if customer has no more orders
      if (updatedOrders.length === 0) {
        // Remove the customer and move to the next one
        const updatedCustomers = state.customers.slice(1)
        return {
          customers: updatedCustomers,
          money: state.money + order.price,
        }
      }

      // Update current customer's orders
      const updatedCustomers = [...state.customers]
      updatedCustomers[0] = {
        ...currentCustomer,
        orders: updatedOrders,
      }

      return {
        customers: updatedCustomers,
        money: state.money + order.price,
      }
    })
  },

  prioritizeOrder: (orderId: string) => {
    set((state) => {
      const currentCustomer = state.customers[0]
      if (!currentCustomer) return state

      const targetOrder = currentCustomer.orders.find((o) => o.id === orderId)
      if (!targetOrder || targetOrder.isPrioritized) {
        // If already prioritized, do nothing (don't toggle off)
        return state
      }

      const updatedCustomers = [...state.customers]
      updatedCustomers[0] = {
        ...currentCustomer,
        orders: currentCustomer.orders.map((order) =>
          order.id === orderId
            ? { ...order, isPrioritized: true }
            : { ...order, isPrioritized: false },
        ),
      }

      return { customers: updatedCustomers }
    })
  },
})
