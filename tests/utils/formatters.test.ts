import { describe, it, expect } from 'vitest'
import { formatMoney } from '../../src/utils/formatters'

describe('formatMoney', () => {
  it('should format whole numbers correctly', () => {
    expect(formatMoney(0)).toBe('$0')
    expect(formatMoney(100)).toBe('$100')
    expect(formatMoney(1000)).toBe('$1,000')
    expect(formatMoney(1000000)).toBe('$1,000,000')
  })

  it('should handle negative numbers', () => {
    expect(formatMoney(-50)).toBe('-$50')
    expect(formatMoney(-1000)).toBe('-$1,000')
  })

  it('should handle decimal numbers (rounds to whole)', () => {
    expect(formatMoney(99.5)).toBe('$100')
    expect(formatMoney(99.4)).toBe('$99')
    expect(formatMoney(99.9)).toBe('$100')
  })
})
