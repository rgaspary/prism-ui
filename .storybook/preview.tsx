import type { Preview } from '@storybook/react'
import { ThemeProvider } from 'styled-components'
import { theme } from '../src/styles/theme'
import { GlobalStyle } from '../src/styles/GlobalStyle'
import React from 'react'

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    backgrounds: {
      default: 'light',
      values: [
        { name: 'light', value: '#ffffff' },
        { name: 'dark', value: '#1a1a2e' },
        { name: 'neutral', value: '#f5f5f5' },
      ],
    },
  },
  decorators: [
    (Story) => (
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Story />
      </ThemeProvider>
    ),
  ],
}

export default preview
