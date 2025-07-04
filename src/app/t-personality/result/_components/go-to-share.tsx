'use client'

import { Button } from '@/components/ui/button'

export const GoToShare = () => {
  const handleClick = () => {
    window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' })
  }
  return (
    <Button size="sm" onClick={handleClick}>
      공유하기
    </Button>
  )
}
