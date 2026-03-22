import { Grid, Heading } from '@chakra-ui/react'
import { observer } from 'mobx-react-lite'
import { FC } from 'react'
import { MainPageModel } from 'src/pages/Main/model/MainPageModel.ts'
import { UseCaseCard } from 'src/pages/Main/ui/UseCases/UseCaseCard.tsx'
import { SectionWrapper } from 'src/pages/Main/ui/shared/SectionWrapper.tsx'
import { useColorModeValue } from 'src/shared/ui'

interface UseCasesProps {
  model: MainPageModel
}

export const UseCases: FC<UseCasesProps> = observer(({ model }) => {
  const headingColor = useColorModeValue('#171717', '#e5e5e5')

  return (
    <SectionWrapper>
      <Heading
        as="h2"
        fontSize={{ base: '28px', md: '36px' }}
        fontWeight={700}
        textAlign="center"
        mb={{ base: '32px', md: '48px' }}
        color={headingColor}
      >
        {model.useCasesTitle}
      </Heading>
      <Grid
        templateColumns={{ base: '1fr', md: 'repeat(2, 1fr)', xl: 'repeat(3, 1fr)' }}
        gap={{ base: '16px', md: '20px' }}
      >
        {model.useCaseItems.map((useCase) => (
          <UseCaseCard
            key={useCase.title}
            title={useCase.title}
            description={useCase.description}
            link={useCase.link}
          />
        ))}
      </Grid>
    </SectionWrapper>
  )
})
