import React, { useEffect, useRef } from 'react'

import { cn } from '@/lib/utils'

export type SegmentedProps = {
  options: string[]
  value: string
  onChange: (value: string) => void
  className?: string
}

/**
 * Segmented(세그먼티드) 탭 컴포넌트
 * - options: 탭 목록
 * - value: 현재 선택된 탭 값
 * - onChange: 탭 변경 시 호출
 * - className: 추가 스타일
 */
export const Segmented: React.FC<SegmentedProps> = ({
  options,
  value,
  onChange,
  className,
}) => {
  // 각 탭 버튼에 ref를 할당하기 위한 배열
  const tabRefs = useRef<(HTMLButtonElement | null)[]>([])

  // value(선택된 탭)가 바뀔 때마다 해당 버튼이 보이도록 스크롤
  useEffect(() => {
    const idx = options.indexOf(value)
    if (idx !== -1 && tabRefs.current[idx]) {
      tabRefs.current[idx]?.scrollIntoView({
        behavior: 'smooth',
        block: 'nearest',
        inline: 'center',
      })
    }
  }, [value, options])

  return (
    <div
      className={cn(
        'no-scrollbar inline-flex w-full gap-1 overflow-x-auto p-1 whitespace-nowrap',
        className
      )}
      style={{ WebkitOverflowScrolling: 'touch' }}
    >
      {options.map((option, idx) => {
        const isSelected = value === option
        return (
          <button
            key={option}
            ref={(el) => {
              tabRefs.current[idx] = el
            }}
            type="button"
            className={cn(
              'rounded px-2 py-1 text-sm font-medium',
              isSelected
                ? 'nb-shadow bg-white text-black shadow'
                : 'bg-transparent text-neutral-600'
            )}
            aria-pressed={isSelected}
            tabIndex={0}
            onClick={() => onChange(option)}
          >
            {option}
          </button>
        )
      })}
    </div>
  )
}

export default Segmented
