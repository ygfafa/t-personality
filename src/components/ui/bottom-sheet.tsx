'use client'

import { X } from 'lucide-react'
import React from 'react'
import { Drawer } from 'vaul'

import { MAX_MOBILE_SCREEN_WIDTH } from '@/config/constants'
import { cn } from '@/lib/utils'

import { IconButton } from './icon-button'

type BottomSheetProps = {
  className?: string
  children?: React.ReactNode
  open?: boolean
  maskClosable?: boolean
  hideCloseButton?: boolean
  height?: number | string
  onClose?(): void
}

const GUTTER = 16

export const BottomSheet = ({
  className,
  open,
  children,
  onClose,
  height,
  maskClosable = true,
}: BottomSheetProps) => {
  return (
    <Drawer.Root open={open} onClose={onClose} noBodyStyles>
      <Drawer.Portal>
        <Drawer.Overlay
          className="fixed inset-0 z-50 bg-black/30"
          onClick={maskClosable ? onClose : () => {}}
        />
        <Drawer.Content
          className={cn(
            'no-scrollbar nb-shadow fixed inset-x-0 z-50 mx-auto mt-24 h-[50%] overflow-hidden rounded bg-white p-4 outline-none',
            className
          )}
          style={{
            height,
            maxWidth: MAX_MOBILE_SCREEN_WIDTH - GUTTER * 2,
            width: `calc(100% - ${GUTTER * 2}px)`,
            paddingInline: GUTTER,
            bottom: GUTTER,
          }}
        >
          <div className="mx-auto w-full overflow-scroll pt-6">{children}</div>

          <div className="absolute top-4 right-4">
            <IconButton onClick={onClose}>
              <X />
            </IconButton>
          </div>
        </Drawer.Content>
      </Drawer.Portal>
    </Drawer.Root>
  )
}
