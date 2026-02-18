import type { GameState, SetState } from '@/store/types'
import {
  DEFAULT_BAKING_PROGRESS_INCREMENT,
  BAKING_PROGRESS_THRESHOLD,
} from '@/constants/bakingConstants'

export const createBakingActions = (set: SetState<GameState>) => ({
  increaseBakingProgress: (amount?: number) => {
    set((state) => {
      // Don't allow progress when game is paused
      if (state.isPaused) return state

      // Get current customer and their orders
      const currentCustomer = state.customers[0]
      if (!currentCustomer || currentCustomer.orders.length === 0) {
        return state
      }

      const progressAmount = amount ?? DEFAULT_BAKING_PROGRESS_INCREMENT
      const newProgress = state.bakingProgress + progressAmount
      if (newProgress >= BAKING_PROGRESS_THRESHOLD) {
        const customerOrders = currentCustomer.orders

        // Find prioritized order, or use the first one if none is prioritized
        const prioritizedOrder = customerOrders.find(
          (order) => order.isPrioritized && !order.isInactive,
        )
        const targetOrder = prioritizedOrder || customerOrders[0]
        const targetOrderIndex = customerOrders.findIndex(
          (order) => order.id === targetOrder?.id,
        )

        if (targetOrder && !targetOrder.isInactive) {
          const newOrderProgress = targetOrder.progress + 1

          if (newOrderProgress >= targetOrder.maxProgress) {
            // Remove completed order from current customer
            const updatedOrders = customerOrders.filter(
              (_, index) => index !== targetOrderIndex,
            )

            // Check if customer has no more orders
            if (updatedOrders.length === 0) {
              // Remove the customer and move to the next one
              const updatedCustomers = state.customers.slice(1)
              return {
                bakingProgress: 0,
                showProduct: true,
                customers: updatedCustomers,
                money: state.money + targetOrder.price,
                totalProductsCreated: state.totalProductsCreated + 1,
              }
            } else {
              // Update current customer's orders
              const updatedCustomers = [...state.customers]
              updatedCustomers[0] = {
                ...currentCustomer,
                orders: updatedOrders,
              }
              return {
                bakingProgress: 0,
                showProduct: true,
                customers: updatedCustomers,
                money: state.money + targetOrder.price,
                totalProductsCreated: state.totalProductsCreated + 1,
              }
            }
          } else {
            // Update order progress
            const updatedOrders = [...customerOrders]
            updatedOrders[targetOrderIndex] = {
              ...targetOrder,
              progress: newOrderProgress,
            }

            const updatedCustomers = [...state.customers]
            updatedCustomers[0] = {
              ...currentCustomer,
              orders: updatedOrders,
            }

            return {
              bakingProgress: 0,
              showProduct: true,
              customers: updatedCustomers,
              totalProductsCreated: state.totalProductsCreated + 1,
            }
          }
        }
        return {
          bakingProgress: 0,
          showProduct: true,
          totalProductsCreated: state.totalProductsCreated + 1,
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
