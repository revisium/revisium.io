import { Flex, Link, Text } from '@chakra-ui/react'
import { observer } from 'mobx-react-lite'
import { FC } from 'react'
import { MainPageModel } from 'src/pages/Main/model/MainPageModel.ts'
import { useColorModeValue } from 'src/shared/ui'

interface FooterSectionProps {
  model: MainPageModel
}

export const FooterSection: FC<FooterSectionProps> = observer(({ model }) => {
  const ft = model.footer
  const borderColor = useColorModeValue('#e5e5e5', '#262626')
  const textColor = useColorModeValue('#525252', '#a3a3a3')
  const linkColor = useColorModeValue('#171717', '#e5e5e5')
  const linkHover = useColorModeValue('#000000', '#ffffff')

  return (
    <Flex
      as="footer"
      w="100%"
      borderTop="1px solid"
      borderColor={borderColor}
      mt={{ base: '48px', md: '80px' }}
      py={{ base: '24px', md: '32px' }}
      px={{ base: '16px', md: '32px' }}
    >
      <Flex
        maxW="1106px"
        mx="auto"
        w="100%"
        direction={{ base: 'column', md: 'row' }}
        justify="space-between"
        align={{ base: 'flex-start', md: 'center' }}
        gap={{ base: '16px', md: '0' }}
      >
        <Flex gap={{ base: '16px', md: '24px' }} wrap="wrap">
          {ft.links.map((link) => (
            <Link
              key={link.url}
              href={link.url}
              target={link.url.startsWith('http') ? '_blank' : undefined}
              rel={link.url.startsWith('http') ? 'noopener noreferrer' : undefined}
              fontSize="15px"
              fontWeight={500}
              color={linkColor}
              _hover={{ color: linkHover, textDecoration: 'none' }}
            >
              {link.label}
            </Link>
          ))}
        </Flex>
        <Text fontSize="14px" color={textColor}>
          {ft.copyright} {new Date().getFullYear()}
        </Text>
      </Flex>
    </Flex>
  )
})
