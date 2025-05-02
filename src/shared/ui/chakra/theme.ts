import { createSystem, defineConfig, defaultConfig } from '@chakra-ui/react'
import { globalCss } from 'src/shared/ui/chakra/globalCss.ts'
import { textStyles } from 'src/shared/ui/chakra/textStyles.ts'

const config = defineConfig({
  strictTokens: true,
  globalCss,
  theme: {
    textStyles: textStyles,
    tokens: {
      colors: {
        blue: {
          1: { value: '#DFF1FB' },
          2: { value: '#C4E5F7' },
          3: { value: '#AADAF4' },
          4: { value: '#92CFF1' },
          5: { value: '#7CC5EE' },
          6: { value: '#66BBEB' },
          7: { value: '#51B2E8' },
          8: { value: '#3EA9E5' },
          9: { value: '#2CA1E3' },
        },
        gray: {
          1: { value: '#F3F3F3' },
          2: { value: '#E2E4E5' },
          3: { value: '#C6C8CB' },
          4: { value: '#A9ACB0' },
          5: { value: '#8C9195' },
          6: { value: '#6F757A' },
          7: { value: '#535A61' },
          8: { value: '#313941' },
          9: { value: '#0A131D' },
        },
      },
    },
    breakpoints: {
      base: '0px',
      sm: '360px',
      md: '768px',
      xl: '1106px',
    },
  },
})

export const system = createSystem(defaultConfig, config)
