import profiles from '@/app/t-personality/_data/profiles.json'
import reviews from '@/app/t-personality/_data/reviews.json'
import { HorizontalSnapScrollWrapper } from '@/components/ui/horizontal-snap-scroll'

export const ReviewSwiper = () => {
  return (
    <HorizontalSnapScrollWrapper
      items={reviews.map(({ nickname, code, review }, index) => {
        const profile = profiles.find((profile) => profile.code === code)
        return (
          <div
            key={index}
            className="flex flex-col rounded border bg-white/80 p-4"
          >
            <div className="mb-1 text-xs">{nickname}</div>
            <div
              className="mb-1 font-bold text-gray-500"
              style={{ color: profile?.color }}
            >
              {code}
            </div>
            <div className="text-sm text-gray-800">{review}</div>
          </div>
        )
      })}
    />
  )
}
