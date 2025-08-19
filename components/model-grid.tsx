"use client"

import Link from "next/link"
import { useMemo, useState } from "react"
import { getAllModels, type Model } from "@/data/models"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { SlidersHorizontal } from "lucide-react"
import Image from "next/image"

type Props = { models?: Model[] }

function getModelImagePath(slug: string, type: "card" | "hero" = "card") {
  const imageMap: Record<string, { card: string; hero: string }> = {
    "philips-zenition-70": {
      card: "/images/models/philips-zenition-70/card.webp",
      hero: "/images/models/philips-zenition-70/hero.webp",
    },
    "hologic-fluoroscan-insight": {
      card: "/images/models/hologic-fluoroscan-insight/card.jpg",
      hero: "/images/models/hologic-fluoroscan-insight/hero.jpg",
    },
    "orthoscan-hd": {
      card: "/images/models/orthoscan-hd/card.jpg",
      hero: "/images/models/orthoscan-hd/hero.jpg",
    },
    "genoray-zen-7000": {
      card: "/images/models/genoray-zen-7000/card.jpg",
      hero: "/images/models/genoray-zen-7000/hero.jpg",
    },
    "ge-oec-elite-cfd": {
      card: "/images/models/ge-oec-elite-cfd/card.avif",
      hero: "/images/models/ge-oec-elite-cfd/hero.avif",
    },
    "ge-oec-9900-elite": {
      card: "/images/models/ge-oec-9900-elite/card.avif",
      hero: "/images/models/ge-oec-9900-elite/hero.avif",
    },
    "ge-oec-9800": {
      card: "/images/models/ge-oec-9800/card.avif",
      hero: "/images/models/ge-oec-9800/hero.avif",
    },
    "philips-pulsera": {
      card: "/images/models/philips-pulsera/card.jpg",
      hero: "/images/models/philips-pulsera/hero.jpg",
    },
    "ziehm-solo": {
      card: "/images/models/ziehm-solo/card.jpg",
      hero: "/images/models/ziehm-solo/hero.jpg",
    },
    "turner-imaging-smart-c": {
      card: "/images/models/turner-imaging-smart-c/card.jpg",
      hero: "/images/models/turner-imaging-smart-c/hero.jpg",
    },
    "siemens-arcadis-avantic": {
      card: "/images/models/siemens-arcadis-avantic/card.jpg",
      hero: "/images/models/siemens-arcadis-avantic/hero.jpg",
    },
    "ziehm-vision-rfd": {
      card: "/images/models/ziehm-vision-rfd/card.jpg",
      hero: "/images/models/ziehm-vision-rfd/hero.jpg",
    },
    "siemens-cios-alpha": {
      card: "/images/models/siemens-cios-alpha/card.webp",
      hero: "/images/models/siemens-cios-alpha/hero.webp",
    },
  }

  return imageMap[slug]?.[type] || "/placeholder-rmqih.png"
}

export function ModelGrid({ models }: Props) {
  const all = models ?? getAllModels()
  const [brand, setBrand] = useState<string>("all")
  const [type, setType] = useState<string>("all")
  const [det, setDet] = useState<string>("all")
  const [condition, setCondition] = useState<string>("all")
  const [q, setQ] = useState("")

  const filtered = useMemo(() => {
    return all.filter((m) => {
      if (brand !== "all" && m.brand !== brand) return false
      if (type !== "all" && m.type !== type) return false
      if (det !== "all" && m.detectorType !== det) return false
      if (condition !== "all" && m.condition !== condition) return false
      if (q && !`${m.name} ${m.brand} ${m.series}`.toLowerCase().includes(q.toLowerCase())) return false
      return true
    })
  }, [all, brand, type, det, condition, q])

  const brands = Array.from(new Set(all.map((m) => m.brand))).sort()
  const types = Array.from(new Set(all.map((m) => m.type))).sort()
  const dets = Array.from(new Set(all.map((m) => m.detectorType))).sort()
  const conditions = Array.from(new Set(all.map((m) => m.condition))).sort()

  return (
    <div>
      <Card className="mb-4">
        <CardHeader className="pb-2">
          <CardTitle className="flex items-center gap-2 text-base">
            <SlidersHorizontal className="h-4 w-4 text-teal-600" />
            Filter products
          </CardTitle>
        </CardHeader>
        <CardContent className="grid gap-3 md:grid-cols-5">
          <div className="space-y-1">
            <Label className="text-xs">Search</Label>
            <Input placeholder="Model or brand..." value={q} onChange={(e) => setQ(e.target.value)} />
          </div>
          <div className="space-y-1">
            <Label className="text-xs">Brand</Label>
            <Select value={brand} onValueChange={setBrand}>
              <SelectTrigger>
                <SelectValue placeholder="Brand" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All</SelectItem>
                {brands.map((b) => (
                  <SelectItem key={b} value={b}>
                    {b}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
          <div className="space-y-1">
            <Label className="text-xs">Type</Label>
            <Select value={type} onValueChange={setType}>
              <SelectTrigger>
                <SelectValue placeholder="Type" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All</SelectItem>
                {types.map((t) => (
                  <SelectItem key={t} value={t}>
                    {t}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
          <div className="space-y-1">
            <Label className="text-xs">Detector</Label>
            <Select value={det} onValueChange={setDet}>
              <SelectTrigger>
                <SelectValue placeholder="Detector" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All</SelectItem>
                {dets.map((d) => (
                  <SelectItem key={d} value={d}>
                    {d}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
          <div className="space-y-1">
            <Label className="text-xs">Condition</Label>
            <Select value={condition} onValueChange={setCondition}>
              <SelectTrigger>
                <SelectValue placeholder="Condition" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All</SelectItem>
                {conditions.map((c) => (
                  <SelectItem key={c} value={c}>
                    {c}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        </CardContent>
      </Card>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {filtered.map((m) => (
          <Link
            key={m.slug}
            href={`/models/${m.slug}`}
            className="group rounded-lg border bg-white shadow-sm transition hover:shadow-md"
          >
            <Image
              src={getModelImagePath(m.slug, "card") || "/placeholder.svg"}
              alt={`${m.name} C-Arm System`}
              width={360}
              height={200}
              className="rounded-t-lg border-b object-contain bg-white p-2"
            />
            <div className="p-4">
              <h3 className="text-base font-semibold text-slate-900">{m.name}</h3>
              <p className="mt-1 text-sm text-slate-600">
                {m.detectorType} • {m.generatorKw} kW • {m.condition}
              </p>
              <p className="mt-1 text-xs text-slate-500">{m.price}</p>
            </div>
          </Link>
        ))}
      </div>

      {filtered.length === 0 && (
        <div className="rounded-lg border bg-slate-50 p-6 text-sm text-slate-600">No models match your filters.</div>
      )}
    </div>
  )
}
