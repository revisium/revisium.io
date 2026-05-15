import { Flex, Heading, Link, Text } from '@chakra-ui/react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { observer } from 'mobx-react-lite'
import { FC } from 'react'
import { LuArrowRight, LuChevronDown } from 'react-icons/lu'
import { MainPageModel } from 'src/pages/Main/model/MainPageModel.ts'
import { Button, useColorModeValue } from 'src/shared/ui'

interface HeroSectionProps {
  model: MainPageModel
}

export const HeroSection: FC<HeroSectionProps> = observer(({ model }) => {
  const textColor = useColorModeValue('#171717', '#e5e5e5')
  const descColor = useColorModeValue('#525252', '#a3a3a3')
  const mutedColor = useColorModeValue('#737373', '#525252')
  const borderColor = useColorModeValue('#e5e5e5', '#262626')
  const chevronColor = useColorModeValue('#a3a3a3', '#525252')
  const secondaryButtonBg = useColorModeValue('#ffffff', '#0a0a0a')
  const secondaryButtonColor = useColorModeValue('#171717', '#e5e5e5')

  const BOUNCE_DISTANCE = 6
  const SCROLL_FADE_END = 100
  const { scrollY } = useScroll()
  const chevronOpacity = useTransform(scrollY, [0, SCROLL_FADE_END], [1, 0])

  return (
    <Flex
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
      textAlign="center"
      gap={{ base: '16px', md: '24px' }}
      px={{ base: '16px', md: '32px' }}
      maxW="860px"
      mx="auto"
      minH="calc(100vh - 60px)"
      position="relative"
    >
      <Heading
        as="h1"
        fontSize={{ base: '48px', md: '72px', xl: '80px' }}
        fontWeight={700}
        lineHeight={1.1}
        color={textColor}
      >
        {model.hero.title}
      </Heading>
      <Text fontSize={{ base: '18px', md: '24px' }} fontWeight={600} color={textColor}>
        {model.hero.subtitle}
      </Text>
      <Text fontSize={{ base: '15px', md: '17px' }} color={descColor} lineHeight={1.6} maxW="640px">
        {model.hero.description}
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
            globalThis.location.href = model.hero.ctaLink
          }}
          px="32px"
          py="14px"
          borderRadius="8px"
          fontSize="16px"
          w={{ base: '100%', sm: 'auto' }}
          maxW="260px"
        >
          {model.hero.ctaLabel}
        </Button>
        <Link
          href={model.header.docsLink}
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
          _hover={{ textDecoration: 'none', borderColor: mutedColor }}
        >
          Read Docs <LuArrowRight size={16} />
        </Link>
      </Flex>
      <Text fontSize={{ base: '13px', md: '14px' }} color={mutedColor} lineHeight={1.5} maxW="560px">
        Revisium Cloud is in Early Access: hosted sandbox for evaluation and early projects.
      </Text>

      <Flex
        gap={{ base: '24px', md: '48px' }}
        mt={{ base: '24px', md: '32px' }}
        pt={{ base: '24px', md: '32px' }}
        borderTop="1px solid"
        borderColor={borderColor}
        flexDirection={{ base: 'column', md: 'row' }}
        alignItems={{ base: 'center', md: 'flex-start' }}
      >
        {model.hero.metrics.map((metric) => (
          <Flex key={metric.label} flexDirection="column" alignItems="center" gap="4px">
            <Text fontSize={{ base: '28px', md: '32px' }} fontWeight={700} color={textColor} lineHeight={1.2}>
              {metric.value}
            </Text>
            <Text fontSize={{ base: '13px', md: '14px' }} color={mutedColor} fontWeight={400}>
              {metric.label}
            </Text>
          </Flex>
        ))}
      </Flex>

      <motion.div
        aria-hidden="true"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 0.8 }}
        style={{
          position: 'absolute',
          bottom: '32px',
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          opacity: chevronOpacity as any,
        }}
      >
        <motion.div
          animate={{ y: [0, BOUNCE_DISTANCE, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
        >
          <LuChevronDown size={20} color={chevronColor} />
        </motion.div>
      </motion.div>
    </Flex>
  )
})
