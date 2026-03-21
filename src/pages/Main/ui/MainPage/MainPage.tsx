import { Center, Flex, Spinner, Text } from '@chakra-ui/react'
import { observer } from 'mobx-react-lite'
import { MainPageModel } from 'src/pages/Main/model/MainPageModel.ts'
import { Header } from 'src/pages/Main/ui/Header/Header.tsx'
import { HeroSection } from 'src/pages/Main/ui/HeroSection/HeroSection.tsx'
import { DemoImage } from 'src/pages/Main/ui/DemoVideo/DemoImage.tsx'
import { FeaturesGrid } from 'src/pages/Main/ui/FeaturesGrid/FeaturesGrid.tsx'
import { CodeExample } from 'src/pages/Main/ui/CodeExample/CodeExample.tsx'
import { UseCases } from 'src/pages/Main/ui/UseCases/UseCases.tsx'
import { QuickStart } from 'src/pages/Main/ui/QuickStart/QuickStart.tsx'
import { OpenSource } from 'src/pages/Main/ui/OpenSource/OpenSource.tsx'
import { PoweredBy } from 'src/pages/Main/ui/PoweredBy/PoweredBy.tsx'
import { CtaSection } from 'src/pages/Main/ui/CtaSection/CtaSection.tsx'
import { FooterSection } from 'src/pages/Main/ui/FooterSection/FooterSection.tsx'
import { AnimatedSection } from 'src/pages/Main/ui/shared/AnimatedSection.tsx'
import { useColorModeValue } from 'src/shared/ui'
import { useViewModel } from 'src/shared/lib'

export const MainPage = observer(() => {
  const model = useViewModel(MainPageModel)
  const bg = useColorModeValue('#FFFFFF', '#0a0a0a')
  const textColor = useColorModeValue('#525252', '#a3a3a3')

  if (model.hasError) {
    return (
      <Center height="100vh" bg={bg} flexDirection="column" gap="16px">
        <Text color={textColor}>Failed to load content. Please try again later.</Text>
      </Center>
    )
  }

  if (model.isLoading || !model.isAvailableData) {
    return (
      <Center height="100vh" bg={bg}>
        <Spinner />
      </Center>
    )
  }

  return (
    <Flex direction="column" minH="100vh" bg={bg}>
      <Header model={model} />
      <Flex direction="column" gap={{ base: '48px', md: '80px', xl: '100px' }} flex={1}>
        <AnimatedSection>
          <HeroSection model={model} />
        </AnimatedSection>
        <AnimatedSection>
          <DemoImage model={model} />
        </AnimatedSection>
        <AnimatedSection>
          <FeaturesGrid model={model} />
        </AnimatedSection>
        <AnimatedSection>
          <CodeExample model={model} />
        </AnimatedSection>
        <AnimatedSection>
          <UseCases model={model} />
        </AnimatedSection>
        <AnimatedSection>
          <QuickStart model={model} />
        </AnimatedSection>
        <AnimatedSection>
          <OpenSource model={model} />
        </AnimatedSection>
        <AnimatedSection>
          <PoweredBy model={model} />
        </AnimatedSection>
        <AnimatedSection>
          <CtaSection model={model} />
        </AnimatedSection>
      </Flex>
      <FooterSection model={model} />
    </Flex>
  )
})
