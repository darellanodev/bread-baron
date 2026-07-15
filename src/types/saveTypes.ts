import type { GameState } from '@/store/types'

export const SAVE_KEY = 'bread-baron-save'
export const SAVE_VERSION = 1
export const SAVE_INTERVAL_MS = 5000

type SaveableFields =
  | 'playerName'
  | 'money'
  | 'activeDebt'
  | 'currentDay'
  | 'currentYear'
  | 'dailyMoneyHistory'
  | 'workers'
  | 'availableHelpers'
  | 'customers'
  | 'ovenLevel'
  | 'maxWorkers'
  | 'bakingProgress'
  | 'showProduct'
  | 'isPaused'
  | 'totalProductsCreated'

export interface SaveData {
  version: number
  savedAt: number
  state: Pick<GameState, SaveableFields>
}
