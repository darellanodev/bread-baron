import { ProductIndicator } from '@/features/game/layout/bakery/ProductIndicator'
import { OvenFire } from '@/features/game/layout/bakery/OvenFire'
import { useGameStore } from '@/store/gameStore'

interface BakeryOvenProps {
  compact?: boolean
}

export function BakeryOven({ compact = false }: BakeryOvenProps) {
  const { showProduct, isPaused } = useGameStore()

  return (
    <div className="relative group flex-none">
      {!compact && <div className="absolute -inset-4 bg-primary/20 blur-3xl rounded-full opacity-50 group-hover:opacity-100 transition-opacity"></div>}
      <div className={`${compact ? 'w-20 h-20 border-4 rounded-lg' : 'size-72 border-8 rounded-xl'} bg-gradient-to-br from-brownDark to-brownDarker border-brownDarkest shadow-2xl flex items-center justify-center relative`}>
        {isPaused ? (
          <div className={`${compact ? 'w-12 h-10 border-2' : 'w-56 h-40 border-4'} bg-brownDeep rounded-lg border-primary/30 flex items-center justify-center`}>
            <div className="text-center">
              <span className={`${compact ? 'text-xl' : 'text-5xl'} block ${compact ? '' : 'mb-2'}`}>⏸️</span>
              {!compact && (
                <span className="text-primary font-bold text-sm uppercase tracking-wider">
                  Game Paused
                </span>
              )}
            </div>
          </div>
        ) : (
          <OvenFire compact={compact} />
        )}
        {!compact && <div className="absolute top-1/2 -right-4 w-4 h-24 bg-gray-400 rounded-full border-2 border-gray-600"></div>}
      </div>
      {!compact && <ProductIndicator show={showProduct} />}
    </div>
  )
}
