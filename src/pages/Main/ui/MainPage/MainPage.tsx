import { Flex, TabsContent, TabsList, TabsRoot, TabsTrigger, Text } from '@chakra-ui/react'
import { IconCopy, IconGit, IconLogo } from 'src/shared/ui/icons'
import { Button } from 'src/shared/ui/components'

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
            <TabsRoot
              w="100%"
              fitted
              defaultValue="Docker"
              variant="plain"
              border="1px solid"
              borderColor="gray.2"
              borderRadius="16px"
              padding="8px"
            >
              <TabsList
                bgColor="#FFFFFF"
                p={0}
                gap="8px"
                fontSize={{ base: '13px', md: '16px' }}
                fontStyle={{ base: 'normal' }}
                fontWeight={{ base: '400' }}
                lineHeight={{ base: '17px', md: '21px' }}
                color="#000000"
              >
                <TabsTrigger
                  value="Docker"
                  border="2px solid black"
                  borderRadius="8px"
                  p="6px 12px"
                  _selected={{ bg: '#000000', color: '#FFFFFF' }}
                  // _focus={{ boxShadow: 'none', outline: 'none' }}
                  // _focusVisible={{ boxShadow: 'none' }}
                  // borderBottom="none"
                  // borderBottom="none"
                  // boxShadow="none"
                  // _focus={{ boxShadow: 'none', outline: 'none' }}
                >
                  Docker
                </TabsTrigger>
                <TabsTrigger
                  value="Compose"
                  border="2px solid black"
                  borderRadius="8px"
                  p="6px 12px"
                  _selected={{ bg: '#000000', color: '#FFFFFF' }}
                  // _focus={{ boxShadow: 'none', outline: 'none' }}
                  // _focusVisible={{ boxShadow: 'none' }}
                  // borderBottom="none"
                >
                  Docker Compose
                </TabsTrigger>
              </TabsList>
              <TabsContent value="Docker">
                <Flex direction="column" gap="16px">
                  <Text fontSize="15px" fontStyle="normal" fontWeight={700} lineHeight="normal">
                    Run Revisium in a single container
                  </Text>
                  <Text fontSize="13px" fontStyle="normal" fontWeight={400} lineHeight="normal" as="span">
                    <Text as="span" color="#5E75EA">
                      docker{' '}
                    </Text>
                    run -d{' '}
                    <Text as="span" color="#EE6D50">
                      \
                    </Text>
                    <br />
                    &nbsp; --name revisium{' '}
                    <Text as="span" color="#EE6D50">
                      \
                    </Text>{' '}
                    <br />
                    &nbsp; --env DATABASE_URL
                    <Text as="span" color="#EE6D50">
                      =
                    </Text>
                    <Text as="span" color="#FEA554">
                      "postgresql:
                      <br /> //user:pass@host:5432/db"{' '}
                      <Text as="span" color="#EE6D50">
                        {' '}
                        \
                      </Text>{' '}
                    </Text>
                    <br />
                    &nbsp; -p{' '}
                    <Text as="span" color="#EE6D50">
                      8080
                    </Text>
                    :8080
                    <Text as="span" color="#EE6D50">
                      {' '}
                      \
                    </Text>{' '}
                    <br />
                    &nbsp; revisium/revisium:v0.10.0
                  </Text>
                  <Flex borderRadius="8px" p="6px" justify="flex-end">
                    <IconCopy />
                  </Flex>
                </Flex>
              </TabsContent>
              <TabsContent border="1px solid red" value="Compose">
                2
              </TabsContent>
            </TabsRoot>
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
