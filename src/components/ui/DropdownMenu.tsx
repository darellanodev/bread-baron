import { useState, useRef, useEffect } from 'react'
import { Switch } from './Switch'

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
        <div className="absolute right-0 top-full mt-2 w-56 rounded-lg bg-[#f4f3f0] dark:bg-[#2a2418] border border-[#eca013]/20 shadow-lg z-50">
          <div className="py-1">{children}</div>
        </div>
      )}
    </div>
  )
}

interface DropdownMenuItemProps {
  children: React.ReactNode
  onClick?: () => void
}

export function DropdownMenuItem({ children, onClick }: DropdownMenuItemProps) {
  return (
    <div
      onClick={onClick}
      className="px-4 py-2 text-sm text-[#181511] dark:text-[#f4f3f0] hover:bg-[#eca013]/20 cursor-pointer transition-colors"
    >
      {children}
    </div>
  )
}

export function SettingsMenu() {
  return (
    <DropdownMenu
      trigger={
        <button className="flex items-center justify-center rounded-full h-10 w-10 bg-[#f4f3f0] dark:bg-[#2a2418] text-[#181511] dark:text-[#f4f3f0] transition-all hover:bg-[#eca013]/20 text-xl">
          ⚙️
        </button>
      }
    >
      <div className="flex items-center justify-between px-4 py-2">
        <span className="text-sm text-[#181511] dark:text-[#f4f3f0]">
          Dark mode
        </span>
        <Switch />
      </div>
    </DropdownMenu>
  )
}
