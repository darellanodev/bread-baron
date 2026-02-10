import { useGameStore } from '../../../../store/gameStore'

export function WorkersButton() {
  const { increaseBakingProgress, isPaused } = useGameStore()

  return (
    <div className="flex-none">
      <button
        onClick={increaseBakingProgress}
        disabled={isPaused}
        className={`size-32 rounded-full bg-primary border-8 border-white dark:border-cardDark shadow-2xl flex flex-col items-center justify-center text-white transition-all transform hover:scale-105 active:scale-90 active:shadow-inner group ${
          isPaused
            ? 'cursor-not-allowed opacity-50 hover:scale-100 active:scale-100'
            : 'cursor-pointer'
        }`}
      >
        <span className="text-4xl mb-1 group-active:animate-bounce">
          {isPaused ? '⏸️' : '👆'}
        </span>
        <span className="font-black text-lg uppercase tracking-tighter">
          {isPaused ? 'PAUSED' : 'KNEAD NOW!'}
        </span>
      </button>
    </div>
  )
}
