'use client'

import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { useReducedMotion } from '@/hooks/useReducedMotion'
import { forwardRef } from 'react'
import { ButtonProps } from '@/components/ui/button'

interface MotionButtonProps extends ButtonProps {
  children: React.ReactNode
}

export const MotionButton = forwardRef<HTMLButtonElement, MotionButtonProps>(
  ({ children, className, ...props }, ref) => {
    const prefersReducedMotion = useReducedMotion()

    const motionProps = prefersReducedMotion
      ? {}
      : {
          whileHover: { 
            scale: 1.02, 
            opacity: 0.9,
            transition: { type: "spring", stiffness: 400, damping: 17 }
          },
          whileTap: { 
            scale: 0.98,
            transition: { type: "spring", stiffness: 400, damping: 17 }
          },
        }

    return (
      <motion.div {...motionProps}>
        <Button ref={ref} className={className} {...props}>
          {children}
        </Button>
      </motion.div>
    )
  }
)

MotionButton.displayName = "MotionButton"