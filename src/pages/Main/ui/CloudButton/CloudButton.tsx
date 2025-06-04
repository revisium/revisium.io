import { FC, useCallback } from 'react'
import { Button } from 'src/shared/ui/components'

interface CloudButtonProps {
  link: string
  label: string
}

export const CloudButton: FC<CloudButtonProps> = ({ link, label }) => {
  const handleCloud = useCallback(() => {
    window.open(link, '_blank', 'noopener')
  }, [link])

  return (
    <Button w="100%" visual="PrimaryButton" onClick={handleCloud}>
      {label}
    </Button>
  )
}
