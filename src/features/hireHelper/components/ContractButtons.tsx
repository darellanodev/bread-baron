import { Button } from '@/components/ui/Button'

interface ContractButtonsProps {
  pricePerMonth: number
  canHire: boolean
  onHire: (months: number) => void
}

const contractOptions = [1, 2, 3]

export function ContractButtons({
  pricePerMonth,
  canHire,
  onHire,
}: ContractButtonsProps) {
  return (
    <div className="flex gap-2">
      {contractOptions.map((months) => {
        const totalPrice = pricePerMonth * months
        return (
          <div key={months} className="flex flex-col items-center">
            <span className="text-xs text-textSecondary mb-1">
              {months} month{months > 1 ? 's' : ''}
            </span>
            <Button
              onClick={() => onHire(months)}
              disabled={!canHire}
              size="sm"
              width="sm"
              className="shadow-lg"
            >
              ${totalPrice}
            </Button>
          </div>
        )
      })}
    </div>
  )
}
