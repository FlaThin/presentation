type GrandFatherProps = {
  children: React.ReactNode
}

export function GrandFather({ children }: GrandFatherProps) {
  return (
    <div className="relative p-4 rounded-2xl border-red-500 border-2 w-40">
      <span className="px-1 absolute left-4 bg-white rounded-2xl -top-2 text-xs text-red-500">Grandfather</span>
      {children}
    </div>
  )
}
