import { cva, type VariantProps } from 'class-variance-authority'
import { cn } from '@/lib/utils'
import type { ReactNode, ButtonHTMLAttributes } from 'react'

const buttonVariants = cva(
  // Base styles
  'inline-flex items-center justify-center font-bold transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed',
  {
    variants: {
      variant: {
        primary:
          'bg-primary text-white hover:bg-primary/90 active:bg-primary/80 shadow-md hover:shadow-lg',
        secondary:
          'bg-bgLight dark:bg-cardDark text-textLight dark:text-textDark border border-borderLight dark:border-borderDark hover:bg-primary/10 dark:hover:bg-primary/20',
        danger:
          'bg-red-500 text-white hover:bg-red-600 active:bg-red-700 shadow-md',
        ghost:
          'bg-transparent text-textSecondary hover:text-textLight dark:hover:text-textDark hover:bg-primary/10',
        outline:
          'bg-transparent border-2 border-borderLight dark:border-borderDark text-textLight dark:text-textDark hover:bg-white/5 dark:hover:bg-white/10',
      },
      size: {
        sm: 'px-4 py-2 text-sm rounded-md',
        md: 'px-6 py-2.5 text-base rounded-lg',
        lg: 'px-8 py-3 text-lg rounded-xl',
        xl: 'px-12 py-4 text-xl rounded-xl',
        icon: 'h-10 w-10 rounded-full',
      },
      fullWidth: {
        true: 'w-full',
        false: '',
      },
    },
    defaultVariants: {
      variant: 'primary',
      size: 'md',
      fullWidth: false,
    },
  },
)

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
  fullWidth,
  icon,
  iconPosition = 'start',
  children,
  disabled,
  ...props
}: ButtonProps) {
  return (
    <button
      className={cn(buttonVariants({ variant, size, fullWidth }), className)}
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

export { buttonVariants }
