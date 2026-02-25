import type { GameState } from '@/store/types'
import type { SetState } from '@/store/types'

export const createMoneyActions = (set: SetState<GameState>) => ({
  updateMoney: (amount: number) => {
    set((state) => ({
      money: state.money + amount,
    }))
  },
})
