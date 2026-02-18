export interface IndustryLevelConfig {
  level: number
  maxWorkers: number
  upgradePrice: number
  name: string
}

export const INDUSTRY_LEVELS: IndustryLevelConfig[] = [
  { level: 1, maxWorkers: 10, upgradePrice: 0, name: 'Home Kitchen' },
  {
    level: 2,
    maxWorkers: 20,
    upgradePrice: 200000,
    name: 'Neighborhood Bakery',
  },
  { level: 3, maxWorkers: 40, upgradePrice: 500000, name: 'City Chain' },
  { level: 4, maxWorkers: 80, upgradePrice: 1000000, name: 'Regional Empire' },
  { level: 5, maxWorkers: 150, upgradePrice: 20000000, name: 'Global Brand' },
]

export const MAX_INDUSTRY_LEVEL = INDUSTRY_LEVELS.length
