export type ModelType = "Mini" | "Compact" | "Full-Size"
export type DetectorType = "Flat Panel" | "Image Intensifier" | "CMOS"
export type Condition = "New" | "Refurbished" | "Used"

export type Model = {
  slug: string
  name: string
  brand: string
  brandSlug: string
  series?: string
  type: ModelType
  detectorType: DetectorType
  generatorKw: number
  condition: Condition
  price: string
  summary: string
}

function brandToSlug(brand: string) {
  return brand
    .toLowerCase()
    .replace(/\s+/g, "-")
    .replace(/&/g, "and")
    .replace(/[^a-z0-9-]/g, "")
}

const MODELS: Model[] = [
  // GE OEC
  {
    slug: "ge-oec-9800",
    name: "GE OEC 9800",
    brand: "GE OEC",
    brandSlug: "ge-oec",
    series: "9800",
    type: "Full-Size",
    detectorType: "Image Intensifier",
    generatorKw: 15,
    condition: "Refurbished",
    price: "$25k–$55k",
    summary: "Legacy workhorse with broad parts availability. Suitable for orthopedics and general surgery.",
  },
  {
    slug: "ge-oec-9900-elite",
    name: "GE OEC 9900 Elite",
    brand: "GE OEC",
    brandSlug: "ge-oec",
    series: "9900",
    type: "Full-Size",
    detectorType: "Image Intensifier",
    generatorKw: 15,
    condition: "Refurbished",
    price: "$60k–$120k",
    summary: "Popular full-size system with improved image processing and workflow vs 9800.",
  },
  {
    slug: "ge-oec-elite-cfd",
    name: "GE OEC Elite CFD",
    brand: "GE OEC",
    brandSlug: "ge-oec",
    series: "Elite",
    type: "Full-Size",
    detectorType: "Flat Panel",
    generatorKw: 20,
    condition: "Refurbished",
    price: "$120k–$180k",
    summary: "Flat-panel detector variant offering lower dose and better edge detail.",
  },

  // Siemens
  {
    slug: "siemens-arcadis-avantic",
    name: "Siemens Arcadis Avantic",
    brand: "Siemens",
    brandSlug: "siemens",
    series: "Arcadis",
    type: "Full-Size",
    detectorType: "Image Intensifier",
    generatorKw: 20,
    condition: "Refurbished",
    price: "$50k–$100k",
    summary: "Proven platform with strong software; suited for a wide range of procedures.",
  },
  {
    slug: "siemens-cios-alpha",
    name: "Siemens Cios Alpha",
    brand: "Siemens",
    brandSlug: "siemens",
    series: "Cios",
    type: "Full-Size",
    detectorType: "Flat Panel",
    generatorKw: 25,
    condition: "Refurbished",
    price: "$140k–$220k",
    summary: "Premium full-size flat-panel system designed for demanding vascular and spine cases.",
  },

  // Philips
  {
    slug: "philips-pulsera",
    name: "Philips Pulsera",
    brand: "Philips",
    brandSlug: "philips",
    series: "Pulsera",
    type: "Full-Size",
    detectorType: "Image Intensifier",
    generatorKw: 15,
    condition: "Refurbished",
    price: "$45k–$95k",
    summary: "Reliable II-based system often used for general surgery and pain management.",
  },
  {
    slug: "philips-zenition-70",
    name: "Philips Zenition 70",
    brand: "Philips",
    brandSlug: "philips",
    series: "Zenition",
    type: "Full-Size",
    detectorType: "Flat Panel",
    generatorKw: 20,
    condition: "Refurbished",
    price: "$150k–$230k",
    summary: "Modern flat-panel platform with workflow enhancements and advanced processing.",
  },

  // Ziehm
  {
    slug: "ziehm-vision-rfd",
    name: "Ziehm Vision RFD",
    brand: "Ziehm",
    brandSlug: "ziehm",
    series: "Vision",
    type: "Full-Size",
    detectorType: "Flat Panel",
    generatorKw: 20,
    condition: "Refurbished",
    price: "$130k–$210k",
    summary: "High-quality flat-panel imaging with strong vascular software options.",
  },
  {
    slug: "ziehm-solo",
    name: "Ziehm Solo",
    brand: "Ziehm",
    brandSlug: "ziehm",
    series: "Solo",
    type: "Compact",
    detectorType: "Image Intensifier",
    generatorKw: 7,
    condition: "Refurbished",
    price: "$35k–$70k",
    summary: "Compact footprint for mixed-case environments needing mobility and flexibility.",
  },

  // Mini C-Arms
  {
    slug: "orthoscan-hd",
    name: "Orthoscan HD Mini",
    brand: "Orthoscan",
    brandSlug: "other",
    series: "HD",
    type: "Mini",
    detectorType: "Flat Panel",
    generatorKw: 5,
    condition: "Refurbished",
    price: "$30k–$60k",
    summary: "Mini C-arm optimized for extremity imaging with compact footprint.",
  },
  {
    slug: "hologic-fluoroscan-insight",
    name: "Hologic Fluoroscan Insight",
    brand: "Hologic",
    brandSlug: "other",
    series: "Fluoroscan",
    type: "Mini",
    detectorType: "Flat Panel",
    generatorKw: 5,
    condition: "Refurbished",
    price: "$25k–$55k",
    summary: "Widely used mini C-arm for hand/wrist and foot/ankle procedures.",
  },
  {
    slug: "turner-imaging-smart-c",
    name: "Turner Imaging Smart-C",
    brand: "Turner Imaging",
    brandSlug: "other",
    series: "Smart-C",
    type: "Mini",
    detectorType: "CMOS",
    generatorKw: 2,
    condition: "New",
    price: "$70k–$110k",
    summary: "Ultra-mobile battery-powered mini C-arm suitable for outpatient settings.",
  },

  // Genoray
  {
    slug: "genoray-zen-7000",
    name: "Genoray ZEN-7000",
    brand: "Genoray",
    brandSlug: "other",
    series: "ZEN",
    type: "Full-Size",
    detectorType: "Image Intensifier",
    generatorKw: 15,
    condition: "Refurbished",
    price: "$60k–$100k",
    summary: "Cost-effective full-size system covering general surgery and pain procedures.",
  },
]

export function getAllModels(): Model[] {
  return MODELS
}

export function getModels(filter?: {
  brand?: string | string[]
  type?: ModelType
  detectorType?: DetectorType
  condition?: Condition
}) {
  if (!filter) return MODELS
  return MODELS.filter((m) => {
    if (filter.brand) {
      if (Array.isArray(filter.brand)) {
        if (!filter.brand.includes(m.brand)) return false
      } else if (m.brand !== filter.brand) {
        return false
      }
    }
    if (filter.type && m.type !== filter.type) return false
    if (filter.detectorType && m.detectorType !== filter.detectorType) return false
    if (filter.condition && m.condition !== filter.condition) return false
    return true
  })
}

export function getModelBySlug(slug: string) {
  const found = MODELS.find((m) => m.slug === slug)
  if (found) return found
  return undefined
}

// Helper if you ever add raw records without brandSlug
export function withBrandSlug(m: Omit<Model, "brandSlug">): Model {
  return { ...m, brandSlug: brandToSlug(m.brand) }
}
