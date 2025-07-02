'use client'
import { useRouter } from 'next/navigation'
import React, { useEffect, useRef, useState } from 'react'

import { Button } from '@/components/ui/button'
import { LikertRadioGroup } from '@/components/ui/likert-radio-group'
import { ProgressBar } from '@/components/ui/progress-bar'

import { useTPersonalitySurveyStore } from '../_hooks/use-t-personality-survey-store'

// 질문 데이터 타입 정의
interface Question {
  id: number
  text: string
  score: Record<string, number | undefined>
}

const TPersonalitySurveyPage = () => {
  const [questions, setQuestions] = useState<Question[]>([])
  const { answers, setAnswer } = useTPersonalitySurveyStore()
  // 각 질문 li에 대한 ref 배열
  const itemRefs = useRef<(HTMLLIElement | null)[]>([])
  const router = useRouter()

  // questions.json 동적 로딩
  useEffect(() => {
    import('../_data/questions.json').then((mod) => {
      setQuestions(mod.default || mod)
    })
  }, [])

  // 진행률 계산
  const answeredCount = answers.filter((a) => a > 0).length
  const progress =
    questions.length > 0 ? (answeredCount / questions.length) * 100 : 0

  // 모든 답변이 완료됐는지 체크
  const isComplete =
    answers.length === questions.length && answers.every((a) => a > 0)

  // 답변 선택 시 스크롤
  const handleSelect = (idx: number, val: number) => {
    setAnswer(idx, val)
    setTimeout(() => {
      // 아래쪽(현재 idx보다 큰) 미답변 index들
      const below = answers
        .map((a, i) => (a === 0 && i > idx ? i : -1))
        .filter((i) => i !== -1)
      if (below.length === 0) return
      const targetIdx = Math.min(...below)
      const ref = itemRefs.current[targetIdx]
      if (ref) {
        ref.scrollIntoView({ behavior: 'smooth', block: 'center' })
      }
    }, 100)
  }

  // 결과 페이지 이동
  const handleSubmit = () => {
    if (!isComplete) return
    router.push('/t-personality/result')
  }

  const handleContinue = () => {
    const firstUnanswered = answers.findIndex((a) => a === 0)
    if (firstUnanswered !== -1) {
      const ref = itemRefs.current[firstUnanswered]
      if (ref) {
        ref.scrollIntoView({ behavior: 'smooth', block: 'center' })
      }
    }
  }

  if (questions.length === 0) return <div>로딩 중...</div>

  return (
    <div>
      {/* 진행률 바 */}
      <div className="sticky top-0 z-20 w-full px-4 py-4 backdrop-blur-sm">
        <ProgressBar value={progress} />
      </div>

      <div className="px-4 pb-6">
        <ol>
          {questions.map((q, idx) => (
            <React.Fragment key={q.id}>
              <li
                ref={(el) => {
                  itemRefs.current[idx] = el
                }}
              >
                <div className="mx-auto mb-8 w-[80%] text-center text-[16px] font-semibold break-keep">
                  {q.text}
                </div>
                <LikertRadioGroup
                  value={answers[idx]}
                  onChange={(val) => handleSelect(idx, val)}
                  labels={{ left: '그렇다', right: '그렇지 않다' }}
                />
              </li>

              {idx !== questions.length - 1 && (
                <div className="my-10 h-[1px] w-full bg-gray-600" />
              )}
            </React.Fragment>
          ))}
        </ol>

        <div className="mt-6">
          {isComplete ? (
            <Button onClick={handleSubmit}>결과보기</Button>
          ) : (
            <Button onClick={handleContinue}>계속하기</Button>
          )}
        </div>
      </div>
    </div>
  )
}

export default TPersonalitySurveyPage
