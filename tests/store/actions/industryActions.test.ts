import { describe, it, expect, vi } from 'vitest'
import { createIndustryActions } from '../../../src/store/actions/industryActions'

describe('createIndustryActions', () => {
  describe('upgradeOven', () => {
    it('should upgrade oven and deduct money', () => {
      const mockSet = vi.fn()
      const actions = createIndustryActions(mockSet)

      actions.upgradeOven()

      expect(mockSet).toHaveBeenCalledWith(expect.any(Function))
      const setFn = mockSet.mock.calls[0][0]
      const state = {
        ovenLevel: 1,
        maxWorkers: 10,
        money: 300000,
      }
      const result = setFn(state)
      expect(result.ovenLevel).toBe(2)
      expect(result.maxWorkers).toBe(20)
      expect(result.money).toBe(100000)
    })

    it('should not upgrade if max level reached', () => {
      const mockSet = vi.fn()
      const actions = createIndustryActions(mockSet)

      actions.upgradeOven()

      const setFn = mockSet.mock.calls[0][0]
      const state = {
        ovenLevel: 5,
        maxWorkers: 150,
        money: 100000000,
      }
      const result = setFn(state)
      expect(result).toBe(state)
    })

    it('should not upgrade if insufficient money', () => {
      const mockSet = vi.fn()
      const actions = createIndustryActions(mockSet)

      actions.upgradeOven()

      const setFn = mockSet.mock.calls[0][0]
      const state = {
        ovenLevel: 1,
        maxWorkers: 2,
        money: 100,
      }
      const result = setFn(state)
      expect(result).toBe(state)
    })
  })
})
