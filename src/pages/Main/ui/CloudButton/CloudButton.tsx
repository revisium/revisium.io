import { useCallback } from 'react'
import { Button } from 'src/shared/ui/components'

export const CloudButton = () => {
  const handleCloud = useCallback(() => {
    window.open('https://cloud.revisium.io', '_blank', 'noopener')
  }, [])

  return (
    <Button w="100%" visual="PrimaryButton" onClick={handleCloud}>
      Try Revisium Cloud (Alpha)
    </Button>
  )
}
