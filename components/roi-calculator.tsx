"use client"

import { useMemo, useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

export default function ROICalculator() {
  const [proceduresPerMonth, setProceduresPerMonth] = useState(120)
  const [avgReimbursement, setAvgReimbursement] = useState(450)
  const [utilization, setUtilization] = useState(0.8) // 80%

  const monthly = useMemo(
    () => Math.round(proceduresPerMonth * avgReimbursement * utilization),
    [proceduresPerMonth, avgReimbursement, utilization],
  )
  const annual = monthly * 12

  return (
    <Card>
      <CardHeader className="pb-2">
        <CardTitle>Revenue Estimate</CardTitle>
      </CardHeader>
      <CardContent className="grid gap-4 md:grid-cols-3">
        <div>
          <Label className="text-xs">Procedures / month</Label>
          <Input
            type="number"
            value={proceduresPerMonth}
            onChange={(e) => setProceduresPerMonth(Number.parseInt(e.target.value || "0"))}
            min={0}
          />
        </div>
        <div>
          <Label className="text-xs">Avg reimbursement ($)</Label>
          <Input
            type="number"
            value={avgReimbursement}
            onChange={(e) => setAvgReimbursement(Number.parseInt(e.target.value || "0"))}
            min={0}
          />
        </div>
        <div>
          <Label className="text-xs">Utilization (0–1)</Label>
          <Input
            type="number"
            step="0.05"
            value={utilization}
            onChange={(e) => setUtilization(Number.parseFloat(e.target.value || "0"))}
            min={0}
            max={1}
          />
        </div>
      </CardContent>
      <div className="border-t p-4">
        <p className="text-sm text-slate-700">
          Estimated monthly revenue: <span className="font-semibold">${monthly.toLocaleString()}</span>
        </p>
        <p className="text-sm text-slate-700">
          Estimated annual revenue: <span className="font-semibold">${annual.toLocaleString()}</span>
        </p>
      </div>
    </Card>
  )
}
