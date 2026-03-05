import { describe, it, expect, vi } from 'vitest'
import { createTimeActions } from '../../../src/store/actions/timeActions'
import { DEBT_INTEREST_RATE } from '../../../src/constants/timeConstants'

describe('createTimeActions', () => {
  describe('nextDay', () => {
    it('should not advance day when game is paused', () => {
      const mockSet = vi.fn()
      const actions = createTimeActions(mockSet)

      actions.nextDay()

      expect(mockSet).toHaveBeenCalledWith(expect.any(Function))
      const setFn = mockSet.mock.calls[0][0]
      const state = {
        isPaused: true,
        currentDay: 10,
        currentYear: 1,
        money: 1000,
        dailyMoneyHistory: [],
        workers: [],
      }
      const result = setFn(state)
      expect(result).toBe(state)
    })

    it('should advance day and deduct operational cost', () => {
      const mockSet = vi.fn()
      const actions = createTimeActions(mockSet)

      actions.nextDay()

      expect(mockSet).toHaveBeenCalledWith(expect.any(Function))
      const setFn = mockSet.mock.calls[0][0]
      const state = {
        isPaused: false,
        currentDay: 10,
        currentYear: 1,
        money: 1000,
        dailyMoneyHistory: [],
        workers: [],
        activeDebt: 25000,
      }
      const result = setFn(state)
      expect(result.currentDay).toBe(11)
      expect(result.money).toBe(990)
      expect(result.dailyMoneyHistory.length).toBe(1)
      expect(result.dailyMoneyHistory[0]).toEqual({ day: 10, money: 1000 })
    })

    it('should reset day and increment year when reaching end of year', () => {
      const mockSet = vi.fn()
      const actions = createTimeActions(mockSet)

      actions.nextDay()

      expect(mockSet).toHaveBeenCalledWith(expect.any(Function))
      const setFn = mockSet.mock.calls[0][0]
      const state = {
        isPaused: false,
        currentDay: 365,
        currentYear: 1,
        money: 1000,
        dailyMoneyHistory: [{ day: 364, money: 900 }],
        workers: [],
        activeDebt: 25000,
      }
      const result = setFn(state)
      expect(result.currentDay).toBe(1)
      expect(result.currentYear).toBe(2)
      expect(result.dailyMoneyHistory).toEqual([])
      expect(result.money).toBe(990)
    })

    it('should remove workers with no days remaining', () => {
      const mockSet = vi.fn()
      const actions = createTimeActions(mockSet)

      actions.nextDay()

      const setFn = mockSet.mock.calls[0][0]
      const state = {
        isPaused: false,
        currentDay: 10,
        currentYear: 1,
        money: 1000,
        dailyMoneyHistory: [],
        workers: [
          { id: 'w1', name: 'Worker 1', daysRemaining: 1 },
          { id: 'w2', name: 'Worker 2', daysRemaining: 5 },
        ],
      }
      const result = setFn(state)
      expect(result.workers.length).toBe(1)
      expect(result.workers[0].id).toBe('w2')
    })
  })
})
