import { useDarkMode } from '@/hooks/useDarkMode'

export function DarkModeToggle() {
  const { toggle } = useDarkMode()

  return (
    <button type="button"
      className="fixed top-6 right-6 p-3 bg-bgSecondary dark:bg-cardDark rounded-full shadow-lg hover:scale-110 transition-transform z-50 text-brownDark dark:text-amber-100"
      onClick={toggle}
    >
      {/* Moon icon – visible in light mode */}
      <svg
        className="size-6 dark:hidden"
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
        className="size-6 hidden dark:block"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        {/* Center circle */}
        <circle cx="12" cy="12" r="4" strokeWidth="2" strokeLinecap="round" />

        {/* Vertical and horizontal rays */}
        <line
          x1="12"
          y1="1"
          x2="12"
          y2="3"
          strokeWidth="2"
          strokeLinecap="round"
        />
        <line
          x1="12"
          y1="21"
          x2="12"
          y2="23"
          strokeWidth="2"
          strokeLinecap="round"
        />
        <line
          x1="1"
          y1="12"
          x2="3"
          y2="12"
          strokeWidth="2"
          strokeLinecap="round"
        />
        <line
          x1="21"
          y1="12"
          x2="23"
          y2="12"
          strokeWidth="2"
          strokeLinecap="round"
        />

        {/* Diagonal rays */}
        <line
          x1="4.93"
          y1="4.93"
          x2="6.34"
          y2="6.34"
          strokeWidth="2"
          strokeLinecap="round"
        />
        <line
          x1="17.66"
          y1="17.66"
          x2="19.07"
          y2="19.07"
          strokeWidth="2"
          strokeLinecap="round"
        />
        <line
          x1="19.07"
          y1="4.93"
          x2="17.66"
          y2="6.34"
          strokeWidth="2"
          strokeLinecap="round"
        />
        <line
          x1="4.93"
          y1="19.07"
          x2="6.34"
          y2="17.66"
          strokeWidth="2"
          strokeLinecap="round"
        />
      </svg>
    </button>
  )
}
