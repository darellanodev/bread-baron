import { MONEY_FORMAT_CONFIG } from '@/constants/moneyConstants'

const moneyFormatter = new Intl.NumberFormat('en-US', MONEY_FORMAT_CONFIG)

export const formatMoney = (amount: number): string => {
  return moneyFormatter.format(amount)
}
