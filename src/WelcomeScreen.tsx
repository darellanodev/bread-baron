import { useState, useEffect } from 'react'
import { useDarkMode } from './hooks/useDarkMode'
import breadBaronImg from './assets/bread_baron.png'

export default function WelcomeScreen({ onStart }: { onStart?: () => void }) {
  const { toggle } = useDarkMode()
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setTimeout(() => setIsVisible(true), 100)
  }, [])

  return (
    <div>
      <div className="bg-bgLight dark:bg-bgDark min-h-screen flex items-center justify-center p-4 font-sans transition-colors duration-300 hero-pattern">
        {/* Dark/Light toggle */}
        <button
          className="fixed top-6 right-6 p-3 bg-bgSecondary dark:bg-cardDark rounded-full shadow-lg hover:scale-110 transition-transform z-50 text-brownDark dark:text-amber-100"
          onClick={toggle}
        >
          {/* Moon icon – visible in light mode */}
          <svg
            className="h-6 w-6 dark:hidden"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
            />
          </svg>
          {/* Sun icon – visible in dark mode */}
          <svg
            className="h-6 w-6 hidden dark:block"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              d="M12 3v1m0 16v1m9-9h-1M4 9h-1m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
            />
          </svg>
        </button>

        {/* Main card */}
        <main
          className="max-w-4xl w-full transition-all duration-500"
          style={{
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
          }}
        >
          <div className="bg-bgCream dark:bg-cardDark rounded-2xl p-8 md:p-16 shadow-[0_20px_50px_rgba(0,0,0,0.15)] dark:shadow-[0_20px_50px_rgba(0,0,0,0.4)] border-b-8 border-black/10 dark:border-black/30 relative overflow-hidden transition-all duration-300">
            {/* Header */}
            <div className="flex flex-col md:flex-row items-center justify-center gap-6 mb-10">
              <div className="relative w-32 h-32 md:w-40 md:h-40 shrink-0 transform hover:rotate-3 transition-transform duration-300 cursor-pointer">
                <img
                  alt="Bread Baron Character"
                  className="w-full h-full object-contain drop-shadow-xl"
                  src={breadBaronImg}
                />
              </div>
              <div className="text-center md:text-left">
                <h1 className="font-display text-5xl md:text-7xl text-primary bubbly-text tracking-wide mb-2">
                  Bread Baron
                </h1>
                <p className="font-display text-lg md:text-2xl text-textSecondary dark:text-amber-100/60 font-medium">
                  Build your bread empire
                </p>
              </div>
            </div>

            {/* Description */}
            <div className="space-y-6 text-center md:text-left mb-12">
              <p className="text-lg md:text-xl text-textLight dark:text-amber-50 leading-relaxed font-medium">
                Welcome, aspiring Bread Baron! The world is hungry—and only you
                can feed it. Start with a humble loaf, knead your way to
                fortune, and rise as the ultimate master of dough.
              </p>
              <p className="text-lg md:text-xl text-textLight dark:text-amber-50 leading-relaxed font-medium">
                Build bakeries, manage your workers, and expand your empire one
                golden crust at a time. Remember:{' '}
                <span className="text-primary font-bold">
                  every crumb counts
                </span>{' '}
                on your journey to breadly greatness!
              </p>
            </div>

            {/* CTA */}
            <div className="flex justify-center">
              <button
                className="group relative bg-primary hover:bg-amber-500 text-white font-display text-2xl md:text-3xl px-12 py-5 rounded-xl shadow-[0_6px_0_#8b4513] hover:shadow-[0_4px_0_#8b4513] active:shadow-none active:translate-y-1 transition-all duration-150 flex items-center gap-4"
                onClick={() => onStart?.()}
              >
                <span>Start Kneading!</span>
                <svg
                  className="h-8 w-8 group-hover:translate-x-1 transition-transform"
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
              </button>
            </div>

            <div className="absolute -top-10 -right-10 w-40 h-40 bg-white/5 dark:bg-white/2 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-primary/10 rounded-full blur-3xl pointer-events-none" />
          </div>
        </main>

        <style>{`
          .bubbly-text {
            -webkit-text-stroke: 1.5px #5e2f0d;
            paint-order: stroke fill;
            text-shadow: 0 4px 0 rgba(0,0,0,0.2);
          }
          .dark .bubbly-text {
            -webkit-text-stroke: 1.5px #1a0f05;
          }
          .hero-pattern {
            background-image: radial-gradient(#d6d2cb 1px, transparent 1px);
            background-size: 40px 40px;
          }
          .dark .hero-pattern {
            background-image: radial-gradient(#3a3121 1px, transparent 1px);
          }
        `}</style>
      </div>
    </div>
  )
}
