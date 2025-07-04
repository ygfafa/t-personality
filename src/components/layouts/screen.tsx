import { APP_BAR_HEIGHT, MAX_MOBILE_SCREEN_WIDTH } from '@/config/constants'
import { cn } from '@/lib/utils'

import { BOTTOM_FIXED_BUTTON_HEIGHT } from '../ui/bottom-fixed-button'

type ScreenHeaderProps = {
  action?: React.ReactNode
  title?: React.ReactNode
  extras?: React.ReactNode[]
  backgroundColor?: string
}
type ScreenProps = {
  children: React.ReactNode
  className?: string
  header?: ScreenHeaderProps
  backgroundColor?: string
  withSidePadding?: boolean
  withBottomFixedButton?: boolean
}

const DEFAULT_PADDING_BOTTOM = 32
const DEFAULT_PADDING_TOP = 20
export const Screen = ({
  children,
  header,
  withBottomFixedButton,
  withSidePadding = false,
}: ScreenProps) => {
  const hasHeader = !!header
  const paddingBottom = withBottomFixedButton
    ? BOTTOM_FIXED_BUTTON_HEIGHT
    : DEFAULT_PADDING_BOTTOM
  const paddingTop = hasHeader
    ? APP_BAR_HEIGHT + DEFAULT_PADDING_TOP
    : DEFAULT_PADDING_TOP
  return (
    <div
      className={cn('pb-8', withSidePadding && 'px-5')}
      style={{
        paddingTop,
      }}
    >
      {hasHeader && (
        <header
          className="fixed top-0 left-0 z-10 flex w-full items-center justify-center"
          style={{
            height: APP_BAR_HEIGHT,
          }}
        >
          <div
            className="relative flex h-full w-full items-center"
            style={{
              maxWidth: MAX_MOBILE_SCREEN_WIDTH,
              backgroundColor: header.backgroundColor ?? 'transparent',
            }}
          >
            <div className="absolute left-4">{header.action}</div>
            {header.title && (
              <h3 className="absolute left-1/2 -translate-x-1/2 font-bold">
                {header.title}
              </h3>
            )}
            {header.extras?.length && (
              <div className="absolute right-4 flex items-center space-x-2">
                {header.extras}
              </div>
            )}
          </div>
        </header>
      )}

      <div style={{ paddingBottom }} className="min-h-100">
        {children}
      </div>
    </div>
  )
}
