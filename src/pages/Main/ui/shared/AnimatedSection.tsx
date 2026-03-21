import { motion } from 'framer-motion'
import { FC, ReactNode } from 'react'

interface AnimatedSectionProps {
  children: ReactNode
  delay?: number
}

const variants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
}

export const AnimatedSection: FC<AnimatedSectionProps> = ({ children, delay = 0 }) => {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-80px' }}
      variants={variants}
      transition={{ duration: 0.5, ease: 'easeOut', delay }}
    >
      {children}
    </motion.div>
  )
}
