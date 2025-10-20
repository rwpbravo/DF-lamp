import type { MetadataRoute } from "next"
import { getAllModels } from "@/data/models"

const BASE_URL = "https://www.c-arms.net"

export default function sitemap(): MetadataRoute.Sitemap {
  const models = getAllModels()
  const modelUrls = models.map((m) => ({
    url: `${BASE_URL}/models/${m.slug}`,
    lastModified: new Date(),
    priority: 0.8,
    changeFrequency: "monthly" as const,
  }))

  const brands = [...new Set(models.map((m) => m.brandSlug))]
  const brandUrls = brands.map((slug) => ({
    url: `${BASE_URL}/brands/${slug}`,
    lastModified: new Date(),
    priority: 0.7,
    changeFrequency: "monthly" as const,
  }))

  const resourcePages = [
    "/resources",
    "/resources/c-arms-by-specialty",
    "/resources/buying-guides",
    "/resources/brands",
    "/resources/compliance",
    "/resources/setup",
  ].map((path) => ({
    url: `${BASE_URL}${path}`,
    lastModified: new Date(),
    priority: 0.8,
    changeFrequency: "weekly" as const,
  }))

  const staticUrls = [
    { path: "/", priority: 1.0, changeFrequency: "weekly" as const },
    { path: "/overview", priority: 0.9, changeFrequency: "monthly" as const },
    { path: "/types", priority: 0.9, changeFrequency: "monthly" as const },
    { path: "/types/mini", priority: 0.8, changeFrequency: "monthly" as const },
    { path: "/types/compact", priority: 0.8, changeFrequency: "monthly" as const },
    { path: "/types/full-size", priority: 0.8, changeFrequency: "monthly" as const },
    { path: "/types/mobile-vs-fixed", priority: 0.7, changeFrequency: "monthly" as const },
    { path: "/types/surgical-applications", priority: 0.8, changeFrequency: "monthly" as const },
    { path: "/brands", priority: 0.9, changeFrequency: "monthly" as const },
    { path: "/use-cases", priority: 0.8, changeFrequency: "monthly" as const },
    { path: "/use-cases/orthopedic", priority: 0.7, changeFrequency: "monthly" as const },
    { path: "/use-cases/pain-management", priority: 0.7, changeFrequency: "monthly" as const },
    { path: "/use-cases/cardiology-vascular", priority: 0.7, changeFrequency: "monthly" as const },
    { path: "/use-cases/emergency-medicine", priority: 0.7, changeFrequency: "monthly" as const },
    { path: "/comparison", priority: 0.8, changeFrequency: "weekly" as const },
    { path: "/tools/selector-quiz", priority: 0.7, changeFrequency: "monthly" as const },
    { path: "/tools/roi-calculator", priority: 0.7, changeFrequency: "monthly" as const },
    { path: "/about", priority: 0.7, changeFrequency: "monthly" as const },
    { path: "/contact", priority: 0.8, changeFrequency: "monthly" as const },
    { path: "/blog/c-arm-pricing-guide", priority: 0.8, changeFrequency: "monthly" as const },
  ].map((item) => ({
    url: `${BASE_URL}${item.path}`,
    lastModified: new Date(),
    priority: item.priority,
    changeFrequency: item.changeFrequency,
  }))

  return [...staticUrls, ...resourcePages, ...modelUrls, ...brandUrls]
}
