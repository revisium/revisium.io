import { Flex, Text } from '@chakra-ui/react'
import { IconGit, IconLogo } from 'src/shared/ui/icons'
import { Button } from 'src/shared/ui/components'
import { TabContent } from 'src/pages/Main/ui/TabContent/TabContent.tsx'

export const MainPage = () => {
  return (
    <Flex
      border="1px solid red"
      position="relative"
      flexDirection="column"
      alignItems="center"
      justifyContent="space-between"
      height="100vh"
    >
      <Flex
        border="1px solid red"
        w="100%"
        maxW="1082px"
        p={{ base: '32px 0 0 0', md: '32px 0', xl: '24px 0 64px 0' }}
        flexDirection="column"
        gap="32px"
      >
        <Flex justifyContent="space-between" alignItems="center" p={{ base: '16px', md: '16px 32px', xl: '0 24px' }}>
          <IconLogo />
          <IconGit />
        </Flex>
        <Flex
          flexDirection={{ base: 'column', xl: 'row' }}
          p={{ base: '16px', md: '0 32px', xl: '64px' }}
          gap={{ base: '16px', md: '32px' }}
        >
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
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
              industry's standard text
            </Text>
            <Button display={{ base: 'none', md: 'block' }} w={{ base: '100%', md: '328px' }} visual="PrimaryButton">
              Try Revisium Cloud (Alpha)
            </Button>
          </Flex>
          <Flex flex={1}>
            <TabContent />
          </Flex>
        </Flex>
      </Flex>
      <Flex
        position="sticky"
        bottom={0}
        w="100%"
        h="108px"
        p="0 16px"
        display={{ base: 'flex', md: 'none' }}
        alignItems="center"
      >
        <Button w="100%" visual="PrimaryButton">
          Try Revisium Cloud (Alpha)
        </Button>
      </Flex>
    </Flex>
  )
}
