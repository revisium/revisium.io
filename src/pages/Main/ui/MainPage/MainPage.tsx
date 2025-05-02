import { Flex, Text } from '@chakra-ui/react'
import { IconGit, IconLogo } from 'src/shared/ui/icons'

export const MainPage = () => {
  return (
    <Flex
      border="1px solid red"
      // flexDirection="column"
      // gap="8px"
      // alignItems="center"
      justifyContent="center"
      height="100vh"
      p={{ base: '32px 0 0 0', md: '32px 0', xl: '24px 0 64px 0' }}
      // fontFamily="Atkinson Hyperlegible"
    >
      <Flex border="1px solid green" w="100%" maxW="1082px" flexDirection="column" gap="32px">
        <Flex
          border="1px solid blue"
          justifyContent="space-between"
          alignItems="center"
          p={{ base: '16px', md: '16px 32px', xl: '0 24px' }}
        >
          <IconLogo />
          <IconGit />
        </Flex>
        <Flex
          border="1px solid blue"
          flexDirection={{ base: 'column', md: 'row' }}
          p={{ base: '16px', md: '0 32px', xl: '64px' }}
          gap={{ base: '16px', md: '32px' }}
        >
          <Flex
            border="1px solid red"
            maxW="600px"
            flexDirection="column"
            gap={{ base: '16px', md: '24px', xl: '32px' }}
            flex={1}
          >
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
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
              industry's standard text
            </Text>
          </Flex>
          <Flex border="1px solid red" flex={1}>
            2
          </Flex>
        </Flex>
      </Flex>
    </Flex>
  )
}
