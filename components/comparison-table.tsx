"use client"

import { useComparison } from "@/components/state/comparison-context"
import Link from "next/link"

export function ComparisonTable() {
  const { selected } = useComparison()
  const specs = ["brand", "type", "detectorType", "generatorKw", "price"] as const

  return (
    <div className="overflow-x-auto rounded-lg border">
      <table className="w-full min-w-[720px] border-collapse text-sm">
        <thead>
          <tr className="bg-slate-50 text-left">
            <th className="p-3 font-medium">Specification</th>
            {selected.map((m, idx) => (
              <th key={idx} className="p-3 font-medium">
                {m ? (
                  <Link href={`/models/${m.slug}`} className="text-teal-700 underline underline-offset-4">
                    {m.name}
                  </Link>
                ) : (
                  "—"
                )}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {specs.map((k) => (
            <tr key={k} className="border-t">
              <td className="p-3 font-medium">
                {k === "generatorKw"
                  ? "Generator (kW)"
                  : k === "detectorType"
                    ? "Detector"
                    : k.charAt(0).toUpperCase() + k.slice(1)}
              </td>
              {selected.map((m, idx) => (
                <td key={idx} className="p-3">
                  {m ? (k === "generatorKw" ? `${m.generatorKw}` : (m as any)[k]) : "—"}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}
