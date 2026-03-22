import { Flex, Heading, Text } from '@chakra-ui/react'
import { observer } from 'mobx-react-lite'
import { FC } from 'react'
import { MainPageModel } from 'src/pages/Main/model/MainPageModel.ts'
import { SectionWrapper } from 'src/pages/Main/ui/shared/SectionWrapper.tsx'
import { Button, useColorModeValue } from 'src/shared/ui'

interface CtaSectionProps {
  model: MainPageModel
}

export const CtaSection: FC<CtaSectionProps> = observer(({ model }) => {
  const cta = model.cta
  const headingColor = useColorModeValue('#171717', '#e5e5e5')
  const descColor = useColorModeValue('#525252', '#a3a3a3')

  return (
    <SectionWrapper>
      <Flex direction="column" alignItems="center" textAlign="center" py={{ base: '48px', md: '64px' }} gap="16px">
        <Heading as="h2" fontSize={{ base: '28px', md: '36px' }} fontWeight={700} color={headingColor}>
          {cta.title}
        </Heading>
        <Text fontSize={{ base: '15px', md: '17px' }} color={descColor} lineHeight={1.6} maxW="480px">
          {cta.description}
        </Text>
        <Button
          onClick={() => {
            globalThis.location.href = cta.ctaLink
          }}
          mt="8px"
          px="32px"
          py="14px"
          fontSize="16px"
        >
          {cta.ctaLabel}
        </Button>
      </Flex>
    </SectionWrapper>
  )
})
