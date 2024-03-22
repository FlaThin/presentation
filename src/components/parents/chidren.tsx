export type Vehicle = {
  color: string,
  type: string
}

type ChildrenProps = {
  vehicle: Vehicle
}

export function Children({ vehicle }: ChildrenProps) {
  return (
    <div className="relative p-4 rounded-2xl border-blue-500 border-2 w-full">
      <span className="px-1 absolute left-4 bg-white rounded-2xl -top-2 text-xs text-blue-500">Children</span>
      <div className="randandan">{vehicle.type}</div>
    </div>
  )
}