import { type VariantProps } from 'class-variance-authority'
import { buttonVariants } from './buttonVariants'
import { cn } from '@/lib/utils'
import type { ReactNode, ButtonHTMLAttributes } from 'react'

interface ButtonProps
  extends
    ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  icon?: ReactNode
  iconPosition?: 'start' | 'end'
  children?: ReactNode
}

export function Button({
  className,
  variant,
  size,
  width,
  fullWidth,
  icon,
  iconPosition = 'start',
  children,
  disabled,
  ...props
}: ButtonProps) {
  return (
    <button type="button"
      className={cn(
        buttonVariants({ variant, size, width, fullWidth }),
        className,
      )}
      disabled={disabled}
      {...props}
    >
      {icon && iconPosition === 'start' && (
        <span className="mr-2 inline-flex items-center">{icon}</span>
      )}
      {children}
      {icon && iconPosition === 'end' && (
        <span className="ml-2 inline-flex items-center">{icon}</span>
      )}
    </button>
  )
}
