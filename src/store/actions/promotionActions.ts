import type { GameState, Customer, Order, SetState } from '../types'
import { customerNames, orderTypes } from '../../data/gameData'

let nextCustomerId = 4

export const createPromotionActions = (set: SetState<GameState>) => ({
  launchPromotion: () => {
    set((state) => {
      // Check that there are no active customers and there is enough money
      if (state.customers.length > 0 || state.money < 500) {
        return state
      }

      // Generate random number of customers (2-5)
      const numCustomers = Math.floor(Math.random() * 4) + 2
      const newCustomers: Customer[] = []

      for (let i = 0; i < numCustomers; i++) {
        // Select random name
        const nameIndex = Math.floor(Math.random() * customerNames.length)
        const customerName = customerNames[nameIndex]

        // Generate random number of orders (1-4)
        const numOrders = Math.floor(Math.random() * 4) + 1
        const orders: Order[] = []

        for (let j = 0; j < numOrders; j++) {
          // Select random order type
          const orderIndex = Math.floor(Math.random() * orderTypes.length)
          const orderTemplate = orderTypes[orderIndex]

          orders.push({
            ...orderTemplate,
            id: `c${nextCustomerId}-${j + 1}`,
            progress: 0,
          })
        }

        newCustomers.push({
          id: String(nextCustomerId),
          name: customerName,
          totalOrders: numOrders,
          orders,
        })

        nextCustomerId++
      }

      return {
        customers: newCustomers,
        money: state.money - 500,
      }
    })
  },
})
