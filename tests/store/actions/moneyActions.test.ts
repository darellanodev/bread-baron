import { describe, it, expect, vi } from 'vitest'
import { createMoneyActions } from '../../../src/store/actions/moneyActions'

describe('createMoneyActions', () => {
  it('should call set with function that adds amount to money', () => {
    const mockSet = vi.fn()
    const actions = createMoneyActions(mockSet)

    actions.updateMoney(50)

    expect(mockSet).toHaveBeenCalledWith(expect.any(Function))
    const setFn = mockSet.mock.calls[0][0]
    const result = setFn({ money: 100 })
    expect(result).toEqual({ money: 150 })
  })

  it('should handle negative amounts', () => {
    const mockSet = vi.fn()
    const actions = createMoneyActions(mockSet)

    actions.updateMoney(-25)

    const setFn = mockSet.mock.calls[0][0]
    const result = setFn({ money: 100 })
    expect(result).toEqual({ money: 75 })
  })
})
