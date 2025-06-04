import { Flex, Grid, Text } from '@chakra-ui/react'
import React from 'react'
import { FeatureHighlightsItem } from 'src/pages/Main/ui/FeatureHighlightsItem/FeatureHighlightsItem.tsx'

interface FeatureHighlightsProps {
  title: string
  variations: {
    id: string
    imageUrl: string
    title: string
    description: string
    isVideo?: boolean
  }[]
}

export const FeatureHighlights: React.FC<FeatureHighlightsProps> = ({ title, variations }) => {
  return (
    <Flex w="100%" direction="column" align="center" gap={{ base: '24px', md: '32px' }}>
      <Text fontSize={{ base: '24px', md: '32px', xl: '40px' }} fontWeight={700}>
        {title}
      </Text>
      <Grid
        w="100%"
        maxW="1280px"
        p={{ base: '0 16px', md: '0 32px', xl: '24px' }}
        templateColumns={{ base: 'repeat(1, 1fr)', xl: 'repeat(2, 1fr)' }}
        gap={{ base: '32px', xl: '32px 24px' }}
      >
        {variations.map((variation) => (
          <FeatureHighlightsItem
            key={variation.id}
            title={variation.title}
            description={variation.description}
            imageUrl={variation.imageUrl}
            isVideo={variation.isVideo}
          />
        ))}
      </Grid>
    </Flex>
  )
}
