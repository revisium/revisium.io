import { Button, Flex, Image, Text } from '@chakra-ui/react'
import React from 'react'

interface CoreFeaturesItemProps {
  url: string
  title: string
  description: string
  isVideo?: boolean
}

export const FeatureHighlightsItem: React.FC<CoreFeaturesItemProps> = ({ url, description, title, isVideo }) => {
  return (
    <Flex w="100%" maxW={{ xl: '600px' }} direction="column" gap="16px">
      <Flex position="relative" borderRadius="16px" border="1px solid #E2E4E5" bgColor="#F3F3F3" overflow="hidden">
        <Image src={url} />
        {isVideo ? (
          <Button
            position="absolute"
            left="4px"
            bottom="4px"
            w="24px"
            h="24px"
            minW="auto"
            minH="auto"
            p="5px"
            borderRadius="48px"
            bgColor="#EE7152"
          >
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M12 6.13405C12.6667 6.51895 12.6667 7.4812 12 7.8661L4.5 12.1962C3.83333 12.5811 3 12.1 3 11.3302L3 2.66995C3 1.90015 3.83333 1.41902 4.5 1.80392L12 6.13405Z"
                fill="white"
              />
            </svg>
          </Button>
        ) : undefined}
      </Flex>
      <Flex direction="column" gap="8px">
        <Text fontSize={{ base: '16px', md: '18px', xl: '20px' }} fontWeight={700}>
          {title}
        </Text>
        <Text fontSize={{ base: '13px', md: '14px', xl: '16px' }} fontWeight={400}>
          {description}
        </Text>
      </Flex>
    </Flex>
  )
}
