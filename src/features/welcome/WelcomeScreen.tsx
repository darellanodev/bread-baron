import { useState, useEffect } from 'react'
import DarkModeToggle from '@/components/ui/DarkModeToggle'
import {
  WelcomeHeader,
  WelcomeDescription,
  WelcomeButton,
} from '@/features/welcome/layout'

interface WelcomeScreenProps {
  onStart?: () => void
}

export function WelcomeScreen({ onStart }: WelcomeScreenProps) {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setTimeout(() => setIsVisible(true), 100)
  }, [])

  return (
    <div>
      <div className="bg-bgLight dark:bg-bgDark min-h-screen flex items-center justify-center p-4 font-sans transition-colors duration-300 hero-pattern">
        <DarkModeToggle />

        <main
          className={`
            max-w-4xl w-full transition-all duration-500
            ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'}
          `}
        >
          <div className="bg-bgCream dark:bg-cardDark rounded-2xl p-8 md:p-16 shadow-[0_20px_50px_rgba(0,0,0,0.15)] dark:shadow-[0_20px_50px_rgba(0,0,0,0.4)] border-b-8 border-black/10 dark:border-black/30 relative overflow-hidden transition-all duration-300">
            <WelcomeHeader />
            <WelcomeDescription />
            <WelcomeButton onStart={onStart} />
            <div className="absolute -top-10 -right-10 w-40 h-40 bg-white/5 dark:bg-white/2 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-primary/10 rounded-full blur-3xl pointer-events-none" />
          </div>
        </main>
      </div>
    </div>
  )
}
