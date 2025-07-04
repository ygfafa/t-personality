'use client'
import { useEffect, useState } from 'react'

import { Screen } from '@/components/layouts/screen'
import { ShareFeature } from '@/components/share-feature'
import { Divider } from '@/components/ui/divider'

import { getSurveyResultCode } from '../../../lib/utils'
import { useTPersonalitySurveyStore } from '../_hooks/use-t-personality-survey-store'
import { GoToShare } from './_components/\bgo-to-share'
import { PartnershipChart } from './_components/partnership-chart'
import { RacketRecommendation } from './_components/racket-recommendation'
import { ResultCard } from './_components/result-card'

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

  if (!profile)
    return (
      <div className="flex min-h-screen items-center justify-center bg-[#F3F0DD] text-xl text-[#027BFC]">
        결과를 불러오는 중...
      </div>
    )

  return (
    <Screen
      withSidePadding
      header={{
        backgroundColor: '#EEEDDE',
        title: '나의 테니스 성향 결과',
        extras: [<GoToShare key="share" />],
      }}
    >
      <ResultCard
        code={profile.code}
        nickname={profile.nickname}
        description={profile.description}
        improvementTip={profile.improvement_tip}
      />

      <Divider />
      <RacketRecommendation />
      <PartnershipChart />
      <ShareFeature
        className="mt-8"
        kakao={{
          url: 'https://www.google.com',
          title: 'Google',
          description: 'Google is a search engine',
          imageUrl:
            'https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png',
          buttonTitle: 'Google',
        }}
        copy={{
          url: 'https://www.google.com',
        }}
      />
    </Screen>
  )
}

export default ResultPage
