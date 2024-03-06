// theme.ts

// 1. import `extendTheme` function
import { extendTheme, ThemeComponentProps, type ThemeConfig } from '@chakra-ui/react'

// 2. Add your color mode config
const config: ThemeConfig = {
  initialColorMode: 'dark',
  useSystemColorMode: false,
}

// 3. extend the theme
const theme = extendTheme({ config, styles: {
  global: (props: ThemeComponentProps) => ({
    'html, body': {
      backgroundColor: props.colorMode == 'dark' ? 'black.700' : 'gray.50'
    }
  })
} })

export default theme
