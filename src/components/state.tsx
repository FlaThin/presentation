"use client"
import { useState } from "react"

export function State() {
  const [contador, setContador] = useState(0);

  return (
    <div className="flex flex-col p-4 rounded-lg border-green-400 border-2">
      <h2 className="font-bold mb-2">State</h2>
      <div className="flex  gap-2 items-center">
        <button
          className="bg-slate-400 rounded-xl px-8 py-2"
          onClick={
            () => setContador(prev => (prev + 1))
          }
        >+ 1</button>

        <div className="px-4 py-2 bg-green-400 rounded-xl">
          {contador}
        </div>
      </div>

    </div>
  )
}