export const theme = {
  colors: {
    primary: '#6c63ff',
    primaryHover: '#574fd6',
    secondary: '#ff6584',
    success: '#52c41a',
    warning: '#faad14',
    error: '#ff4d4f',
    textPrimary: '#1a1a2e',
    textSecondary: '#6b7280',
    background: '#ffffff',
    backgroundMuted: '#f5f5f5',
    border: '#e5e7eb',
  },
  spacing: {
    xs: '4px',
    sm: '8px',
    md: '16px',
    lg: '24px',
    xl: '32px',
  },
  borderRadius: {
    sm: '4px',
    md: '8px',
    lg: '16px',
    full: '9999px',
  },
  fontSizes: {
    sm: '0.875rem',
    md: '1rem',
    lg: '1.125rem',
  },
  fontWeights: {
    regular: 400,
    medium: 500,
    bold: 700,
  },
  transitions: {
    fast: '150ms ease-in-out',
    normal: '250ms ease-in-out',
  },
} as const

export type Theme = typeof theme
