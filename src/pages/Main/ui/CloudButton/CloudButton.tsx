import { useCallback } from 'react'
import { Button } from 'src/shared/ui/components'

export const CloudButton = () => {
  const handleCloud = useCallback(() => {
    window.open('https://cloud.revisium.io', '_blank')
  }, [])

  return (
    <Button w={{ base: '100%', md: '328px' }} visual="PrimaryButton" onClick={handleCloud}>
      Try Revisium Cloud (Alpha)
    </Button>
  )
}
