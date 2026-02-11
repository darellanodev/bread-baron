import type { GameState, SetState } from '../types'

// Oven/industry level configuration
export const INDUSTRY_LEVELS = [
  { level: 1, maxWorkers: 12, upgradePrice: 0, name: 'Home Kitchen' },
  {
    level: 2,
    maxWorkers: 15,
    upgradePrice: 200000,
    name: 'Neighborhood Bakery',
  },
  { level: 3, maxWorkers: 18, upgradePrice: 500000, name: 'City Chain' },
  { level: 4, maxWorkers: 21, upgradePrice: 1000000, name: 'Regional Empire' },
  { level: 5, maxWorkers: 25, upgradePrice: 20000000, name: 'Global Brand' },
]

export const createIndustryActions = (set: SetState<GameState>) => ({
  upgradeOven: () => {
    set((state) => {
      const currentLevel = state.ovenLevel
      const nextLevel = currentLevel + 1

      // Check that maximum level is not exceeded
      if (nextLevel > INDUSTRY_LEVELS.length) {
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
