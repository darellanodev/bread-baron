interface MaxWorkersWarningProps {
  current: number
  max: number
}

export function MaxWorkersWarning({ current, max }: MaxWorkersWarningProps) {
  return (
    <div className="mb-4 p-4 bg-red-100 dark:bg-red-900/30 border border-red-300 dark:border-red-700 rounded-xl text-center">
      <p className="text-red-700 dark:text-red-300 font-semibold">
        Maximum workers reached: {current}/{max}
      </p>
      <p className="text-sm text-red-600 dark:text-red-400 mt-1">
        Upgrade your industry to hire more workers
      </p>
    </div>
  )
}
