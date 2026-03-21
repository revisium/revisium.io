import { Grid, Heading } from '@chakra-ui/react'
import { observer } from 'mobx-react-lite'
import { FC } from 'react'
import { motion } from 'framer-motion'
import { MainPageModel } from 'src/pages/Main/model/MainPageModel.ts'
import { FeatureCard } from 'src/pages/Main/ui/FeaturesGrid/FeatureCard.tsx'
import { SectionWrapper } from 'src/pages/Main/ui/shared/SectionWrapper.tsx'
import { useColorModeValue } from 'src/shared/ui'

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.05 },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.4, ease: 'easeOut' } },
}

interface FeaturesGridProps {
  model: MainPageModel
}

export const FeaturesGrid: FC<FeaturesGridProps> = observer(({ model }) => {
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
        {model.featuresTitle}
      </Heading>
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-40px' }}
        variants={containerVariants}
      >
        <Grid
          templateColumns={{ base: '1fr', md: 'repeat(2, 1fr)', xl: 'repeat(3, 1fr)' }}
          gap={{ base: '16px', md: '20px' }}
        >
          {model.featureItems.map((feature) => (
            <motion.div key={feature.title} variants={itemVariants}>
              <FeatureCard title={feature.title} description={feature.description} link={feature.link || undefined} />
            </motion.div>
          ))}
        </Grid>
      </motion.div>
    </SectionWrapper>
  )
})
