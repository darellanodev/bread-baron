import type { SetState, GameState } from '@/store/types'
import { LOAN_AMOUNT, MAX_DEBT } from '@/constants/timeConstants'

export const createEconomyActions = (set: SetState<GameState>) => ({
  requestLoan: () =>
    set((state) => {
      if (state.activeDebt >= MAX_DEBT) return state
      const newDebt = state.activeDebt + LOAN_AMOUNT
      return {
        activeDebt: Math.min(newDebt, MAX_DEBT),
        money: state.money + LOAN_AMOUNT,
      }
    }),
  payLoan: () =>
    set((state) => {
      if (state.money < LOAN_AMOUNT) return state
      return {
        activeDebt: Math.max(0, state.activeDebt - LOAN_AMOUNT),
        money: state.money - LOAN_AMOUNT,
      }
    }),
})
