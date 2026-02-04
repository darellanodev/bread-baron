import { DropdownMenu } from './DropdownMenu'
import { Switch } from './Switch'
import { useDarkMode } from '../../hooks/useDarkMode'

export function SettingsMenu() {
  const { isDark, toggle } = useDarkMode()

  return (
    <DropdownMenu
      trigger={
        <button className="flex items-center justify-center rounded-full h-10 w-10 bg-bgLight dark:bg-cardDark text-textLight dark:text-bgLight transition-all hover:bg-primary/20 text-xl">
          ⚙️
        </button>
      }
    >
      <div className="flex items-center justify-between px-4 py-2">
        <span className="text-sm text-textLight dark:text-bgLight">
          Dark mode
        </span>
        <Switch checked={isDark} onChange={() => toggle()} />
      </div>
    </DropdownMenu>
  )
}
