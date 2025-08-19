"use client"

import { useComparison } from "@/components/state/comparison-context"
import { getAllModels } from "@/data/models"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

export function ModelPicker() {
  const { selected, setSelectedIndex } = useComparison()
  const all = getAllModels()
  const options = all.map((m) => ({ value: m.slug, label: m.name }))

  return (
    <div className="mb-4 grid gap-3 md:grid-cols-3">
      {selected.map((s, idx) => (
        <div key={idx} className="space-y-1">
          <Label className="text-xs">Model Slot {idx + 1}</Label>
          <Select
            value={s?.slug ?? ""}
            onValueChange={(v) => {
              const model = all.find((m) => m.slug === v)
              setSelectedIndex(idx, model ?? null)
            }}
          >
            <SelectTrigger>
              <SelectValue placeholder="Choose a model" />
            </SelectTrigger>
            <SelectContent>
              {options.map((o) => (
                <SelectItem key={o.value} value={o.value}>
                  {o.label}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
      ))}
    </div>
  )
}
