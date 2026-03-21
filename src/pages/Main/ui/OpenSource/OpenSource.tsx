import { Flex, Heading, Link, Text } from '@chakra-ui/react'
import { observer } from 'mobx-react-lite'
import { FC } from 'react'
import { MainPageModel } from 'src/pages/Main/model/MainPageModel.ts'
import { SectionWrapper } from 'src/pages/Main/ui/shared/SectionWrapper.tsx'
import { useColorModeValue } from 'src/shared/ui'

interface OpenSourceProps {
  model: MainPageModel
}

export const OpenSource: FC<OpenSourceProps> = observer(({ model }) => {
  const os = model.openSource
  const headingColor = useColorModeValue('#171717', '#e5e5e5')
  const textColor = useColorModeValue('#525252', '#a3a3a3')
  const badgeBg = useColorModeValue('#f5f5f5', '#1a1a1a')
  const badgeColor = useColorModeValue('#171717', '#e5e5e5')
  const badgeBorder = useColorModeValue('#e5e5e5', '#2a2a2a')

  return (
    <SectionWrapper>
      <Flex
        direction="column"
        alignItems="center"
        textAlign="center"
        py={{ base: '32px', md: '48px' }}
        gap={{ base: '16px', md: '24px' }}
      >
        <Flex px="16px" py="6px" borderRadius="20px" border="1px solid" borderColor={badgeBorder} bg={badgeBg}>
          <Text fontSize="13px" fontWeight={600} color={badgeColor}>
            {os.badge}
          </Text>
        </Flex>
        <Heading as="h2" fontSize={{ base: '28px', md: '36px' }} fontWeight={700} color={headingColor}>
          {os.title}
        </Heading>
        <Text fontSize={{ base: '15px', md: '17px' }} color={textColor} lineHeight={1.6} maxW="600px">
          {os.description}
        </Text>
        <Link
          href={os.link}
          target="_blank"
          rel="noopener noreferrer"
          fontSize="15px"
          fontWeight={500}
          color={badgeColor}
          _hover={{ textDecoration: 'underline' }}
          mt="8px"
        >
          {os.linkLabel}
        </Link>
      </Flex>
    </SectionWrapper>
  )
})
