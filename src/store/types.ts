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
  contractDuration: number
  daysRemaining: number
}

export interface AvailableHelper {
  id: string
  emoji: string
  name: string
  hirePricePerMonth: number
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
  orders: Order[]
  totalOrders: number
}

export interface GameState {
  money: number
  currentDay: number
  currentYear: number
  dailyMoneyHistory: DailyMoneyRecord[]
  workers: Worker[]
  availableHelpers: AvailableHelper[]
  customers: Customer[]
  ovenLevel: number
  maxWorkers: number
  bakingProgress: number
  showProduct: boolean
  isPaused: boolean
  totalProductsCreated: number
  increaseBakingProgress: (amount?: number) => void
  hideProduct: () => void
  updateOrderProgress: (orderId: string) => void
  completeOrder: (orderId: string) => void
  prioritizeOrder: (orderId: string) => void
  hireWorker: (helperId: string, contractDuration: number) => void
  upgradeWorker: (workerId: string) => void
  nextDay: () => void
  togglePause: () => void
  updateMoney: (amount: number) => void
  formatMoney: (amount: number) => string
  launchPromotion: () => void
  postJobOffer: () => void
  upgradeOven: () => void
}

import type { StoreApi } from 'zustand'

export type SetState<T> = StoreApi<T>['setState']
