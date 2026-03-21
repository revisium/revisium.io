import { Box, Heading, Link, Text } from '@chakra-ui/react'
import { FC } from 'react'
import { LuArrowRight } from 'react-icons/lu'
import { useColorModeValue } from 'src/shared/ui'

interface FeatureCardProps {
  title: string
  description: string
  link?: string
}

export const FeatureCard: FC<FeatureCardProps> = ({ title, description, link }) => {
  const bg = useColorModeValue('#f9f9f9', '#1a1a1a')
  const borderColor = useColorModeValue('#e5e5e5', '#2a2a2a')
  const titleColor = useColorModeValue('#171717', '#e5e5e5')
  const descColor = useColorModeValue('#525252', '#a3a3a3')
  const linkColor = useColorModeValue('#171717', '#e5e5e5')

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
      <Heading as="h3" fontSize="16px" fontWeight={600} mb="8px" color={titleColor}>
        {title}
      </Heading>
      <Text fontSize="14px" color={descColor} lineHeight={1.5} flex={1}>
        {description}
      </Text>
      {link && (
        <Link
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          display="flex"
          alignItems="center"
          gap="4px"
          fontSize="13px"
          fontWeight={500}
          color={linkColor}
          mt="12px"
          _hover={{ textDecoration: 'none', gap: '8px' }}
          transition="gap 0.2s"
        >
          Learn more <LuArrowRight size={13} />
        </Link>
      )}
    </Box>
  )
}
