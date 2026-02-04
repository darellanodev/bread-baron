interface RoundedButtonProps {
  children: React.ReactNode
  onClick?: () => void
  className?: string
  size?: 'sm' | 'md' | 'lg'
}

export function RoundedButton({
  children,
  onClick,
  className = '',
  size = 'md',
}: RoundedButtonProps) {
  const sizeClasses = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-8 py-3 text-base',
    lg: 'px-12 py-4 text-lg',
  }

  return (
    <button
      onClick={onClick}
      className={`
        rounded-xl font-bold tracking-widest uppercase transition-all shadow-md
        ${sizeClasses[size]}
        ${className}
      `}
    >
      {children}
    </button>
  )
}
