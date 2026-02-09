import { useGameStore } from '../../../../store/gameStore'
import { useEffect } from 'react'

interface ProductIndicatorProps {
  show?: boolean
}

export function ProductIndicator({ show }: ProductIndicatorProps) {
  const { hideProduct } = useGameStore()

  useEffect(() => {
    if (show) {
      const timer = setTimeout(() => {
        hideProduct()
      }, 2000)
      return () => clearTimeout(timer)
    }
  }, [show, hideProduct])

  if (!show) return null

  return (
    <div className="absolute -top-12 left-1/2 -translate-x-1/2 flex flex-col items-center animate-bounce">
      <span className="text-primary text-4xl transform -translate-y-4">🥖</span>
      <span className="text-primary font-bold">+1 Product</span>
    </div>
  )
}
