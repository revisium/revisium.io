import { Box, Flex, Text } from '@chakra-ui/react'
import { FC, Fragment } from 'react'
import { MainPageModel } from 'src/pages/Main/model/MainPageModel.ts'
import { CloudButton } from 'src/pages/Main/ui/CloudButton/CloudButton.tsx'

interface HeaderSectionProps {
  model: MainPageModel
}

export const HeaderSection: FC<HeaderSectionProps> = ({ model }) => {
  return (
    <Flex
      w="100%"
      flexDirection="column"
      align={{ xl: 'center' }}
      gap={{ base: '16px', md: '24px', xl: '32px' }}
      p={{ base: '0 16px', md: '0 32px', xl: '0' }}
    >
      <Text
        display={{ base: 'block', xl: 'none' }}
        fontSize={{ base: '42px', md: '76px' }}
        fontStyle="normal"
        fontWeight={700}
        lineHeight={{ base: '48px', md: '72px' }}
      >
        {model.title}
      </Text>
      <Text
        display={{ base: 'none', xl: 'block' }}
        maxW="860px"
        fontSize="62px"
        fontStyle="normal"
        fontWeight={700}
        lineHeight="72px"
        textAlign="center"
      >
        {model.title}
      </Text>
      <Text
        maxW={{ base: '600px', xl: '860px' }}
        fontSize={{ base: '13px', md: '15px', xl: '16px' }}
        fontStyle={{ base: 'normal' }}
        fontWeight={{ base: '400' }}
        lineHeight={{ base: '17px', md: '20px', xl: '21px' }}
        textAlign={{ base: 'start', xl: 'center' }}
      >
        {model.description.map((item) => (
          <Fragment key={item.id}>
            <span>{item.text}</span>
            <br />
          </Fragment>
        ))}
      </Text>
      <Box w="480px" display={{ base: 'none', xl: 'block' }}>
        <CloudButton link={model.cloudLink} label={model.cloudLabel} />
      </Box>
    </Flex>
  )
}
