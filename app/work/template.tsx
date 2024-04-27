'use client'

import { motion } from 'framer-motion'

// slide in from the right animation
export default function Template({ children }: { children: React.ReactNode }) {
  return (
    <motion.div
      initial={{ translateX: '100vw', opacity: 0}}
      animate={{ translateX: 0, opacity: 1 }}
      transition={{ ease: 'easeInOut', duration: 0.75 }}
    >
      {children}
    </motion.div>
  )
}