import { FC } from 'react'
import { ContentCard } from 'src/pages/Main/ui/shared/ContentCard.tsx'

interface UseCaseCardProps {
  title: string
  description: string
  link: string
}

export const UseCaseCard: FC<UseCaseCardProps> = ({ title, description, link }) => {
  return <ContentCard title={title} description={description} link={link} />
}
