import type { ButtonHTMLAttributes, ReactNode } from 'react'

export type ButtonVariant = 'primary' | 'secondary' | 'ghost' | 'danger'
export type ButtonSize = 'sm' | 'md' | 'lg'

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  /** Visual style variant */
  variant?: ButtonVariant
  /** Size of the button */
  size?: ButtonSize
  /** Expands the button to fill its container */
  fullWidth?: boolean
  /** Shows a loading spinner and disables interaction */
  isLoading?: boolean
  /** Icon rendered before the button label */
  leftIcon?: ReactNode
  /** Icon rendered after the button label */
  rightIcon?: ReactNode
}
