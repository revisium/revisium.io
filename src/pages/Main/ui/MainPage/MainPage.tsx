import { Flex } from '@chakra-ui/react'
import { IconGit, IconLogo } from 'src/shared/ui/icons'
import { Button } from 'src/shared/ui/components'
import { TabContent } from 'src/pages/Main/ui/TabContent/TabContent.tsx'
import { RightContent } from 'src/pages/Main/ui/RightContent/RightContent.tsx'

export const MainPage = () => {
  return (
    <Flex
      position="relative"
      flexDirection="column"
      alignItems="center"
      justifyContent="space-between"
      height="100vh"
      p={{ base: '32px 0 0 0', md: '32px 0', xl: '24px 0 64px 0' }}
    >
      <Flex w="100%" maxW="1082px" flexDirection="column" gap="32px">
        <Flex
          position="sticky"
          top={0}
          bgColor="#FFFFFF"
          justifyContent="space-between"
          alignItems="center"
          p={{ base: '16px', md: '16px 32px', xl: '0 24px' }}
        >
          <IconLogo />
          <IconGit />
        </Flex>
        <Flex
          flexDirection={{ base: 'column', xl: 'row' }}
          alignItems={{ xl: 'flex-start' }}
          p={{ base: '16px', md: '0 32px', xl: '64px' }}
          gap={{ base: '16px', md: '32px' }}
          overflowY="auto"
          css={{
            '&::-webkit-scrollbar': { display: 'none' },
            '-ms-overflow-style': 'none',
            'scrollbar-width': 'none',
          }}
        >
          <RightContent />
          <TabContent />
        </Flex>
      </Flex>
      <Flex
        position="sticky"
        bottom={0}
        w="100%"
        minH="108px"
        p="0 16px"
        display={{ base: 'flex', md: 'none' }}
        alignItems="center"
        bgColor="#FFFFFF"
      >
        <Button w="100%" visual="PrimaryButton">
          Try Revisium Cloud (Alpha)
        </Button>
      </Flex>
    </Flex>
  )
}
