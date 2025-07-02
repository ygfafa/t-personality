'use client'

import { useRouter } from 'next/navigation'
import { useEffect } from 'react'

import { BottomFixedButton } from '@/components/ui/bottom-fixed-button'

export const LandingCTA = () => {
  const router = useRouter()
  useEffect(() => {
    router.prefetch('/t-personality/survey')
  }, [router])
  return (
    <BottomFixedButton
      onClick={() => {
        router.push('/t-personality/survey')
      }}
    >
      테스트 시작
    </BottomFixedButton>
  )
}
