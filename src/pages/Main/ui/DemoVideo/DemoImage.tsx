import { Flex, Image } from '@chakra-ui/react'
import { observer } from 'mobx-react-lite'
import { FC } from 'react'
import { MainPageModel } from 'src/pages/Main/model/MainPageModel.ts'
import { SectionWrapper } from 'src/pages/Main/ui/shared/SectionWrapper.tsx'
import { useColorModeValue } from 'src/shared/ui'

interface DemoImageProps {
  model: MainPageModel
}

export const DemoImage: FC<DemoImageProps> = observer(({ model }) => {
  const borderColor = useColorModeValue('#e5e5e5', '#2a2a2a')
  const imageUrl = model.imageUrl

  if (!imageUrl) {
    return null
  }

  return (
    <SectionWrapper alignItems="center">
      <Flex
        w="100%"
        maxW="860px"
        boxShadow="0px 0px 64px 0px rgba(0, 0, 0, 0.12)"
        borderRadius="12px"
        border="1px solid"
        borderColor={borderColor}
        overflow="hidden"
      >
        <Image src={imageUrl} alt="Revisium Admin UI — Table Editor" w="100%" display="block" />
      </Flex>
    </SectionWrapper>
  )
})
