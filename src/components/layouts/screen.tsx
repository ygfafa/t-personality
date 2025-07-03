import { BOTTOM_FIXED_BUTTON_HEIGHT } from '../ui/bottom-fixed-button'

export const APP_BAR_HEIGHT = 56

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
  withBottomFixedButton?: boolean
}

const DEFAULT_PADDING_BOTTOM = 32
export const Screen = ({
  children,
  header,
  withBottomFixedButton,
}: ScreenProps) => {
  const hasHeader = !!header
  const paddingBottom = withBottomFixedButton
    ? BOTTOM_FIXED_BUTTON_HEIGHT
    : DEFAULT_PADDING_BOTTOM
  return (
    <div className="pb-8">
      {hasHeader && (
        <div
          className="sticky top-0 z-10 flex w-full items-center justify-between bg-white px-4 py-4 whitespace-nowrap"
          style={{
            height: APP_BAR_HEIGHT,
            backgroundColor: header.backgroundColor ?? '#fff',
          }}
        >
          {header.action}
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
      )}

      <div style={{ paddingBottom }} className="min-h-full pt-3">
        {children}
      </div>
    </div>
  )
}
