import { describe, it, expect } from 'vitest'
import { sum, multiply } from '../../src/utils/math'

describe('Math utils', () => {
  it('should sum two numbers correctly', () => {
    expect(sum(2, 3)).toBe(5)
    expect(sum(-1, 1)).toBe(0)
    expect(sum(0, 0)).toBe(0)
  })

  it('should multiply two numbers correctly', () => {
    expect(multiply(2, 3)).toBe(6)
    expect(multiply(-2, 3)).toBe(-6)
    expect(multiply(0, 5)).toBe(0)
  })
})
