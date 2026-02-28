import type { GameState, Customer, Order, SetState } from '@/store/types'
import { BAKING_PROGRESS_THRESHOLD } from '@/constants/bakingConstants'

export const createBakingActions = (set: SetState<GameState>) => ({
  increaseBakingProgress: (amount: number) => {
    set((state) => {
      if (!validateBakingState(state)) return state

      const currentCustomer = state.customers[0]
      const progressAmount = amount
      const newProgress = state.bakingProgress + progressAmount

      if (newProgress >= BAKING_PROGRESS_THRESHOLD) {
        const customerOrders = currentCustomer.orders
        const targetOrder = findTargetOrder(customerOrders)
        const targetOrderIndex = findTargetOrderIndex(
          customerOrders,
          targetOrder,
        )

        if (targetOrder && !targetOrder.isInactive) {
          return completeOrder(
            state,
            customerOrders,
            targetOrder,
            targetOrderIndex,
          )
        }

        return createCompletedBakingResult(
          state,
          state.totalProductsCreated + 1,
        )
      }

      return { bakingProgress: newProgress }
    })
  },

  hideProduct: () => {
    set(() => ({
      showProduct: false,
    }))
  },
})

const validateBakingState = (state: GameState): boolean => {
  if (state.isPaused) return false
  if (!state.customers[0] || state.customers[0].orders.length === 0)
    return false
  return true
}

const findTargetOrder = (orders: Order[]) => {
  const prioritizedOrder = orders.find(
    (order) => order.isPrioritized && !order.isInactive,
  )
  return prioritizedOrder || orders[0]
}

const findTargetOrderIndex = (orders: Order[], targetOrder: Order) => {
  return orders.findIndex((order) => order.id === targetOrder?.id)
}

const updateOrderProgress = (
  orders: Order[],
  targetOrder: Order,
  targetOrderIndex: number,
  newOrderProgress: number,
): Order[] => {
  const updatedOrders = [...orders]
  updatedOrders[targetOrderIndex] = {
    ...targetOrder,
    progress: newOrderProgress,
  }
  return updatedOrders
}

const updateCustomerOrders = (
  customers: Customer[],
  customerIndex: number,
  updatedOrders: Order[],
): Customer[] => {
  const updatedCustomers = [...customers]
  updatedCustomers[customerIndex] = {
    ...customers[customerIndex],
    orders: updatedOrders,
  }
  return updatedCustomers
}

const createCompletedBakingResult = (
  state: GameState,
  newTotalProducts: number,
  additionalUpdates?: {
    customers?: Customer[]
    money?: number
  },
) => ({
  bakingProgress: 0,
  showProduct: true,
  customers: additionalUpdates?.customers ?? state.customers,
  money: additionalUpdates?.money ?? state.money,
  totalProductsCreated: newTotalProducts,
})

const completeOrder = (
  state: GameState,
  customerOrders: Order[],
  targetOrder: Order,
  targetOrderIndex: number,
): Partial<GameState> => {
  const newOrderProgress = targetOrder.progress + 1
  const newTotalProducts = state.totalProductsCreated + 1

  if (newOrderProgress >= targetOrder.maxProgress) {
    const updatedOrders = customerOrders.filter(
      (_, index) => index !== targetOrderIndex,
    )

    if (updatedOrders.length === 0) {
      return createCompletedBakingResult(state, newTotalProducts, {
        customers: state.customers.slice(1),
        money: state.money + targetOrder.price,
      })
    }

    const updatedCustomers = updateCustomerOrders(
      state.customers,
      0,
      updatedOrders,
    )
    return createCompletedBakingResult(state, newTotalProducts, {
      customers: updatedCustomers,
      money: state.money + targetOrder.price,
    })
  }

  const updatedOrders = updateOrderProgress(
    customerOrders,
    targetOrder,
    targetOrderIndex,
    newOrderProgress,
  )
  const updatedCustomers = updateCustomerOrders(
    state.customers,
    0,
    updatedOrders,
  )
  return createCompletedBakingResult(state, newTotalProducts, {
    customers: updatedCustomers,
  })
}
