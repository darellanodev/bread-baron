export interface DailyMoneyRecord {
  day: number
  money: number
}

export interface Worker {
  id: string
  emoji: string
  name: string
  level: number
  productivity: number
  upgradePrice: number
}

export interface AvailableHelper {
  id: string
  emoji: string
  name: string
  hirePrice: number
  level: number
  productivity: number
}

export interface Order {
  id: string
  difficulty: string
  difficultyColor: string
  title: string
  price: number
  progress: number
  maxProgress: number
  isInactive?: boolean
  isPrioritized?: boolean
}

export interface Customer {
  id: string
  name: string
  wants: string
}

export interface GameState {
  money: number
  currentDay: number
  currentYear: number
  dailyMoneyHistory: DailyMoneyRecord[]
  workers: Worker[]
  availableHelpers: AvailableHelper[]
  orders: Order[]
  customers: Customer[]
  maxWorkers: number
  bakingProgress: number
  showProduct: boolean
  isPaused: boolean
  totalProductsCreated: number
  increaseBakingProgress: () => void
  hideProduct: () => void
  updateOrderProgress: (orderId: string) => void
  completeOrder: (orderId: string) => void
  prioritizeOrder: (orderId: string) => void
  hireWorker: (helperId: string) => void
  upgradeWorker: (workerId: string) => void
  nextDay: () => void
  togglePause: () => void
  updateMoney: (amount: number) => void
  formatMoney: (amount: number) => string
}

import type { StoreApi } from 'zustand'

export type SetState<T> = StoreApi<T>['setState']
