import styled, { css } from 'styled-components'

// Card-specific theme configuration
const cardTheme = {
  padding: '16px',
  borderRadius: '8px',
  elevatedShadow: '0 2px 8px rgba(0, 0, 0, 0.1)',
  elevatedHoverShadow: '0 4px 12px rgba(0, 0, 0, 0.15)',
  variants: {
    primary: {
      background: '#ffffff',
      color: '#1a1a2e',
      border: '2px solid transparent',
    },
    outlined: {
      background: 'transparent',
      color: '#1a1a2e',
      border: '2px solid #e5e7eb',
    },
    elevated: {
      background: '#ffffff',
      color: '#1a1a2e',
      border: '2px solid transparent',
    },
  },
}

export const StyledCard = styled.div<{
  $variant: string
  $fullWidth: boolean
}>`
  background-color: ${({ $variant }) =>
    cardTheme.variants[$variant as keyof typeof cardTheme.variants].background};
  color: ${({ $variant }) =>
    cardTheme.variants[$variant as keyof typeof cardTheme.variants].color};
  border: ${({ $variant }) =>
    cardTheme.variants[$variant as keyof typeof cardTheme.variants].border};
  border-radius: ${cardTheme.borderRadius};
  padding: ${cardTheme.padding};
  width: ${({ $fullWidth }) => ($fullWidth ? '100%' : 'auto')};
`

export const variantStyles = {
  primary: styled.div`
    background-color: ${({ theme }) => theme.colors.background};
    color: ${({ theme }) => theme.colors.textPrimary};
    border: 2px solid transparent;

    &:hover:not(:disabled) {
      background-color: ${({ theme }) => theme.colors.backgroundMuted};
    }

    &:focus-visible {
      outline: 3px solid ${({ theme }) => theme.colors.primary};
      outline-offset: 2px;
    }
  `,
  clear: css`
    background-color: transparent;
    color: ${({ theme }) => theme.colors.textPrimary};
    border: 2px solid transparent;

    &:hover:not(:disabled) {
      background-color: ${({ theme }) => theme.colors.backgroundMuted};
    }

    &:focus-visible {
      outline: 3px solid ${({ theme }) => theme.colors.primary};
      outline-offset: 2px;
    }
  `,
  elevated: css`
    background-color: ${({ theme }) => theme.colors.background};
    color: ${({ theme }) => theme.colors.textPrimary};
    border: 2px solid transparent;
    box-shadow: ${cardTheme.elevatedShadow};

    &:hover:not(:disabled) {
      box-shadow: ${cardTheme.elevatedHoverShadow};
    }

    &:focus-visible {
      outline: 3px solid ${({ theme }) => theme.colors.primary};
      outline-offset: 2px;
    }
  `,
  outline: css`
    background-color: transparent;
    color: ${({ theme }) => theme.colors.textPrimary};
    border: 2px solid ${({ theme }) => theme.colors.border};

    &:hover:not(:disabled) {
      background-color: ${({ theme }) => theme.colors.backgroundMuted};
    }

    &:focus-visible {
      outline: 3px solid ${({ theme }) => theme.colors.primary};
      outline-offset: 2px;
    }
  `,
}