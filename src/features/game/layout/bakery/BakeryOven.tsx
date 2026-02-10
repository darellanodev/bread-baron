import { ProductIndicator } from './ProductIndicator'
import { OvenFire } from './OvenFire'
import { useGameStore } from '../../../../store/gameStore'

export function BakeryOven() {
  const { showProduct, isPaused } = useGameStore()

  return (
    <div className="relative group">
      <div className="absolute -inset-4 bg-primary/20 blur-3xl rounded-full opacity-50 group-hover:opacity-100 transition-opacity"></div>
      <div className="w-72 h-72 bg-gradient-to-br from-brownDark to-brownDarker rounded-xl border-8 border-brownDarkest shadow-2xl flex items-center justify-center relative">
        {isPaused ? (
          <div className="w-56 h-40 bg-brownDeep rounded-lg border-4 border-primary/30 flex items-center justify-center">
            <div className="text-center">
              <span className="text-5xl block mb-2">⏸️</span>
              <span className="text-primary font-bold text-sm uppercase tracking-wider">
                Game Paused
              </span>
            </div>
          </div>
        ) : (
          <OvenFire />
        )}
        <div className="absolute top-1/2 -right-4 w-4 h-24 bg-gray-400 rounded-full border-2 border-gray-600"></div>
      </div>
      <ProductIndicator show={showProduct} />
    </div>
  )
}
