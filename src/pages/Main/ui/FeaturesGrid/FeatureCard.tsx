import { FC } from 'react'
import { ContentCard } from 'src/pages/Main/ui/shared/ContentCard.tsx'

interface FeatureCardProps {
  title: string
  description: string
  link?: string
}

export const FeatureCard: FC<FeatureCardProps> = ({ title, description, link }) => {
  return <ContentCard title={title} description={description} link={link} linkLabel={link ? 'Learn more' : undefined} />
}
