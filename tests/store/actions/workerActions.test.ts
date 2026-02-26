import { describe, it, expect, vi } from 'vitest'
import { createWorkerActions } from '../../../src/store/actions/workerActions'

describe('createWorkerActions', () => {
  describe('hireWorker', () => {
    it('should hire worker and remove helper', () => {
      const mockSet = vi.fn()
      const actions = createWorkerActions(mockSet)

      actions.hireWorker('helper-1', 3)

      expect(mockSet).toHaveBeenCalledWith(expect.any(Function))
      const setFn = mockSet.mock.calls[0][0]
      const state = {
        workers: [],
        availableHelpers: [
          {
            id: 'helper-1',
            name: 'John',
            emoji: '👨‍🍳',
            hirePricePerMonth: 100,
            level: 1,
            productivity: 1.5,
          },
        ],
        maxWorkers: 5,
        money: 500,
      }
      const result = setFn(state)
      expect(result.workers.length).toBe(1)
      expect(result.workers[0].name).toBe('John')
      expect(result.workers[0].contractDuration).toBe(3)
      expect(result.workers[0].daysRemaining).toBe(90)
      expect(result.availableHelpers.length).toBe(0)
      expect(result.money).toBe(200)
    })

    it('should not hire if helper not found', () => {
      const mockSet = vi.fn()
      const actions = createWorkerActions(mockSet)

      actions.hireWorker('non-existent', 3)

      const setFn = mockSet.mock.calls[0][0]
      const state = {
        workers: [],
        availableHelpers: [],
        maxWorkers: 5,
        money: 500,
      }
      const result = setFn(state)
      expect(result).toBe(state)
    })

    it('should not hire if insufficient money', () => {
      const mockSet = vi.fn()
      const actions = createWorkerActions(mockSet)

      actions.hireWorker('helper-1', 3)

      const setFn = mockSet.mock.calls[0][0]
      const state = {
        workers: [],
        availableHelpers: [
          {
            id: 'helper-1',
            name: 'John',
            emoji: '👨‍🍳',
            hirePricePerMonth: 100,
            level: 1,
            productivity: 1.5,
          },
        ],
        maxWorkers: 5,
        money: 200,
      }
      const result = setFn(state)
      expect(result).toBe(state)
    })

    it('should not hire if max workers reached', () => {
      const mockSet = vi.fn()
      const actions = createWorkerActions(mockSet)

      actions.hireWorker('helper-1', 3)

      const setFn = mockSet.mock.calls[0][0]
      const state = {
        workers: [
          { id: 'w1', name: 'Worker 1', level: 1, productivity: 1 },
          { id: 'w2', name: 'Worker 2', level: 1, productivity: 1 },
        ],
        availableHelpers: [
          {
            id: 'helper-1',
            name: 'John',
            emoji: '👨‍🍳',
            hirePricePerMonth: 100,
            level: 1,
            productivity: 1.5,
          },
        ],
        maxWorkers: 2,
        money: 500,
      }
      const result = setFn(state)
      expect(result).toBe(state)
    })
  })

  describe('upgradeWorker', () => {
    it('should upgrade worker level and productivity', () => {
      const mockSet = vi.fn()
      const actions = createWorkerActions(mockSet)

      actions.upgradeWorker('worker-1')

      expect(mockSet).toHaveBeenCalledWith(expect.any(Function))
      const setFn = mockSet.mock.calls[0][0]
      const state = {
        workers: [
          {
            id: 'worker-1',
            name: 'John',
            emoji: '👨‍🍳',
            level: 1,
            productivity: 1.5,
            upgradePrice: 100,
            contractDuration: 3,
            daysRemaining: 90,
          },
        ],
      }
      const result = setFn(state)
      expect(result.workers[0].level).toBe(2)
      expect(result.workers[0].productivity).toBeCloseTo(1.8)
      expect(result.workers[0].upgradePrice).toBe(150)
    })
  })
})
