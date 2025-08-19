"use client"

import { createContext, useContext, useMemo, useState, type ReactNode } from "react"
import { getAllModels, type Model } from "@/data/models"

type Ctx = {
  selected: (Model | null)[]
  setSelectedIndex: (idx: number, model: Model | null) => void
}

const ComparisonContext = createContext<Ctx | null>(null)

export function ComparisonProvider({ children }: { children: ReactNode }) {
  const all = getAllModels()
  const [selected, setSelected] = useState<(Model | null)[]>([all[0] ?? null, all[1] ?? null, null])

  const value = useMemo<Ctx>(
    () => ({
      selected,
      setSelectedIndex: (idx, model) =>
        setSelected((prev) => {
          const next = [...prev]
          next[idx] = model
          return next
        }),
    }),
    [selected],
  )

  return <ComparisonContext.Provider value={value}>{children}</ComparisonContext.Provider>
}

export function useComparison() {
  const ctx = useContext(ComparisonContext)
  if (!ctx) throw new Error("useComparison must be used within ComparisonProvider")
  return ctx
}
