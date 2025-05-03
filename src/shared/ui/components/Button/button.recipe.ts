import { defineRecipe } from '@chakra-ui/react'

export const buttonRecipe = defineRecipe({
  base: {
    width: 'auto',
    display: 'flex',
    justifyContent: 'center',
    borderRadius: '14px',
    padding: '16px 24px',
    bg: 'blue.5',
    color: '#FFFFFF',
    fontSize: '16px',
    fontStyle: 'normal',
    fontWeight: '700',
    lineHeight: 'normal',
    cursor: 'pointer',

    _hover: { boxShadow: '0px 0px 0px 2px rgba(27, 110, 224, 0.40)' },
    _focus: { boxShadow: '0px 0px 0px 2px rgba(27, 110, 224, 0.40)' },
    _disabled: { opacity: 0.6, cursor: 'not-allowed' },
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
