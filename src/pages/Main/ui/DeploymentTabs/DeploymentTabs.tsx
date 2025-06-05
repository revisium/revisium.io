import { Button, Flex, TabsContent, TabsList, TabsRoot, TabsTrigger, Text } from '@chakra-ui/react'
import CodeMirror, { EditorView } from '@uiw/react-codemirror'
import * as themes from '@uiw/codemirror-themes-all'
import { langs } from '@uiw/codemirror-extensions-langs'
import { FC, useCallback } from 'react'
import { copyToClipboard } from 'src/pages/Main/lib/copyToClipboard.ts'
import { DeploymentTabsModel } from 'src/pages/Main/model/DeploymentTabsModel.ts'
import { toaster } from 'src/shared/ui'
import { IconCopy } from 'src/shared/ui/icons'

interface DeploymentTabsProps {
  model: DeploymentTabsModel
}

export const DeploymentTabs: FC<DeploymentTabsProps> = ({ model }) => {
  const handleClickDocker = useCallback(async () => {
    toaster.create({
      description: 'Copied docker to clipboard',
      type: 'info',
    })

    await copyToClipboard(model.docker)
  }, [model.docker])

  const handleClickDockerCompose = useCallback(async () => {
    toaster.create({
      description: 'Copied docker compose to clipboard',
      type: 'info',
    })

    await copyToClipboard(model.dockerCompose)
  }, [model.dockerCompose])

  return (
    <Flex w="100%" maxW={{ xl: '512px' }}>
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
              {model.dockerTitle}
            </Text>
            <CodeMirror
              value={model.docker}
              extensions={[EditorView.lineWrapping, langs.shell()]}
              editable={false}
              theme={themes.githubLight}
              maxWidth="100%"
              basicSetup={{
                lineNumbers: false,
                foldGutter: false,
                highlightActiveLine: false,
              }}
            />
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
              {model.dockerComposeTitle}
            </Text>
            <CodeMirror
              value={model.dockerCompose}
              extensions={[EditorView.lineWrapping, langs.yaml()]}
              editable={false}
              theme={themes.githubLight}
              maxWidth="100%"
              basicSetup={{
                lineNumbers: false,
                foldGutter: false,
                highlightActiveLine: false,
              }}
            />
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
