import { useState, useEffect } from 'react'
import { Button } from '@/components/ui/Button'
import { DarkModeToggle } from '@/components/header/DarkModeToggle'
import { useGameStore } from '@/store/gameStore'

export function GameSettingsScreen({ onStart }: { onStart?: () => void }) {
  const [isVisible, setIsVisible] = useState(false)
  const [name, setName] = useState('John Doe')
  const setPlayerName = useGameStore((state) => state.setPlayerName)

  useEffect(() => {
    setTimeout(() => setIsVisible(true), 100)
  }, [])

  const handleStart = () => {
    setPlayerName(name)
    onStart?.()
  }

  return (
    <div className="bg-bgLight dark:bg-bgDark min-h-screen flex items-center justify-center p-4 font-sans transition-colors duration-300 hero-pattern">
      <DarkModeToggle />

      <main
        className={`
          max-w-4xl w-full transition-all duration-500
          ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'}
        `}
      >
        <div className="bg-bgCream dark:bg-cardDark rounded-2xl p-8 md:p-16 shadow-[0_20px_50px_rgba(0,0,0,0.15)] dark:shadow-[0_20px_50px_rgba(0,0,0,0.4)] border-b-8 border-black/10 dark:border-black/30 relative overflow-hidden transition-all duration-300">
          <h1 className="text-3xl md:text-4xl font-bold text-center mb-8 text-textLight dark:text-amber-50">
            Game Settings
          </h1>
          <div className="space-y-6 text-center mb-12">
            <p className="text-lg md:text-xl text-textLight dark:text-amber-50 leading-relaxed font-medium">
              The following settings can be modified during the game at any
              time, so don&apos;t worry, but you can also configure them now.
            </p>
            <div className="mt-8">
              <label
                htmlFor="playerName"
                className="block text-lg font-medium text-textLight dark:text-amber-50 mb-2"
              >
                What is your name?
              </label>
              <input
                id="playerName"
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full max-w-xs mx-auto px-4 py-3 text-lg border-2 border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-800 text-textLight dark:text-amber-50 focus:outline-none focus:border-primary dark:focus:border-primary transition-colors"
                placeholder="Enter your name"
              />
            </div>
          </div>
          <div className="flex justify-center">
            <Button
              onClick={handleStart}
              size="xl"
              iconPosition="end"
              icon={
                <svg
                  className="size-8 group-hover:translate-x-1 transition-transform"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    d="M13 5l7 7-7 7M5 5l7 7-7 7"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                  />
                </svg>
              }
              className="font-display text-2xl md:text-3xl shadow-[0_6px_0_#8b4513] hover:shadow-[0_4px_0_#8b4513] active:shadow-none active:translate-y-1"
            >
              Start Baking!
            </Button>
          </div>
          <div className="absolute -top-10 -right-10 size-40 bg-white/5 dark:bg-white/2 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute -bottom-10 -left-10 size-40 bg-primary/10 rounded-full blur-3xl pointer-events-none" />
        </div>
      </main>
    </div>
  )
}
