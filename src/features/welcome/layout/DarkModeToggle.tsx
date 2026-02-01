import { useDarkMode } from '../../../hooks/useDarkMode'

export default function DarkModeToggle() {
  const { toggle } = useDarkMode()

  return (
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
  )
}
