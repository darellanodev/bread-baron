import { describe, it, expect, vi } from 'vitest'
import { createBakingActions } from '../../../src/store/actions/bakingActions'

describe('createBakingActions', () => {
  describe('increaseBakingProgress', () => {
    it('should return same state when game is paused', () => {
      const mockSet = vi.fn()
      const actions = createBakingActions(mockSet)

      actions.increaseBakingProgress(5)

      const setFn = mockSet.mock.calls[0][0]
      const state = {
        isPaused: true,
        customers: [
          { id: 'c1', orders: [{ id: 'o1', progress: 0, maxProgress: 5 }] },
        ],
        bakingProgress: 0,
        totalProductsCreated: 0,
      }
      const result = setFn(state)
      expect(result).toBe(state)
    })

    it('should return same state when no customers', () => {
      const mockSet = vi.fn()
      const actions = createBakingActions(mockSet)

      actions.increaseBakingProgress(5)

      const setFn = mockSet.mock.calls[0][0]
      const state = {
        isPaused: false,
        customers: [],
        bakingProgress: 0,
        totalProductsCreated: 0,
      }
      const result = setFn(state)
      expect(result).toBe(state)
    })

    it('should return same state when customer has no orders', () => {
      const mockSet = vi.fn()
      const actions = createBakingActions(mockSet)

      actions.increaseBakingProgress(5)

      const setFn = mockSet.mock.calls[0][0]
      const state = {
        isPaused: false,
        customers: [{ id: 'c1', orders: [] }],
        bakingProgress: 0,
        totalProductsCreated: 0,
      }
      const result = setFn(state)
      expect(result).toBe(state)
    })

    it('should increase baking progress by custom amount', () => {
      const mockSet = vi.fn()
      const actions = createBakingActions(mockSet)

      actions.increaseBakingProgress(25)

      const setFn = mockSet.mock.calls[0][0]
      const state = {
        isPaused: false,
        customers: [
          { id: 'c1', orders: [{ id: 'o1', progress: 0, maxProgress: 5 }] },
        ],
        bakingProgress: 0,
        totalProductsCreated: 0,
        showProduct: false,
        money: 100,
      }
      const result = setFn(state)
      expect(result.bakingProgress).toBe(25)
    })

    it('should complete order and remove customer when no orders remain', () => {
      const mockSet = vi.fn()
      const actions = createBakingActions(mockSet)

      actions.increaseBakingProgress(5)

      const setFn = mockSet.mock.calls[0][0]
      const state = {
        isPaused: false,
        customers: [
          {
            id: 'c1',
            orders: [{ id: 'o1', progress: 4, maxProgress: 5, price: 50 }],
          },
          {
            id: 'c2',
            orders: [{ id: 'o2', progress: 0, maxProgress: 5, price: 30 }],
          },
        ],
        bakingProgress: 95,
        totalProductsCreated: 0,
        showProduct: false,
        money: 100,
      }
      const result = setFn(state)
      expect(result.bakingProgress).toBe(0)
      expect(result.showProduct).toBe(true)
      expect(result.totalProductsCreated).toBe(1)
      expect(result.money).toBe(150)
      expect(result.customers.length).toBe(1)
      expect(result.customers[0].id).toBe('c2')
    })

    it('should prioritize order when target order is prioritized', () => {
      const mockSet = vi.fn()
      const actions = createBakingActions(mockSet)

      actions.increaseBakingProgress(5)

      const setFn = mockSet.mock.calls[0][0]
      const state = {
        isPaused: false,
        customers: [
          {
            id: 'c1',
            orders: [
              { id: 'o1', progress: 0, maxProgress: 5, isPrioritized: false },
              { id: 'o2', progress: 0, maxProgress: 5, isPrioritized: true },
            ],
          },
        ],
        bakingProgress: 95,
        totalProductsCreated: 0,
        showProduct: false,
        money: 100,
      }
      const result = setFn(state)
      expect(result.customers[0].orders[0].progress).toBe(0)
      expect(result.customers[0].orders[1].progress).toBe(1)
    })

    it('should not process inactive prioritized order and create product only', () => {
      const mockSet = vi.fn()
      const actions = createBakingActions(mockSet)

      actions.increaseBakingProgress(5)

      const setFn = mockSet.mock.calls[0][0]
      const state = {
        isPaused: false,
        customers: [
          {
            id: 'c1',
            orders: [
              {
                id: 'o1',
                progress: 0,
                maxProgress: 5,
                isPrioritized: true,
                isInactive: true,
              },
              {
                id: 'o2',
                progress: 0,
                maxProgress: 5,
                isPrioritized: false,
                isInactive: false,
              },
            ],
          },
        ],
        bakingProgress: 95,
        totalProductsCreated: 0,
        showProduct: false,
        money: 100,
      }
      const result = setFn(state)
      expect(result.customers[0].orders[0].progress).toBe(0)
      expect(result.customers[0].orders[1].progress).toBe(0)
      expect(result.bakingProgress).toBe(0)
      expect(result.showProduct).toBe(true)
      expect(result.totalProductsCreated).toBe(1)
    })

    it('should create product without completing order when target order is inactive', () => {
      const mockSet = vi.fn()
      const actions = createBakingActions(mockSet)

      actions.increaseBakingProgress(5)

      const setFn = mockSet.mock.calls[0][0]
      const state = {
        isPaused: false,
        customers: [
          {
            id: 'c1',
            orders: [
              { id: 'o1', progress: 0, maxProgress: 5, isInactive: true },
            ],
          },
        ],
        bakingProgress: 95,
        totalProductsCreated: 0,
        showProduct: false,
        money: 100,
      }
      const result = setFn(state)
      expect(result.bakingProgress).toBe(0)
      expect(result.showProduct).toBe(true)
      expect(result.totalProductsCreated).toBe(1)
      expect(result.money).toBe(100)
      expect(result.customers[0].orders.length).toBe(1)
    })
  })

  describe('hideProduct', () => {
    it('should set showProduct to false', () => {
      const mockSet = vi.fn()
      const actions = createBakingActions(mockSet)

      actions.hideProduct()

      expect(mockSet).toHaveBeenCalledWith(expect.any(Function))
      const setFn = mockSet.mock.calls[0][0]
      const result = setFn({ showProduct: true })
      expect(result.showProduct).toBe(false)
    })
  })
})
