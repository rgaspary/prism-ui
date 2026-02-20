import styled, { css } from 'styled-components'
import type { ButtonVariant, ButtonSize } from './Button.types'

export const variantStyles = {
  primary: css`
    background-color: ${({ theme }) => theme.colors.primary};
    color: #ffffff;
    border: 2px solid transparent;

    &:hover:not(:disabled) {
      background-color: ${({ theme }) => theme.colors.primaryHover};
    }

    &:focus-visible {
      outline: 3px solid ${({ theme }) => theme.colors.primary};
      outline-offset: 2px;
    }
  `,
  secondary: css`
    background-color: transparent;
    color: ${({ theme }) => theme.colors.primary};
    border: 2px solid ${({ theme }) => theme.colors.primary};

    &:hover:not(:disabled) {
      background-color: ${({ theme }) => theme.colors.primary};
      color: #ffffff;
    }

    &:focus-visible {
      outline: 3px solid ${({ theme }) => theme.colors.primary};
      outline-offset: 2px;
    }
  `,
  ghost: css`
    background-color: transparent;
    color: ${({ theme }) => theme.colors.textPrimary};
    border: 2px solid transparent;

    &:hover:not(:disabled) {
      background-color: ${({ theme }) => theme.colors.backgroundMuted};
    }

    &:focus-visible {
      outline: 3px solid ${({ theme }) => theme.colors.border};
      outline-offset: 2px;
    }
  `,
  danger: css`
    background-color: ${({ theme }) => theme.colors.error};
    color: #ffffff;
    border: 2px solid transparent;

    &:hover:not(:disabled) {
      filter: brightness(0.9);
    }

    &:focus-visible {
      outline: 3px solid ${({ theme }) => theme.colors.error};
      outline-offset: 2px;
    }
  `,
} satisfies Record<ButtonVariant, ReturnType<typeof css>>

export const sizeStyles = {
  sm: css`
    padding: ${({ theme }) => `${theme.spacing.xs} ${theme.spacing.sm}`};
    font-size: ${({ theme }) => theme.fontSizes.sm};
    border-radius: ${({ theme }) => theme.borderRadius.sm};
  `,
  md: css`
    padding: ${({ theme }) => `${theme.spacing.sm} ${theme.spacing.md}`};
    font-size: ${({ theme }) => theme.fontSizes.md};
    border-radius: ${({ theme }) => theme.borderRadius.md};
  `,
  lg: css`
    padding: ${({ theme }) => `${theme.spacing.md} ${theme.spacing.lg}`};
    font-size: ${({ theme }) => theme.fontSizes.lg};
    border-radius: ${({ theme }) => theme.borderRadius.md};
  `,
} satisfies Record<ButtonSize, ReturnType<typeof css>>

interface StyledButtonProps {
  $variant: ButtonVariant
  $size: ButtonSize
  $fullWidth: boolean
}

export const StyledButton = styled.button<StyledButtonProps>`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: ${({ theme }) => theme.spacing.xs};
  font-weight: ${({ theme }) => theme.fontWeights.medium};
  cursor: pointer;
  transition: all ${({ theme }) => theme.transitions.fast};
  white-space: nowrap;
  user-select: none;
  width: ${({ $fullWidth }) => ($fullWidth ? '100%' : 'auto')};

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }

  ${({ $variant }) => variantStyles[$variant]}
  ${({ $size }) => sizeStyles[$size]}
`

export const Spinner = styled.span`
  display: inline-block;
  width: 1em;
  height: 1em;
  border: 2px solid currentColor;
  border-top-color: transparent;
  border-radius: 50%;
  animation: spin 0.6s linear infinite;

  @keyframes spin {
    to {
      transform: rotate(360deg);
    }
  }
`
