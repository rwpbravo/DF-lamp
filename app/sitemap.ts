import type { MetadataRoute } from "next"
import { getAllModels } from "@/data/models"

const BASE_URL = "https://www.c-arms.net"

export default function sitemap(): MetadataRoute.Sitemap {
  const models = getAllModels()
  const modelUrls = models.map((m) => ({
    url: `${BASE_URL}/models/${m.slug}`,
    lastModified: new Date(),
    priority: 0.8,
  }))

  const brands = [...new Set(models.map((m) => m.brandSlug))]
  const brandUrls = brands.map((slug) => ({
    url: `${BASE_URL}/brands/${slug}`,
    lastModified: new Date(),
    priority: 0.7,
  }))

  const staticUrls = [
    "/",
    "/overview",
    "/types",
    "/types/mini",
    "/types/compact",
    "/types/full-size",
    "/types/mobile-vs-fixed",
    "/types/surgical-applications",
    "/brands",
    "/use-cases",
    "/use-cases/orthopedic",
    "/use-cases/pain-management",
    "/use-cases/cardiology-vascular",
    "/use-cases/emergency-medicine",
    "/comparison",
    "/buyers-guide",
    "/tools/selector-quiz",
    "/tools/roi-calculator",
    "/about",
    "/contact",
  ].map((path) => ({
    url: `${BASE_URL}${path}`,
    lastModified: new Date(),
    priority: path === "/" ? 1.0 : 0.9,
  }))

  return [...staticUrls, ...modelUrls, ...brandUrls]
}
