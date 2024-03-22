type DadProps = {
  children: React.ReactNode
}

export function Dad({ children }: DadProps) {
  return (
    <div className="relative p-4 rounded-2xl border-green-500 border-2 w-full">
      <span className="px-1 absolute left-4 bg-white rounded-2xl -top-2 text-xs text-green-500">Dad</span>
      {children}
    </div>
  )
}