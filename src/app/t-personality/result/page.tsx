'use client'
import React, { useEffect, useState } from 'react'

import { Button } from '@/components/ui/button'

import { getSurveyResultCode } from '../../../lib/utils'
import { useTPersonalitySurveyStore } from '../_hooks/use-t-personality-survey-store'

// 타입 정의
interface Profile {
  code: string
  name: string
  nickname: string
  description: string
  improvement_tip: string
  compatibility: Array<{ code: string; value: number; reason: string }>
}

interface Question {
  id: number
  text: string
  score: Record<string, number | undefined>
}

const ResultPage = () => {
  const { answers, reset } = useTPersonalitySurveyStore()
  const [profile, setProfile] = useState<Profile | null>(null)
  const [code, setCode] = useState('')

  useEffect(() => {
    Promise.all([
      import('../_data/questions.json'),
      import('../_data/profiles.json'),
    ]).then(([qMod, pMod]) => {
      const qs: Question[] = qMod.default || qMod
      const ps: Profile[] = pMod.default || pMod
      if (answers.length && qs.length) {
        const resultCode = getSurveyResultCode(answers, qs)
        setCode(resultCode)
        const found = ps.find((p) => p.code === resultCode)
        setProfile(found ?? null)
      }
    })
  }, [answers])

  // 설문 미완료 시 설문 페이지로 리다이렉트(선택)
  // if (!answers || answers.every(a => a === 0)) return <Navigate to="/survey" />

  if (!profile)
    return (
      <div className="flex min-h-screen items-center justify-center bg-[#F3F0DD] text-xl text-[#027BFC]">
        결과를 불러오는 중...
      </div>
    )

  return (
    <div className="min-h-screen">
      <div className="mb-2 text-[22px] font-extrabold tracking-tight">
        나의 테니스 성향 결과
      </div>
      <div className="mb-1 text-[32px] font-extrabold tracking-wider text-[#FDC800]">
        {profile.name}
      </div>
      <div className="mb-2 text-lg font-bold">{profile.nickname}</div>
      <div className="mb-3 text-center text-base leading-relaxed">
        {profile.description}
      </div>
      <div className="rounded border-2 border-black bg-[#FDC800] px-5 py-3 text-base font-bold text-[#111] shadow-[4px_4px_0px_rgba(0,0,0,0.9)]">
        {profile.improvement_tip}
      </div>
      <div className="mt-4 text-sm">
        유형 코드: <b className="text-base text-[#FDC800]">{code}</b>
      </div>
      <Button
        onClick={() => {
          reset()
          window.location.href = '/survey'
        }}
      >
        다시 설문하기
      </Button>
    </div>
  )
}

export default ResultPage
