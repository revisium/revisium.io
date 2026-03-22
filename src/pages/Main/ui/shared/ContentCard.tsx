import { Box, Heading, Link, Text } from '@chakra-ui/react'
import { FC } from 'react'
import { useColorModeValue } from 'src/shared/ui'

interface ContentCardProps {
  title: string
  description: string
  link?: string
}

export const ContentCard: FC<ContentCardProps> = ({ title, description, link }) => {
  const bg = useColorModeValue('#f9f9f9', '#1a1a1a')
  const hoverBg = useColorModeValue('#f0f0f0', '#222222')
  const borderColor = useColorModeValue('#e5e5e5', '#2a2a2a')
  const titleColor = useColorModeValue('#171717', '#e5e5e5')
  const descColor = useColorModeValue('#525252', '#a3a3a3')

  const content = (
    <>
      <Heading as="h3" fontSize="16px" fontWeight={600} mb="8px" color={titleColor}>
        {title}
      </Heading>
      <Text fontSize="14px" color={descColor} lineHeight={1.5} flex={1}>
        {description}
      </Text>
    </>
  )

  if (link) {
    return (
      <Link
        href={link}
        _hover={{ textDecoration: 'none', bg: hoverBg }}
        p={{ base: '20px', md: '24px' }}
        borderRadius="12px"
        border="1px solid"
        borderColor={borderColor}
        bg={bg}
        h="100%"
        display="flex"
        flexDirection="column"
        transition="background 0.2s"
      >
        {content}
      </Link>
    )
  }

  return (
    <Box
      p={{ base: '20px', md: '24px' }}
      borderRadius="12px"
      border="1px solid"
      borderColor={borderColor}
      bg={bg}
      h="100%"
      display="flex"
      flexDirection="column"
    >
      {content}
    </Box>
  )
}
