import type { GameState, Customer, Order, SetState } from '@/store/types'
import { customerNames, orderTypes } from '@/data/gameData'
import {
  PROMOTION_COST,
  MIN_CUSTOMERS_PER_PROMOTION,
  MAX_CUSTOMERS_PER_PROMOTION,
  MIN_ORDERS_PER_CUSTOMER,
  MAX_ORDERS_PER_CUSTOMER,
} from '@/constants/customerConstants'

const getNextCustomerId = (state: GameState): number => {
  const allIds = state.customers
    .map((c) => parseInt(c.id, 10))
    .filter((id) => !isNaN(id))
  return allIds.length > 0 ? Math.max(...allIds) + 1 : 1
}

export const createPromotionActions = (set: SetState<GameState>) => ({
  launchPromotion: () => {
    set((state) => {
      // Check that there are no active customers and there is enough money
      if (state.customers.length > 0 || state.money < PROMOTION_COST) {
        return state
      }

      // Generate random number of customers (MIN_CUSTOMERS_PER_PROMOTION to MAX_CUSTOMERS_PER_PROMOTION)
      const customerRange =
        MAX_CUSTOMERS_PER_PROMOTION - MIN_CUSTOMERS_PER_PROMOTION + 1
      const numCustomers =
        Math.floor(Math.random() * customerRange) + MIN_CUSTOMERS_PER_PROMOTION
      const newCustomers: Customer[] = []
      let nextCustomerId = getNextCustomerId(state)

      for (let i = 0; i < numCustomers; i++) {
        // Select random name
        const nameIndex = Math.floor(Math.random() * customerNames.length)
        const customerName = customerNames[nameIndex]

        // Generate random number of orders (MIN_ORDERS_PER_CUSTOMER to MAX_ORDERS_PER_CUSTOMER)
        const orderRange = MAX_ORDERS_PER_CUSTOMER - MIN_ORDERS_PER_CUSTOMER + 1
        const numOrders =
          Math.floor(Math.random() * orderRange) + MIN_ORDERS_PER_CUSTOMER
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
        money: state.money - PROMOTION_COST,
      }
    })
  },
})
