import { Flex, Text } from '@chakra-ui/react'

export const MainPage = () => {
  return (
    <Flex flexDirection="column" gap="8px" alignItems="center" justifyContent="center" height="100vh">
      <Text fontFamily="Atkinson Hyperlegible" fontSize={16}>
        revisium.io
      </Text>
    </Flex>
  )
}
