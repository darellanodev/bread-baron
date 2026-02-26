import { describe, it, expect, vi } from 'vitest'
import { createOrderActions } from '../../../src/store/actions/orderActions'

describe('createOrderActions', () => {
  describe('updateOrderProgress', () => {
    it('should increase progress of specified order', () => {
      const mockSet = vi.fn()
      const actions = createOrderActions(mockSet)

      actions.updateOrderProgress('order-1')

      expect(mockSet).toHaveBeenCalledWith(expect.any(Function))
      const setFn = mockSet.mock.calls[0][0]
      const state = {
        customers: [
          {
            id: 'c1',
            name: 'Customer 1',
            orders: [
              { id: 'order-1', progress: 2, maxProgress: 5 },
              { id: 'order-2', progress: 0, maxProgress: 3 },
            ],
          },
        ],
      }
      const result = setFn(state)
      expect(result.customers[0].orders[0].progress).toBe(3)
      expect(result.customers[0].orders[1].progress).toBe(0)
    })

    it('should return same state if no customers', () => {
      const mockSet = vi.fn()
      const actions = createOrderActions(mockSet)

      actions.updateOrderProgress('order-1')

      const setFn = mockSet.mock.calls[0][0]
      const result = setFn({ customers: [] })
      expect(result).toEqual({ customers: [] })
    })
  })

  describe('completeOrder', () => {
    it('should remove completed order and add money', () => {
      const mockSet = vi.fn()
      const actions = createOrderActions(mockSet)

      actions.completeOrder('order-1')

      const setFn = mockSet.mock.calls[0][0]
      const state = {
        customers: [
          {
            id: 'c1',
            name: 'Customer 1',
            orders: [
              { id: 'order-1', progress: 5, maxProgress: 5, price: 100 },
              { id: 'order-2', progress: 2, maxProgress: 5, price: 50 },
            ],
          },
        ],
        money: 200,
      }
      const result = setFn(state)
      expect(result.customers[0].orders.length).toBe(1)
      expect(result.customers[0].orders[0].id).toBe('order-2')
      expect(result.money).toBe(300)
    })

    it('should remove customer if no orders remain', () => {
      const mockSet = vi.fn()
      const actions = createOrderActions(mockSet)

      actions.completeOrder('order-1')

      const setFn = mockSet.mock.calls[0][0]
      const state = {
        customers: [
          {
            id: 'c1',
            name: 'Customer 1',
            orders: [
              { id: 'order-1', progress: 5, maxProgress: 5, price: 100 },
            ],
          },
        ],
        money: 200,
      }
      const result = setFn(state)
      expect(result.customers.length).toBe(0)
      expect(result.money).toBe(300)
    })

    it('should return same state if order not found', () => {
      const mockSet = vi.fn()
      const actions = createOrderActions(mockSet)

      actions.completeOrder('non-existent')

      const setFn = mockSet.mock.calls[0][0]
      const state = {
        customers: [
          {
            id: 'c1',
            name: 'Customer 1',
            orders: [
              { id: 'order-1', progress: 2, maxProgress: 5, price: 100 },
            ],
          },
        ],
        money: 200,
      }
      const result = setFn(state)
      expect(result).toBe(state)
    })
  })

  describe('prioritizeOrder', () => {
    it('should set isPrioritized to true for target order', () => {
      const mockSet = vi.fn()
      const actions = createOrderActions(mockSet)

      actions.prioritizeOrder('order-2')

      const setFn = mockSet.mock.calls[0][0]
      const state = {
        customers: [
          {
            id: 'c1',
            name: 'Customer 1',
            orders: [
              {
                id: 'order-1',
                progress: 2,
                maxProgress: 5,
                isPrioritized: false,
              },
              {
                id: 'order-2',
                progress: 2,
                maxProgress: 5,
                isPrioritized: false,
              },
            ],
          },
        ],
      }
      const result = setFn(state)
      expect(result.customers[0].orders[0].isPrioritized).toBe(false)
      expect(result.customers[0].orders[1].isPrioritized).toBe(true)
    })

    it('should unprioritize other orders when prioritizing', () => {
      const mockSet = vi.fn()
      const actions = createOrderActions(mockSet)

      actions.prioritizeOrder('order-2')

      const setFn = mockSet.mock.calls[0][0]
      const state = {
        customers: [
          {
            id: 'c1',
            name: 'Customer 1',
            orders: [
              {
                id: 'order-1',
                progress: 2,
                maxProgress: 5,
                isPrioritized: true,
              },
              {
                id: 'order-2',
                progress: 2,
                maxProgress: 5,
                isPrioritized: false,
              },
            ],
          },
        ],
      }
      const result = setFn(state)
      expect(result.customers[0].orders[0].isPrioritized).toBe(false)
    })

    it('should return same state if order already prioritized', () => {
      const mockSet = vi.fn()
      const actions = createOrderActions(mockSet)

      actions.prioritizeOrder('order-1')

      const setFn = mockSet.mock.calls[0][0]
      const state = {
        customers: [
          {
            id: 'c1',
            name: 'Customer 1',
            orders: [
              {
                id: 'order-1',
                progress: 2,
                maxProgress: 5,
                isPrioritized: true,
              },
            ],
          },
        ],
      }
      const result = setFn(state)
      expect(result).toBe(state)
    })

    it('should return same state if no customers', () => {
      const mockSet = vi.fn()
      const actions = createOrderActions(mockSet)

      actions.prioritizeOrder('order-1')

      const setFn = mockSet.mock.calls[0][0]
      const result = setFn({ customers: [] })
      expect(result).toEqual({ customers: [] })
    })
  })
})
