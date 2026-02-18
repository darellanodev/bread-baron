import type { GameState, SetState } from '@/store/types'
import {
  INDUSTRY_LEVELS,
  MAX_INDUSTRY_LEVEL,
} from '@/constants/industryConstants'

export { INDUSTRY_LEVELS }

export const createIndustryActions = (set: SetState<GameState>) => ({
  upgradeOven: () => {
    set((state) => {
      const currentLevel = state.ovenLevel
      const nextLevel = currentLevel + 1

      // Check that maximum level is not exceeded
      if (nextLevel > MAX_INDUSTRY_LEVEL) {
        return state
      }

      const levelConfig = INDUSTRY_LEVELS[nextLevel - 1]

      // Check that there is enough money
      if (state.money < levelConfig.upgradePrice) {
        return state
      }

      return {
        ovenLevel: nextLevel,
        maxWorkers: levelConfig.maxWorkers,
        money: state.money - levelConfig.upgradePrice,
      }
    })
  },
})
