import { Flex, Heading, Text } from '@chakra-ui/react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { observer } from 'mobx-react-lite'
import { FC } from 'react'
import { LuChevronDown } from 'react-icons/lu'
import { MainPageModel } from 'src/pages/Main/model/MainPageModel.ts'
import { Button, useColorModeValue } from 'src/shared/ui'

interface HeroSectionProps {
  model: MainPageModel
}

export const HeroSection: FC<HeroSectionProps> = observer(({ model }) => {
  const textColor = useColorModeValue('#171717', '#e5e5e5')
  const descColor = useColorModeValue('#525252', '#a3a3a3')
  const chevronColor = useColorModeValue('#a3a3a3', '#525252')

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
      <Button
        onClick={() => {
          window.location.href = model.hero.ctaLink
        }}
        mt="8px"
        px="32px"
        py="14px"
        fontSize="16px"
      >
        {model.hero.ctaLabel}
      </Button>
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
