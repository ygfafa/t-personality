import { Screen } from '@/components/layouts/screen'
import { Tag } from '@/components/ui/tag'

import { AboutButton } from './_components/about-button'
import { Benefits } from './_components/benefits'
import { LandingCTA } from './_components/landing-cta'

const TPersonalityPage = () => {
  return (
    <Screen
      header={{
        extras: [<AboutButton key="about" />],
        backgroundColor: '#EEEDDE',
      }}
      withBottomFixedButton
    >
      <div className="mb-8 flex justify-center px-10">
        <img
          src="/images/t-personality/hero.png"
          alt="T personality hero"
          className="nb-shadow text-tiny rounded"
        />
      </div>

      <div className="mb-3 flex justify-center">
        <Tag>T Personality</Tag>
      </div>

      <div className="flex flex-col gap-1 px-10 text-center break-keep">
        <h1 className="text-2xl font-bold">
          당신의 테니스 스타일을 알아보세요
        </h1>
        <p className="text-sm text-gray-700">
          플레이 성향을 진단하고, 나에게 맞는 전략과 파트너를 찾아보세요
        </p>
      </div>

      <div className="mt-8 px-4">
        <Benefits />
      </div>

      <LandingCTA />
    </Screen>
  )
}

export default TPersonalityPage
