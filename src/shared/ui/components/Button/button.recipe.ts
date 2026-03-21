import { defineRecipe } from '@chakra-ui/react'

export const buttonRecipe = defineRecipe({
  base: {
    width: 'auto',
    display: 'flex',
    justifyContent: 'center',
    borderRadius: '14px',
    padding: '16px 24px',
    bg: '#171717',
    color: '#FFFFFF',
    fontSize: '16px',
    fontStyle: 'normal',
    fontWeight: '700',
    lineHeight: 'normal',
    cursor: 'pointer',

    _hover: { bg: '#333333' },
    _focus: { bg: '#333333' },
    _disabled: { opacity: 0.6, cursor: 'not-allowed' },

    _dark: {
      bg: '#e5e5e5',
      color: '#0a0a0a',
      _hover: { bg: '#ffffff' },
      _focus: { bg: '#ffffff' },
    },
  },
  variants: {
    visual: {
      PrimaryButton: {},
    },
    size: {
      xs: {},
      sm: {},
      md: {},
      lg: {},
    },
  },
})
