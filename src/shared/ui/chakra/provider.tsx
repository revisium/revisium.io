import { ChakraProvider } from '@chakra-ui/react'
import { system } from 'src/shared/ui/chakra/theme.ts'
import { ColorModeProvider, type ColorModeProviderProps } from './color-mode'

export function Provider(props: ColorModeProviderProps) {
  return (
    <ChakraProvider value={system}>
      <ColorModeProvider {...props} />
    </ChakraProvider>
  )
}
