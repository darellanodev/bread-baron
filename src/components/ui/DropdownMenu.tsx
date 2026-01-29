import { useState, useRef, useEffect } from 'react'
import { Switch } from './Switch'
import { useDarkMode } from '../../hooks/useDarkMode'

interface DropdownMenuProps {
  children: React.ReactNode
  trigger: React.ReactNode
}

export function DropdownMenu({ children, trigger }: DropdownMenuProps) {
  const [isOpen, setIsOpen] = useState(false)
  const menuRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsOpen(false)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  return (
    <div className="relative" ref={menuRef}>
      <div onClick={() => setIsOpen(!isOpen)}>{trigger}</div>
      {isOpen && (
        <div className="absolute right-0 top-full mt-2 w-56 rounded-lg bg-bgLight dark:bg-cardDark border border-primary/20 shadow-lg z-50">
          <div className="py-1">{children}</div>
        </div>
      )}
    </div>
  )
}

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
