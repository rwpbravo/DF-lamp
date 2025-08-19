import { NextResponse } from "next/server"

export async function GET() {
  const baseUrl = "https://www.c-arms.net"
  const currentDate = new Date().toISOString()

  const staticPages = [
    // Main pages
    { url: "", priority: "1.0", changefreq: "weekly" },
    { url: "/overview", priority: "0.9", changefreq: "monthly" },
    { url: "/about", priority: "0.7", changefreq: "monthly" },
    { url: "/contact", priority: "0.8", changefreq: "monthly" },
    { url: "/comparison", priority: "0.8", changefreq: "weekly" },

    // Types section
    { url: "/types", priority: "0.9", changefreq: "monthly" },
    { url: "/types/mini", priority: "0.8", changefreq: "monthly" },
    { url: "/types/compact", priority: "0.8", changefreq: "monthly" },
    { url: "/types/full-size", priority: "0.8", changefreq: "monthly" },
    { url: "/types/mobile-vs-fixed", priority: "0.7", changefreq: "monthly" },
    { url: "/types/surgical-applications", priority: "0.8", changefreq: "monthly" },

    // Brands section
    { url: "/brands", priority: "0.9", changefreq: "monthly" },
    { url: "/brands/ge-oec", priority: "0.8", changefreq: "monthly" },
    { url: "/brands/siemens", priority: "0.8", changefreq: "monthly" },
    { url: "/brands/philips", priority: "0.8", changefreq: "monthly" },
    { url: "/brands/ziehm", priority: "0.8", changefreq: "monthly" },
    { url: "/brands/other", priority: "0.7", changefreq: "monthly" },

    // Use cases section
    { url: "/use-cases", priority: "0.8", changefreq: "monthly" },
    { url: "/use-cases/cardiology-vascular", priority: "0.7", changefreq: "monthly" },
    { url: "/use-cases/emergency-medicine", priority: "0.7", changefreq: "monthly" },
    { url: "/use-cases/orthopedic", priority: "0.7", changefreq: "monthly" },
    { url: "/use-cases/pain-management", priority: "0.7", changefreq: "monthly" },

    // Tools section
    { url: "/tools/roi-calculator", priority: "0.7", changefreq: "monthly" },
    { url: "/tools/selector-quiz", priority: "0.7", changefreq: "monthly" },

    // Blog posts
    { url: "/blog/c-arm-pricing-guide", priority: "0.8", changefreq: "monthly" },
  ]

  // Model pages
  const modelPages = [
    // GE OEC Models
    { url: "/models/ge-oec-9800", priority: "0.8", changefreq: "monthly" },
    { url: "/models/ge-oec-9900-elite", priority: "0.8", changefreq: "monthly" },
    { url: "/models/ge-oec-elite-cfd", priority: "0.8", changefreq: "monthly" },

    // Siemens Models
    { url: "/models/siemens-arcadis-avantic", priority: "0.8", changefreq: "monthly" },
    { url: "/models/siemens-cios-alpha", priority: "0.8", changefreq: "monthly" },

    // Philips Models
    { url: "/models/philips-pulsera", priority: "0.8", changefreq: "monthly" },
    { url: "/models/philips-zenition-70", priority: "0.8", changefreq: "monthly" },

    // Ziehm Models
    { url: "/models/ziehm-vision-rfd", priority: "0.8", changefreq: "monthly" },
    { url: "/models/ziehm-solo", priority: "0.8", changefreq: "monthly" },

    // Other Brand Models
    { url: "/models/orthoscan-hd", priority: "0.7", changefreq: "monthly" },
    { url: "/models/hologic-fluoroscan-insight", priority: "0.7", changefreq: "monthly" },
    { url: "/models/turner-imaging-smart-c", priority: "0.7", changefreq: "monthly" },
    { url: "/models/genoray-zen-7000", priority: "0.7", changefreq: "monthly" },
  ]

  const allPages = [...staticPages, ...modelPages]

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${allPages
  .map(
    (page) => `  <url>
    <loc>${baseUrl}${page.url}</loc>
    <lastmod>${currentDate}</lastmod>
    <changefreq>${page.changefreq}</changefreq>
    <priority>${page.priority}</priority>
  </url>`,
  )
  .join("\n")}
</urlset>`

  return new NextResponse(sitemap, {
    headers: {
      "Content-Type": "application/xml",
      "Cache-Control": "public, max-age=86400, s-maxage=86400", // Cache for 24 hours
    },
  })
}
