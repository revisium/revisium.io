import { SystemConfig } from '@chakra-ui/react'

export const globalCss: SystemConfig['globalCss'] = {
  'html, body, #root': {
    width: '100%',
    height: '100%',
    fontFamily: 'Atkinson Hyperlegible',
  },
  'input:-webkit-autofill, input:-webkit-autofill:hover, input:-webkit-autofill:focus, input:-webkit-autofill:active': {
    boxShadow: '0 0 0px 1000px #edf2f6 inset !important',
    border: '2px solid #edf2f6 !important;',
  },
}
