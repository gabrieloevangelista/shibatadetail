"use client"

import { motion } from "framer-motion"
import type { HTMLAttributes, ReactNode } from "react"
import { memo } from "react"

interface AnimatedSectionProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode
  delay?: number
}

export const AnimatedSection = memo(function AnimatedSection({ children, className, delay = 0, ...props }: AnimatedSectionProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20, scale: 0.98 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6, ease: [0.33, 1, 0.68, 1], delay }}
      className={className}
      {...props}
    >
      {children}
    </motion.div>
  )
})
