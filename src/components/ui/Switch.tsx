import { useDarkMode } from '../../hooks/useDarkMode'

interface SwitchProps {
  checked?: boolean
  onChange?: (checked: boolean) => void
}

export function Switch({ checked, onChange }: SwitchProps) {
  const { isDark, toggle } = useDarkMode()
  const isChecked = checked !== undefined ? checked : isDark
  const handleChange = onChange || toggle

  return (
    <button
      type="button"
      onClick={() => handleChange(!isChecked)}
      className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
        isChecked ? 'bg-[#eca013]' : 'bg-gray-300 dark:bg-gray-600'
      }`}
    >
      <span
        className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
          isChecked ? 'translate-x-6' : 'translate-x-1'
        }`}
      />
    </button>
  )
}
