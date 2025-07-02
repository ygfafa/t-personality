import { Lightbulb } from 'lucide-react'

const benefits = [
  {
    title: '나의 플레이 스타일 정리',
    description:
      '무의식적으로 해오던 플레이 습관을 정리하고, 내가 어떤 방식으로 경기를 운영하는지 한눈에 볼 수 있습니다.',
  },
  {
    title: '나와 잘 맞는 파트너 유형 확인',
    description:
      '혼합복식이나 팀플레이 시, 어떤 성향의 플레이어와 더 좋은 호흡을 만들 수 있는지 알 수 있습니다.',
  },
  {
    title: '강점은 살리고, 약점은 보완할 방향 제시',
    description:
      '지금의 스타일에서 어떤 점을 조금 바꾸면 더 좋아질지, 실전에서 바로 적용할 수 있는 힌트를 제공합니다.',
  },
  {
    title: '내게 어울리는 라켓 추천',
    description: '경기 스타일에 맞춰 어떤 라켓이 잘 맞는지 알려줍니다.',
  },
]

export const Benefits = () => {
  return (
    <section className="nb-shadow flex flex-col gap-2 rounded bg-white p-4">
      {benefits.map((benefit, index) => (
        <div key={index}>
          <div className="flex items-center gap-2">
            <Lightbulb size={16} />
            <span className="font-semibold">{benefit.title}</span>
          </div>
          <p className="ml-6 text-sm text-gray-600">{benefit.description}</p>
        </div>
      ))}
    </section>
  )
}
