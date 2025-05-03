import { Flex, Text } from '@chakra-ui/react'
import { Button } from 'src/shared/ui/components'

export const RightContent = () => {
  return (
    <Flex maxW="600px" flexDirection="column" gap={{ base: '16px', md: '24px', xl: '32px' }} flex={1}>
      <Text
        fontSize={{ base: '44px', md: '80px' }}
        fontStyle={{ base: 'normal' }}
        fontWeight={{ base: '700' }}
        lineHeight={{ base: '48px', md: '72px' }}
      >
        The central slogan
      </Text>
      <Text
        fontSize={{ base: '13px', md: '16px' }}
        fontStyle={{ base: 'normal' }}
        fontWeight={{ base: '400' }}
        lineHeight={{ base: '17px', md: '21px' }}
      >
        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's
        standard text
      </Text>
      <Button display={{ base: 'none', md: 'block' }} w={{ base: '100%', md: '328px' }} visual="PrimaryButton">
        Try Revisium Cloud (Alpha)
      </Button>
    </Flex>
  )
}
