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
        Design Schemas, Drive Data… Git-Style!
      </Text>
      <Text
        fontSize={{ base: '13px', md: '16px' }}
        fontStyle={{ base: 'normal' }}
        fontWeight={{ base: '400' }}
        lineHeight={{ base: '17px', md: '21px' }}
      >
        Revisium lets you define flexible JSON-Schema–based content models, generate and manage your data through a
        simple UI or API, and track every change with Git-style versioning. <br /><br />
        It’s a low-level, headless CMS designed for developers who want full control over schema design and data flow.
      </Text>
      <Button display={{ base: 'none', md: 'block' }} w={{ base: '100%', md: '328px' }} visual="PrimaryButton">
        Try Revisium Cloud (Alpha)
      </Button>
    </Flex>
  )
}
