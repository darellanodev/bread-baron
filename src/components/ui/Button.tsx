import React from 'react'

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  icon?: React.ReactNode
  iconPosition?: 'start' | 'end'
  fullWidth?: boolean
}

export default function Button({
  children,
  icon,
  iconPosition = 'start',
  fullWidth = false,
  className = '',
  ...rest
}: ButtonProps) {
  const containerClasses =
    `${fullWidth ? 'w-full h-14' : ''} group relative inline-flex items-center justify-center ${className}`.trim()

  return (
    <button className={containerClasses} {...rest}>
      {icon && iconPosition === 'start' && (
        <span className="text-2xl group-hover:rotate-12 transition-transform mr-2">
          {icon}
        </span>
      )}

      {children}

      {icon && iconPosition === 'end' && (
        <span className="ml-2 inline-flex items-center">{icon}</span>
      )}
    </button>
  )
}
