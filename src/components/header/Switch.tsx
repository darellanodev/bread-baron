interface SwitchProps {
  checked: boolean
  onChange: () => void
  'aria-label'?: string
}

export function Switch({ checked, onChange, 'aria-label': ariaLabel }: SwitchProps) {
  return (
    <button type="button"
      role="switch"
      aria-checked={checked}
      aria-label={ariaLabel}
      onClick={onChange}
      className={`
        relative inline-flex h-6 w-11 items-center rounded-full transition-colors
        ${checked ? 'bg-primary' : 'bg-gray-300 dark:bg-gray-600'}
      `}
    >
      <span
        className={`
          inline-block h-4 w-4 transform rounded-full bg-white transition-transform
          ${checked ? 'translate-x-6' : 'translate-x-1'}
        `}
      />
    </button>
  )
}
