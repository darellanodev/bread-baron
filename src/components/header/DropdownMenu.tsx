import { useState, useRef, useEffect } from 'react'

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
      <div
        onClick={() => setIsOpen(!isOpen)}
        onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') setIsOpen(!isOpen) }}
        tabIndex={0}
        role="button"
      >
        {trigger}
      </div>
      {isOpen && (
        <div className="absolute right-0 top-full mt-2 w-56 rounded-lg bg-bgLight dark:bg-cardDark border border-primary/20 shadow-lg z-50">
          <div className="py-1">{children}</div>
        </div>
      )}
    </div>
  )
}
