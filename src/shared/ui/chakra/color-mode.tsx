import type { IconButtonProps, SpanProps } from '@chakra-ui/react'
import { ClientOnly, IconButton, Skeleton, Span } from '@chakra-ui/react'
import { ThemeProvider, useTheme } from 'next-themes'
import type { ThemeProviderProps } from 'next-themes'
import * as React from 'react'
import { LuMoon, LuSun } from 'react-icons/lu'

export interface ColorModeProviderProps extends ThemeProviderProps {}

const COOKIE_NAME = 'revisium-theme'
const COOKIE_DOMAIN = '.revisium.io'
const COOKIE_MAX_AGE = 31536000 // 1 year in seconds

function getThemeFromCookie(): string | undefined {
  const match = new RegExp(`(?:^|; )${COOKIE_NAME}=([^;]*)`).exec(document.cookie)

  return match ? match[1] : undefined
}

function setThemeCookie(theme: string) {
  const isLocalhost = globalThis.location.hostname === 'localhost'
  const domain = isLocalhost ? '' : `; domain=${COOKIE_DOMAIN}`

  document.cookie = `${COOKIE_NAME}=${theme}; path=/; max-age=${COOKIE_MAX_AGE}; SameSite=Lax${domain}`
}

export function ColorModeProvider(props: Readonly<ColorModeProviderProps>) {
  const defaultTheme = typeof document === 'undefined' ? undefined : getThemeFromCookie()

  return <ThemeProvider attribute="class" disableTransitionOnChange defaultTheme={defaultTheme} {...props} />
}

export type ColorMode = 'light' | 'dark'

export interface UseColorModeReturn {
  colorMode: ColorMode
  setColorMode: (colorMode: ColorMode) => void
  toggleColorMode: () => void
}

// eslint-disable-next-line react-refresh/only-export-components
export function useColorMode(): UseColorModeReturn {
  const { resolvedTheme, setTheme } = useTheme()

  const setColorModeWithCookie = (theme: ColorMode) => {
    setTheme(theme)
    setThemeCookie(theme)
  }

  const toggleColorMode = () => {
    const next = resolvedTheme === 'dark' ? 'light' : 'dark'

    setTheme(next)
    setThemeCookie(next)
  }

  return {
    colorMode: resolvedTheme as ColorMode,
    setColorMode: setColorModeWithCookie,
    toggleColorMode,
  }
}

// eslint-disable-next-line react-refresh/only-export-components
export function useColorModeValue<T>(light: T, dark: T) {
  const { colorMode } = useColorMode()

  return colorMode === 'dark' ? dark : light
}

export function ColorModeIcon() {
  const { colorMode } = useColorMode()

  return colorMode === 'dark' ? <LuMoon /> : <LuSun />
}

interface ColorModeButtonProps extends Omit<IconButtonProps, 'aria-label'> {}

export const ColorModeButton = React.forwardRef<HTMLButtonElement, ColorModeButtonProps>(
  function ColorModeButton(props, ref) {
    const { toggleColorMode } = useColorMode()

    return (
      <ClientOnly fallback={<Skeleton boxSize="8" />}>
        <IconButton
          onClick={toggleColorMode}
          variant="ghost"
          aria-label="Toggle color mode"
          size="sm"
          ref={ref}
          {...props}
          css={{
            _icon: {
              width: '5',
              height: '5',
            },
          }}
        >
          <ColorModeIcon />
        </IconButton>
      </ClientOnly>
    )
  },
)

export const LightMode = React.forwardRef<HTMLSpanElement, SpanProps>(function LightMode(props, ref) {
  return (
    <Span
      color="fg"
      display="contents"
      className="chakra-theme light"
      colorPalette="gray"
      colorScheme="light"
      ref={ref}
      {...props}
    />
  )
})

export const DarkMode = React.forwardRef<HTMLSpanElement, SpanProps>(function DarkMode(props, ref) {
  return (
    <Span
      color="fg"
      display="contents"
      className="chakra-theme dark"
      colorPalette="gray"
      colorScheme="dark"
      ref={ref}
      {...props}
    />
  )
})
