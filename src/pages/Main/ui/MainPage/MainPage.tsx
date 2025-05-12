import { Button, Flex } from '@chakra-ui/react'
import { useCallback } from 'react'
import { CloudButton } from 'src/pages/Main/ui/CloudButton/CloudButton.tsx'
import { HeaderSection } from 'src/pages/Main/ui/HeaderSection/HeaderSection.tsx'
import { DeploymentTabs } from 'src/pages/Main/ui/DeploymentTabs/DeploymentTabs.tsx'
import { IconGit, IconLogo } from 'src/shared/ui/icons'
import { SchemaEditorDemo } from 'src/pages/Main/ui/SchemaEditorDemo/SchemaEditorDemo.tsx'

export const MainPage = () => {
  const handleGit = useCallback(() => {
    window.open('https://github.com/revisium', '_blank', 'noopener')
  }, [])

  return (
    <Flex position="relative" flexDirection="column" h="100%">
      <Flex
        position="sticky"
        top={0}
        w="100%"
        bgColor="#FFFFFF"
        justifyContent="space-between"
        alignItems="center"
        p={{ base: '16px', md: '16px 32px', xl: '16px' }}
      >
        <IconLogo />
        <Button bgColor="#FFFFFF" onClick={handleGit} borderRadius="100%" p={0}>
          <IconGit />
        </Button>
      </Flex>
      <Flex
        w="100%"
        h="100%"
        flexDirection="column"
        gap={{ base: '16px', md: '32px', xl: '48px' }}
        mt={{ base: '24px', xl: '48px' }}
      >
        <HeaderSection />
        <Flex
          flexDirection={{ base: 'column', xl: 'row' }}
          gap={{ base: '16px', md: '32px', xl: '24px' }}
          justify={{ xl: 'center' }}
          align="flex-start"
          p={{ base: '0 16px', md: '0 32px', xl: '0 64px' }}
          overflowY="auto"
          css={{
            '&::-webkit-scrollbar': { display: 'none' },
            msOverflowStyle: 'none',
            scrollbarWidth: 'none',
          }}
        >
          <SchemaEditorDemo />
          <DeploymentTabs />
        </Flex>
      </Flex>
      <Flex
        position="sticky"
        bottom={0}
        w="100%"
        minH="108px"
        p={{ base: '0 16px', md: '0 32px', xl: '0' }}
        display={{ base: 'flex', xl: 'none' }}
        alignItems="center"
        bgColor="#FFFFFF"
      >
        <CloudButton />
      </Flex>
    </Flex>
  )
}
