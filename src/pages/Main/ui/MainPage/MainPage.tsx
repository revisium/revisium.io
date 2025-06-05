import { Button, Center, Flex, Spinner } from '@chakra-ui/react'
import { observer } from 'mobx-react-lite'
import { useCallback } from 'react'
import { MainPageModel } from 'src/pages/Main/model/MainPageModel.ts'
import { CloudButton } from 'src/pages/Main/ui/CloudButton/CloudButton.tsx'
import { HeaderSection } from 'src/pages/Main/ui/HeaderSection/HeaderSection.tsx'
import { DeploymentTabs } from 'src/pages/Main/ui/DeploymentTabs/DeploymentTabs.tsx'
import { useViewModel } from 'src/shared/hooks'
import { IconGit, IconLogo } from 'src/shared/ui/icons'
import { SchemaEditorDemo } from 'src/pages/Main/ui/SchemaEditorDemo/SchemaEditorDemo.tsx'
import { FeatureHighlights } from 'src/pages/Main/ui/FeatureHighlights/FeatureHighlights.tsx'
import { nanoid } from 'nanoid'

export const MainPage = observer(() => {
  const model = useViewModel(MainPageModel)

  const handleGit = useCallback(() => {
    window.open(model.github, '_blank', 'noopener')
  }, [model])

  if (model.isLoading || !model.isAvailableData) {
    return (
      <Center height="100%">
        <Spinner />
      </Center>
    )
  }

  return (
    <Flex position="relative" flexDirection="column" h="100%" pb="48px">
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
        overflowY="auto"
        css={{
          '&::-webkit-scrollbar': { display: 'none' },
          msOverflowStyle: 'none',
          scrollbarWidth: 'none',
        }}
      >
        <HeaderSection model={model} />
        <Flex
          flexDirection={{ base: 'column', xl: 'row' }}
          gap={{ base: '16px', md: '32px', xl: '24px' }}
          justify={{ xl: 'center' }}
          align="flex-start"
          p={{ base: '0 16px', md: '0 32px', xl: '0 64px' }}
        >
          <SchemaEditorDemo previewUrl={model.previewUrl} />
          <DeploymentTabs model={model.code} />
        </Flex>
        <Flex
          w="100%"
          minH="108px"
          p={{ base: '0 16px', md: '0 32px', xl: '0' }}
          display={{ base: 'flex', xl: 'none' }}
          alignItems="center"
          bgColor="#FFFFFF"
        >
          <CloudButton link={model.cloudLink} label={model.cloudLabel} />
        </Flex>
        <Flex direction="column" gap={{ base: '48px', md: '64px', xl: '96px' }}>
          <FeatureHighlights
            title="Core features"
            variations={[
              {
                id: nanoid(),
                isVideo: true,
                imageUrl: './image/photo-block.png',
                title: 'title',
                description:
                  'Code faster with relevant keyword and symbol suggestions shown as you type. All suggestions are context and type-aware and work across different languages – i.e. class names from CSS will be completed in your .js files with support from machine learning.',
              },
              {
                id: nanoid(),
                isVideo: true,
                imageUrl: './image/photo-block.png',
                title: 'title',
                description:
                  'Code faster with relevant keyword and symbol suggestions shown as you type. All suggestions are context and type-aware and work across different languages – i.e. class names from CSS will be completed in your .js files with support from machine learning.',
              },
              {
                id: nanoid(),
                isVideo: true,
                imageUrl: './image/photo-block.png',
                title: 'title',
                description:
                  'Code faster with relevant keyword and symbol suggestions shown as you type. All suggestions are context and type-aware and work across different languages – i.e. class names from CSS will be completed in your .js files with support from machine learning.',
              },
              {
                id: nanoid(),
                isVideo: true,
                imageUrl: './image/photo-block.png',
                title: 'title',
                description:
                  'Code faster with relevant keyword and symbol suggestions shown as you type. All suggestions are context and type-aware and work across different languages – i.e. class names from CSS will be completed in your .js files with support from machine learning.',
              },
            ]}
          />
          <FeatureHighlights
            title="Use cases"
            variations={[
              {
                id: nanoid(),
                isVideo: false,
                imageUrl: './image/photo-block.png',
                title: 'title',
                description:
                  'Code faster with relevant keyword and symbol suggestions shown as you type. All suggestions are context and type-aware and work across different languages – i.e. class names from CSS will be completed in your .js files with support from machine learning.',
              },
              {
                id: nanoid(),
                isVideo: false,
                imageUrl: './image/photo-block.png',
                title: 'title',
                description:
                  'Code faster with relevant keyword and symbol suggestions shown as you type. All suggestions are context and type-aware and work across different languages – i.e. class names from CSS will be completed in your .js files with support from machine learning.',
              },
              {
                id: nanoid(),
                isVideo: false,
                imageUrl: './image/photo-block.png',
                title: 'title',
                description:
                  'Code faster with relevant keyword and symbol suggestions shown as you type. All suggestions are context and type-aware and work across different languages – i.e. class names from CSS will be completed in your .js files with support from machine learning.',
              },
            ]}
          />
        </Flex>
      </Flex>
    </Flex>
  )
})
