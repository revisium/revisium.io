import { Flex, Heading, IconButton, Link, Text } from '@chakra-ui/react'
import { observer } from 'mobx-react-lite'
import { FC, useCallback } from 'react'
import { LuArrowRight, LuCopy } from 'react-icons/lu'
import { MainPageModel } from 'src/pages/Main/model/MainPageModel.ts'
import { copyToClipboard } from 'src/pages/Main/lib/copyToClipboard.ts'
import { SectionWrapper } from 'src/pages/Main/ui/shared/SectionWrapper.tsx'
import { toaster, useColorModeValue } from 'src/shared/ui'

interface QuickStartProps {
  model: MainPageModel
}

export const QuickStart: FC<QuickStartProps> = observer(({ model }) => {
  const qs = model.quickStart
  const headingColor = useColorModeValue('#171717', '#e5e5e5')
  const labelColor = useColorModeValue('#737373', '#a3a3a3')
  const borderColor = useColorModeValue('#e5e5e5', '#2a2a2a')
  const cardBg = useColorModeValue('#f9f9f9', '#1a1a1a')
  const codeBg = useColorModeValue('#ffffff', '#0a0a0a')
  const codeColor = useColorModeValue('#171717', '#e5e5e5')
  const linkColor = useColorModeValue('#171717', '#e5e5e5')
  const descColor = useColorModeValue('#525252', '#a3a3a3')

  const handleCopy = useCallback(async () => {
    try {
      await copyToClipboard(qs.standaloneCmd)
      toaster.create({ description: 'Copied to clipboard', type: 'info' })
    } catch {
      toaster.create({ description: 'Failed to copy', type: 'error' })
    }
  }, [qs.standaloneCmd])

  return (
    <SectionWrapper>
      <Heading
        as="h2"
        fontSize={{ base: '28px', md: '36px' }}
        fontWeight={700}
        textAlign="center"
        mb={{ base: '32px', md: '48px' }}
        color={headingColor}
      >
        {qs.title}
      </Heading>
      <Flex
        direction={{ base: 'column', md: 'row' }}
        gap={{ base: '16px', md: '20px' }}
        maxW="720px"
        mx="auto"
        w="100%"
      >
        <Flex
          w={{ base: '100%', md: '50%' }}
          direction="column"
          gap="16px"
          p={{ base: '20px', md: '24px' }}
          borderRadius="12px"
          border="1px solid"
          borderColor={borderColor}
          bg={cardBg}
        >
          <Text fontSize="13px" fontWeight={600} textTransform="uppercase" letterSpacing="0.05em" color={labelColor}>
            {qs.standaloneLabel}
          </Text>
          <Flex
            align="center"
            border="1px solid"
            borderColor={borderColor}
            borderRadius="8px"
            bg={codeBg}
            px="12px"
            py="10px"
            gap="8px"
          >
            <Text
              as="code"
              fontSize="13px"
              fontFamily="monospace"
              color={codeColor}
              flex={1}
              whiteSpace="nowrap"
              overflow="auto"
            >
              {qs.standaloneCmd}
            </Text>
            <IconButton aria-label="Copy" variant="ghost" size="xs" onClick={handleCopy} flexShrink={0}>
              <LuCopy />
            </IconButton>
          </Flex>
        </Flex>
        <Flex
          w={{ base: '100%', md: '50%' }}
          direction="column"
          gap="16px"
          p={{ base: '20px', md: '24px' }}
          borderRadius="12px"
          border="1px solid"
          borderColor={borderColor}
          bg={cardBg}
        >
          <Text fontSize="13px" fontWeight={600} textTransform="uppercase" letterSpacing="0.05em" color={labelColor}>
            {qs.cloudLabel}
          </Text>
          <Text fontSize="15px" color={descColor} lineHeight={1.5}>
            {qs.cloudText}
          </Text>
          <Link
            href={qs.cloudLink}
            target="_blank"
            rel="noopener noreferrer"
            display="flex"
            alignItems="center"
            gap="6px"
            fontSize="15px"
            fontWeight={500}
            color={linkColor}
            _hover={{ textDecoration: 'none', gap: '10px' }}
            transition="gap 0.2s"
          >
            {qs.cloudLinkLabel} <LuArrowRight size={14} />
          </Link>
        </Flex>
      </Flex>
      <Flex justify="center" mt="24px">
        <Link
          href={qs.deployLink}
          display="flex"
          alignItems="center"
          gap="6px"
          fontSize="14px"
          fontWeight={500}
          color={labelColor}
          _hover={{ color: linkColor, textDecoration: 'none' }}
        >
          {qs.deployLinkLabel} <LuArrowRight size={14} />
        </Link>
      </Flex>
    </SectionWrapper>
  )
})
