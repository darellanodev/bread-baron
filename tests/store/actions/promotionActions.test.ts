import { describe, it, expect, vi, beforeEach } from 'vitest'
import { createPromotionActions } from '../../../src/store/actions/promotionActions'

vi.mock('../../../src/utils/randomUtils', () => ({
  getRandomInRange: vi.fn(),
  getRandomItem: vi.fn(),
}))

vi.mock('../../../src/data/gameData', () => ({
  customerNames: ['Alice', 'Bob'],
  orderTypes: [
    { type: 'bread', breadType: 'baguette', price: 5, bakingTime: 10 },
    { type: 'bread', breadType: 'croissant', price: 3, bakingTime: 8 },
  ],
}))

import { getRandomInRange, getRandomItem } from '../../../src/utils/randomUtils'

describe('createPromotionActions', () => {
  beforeEach(() => {
    vi.clearAllMocks()
    // Default mocks: always return min value for getRandomInRange, first element for getRandomItem
    ;(getRandomInRange as ReturnType<typeof vi.fn>).mockImplementation(
      (min: number) => min,
    )
    ;(getRandomItem as ReturnType<typeof vi.fn>).mockImplementation(
      (arr: unknown[]) => arr[0],
    )
  })

  describe('launchPromotion', () => {
    it('should not launch promotion when customers already exist', () => {
      const mockSet = vi.fn()
      const actions = createPromotionActions(mockSet)

      actions.launchPromotion()

      expect(mockSet).toHaveBeenCalledWith(expect.any(Function))
      const setFn = mockSet.mock.calls[0][0]
      const state = {
        customers: [{ id: '1', name: 'Existing', totalOrders: 1, orders: [] }],
        money: 1000,
      }
      const result = setFn(state)
      expect(result).toBe(state)
    })

    it('should not launch promotion when insufficient money', () => {
      const mockSet = vi.fn()
      const actions = createPromotionActions(mockSet)

      actions.launchPromotion()

      const setFn = mockSet.mock.calls[0][0]
      const state = {
        customers: [],
        money: 400,
      }
      const result = setFn(state)
      expect(result).toBe(state)
    })

    it('should launch promotion with valid state', () => {
      const mockSet = vi.fn()
      const actions = createPromotionActions(mockSet)

      actions.launchPromotion()

      const setFn = mockSet.mock.calls[0][0]
      const state = {
        customers: [],
        money: 1000,
      }
      const result = setFn(state)

      expect(result.customers.length).toBe(2) // MIN_CUSTOMERS_PER_PROMOTION = 2
      expect(result.customers[0].name).toBe('Alice')
      expect(result.customers[0].totalOrders).toBe(1) // MIN_ORDERS_PER_CUSTOMER = 1
      expect(result.customers[0].orders[0].progress).toBe(0)
      expect(result.money).toBe(500) // PROMOTION_COST
    })

    it('should generate unique customer IDs starting from 1', () => {
      const mockSet = vi.fn()
      const actions = createPromotionActions(mockSet)

      actions.launchPromotion()

      const setFn = mockSet.mock.calls[0][0]
      const state = {
        customers: [],
        money: 1000,
      }
      const result = setFn(state)

      expect(result.customers[0].id).toBe('1')
      expect(result.customers[1].id).toBe('2')
    })
  })
})
