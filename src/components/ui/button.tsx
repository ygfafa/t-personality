'use client'

import { motion } from 'framer-motion'

import { cn } from '@/lib/utils'

export type ButtonProps = React.ComponentProps<typeof motion.button>
export const buttonWhileTapProps = {
  x: 2,
  y: 2,
  boxShadow: 'none',
  transition: { type: 'spring', stiffness: 400, damping: 20 },
} as const

export const Button = ({ children, className, ...props }: ButtonProps) => {
  return (
    <motion.button
      whileTap={buttonWhileTapProps}
      className={cn(
        'w-full rounded border-1 border-black bg-[#FDC800] py-3 text-lg font-bold shadow-[2px_2px_0px_rgba(0,0,0,0.9)]',
        className
      )}
      {...props}
    >
      {children}
    </motion.button>
  )
}
