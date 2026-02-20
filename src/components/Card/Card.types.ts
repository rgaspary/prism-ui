import type { CardHTMLAttributes, ReactNode } from 'react'

export type CardVariant = 'primary' | 'clear' | 'elevated' | 'outline'

export interface CardProps extends CardHTMLAttributes<HTMLCardElement> {
  /** Visual style variant */
  variant?: CardVariant
  /** Expands the card to fill its container */
  fullWidth?: boolean
  /** Shows a loading spinner and disables interaction */
  isLoading?: boolean
  /** Content rendered inside the card */
  children: ReactNode
}