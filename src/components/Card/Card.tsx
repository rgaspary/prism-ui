import React from 'react'
import styled, { css } from 'styled-components'
import type { CardProps, CardVariant } from './Card.types'
import { StyledCard } from './styles'

export const Card: React.FC<CardProps> = ({
  variant = 'primary',
  fullWidth = false,
  isLoading = false,
  children,
  ...rest
}) => {
  return (
    <StyledCard
      $variant={variant}
      $fullWidth={fullWidth}
      aria-busy={isLoading}
      {...rest}
    >
      {isLoading ? 'is loading...' : children}
    </StyledCard>
  )
}

Card.displayName = 'Card'