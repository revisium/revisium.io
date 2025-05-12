import { Box, Flex, Text } from '@chakra-ui/react'
import { CloudButton } from 'src/pages/Main/ui/CloudButton/CloudButton.tsx'

export const HeaderSection = () => {
  return (
    <Flex
      w="100%"
      flexDirection="column"
      align={{ xl: 'center' }}
      gap={{ base: '16px', md: '24px', xl: '32px' }}
      p={{ base: '0 16px', md: '0 32px', xl: '0' }}
    >
      <Text
        display={{ base: 'block', xl: 'none' }}
        fontSize={{ base: '42px', md: '76px' }}
        fontStyle="normal"
        fontWeight={700}
        lineHeight={{ base: '48px', md: '72px' }}
      >
        Design
        <br /> Schemas, Drive
        <br /> Data… Git-Style!
      </Text>
      <Text
        display={{ base: 'none', xl: 'block' }}
        maxW="860px"
        fontSize="62px"
        fontStyle="normal"
        fontWeight={700}
        lineHeight="72px"
        textAlign="center"
      >
        Design Schemas, Drive Data… Git-Style!
      </Text>
      <Text
        maxW={{ base: '600px', xl: '860px' }}
        fontSize={{ base: '13px', md: '15px', xl: '16px' }}
        fontStyle={{ base: 'normal' }}
        fontWeight={{ base: '400' }}
        lineHeight={{ base: '17px', md: '20px', xl: '21px' }}
        textAlign={{ base: 'start', xl: 'center' }}
      >
        Revisium lets you define flexible JSON-Schema–based content models, generate and manage your data through a
        simple UI or API, and track every change with Git-style versioning. <br />
        <br />
        It’s a low-level, headless CMS designed for developers who want full control over schema design and data flow.
      </Text>
      <Box w="480px" display={{ base: 'none', xl: 'block' }}>
        <CloudButton />
      </Box>
    </Flex>
  )
}
