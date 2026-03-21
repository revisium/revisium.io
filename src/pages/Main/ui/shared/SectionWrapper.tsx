import { Flex, FlexProps } from '@chakra-ui/react'
import { FC } from 'react'

interface SectionWrapperProps extends FlexProps {
  children: React.ReactNode
}

export const SectionWrapper: FC<SectionWrapperProps> = ({ children, ...props }) => {
  return (
    <Flex w="100%" maxW="1106px" mx="auto" px={{ base: '16px', md: '32px', xl: '0' }} flexDirection="column" {...props}>
      {children}
    </Flex>
  )
}
