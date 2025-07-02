type TagProps = {
  children: React.ReactNode
}

export const Tag = ({ children }: TagProps) => {
  return (
    <div className="nb-shadow bg-primary inline-block rounded px-3 py-1 text-sm font-semibold">
      {children}
    </div>
  )
}
