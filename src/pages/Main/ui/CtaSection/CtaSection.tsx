import { Flex, Heading, Link, Text } from '@chakra-ui/react'
import { observer } from 'mobx-react-lite'
import { FC } from 'react'
import { LuArrowRight } from 'react-icons/lu'
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
  const borderColor = useColorModeValue('#e5e5e5', '#262626')
  const secondaryButtonBg = useColorModeValue('#ffffff', '#0a0a0a')
  const secondaryButtonColor = useColorModeValue('#171717', '#e5e5e5')

  return (
    <SectionWrapper>
      <Flex direction="column" alignItems="center" textAlign="center" py={{ base: '48px', md: '64px' }} gap="16px">
        <Heading as="h2" fontSize={{ base: '28px', md: '36px' }} fontWeight={700} color={headingColor}>
          {cta.title}
        </Heading>
        <Text fontSize={{ base: '15px', md: '17px' }} color={descColor} lineHeight={1.6} maxW="480px">
          {cta.description}
        </Text>
        <Flex
          align="center"
          justify="center"
          gap="12px"
          mt="8px"
          flexDirection={{ base: 'column', sm: 'row' }}
          w={{ base: '100%', sm: 'auto' }}
        >
          <Button
            onClick={() => {
              globalThis.location.href = cta.ctaLink
            }}
            px="32px"
            py="14px"
            borderRadius="8px"
            fontSize="16px"
            w={{ base: '100%', sm: 'auto' }}
            maxW="260px"
          >
            {cta.ctaLabel}
          </Button>
          <Link
            href={model.quickStart.deployLink}
            display="flex"
            alignItems="center"
            justifyContent="center"
            gap="6px"
            px="24px"
            py="13px"
            borderRadius="8px"
            border="1px solid"
            borderColor={borderColor}
            bg={secondaryButtonBg}
            color={secondaryButtonColor}
            fontSize="16px"
            fontWeight={700}
            lineHeight="normal"
            w={{ base: '100%', sm: 'auto' }}
            maxW="260px"
            _hover={{ textDecoration: 'none', borderColor: descColor }}
          >
            Deployment docs <LuArrowRight size={16} />
          </Link>
        </Flex>
      </Flex>
    </SectionWrapper>
  )
})
