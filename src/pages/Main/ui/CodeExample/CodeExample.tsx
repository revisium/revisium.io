import { Box, Flex, Heading, Link, Text } from '@chakra-ui/react'
import { json } from '@codemirror/lang-json'
import { javascript } from '@codemirror/lang-javascript'
import { observer } from 'mobx-react-lite'
import { FC } from 'react'
import { LuArrowRight } from 'react-icons/lu'
import { motion } from 'framer-motion'
import { MainPageModel } from 'src/pages/Main/model/MainPageModel.ts'
import { CodeBlock } from 'src/pages/Main/ui/shared/CodeBlock.tsx'
import { SectionWrapper } from 'src/pages/Main/ui/shared/SectionWrapper.tsx'
import { useColorModeValue } from 'src/shared/ui'

const langExtensions = (code: string) => {
  if (code.trimStart().startsWith('{') || code.trimStart().startsWith('[')) return [json()]

  return [javascript()]
}

interface StepProps {
  number: number
  label: string
  description: string
  code: string
  delay: number
  extraLabel?: string
  extraCode?: string
}

const StepLabel: FC<{ number: number; label: string; description: string }> = ({ number, label, description }) => {
  const borderColor = useColorModeValue('#e5e5e5', '#2a2a2a')
  const labelColor = useColorModeValue('#737373', '#a3a3a3')
  const stepColor = useColorModeValue('#171717', '#e5e5e5')
  const descColor = useColorModeValue('#525252', '#a3a3a3')

  return (
    <Flex direction="column" gap="4px" minW={{ md: '200px' }} maxW={{ md: '200px' }} pt="4px">
      <Flex align="center" gap="8px">
        <Flex
          w="24px"
          h="24px"
          borderRadius="50%"
          border="2px solid"
          borderColor={borderColor}
          align="center"
          justify="center"
          flexShrink={0}
        >
          <Text fontSize="12px" fontWeight={600} color={labelColor}>
            {number}
          </Text>
        </Flex>
        <Text fontSize="15px" fontWeight={600} color={stepColor}>
          {label}
        </Text>
      </Flex>
      <Text fontSize="13px" color={descColor} lineHeight={1.5} pl="32px">
        {description}
      </Text>
    </Flex>
  )
}

const Step: FC<StepProps> = ({ number, label, description, code, delay, extraLabel, extraCode }) => {
  const borderColor = useColorModeValue('#e5e5e5', '#2a2a2a')
  const labelColor = useColorModeValue('#737373', '#a3a3a3')

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration: 0.5, ease: 'easeOut', delay }}
    >
      <Flex direction={{ base: 'column', md: 'row' }} gap={{ base: '16px', md: '24px' }} align="flex-start">
        <StepLabel number={number} label={label} description={description} />
        <Box flex={1} w="100%">
          <Flex direction="column" gap="12px">
            <Flex border="1px solid" borderColor={borderColor} borderRadius="12px" overflow="hidden">
              <CodeBlock value={code} extensions={langExtensions(code)} showCopy={false} />
            </Flex>
            {extraCode && (
              <Flex direction="column" gap="6px">
                {extraLabel && (
                  <Text
                    fontSize="12px"
                    fontWeight={600}
                    textTransform="uppercase"
                    letterSpacing="0.05em"
                    color={labelColor}
                  >
                    {extraLabel}
                  </Text>
                )}
                <Flex border="1px solid" borderColor={borderColor} borderRadius="12px" overflow="hidden">
                  <CodeBlock value={extraCode} extensions={langExtensions(extraCode)} showCopy={false} />
                </Flex>
              </Flex>
            )}
          </Flex>
        </Box>
      </Flex>
    </motion.div>
  )
}

interface CodeExampleProps {
  model: MainPageModel
}

const STEP_DELAY = 0.1

export const CodeExample: FC<CodeExampleProps> = observer(({ model }) => {
  const headingColor = useColorModeValue('#171717', '#e5e5e5')
  const descColor = useColorModeValue('#525252', '#a3a3a3')

  return (
    <SectionWrapper>
      <Heading
        as="h2"
        fontSize={{ base: '28px', md: '36px' }}
        fontWeight={700}
        textAlign="center"
        mb="12px"
        color={headingColor}
      >
        {model.codeSectionTitle}
      </Heading>
      <Text
        fontSize={{ base: '15px', md: '17px' }}
        color={descColor}
        textAlign="center"
        mb={{ base: '32px', md: '48px' }}
        maxW="600px"
        mx="auto"
      >
        {model.codeSectionSubtitle}
      </Text>
      <Flex direction="column" gap={{ base: '32px', md: '40px' }}>
        {model.codeSteps.map((step, index) => (
          <Step
            key={step.label}
            number={index + 1}
            label={step.label}
            description={step.description}
            code={step.code}
            delay={index * STEP_DELAY}
            extraLabel={step.extraLabel || undefined}
            extraCode={step.extraCode || undefined}
          />
        ))}
      </Flex>
      <Flex direction="column" align="center" gap="8px" mt={{ base: '32px', md: '40px' }}>
        <Text fontSize={{ base: '14px', md: '15px' }} color={descColor} textAlign="center">
          {model.codeSectionFooterText}
        </Text>
        <Link
          href={model.codeSectionFooterLink}
          target="_blank"
          rel="noopener noreferrer"
          display="flex"
          alignItems="center"
          gap="6px"
          fontSize="14px"
          fontWeight={500}
          color={headingColor}
          _hover={{ textDecoration: 'none', gap: '10px' }}
          transition="gap 0.2s"
        >
          {model.codeSectionFooterLinkLabel} <LuArrowRight size={14} />
        </Link>
      </Flex>
    </SectionWrapper>
  )
})
