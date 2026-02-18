import { MONEY_FORMAT_CONFIG } from '@/constants/moneyConstants'

export const formatMoney = (amount: number): string => {
  return new Intl.NumberFormat('en-US', MONEY_FORMAT_CONFIG).format(amount)
}
