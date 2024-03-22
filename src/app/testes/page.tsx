import { Effect } from "@/components/effect";
import { State } from "@/components/state";

export default function Testes () {
  return (
    <div className="flex flex-col gap-4 py-10">
      <State/>
      <Effect/>
    </div>
  )
}