import { describe, it, expect, vi } from 'vitest'
import { createPauseActions } from '../../../src/store/actions/pauseActions'

describe('createPauseActions', () => {
  it('should toggle isPaused from false to true', () => {
    const mockSet = vi.fn()
    const actions = createPauseActions(mockSet)

    actions.togglePause()

    expect(mockSet).toHaveBeenCalledWith(expect.any(Function))
    const setFn = mockSet.mock.calls[0][0]
    const result = setFn({ isPaused: false })
    expect(result).toEqual({ isPaused: true })
  })

  it('should toggle isPaused from true to false', () => {
    const mockSet = vi.fn()
    const actions = createPauseActions(mockSet)

    actions.togglePause()

    const setFn = mockSet.mock.calls[0][0]
    const result = setFn({ isPaused: true })
    expect(result).toEqual({ isPaused: false })
  })
})
