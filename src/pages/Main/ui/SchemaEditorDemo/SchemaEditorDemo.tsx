import { Flex } from '@chakra-ui/react'
import { FC } from 'react'

interface SchemaEditorDemoProps {
  previewUrl: string
}

export const SchemaEditorDemo: FC<SchemaEditorDemoProps> = ({ previewUrl }) => {
  return (
    <Flex
      w="100%"
      maxW={{ xl: '720px' }}
      boxShadow="0px 32px 32px 0px rgba(0, 0, 0, 0.10)"
      borderRadius="16px"
      direction="column"
      mb={{ xl: '100px' }}
    >
      <Flex
        borderRadius="16px 16px 0 0"
        h="40px"
        backgroundColor="blue.1"
        boxShadow="0px 32px 32px 0px rgba(0, 0, 0, 0.10)"
        gap="8px"
        align="center"
        padding="12px"
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
          <circle cx="8" cy="8" r="6.5" stroke="#2CA1E3" strokeWidth="3" />
        </svg>

        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
          <circle cx="8" cy="8" r="6.5" stroke="#66BBEB" strokeWidth="3" />
        </svg>
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
          <circle cx="8" cy="8" r="6.5" stroke="#AADAF4" strokeWidth="3" />
        </svg>
      </Flex>
      <Flex borderRadius="0 0 16px 16px" overflow="hidden">
        <video
          autoPlay
          playsInline
          loop
          muted
          style={{
            clipPath: 'inset(2px)',
          }}
        >
          <source width="740px" height="540px" src={previewUrl} type="video/mp4" />
        </video>
      </Flex>
    </Flex>
  )
}
