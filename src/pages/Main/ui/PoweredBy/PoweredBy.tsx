import { Flex, Heading, Link, Text } from '@chakra-ui/react'
import { observer } from 'mobx-react-lite'
import { FC } from 'react'
import { LuArrowRight } from 'react-icons/lu'
import { MainPageModel } from 'src/pages/Main/model/MainPageModel.ts'
import { SectionWrapper } from 'src/pages/Main/ui/shared/SectionWrapper.tsx'
import { useColorModeValue } from 'src/shared/ui'

interface PoweredByProps {
  model: MainPageModel
}

export const PoweredBy: FC<PoweredByProps> = observer(({ model }) => {
  const pb = model.poweredBy
  const bg = useColorModeValue('#f9f9f9', '#1a1a1a')
  const borderColor = useColorModeValue('#e5e5e5', '#2a2a2a')
  const headingColor = useColorModeValue('#171717', '#e5e5e5')
  const textColor = useColorModeValue('#525252', '#a3a3a3')
  const linkColor = useColorModeValue('#171717', '#e5e5e5')

  return (
    <SectionWrapper>
      <Flex
        direction="column"
        alignItems="center"
        textAlign="center"
        gap="16px"
        py={{ base: '32px', md: '40px' }}
        px={{ base: '24px', md: '40px' }}
        borderRadius="12px"
        border="1px solid"
        borderColor={borderColor}
        bg={bg}
      >
        <Heading as="h3" fontSize={{ base: '18px', md: '20px' }} fontWeight={600} color={headingColor}>
          {pb.title}
        </Heading>
        <Text fontSize={{ base: '14px', md: '15px' }} color={textColor} lineHeight={1.6} maxW="480px">
          {pb.description}
        </Text>
        <Link
          href={pb.link}
          target="_blank"
          rel="noopener noreferrer"
          display="flex"
          alignItems="center"
          gap="6px"
          fontSize="14px"
          fontWeight={500}
          color={linkColor}
          _hover={{ textDecoration: 'none', gap: '10px' }}
          transition="gap 0.2s"
        >
          {pb.linkLabel} <LuArrowRight size={14} />
        </Link>
      </Flex>
    </SectionWrapper>
  )
})
