import type { GameState, Customer, Order, SetState } from '../types'
import { customerNames, orderTypes } from '../../data/gameData'

let nextCustomerId = 4

export const createPromotionActions = (set: SetState<GameState>) => ({
  launchPromotion: () => {
    set((state) => {
      // Verificar que no haya customers activos y que haya suficiente dinero
      if (state.customers.length > 0 || state.money < 500) {
        return state
      }

      // Generar número aleatorio de customers (2-5)
      const numCustomers = Math.floor(Math.random() * 4) + 2
      const newCustomers: Customer[] = []

      for (let i = 0; i < numCustomers; i++) {
        // Seleccionar nombre aleatorio
        const nameIndex = Math.floor(Math.random() * customerNames.length)
        const customerName = customerNames[nameIndex]

        // Generar número aleatorio de órdenes (1-4)
        const numOrders = Math.floor(Math.random() * 4) + 1
        const orders: Order[] = []

        for (let j = 0; j < numOrders; j++) {
          // Seleccionar tipo de orden aleatorio
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
