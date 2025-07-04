type ResultCardProps = {
  code: string
  nickname: string
  description: string
  improvementTip: string
}
export const ResultCard = ({
  code,
  nickname,
  description,
  improvementTip,
}: ResultCardProps) => {
  return (
    <section>
      <div className="bg-secondary nb-shadow relative w-full overflow-hidden px-3 py-4 text-white">
        <span className="font-semibold">{nickname}</span>
        <h5 className="mb-10 text-2xl font-bold tracking-wide">{code}</h5>
        <p className="relative z-1">{description}</p>
        <img
          src="/images/t-personality/tennis-racket.png"
          width={320}
          alt="tennis-racket"
          className="absolute -right-[82px] -bottom-4 -rotate-[32deg] opacity-50"
        />
      </div>
      <div className="nb-shadow mb-6 bg-white px-3 py-4">
        <p className="text-gray-800">{improvementTip}</p>
      </div>
    </section>
  )
}
