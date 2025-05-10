import { Button, Flex, TabsContent, TabsList, TabsRoot, TabsTrigger, Text } from '@chakra-ui/react'
import SyntaxHighlighter from 'react-syntax-highlighter'
import { github, idea } from 'react-syntax-highlighter/dist/esm/styles/hljs'
import { useCallback } from 'react'
import { BASE_DOCKER_COMPOSE_CODE, DOCKER_CODE, DOCKER_COMPOSE_CODE } from 'src/pages/Main/config/code.constants.ts'
import { copyToClipboard } from 'src/pages/Main/lib/copyToClipboard.ts'
import { toaster } from 'src/shared/ui'
import { IconCopy } from 'src/shared/ui/icons'

export const TabContent = () => {
  const handleClickDocker = useCallback(async () => {
    toaster.create({
      description: 'Copied docker to clipboard',
      type: 'info',
    })

    await copyToClipboard(DOCKER_CODE)
  }, [])

  const handleClickDockerCompose = useCallback(async () => {
    toaster.create({
      description: 'Copied docker compose to clipboard',
      type: 'info',
    })

    await copyToClipboard(DOCKER_COMPOSE_CODE)
  }, [])

  return (
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
          >
            Docker
          </TabsTrigger>
          <TabsTrigger
            value="Compose"
            border="2px solid black"
            borderRadius="8px"
            p="6px 12px"
            _selected={{ bg: '#000000', color: '#FFFFFF' }}
          >
            Docker Compose
          </TabsTrigger>
        </TabsList>
        <TabsContent value="Docker">
          <Flex direction="column" gap="16px">
            <Text fontSize="15px" fontStyle="normal" fontWeight={700} lineHeight="normal">
              Run Revisium in a single container
            </Text>
            <SyntaxHighlighter
              language="bash"
              style={github}
              wrapLongLines
              customStyle={{
                background: 'none',
                fontSize: '13px',
                fontStyle: 'normal',
                fontWeight: 400,
                lineHeight: 'normal',
                fontFamily: 'Atkinson Hyperlegible',
              }}
            >
              {DOCKER_CODE}
            </SyntaxHighlighter>
            <Flex borderRadius="8px" justify="flex-end" cursor="pointer">
              <Button onClick={handleClickDocker} bgColor="#FFFFFF" borderRadius="100%" p={0}>
                <IconCopy />
              </Button>
            </Flex>
          </Flex>
        </TabsContent>
        <TabsContent value="Compose">
          <Flex direction="column" gap="16px">
            <Text fontSize="15px" fontStyle="normal" fontWeight={700} lineHeight="normal">
              Use Docker Compose for a full stack (app + database)
            </Text>
            <SyntaxHighlighter
              language="yaml"
              style={idea}
              wrapLongLines
              customStyle={{
                background: 'none',
                fontSize: '13px',
                fontStyle: 'normal',
                fontWeight: 400,
                lineHeight: 'normal',
                fontFamily: 'Atkinson Hyperlegible',
              }}
            >
              {BASE_DOCKER_COMPOSE_CODE}
            </SyntaxHighlighter>
            <Flex borderRadius="8px" justify="flex-end" cursor="pointer">
              <Button onClick={handleClickDockerCompose} bgColor="#FFFFFF" borderRadius="100%" p={0}>
                <IconCopy />
              </Button>
            </Flex>
          </Flex>
        </TabsContent>
      </TabsRoot>
    </Flex>
  )
}
