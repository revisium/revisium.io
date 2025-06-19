import { Flex, Image, Text } from '@chakra-ui/react'
import React from 'react'
import { ASPECT_RATIO } from 'src/pages/Main/config/const.ts'
import { VideoItem } from 'src/pages/Main/ui/FeatureHighlightsItem/video/VideoItem.tsx'

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
        {isVideo ? <VideoItem url={url} /> : <Image src={url} aspectRatio={ASPECT_RATIO} />}
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
