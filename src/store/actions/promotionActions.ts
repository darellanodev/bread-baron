import type { GameState, Customer, Order, SetState } from '@/store/types'
import { customerNames, orderTypes } from '@/data/gameData'
import {
  PROMOTION_COST,
  MIN_CUSTOMERS_PER_PROMOTION,
  MAX_CUSTOMERS_PER_PROMOTION,
  MIN_ORDERS_PER_CUSTOMER,
  MAX_ORDERS_PER_CUSTOMER,
} from '@/constants/customerConstants'

export const createPromotionActions = (set: SetState<GameState>) => ({
  launchPromotion: () => {
    set((state) => {
      if (!validatePromotionState(state)) {
        return state
      }

      const newCustomers = generateCustomers(state)

      return {
        customers: newCustomers,
        money: state.money - PROMOTION_COST,
      }
    })
  },
})

const getNextCustomerId = (state: GameState): number => {
  const allIds = state.customers
    .map((c) => parseInt(c.id, 10))
    .filter((id) => !isNaN(id))
  return allIds.length > 0 ? Math.max(...allIds) + 1 : 1
}

const validatePromotionState = (state: GameState): boolean => {
  if (state.customers.length > 0 || state.money < PROMOTION_COST) {
    return false
  }
  return true
}

const getRandomInRange = (min: number, max: number): number => {
  return Math.floor(Math.random() * (max - min + 1)) + min
}

const getRandomItem = <T>(items: T[]): T => {
  return items[Math.floor(Math.random() * items.length)]
}

const createOrder = (customerId: string, orderIndex: number): Order => {
  const orderTemplate = getRandomItem(orderTypes)
  return {
    ...orderTemplate,
    id: `c${customerId}-${orderIndex}`,
    progress: 0,
  }
}

const createCustomer = (customerId: number): Customer => {
  const numOrders = getRandomInRange(
    MIN_ORDERS_PER_CUSTOMER,
    MAX_ORDERS_PER_CUSTOMER,
  )
  const orders = Array.from({ length: numOrders }, (_, i) =>
    createOrder(String(customerId), i + 1),
  )
  return {
    id: String(customerId),
    name: getRandomItem(customerNames),
    totalOrders: numOrders,
    orders,
  }
}

const generateCustomers = (state: GameState): Customer[] => {
  const numCustomers = getRandomInRange(
    MIN_CUSTOMERS_PER_PROMOTION,
    MAX_CUSTOMERS_PER_PROMOTION,
  )
  let nextCustomerId = getNextCustomerId(state)
  const customers: Customer[] = []

  for (let i = 0; i < numCustomers; i++) {
    customers.push(createCustomer(nextCustomerId))
    nextCustomerId++
  }

  return customers
}
