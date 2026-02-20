import React from 'react'
import type { ButtonProps } from './Button.types'
import { StyledButton, Spinner } from './styles'

export const Button: React.FC<ButtonProps> = ({
  variant = 'primary',
  size = 'md',
  fullWidth = false,
  isLoading = false,
  leftIcon,
  rightIcon,
  disabled,
  children,
  ...rest
}) => {
  return (
    <StyledButton
      $variant={variant}
      $size={size}
      $fullWidth={fullWidth}
      disabled={disabled || isLoading}
      aria-busy={isLoading}
      {...rest}
    >
      {isLoading ? <Spinner aria-hidden="true" /> : leftIcon}
      {children}
      {!isLoading && rightIcon}
    </StyledButton>
  )
}

Button.displayName = 'Button'
