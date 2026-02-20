# Prism UI

A modern React component library built with [styled-components](https://styled-components.com/), written in TypeScript.

## Features

- Fully typed with TypeScript
- Themeable via styled-components `ThemeProvider`
- Accessible components with ARIA support
- Tree-shakeable ESM + CJS builds

## Installation

```bash
npm install prism-ui styled-components
```

> **Peer dependencies:** `react >= 18`, `react-dom >= 18`, `styled-components >= 6`

## Setup

Wrap your app with the `ThemeProvider` and optionally add the `GlobalStyle`:

```tsx
import { ThemeProvider } from 'styled-components'
import { theme, GlobalStyle } from 'prism-ui'

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      {/* your app */}
    </ThemeProvider>
  )
}
```

## Components

### Button

```tsx
import { Button } from 'prism-ui'

<Button variant="primary" size="md" onClick={() => {}}>
  Click me
</Button>
```

#### Props

| Prop        | Type                                        | Default     | Description                                      |
|-------------|---------------------------------------------|-------------|--------------------------------------------------|
| `variant`   | `primary` \| `secondary` \| `ghost` \| `danger` | `primary`   | Visual style of the button                       |
| `size`      | `sm` \| `md` \| `lg`                        | `md`        | Size of the button                               |
| `fullWidth` | `boolean`                                   | `false`     | Expands the button to fill its container         |
| `isLoading` | `boolean`                                   | `false`     | Shows a loading spinner and disables interaction |
| `leftIcon`  | `ReactNode`                                 | —           | Icon rendered before the button label            |
| `rightIcon` | `ReactNode`                                 | —           | Icon rendered after the button label             |

All standard `<button>` HTML attributes are also supported.

## Theme

The default theme exposes the following tokens:

| Token            | Values                                                               |
|------------------|----------------------------------------------------------------------|
| `colors`         | `primary`, `primaryHover`, `secondary`, `success`, `warning`, `error`, `textPrimary`, `textSecondary`, `background`, `backgroundMuted`, `border` |
| `spacing`        | `xs` (4px), `sm` (8px), `md` (16px), `lg` (24px), `xl` (32px)      |
| `borderRadius`   | `sm` (4px), `md` (8px), `lg` (16px), `full` (9999px)               |
| `fontSizes`      | `sm` (0.875rem), `md` (1rem), `lg` (1.125rem)                       |
| `fontWeights`    | `regular` (400), `medium` (500), `bold` (700)                       |
| `transitions`    | `fast` (150ms), `normal` (250ms)                                    |

## Development

```bash
# Install dependencies
npm install

# Start Storybook for component development
npm run storybook

# Type check
npm run type-check

# Build the library
npm run build
```

## License

[MIT](./LICENSE) © Renzo Gaspary
