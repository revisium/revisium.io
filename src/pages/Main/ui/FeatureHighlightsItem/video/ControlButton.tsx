import { Button } from '@chakra-ui/react'
import { FC, PropsWithChildren } from 'react'

interface ControlButtonProps {
  onClick: () => void
}

export const ControlButton: FC<ControlButtonProps & PropsWithChildren> = ({ onClick, children }) => (
  <Button
    onClick={onClick}
    position="absolute"
    left="24px"
    bottom="24px"
    w="36px"
    h="36px"
    minW="auto"
    minH="auto"
    p="5px"
    borderRadius="48px"
    bgColor="#EE7152"
    zIndex="1"
  >
    {children}
  </Button>
)
