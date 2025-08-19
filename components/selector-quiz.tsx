"use client"

import { useMemo, useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function SelectorQuiz() {
  const [specialty, setSpecialty] = useState("orthopedic")
  const [budget, setBudget] = useState("mid")
  const [space, setSpace] = useState("normal")

  const recommendation = useMemo(() => {
    // Simple rules-based recommendation
    if (specialty === "orthopedic" && budget !== "high" && space !== "large") {
      return {
        type: "Mini C-Arm",
        link: "/types/mini",
        blurb: "Optimized for extremity imaging in orthopedic and podiatry clinics.",
      }
    }
    if (specialty === "vascular" || space === "large" || budget === "high") {
      return {
        type: "Full-Size C-Arm",
        link: "/types/full-size",
        blurb: "Best for larger fields of view, spine, and vascular use with higher power.",
      }
    }
    return {
      type: "Compact C-Arm",
      link: "/types/compact",
      blurb: "Balanced performance and footprint for mixed-case ASCs and hospitals.",
    }
  }, [specialty, budget, space])

  return (
    <Card>
      <CardHeader className="pb-2">
        <CardTitle>Answer a few questions</CardTitle>
      </CardHeader>
      <CardContent className="grid gap-6 md:grid-cols-3">
        <div>
          <Label className="mb-2 block text-xs">Primary specialty</Label>
          <RadioGroup value={specialty} onValueChange={setSpecialty}>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="orthopedic" id="orthopedic" />
              <Label htmlFor="orthopedic">Orthopedic</Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="pain" id="pain" />
              <Label htmlFor="pain">Pain Management</Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="vascular" id="vascular" />
              <Label htmlFor="vascular">Cardiology/Vascular</Label>
            </div>
          </RadioGroup>
        </div>
        <div>
          <Label className="mb-2 block text-xs">Budget</Label>
          <RadioGroup value={budget} onValueChange={setBudget}>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="low" id="low" />
              <Label htmlFor="low">Lower</Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="mid" id="mid" />
              <Label htmlFor="mid">Mid</Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="high" id="high" />
              <Label htmlFor="high">Higher</Label>
            </div>
          </RadioGroup>
        </div>
        <div>
          <Label className="mb-2 block text-xs">Space</Label>
          <RadioGroup value={space} onValueChange={setSpace}>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="tight" id="tight" />
              <Label htmlFor="tight">Tight</Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="normal" id="normal" />
              <Label htmlFor="normal">Normal</Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="large" id="large" />
              <Label htmlFor="large">Large</Label>
            </div>
          </RadioGroup>
        </div>
      </CardContent>
      <div className="border-t p-4">
        <p className="text-sm text-slate-700">
          Recommended: <span className="font-semibold">{recommendation.type}</span> — {recommendation.blurb}
        </p>
        <div className="mt-3 flex gap-2">
          <Button asChild variant="secondary" size="sm">
            <Link href={recommendation.link}>Learn more</Link>
          </Button>
          <Button asChild size="sm" className="bg-teal-600 hover:bg-teal-700">
            <Link href="/contact">Request a Quote</Link>
          </Button>
        </div>
      </div>
    </Card>
  )
}
