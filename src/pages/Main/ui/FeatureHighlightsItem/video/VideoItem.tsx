import { Flex } from '@chakra-ui/react'
import { FC, useRef, useState, useEffect } from 'react'
import { ASPECT_RATIO } from 'src/pages/Main/config/const.ts'
import { ControlButton } from 'src/pages/Main/ui/FeatureHighlightsItem/video/ControlButton.tsx'
import { PlayIcon } from 'src/pages/Main/ui/FeatureHighlightsItem/video/PlayIcon.tsx'
import { StopIcon } from 'src/pages/Main/ui/FeatureHighlightsItem/video/StopIcon.tsx'

export interface VideoItemProps {
  url: string
}

export const VideoItem: FC<VideoItemProps> = ({ url }) => {
  const videoRef = useRef<HTMLVideoElement | null>(null)
  const [isPlaying, setIsPlaying] = useState(false)
  const [isHovered, setIsHovered] = useState(false)

  useEffect(() => {
    const video = videoRef.current
    if (!video) return

    const handlePlay = () => setIsPlaying(true)
    const handlePause = () => setIsPlaying(false)

    video.addEventListener('play', handlePlay)
    video.addEventListener('pause', handlePause)

    return () => {
      video.removeEventListener('play', handlePlay)
      video.removeEventListener('pause', handlePause)
    }
  }, [])

  const handlePlay = () => {
    videoRef.current?.play()
  }

  const handleStop = () => {
    const video = videoRef.current

    if (video) {
      video.pause()
      video.currentTime = 0
    }
  }

  const renderButton = () => {
    if (!isPlaying) {
      return (
        <ControlButton onClick={handlePlay}>
          <PlayIcon />
        </ControlButton>
      )
    }

    if (isPlaying && isHovered) {
      return (
        <ControlButton onClick={handleStop}>
          <StopIcon />
        </ControlButton>
      )
    }

    return null
  }

  return (
    <Flex
      aspectRatio={ASPECT_RATIO}
      position="relative"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <video ref={videoRef} playsInline muted style={{ clipPath: 'inset(1px)' }} width="100%" height="100%">
        <source src={url} type="video/mp4" />
      </video>

      {renderButton()}
    </Flex>
  )
}
