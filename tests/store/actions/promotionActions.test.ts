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
import { orderTypes } from '../../../src/data/gameData'

describe('createPromotionActions', () => {
  beforeEach(() => {
    vi.clearAllMocks()
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

      ;(getRandomInRange as ReturnType<typeof vi.fn>)
        .mockImplementationOnce(() => 3) // numCustomers
        .mockImplementationOnce(() => 2) // numOrders per customer (called 3 times)
        .mockImplementationOnce(() => 2)
        .mockImplementationOnce(() => 2)
      ;(getRandomItem as ReturnType<typeof vi.fn>)
        .mockImplementationOnce(() => 'Alice') // customer name (called 3 times)
        .mockImplementationOnce(() => 'Bob')
        .mockImplementationOnce(() => 'Alice')
        .mockImplementationOnce(() => orderTypes[0]) // order type (called 6 times)
        .mockImplementationOnce(() => orderTypes[0])
        .mockImplementationOnce(() => orderTypes[0])
        .mockImplementationOnce(() => orderTypes[0])
        .mockImplementationOnce(() => orderTypes[0])
        .mockImplementationOnce(() => orderTypes[0])

      actions.launchPromotion()

      expect(mockSet).toHaveBeenCalledWith(expect.any(Function))
      const setFn = mockSet.mock.calls[0][0]
      const state = {
        customers: [],
        money: 1000,
      }
      const result = setFn(state)

      expect(result.customers.length).toBe(3)
      expect(result.customers[0].name).toBe('Alice')
      expect(result.customers[0].totalOrders).toBe(2)
      expect(result.customers[0].orders.length).toBe(2)
      expect(result.customers[0].orders[0].progress).toBe(0)
      expect(result.money).toBe(500)
    })

    it('should generate unique customer IDs starting from 1', () => {
      const mockSet = vi.fn()
      const actions = createPromotionActions(mockSet)

      ;(getRandomInRange as ReturnType<typeof vi.fn>)
        .mockImplementationOnce(() => 2)
        .mockImplementationOnce(() => 1)
      ;(getRandomItem as ReturnType<typeof vi.fn>)
        .mockImplementationOnce(() => 'Bob')
        .mockImplementationOnce(() => orderTypes[1])

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

    it('should generate next customer ID from max existing ID', () => {
      const mockSet = vi.fn()
      const actions = createPromotionActions(mockSet)

      ;(getRandomInRange as ReturnType<typeof vi.fn>)
        .mockImplementationOnce(() => 1)
        .mockImplementationOnce(() => 1)
      ;(getRandomItem as ReturnType<typeof vi.fn>)
        .mockImplementationOnce(() => 'Alice')
        .mockImplementationOnce(() => orderTypes[0])

      actions.launchPromotion()

      const setFn = mockSet.mock.calls[0][0]
      const state = {
        customers: [],
        money: 1000,
      }
      const result = setFn(state)

      expect(result.customers[0].id).toBe('1')
    })
  })
})
