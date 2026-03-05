import type { SetState, GameState } from '@/store/types'

export const LOAN_AMOUNT = 5000

export const createEconomyActions = (set: SetState<GameState>) => ({
  requestLoan: () =>
    set((state) => ({ activeDebt: state.activeDebt + LOAN_AMOUNT })),
  payLoan: () =>
    set((state) => {
      if (state.money < LOAN_AMOUNT) return state
      return {
        activeDebt: Math.max(0, state.activeDebt - LOAN_AMOUNT),
        money: state.money - LOAN_AMOUNT,
      }
    }),
})
