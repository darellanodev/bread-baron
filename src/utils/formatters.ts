import { MONEY_FORMAT_CONFIG } from '@/constants/gameConstants'

export const formatMoney = (amount: number): string => {
  return new Intl.NumberFormat('en-US', MONEY_FORMAT_CONFIG).format(amount)
}
