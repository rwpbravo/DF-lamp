import SiteHeader from "@/components/site-header"
import { Breadcrumbs } from "@/components/breadcrumbs"
import { BreadcrumbSchema } from "@/components/breadcrumb-schema"
import { ModelGrid } from "@/components/model-grid"
import { getModels } from "@/data/models"

export const metadata = {
  title: "GE OEC C-Arms: 9800, 9900, Elite | $25k-$180k | Specs & Reviews",
  description:
    "Compare 3+ GE OEC C-arm models including 9800, 9900 Elite, and Elite CFD. Image intensifier and flat panel options. $25k-$180k refurbished. Trusted service network.",
  alternates: { canonical: "https://www.c-arms.net/brands/ge-oec" },
  openGraph: {
    title: "GE OEC C-Arms: 9800, 9900, Elite | Specs & Pricing",
    description:
      "Compare GE OEC C-arm models. $25k-$180k refurbished. Excellent service network and parts availability.",
    url: "https://www.c-arms.net/brands/ge-oec",
    type: "website",
  },
}

export default function GEOECBrandPage() {
  const models = getModels({ brand: "GE OEC" })

  const breadcrumbItems = [
    { name: "Home", url: "https://www.c-arms.net/" },
    { name: "Brands", url: "https://www.c-arms.net/brands" },
    { name: "GE OEC", url: "https://www.c-arms.net/brands/ge-oec" },
  ]

  return (
    <main>
      <BreadcrumbSchema items={breadcrumbItems} />
      <SiteHeader />
      <section className="container mx-auto px-4 py-8">
        <Breadcrumbs
          items={[
            { label: "Home", href: "/" },
            { label: "Brands", href: "/brands" },
            { label: "GE OEC", href: "/brands/ge-oec" },
          ]}
        />
        <h1 className="mb-3 text-3xl font-bold">GE OEC C-Arms</h1>
        <p className="max-w-prose text-slate-600">
          Well-supported systems with broad parts availability and service network.
        </p>
        <div className="prose prose-slate mt-4 max-w-none">
          <h2>Why Choose GE OEC?</h2>
          <p>
            GE OEC systems are renowned for their reliability, user-friendly interface, and excellent image quality. As
            one of the most established names in mobile imaging, facilities benefit from a vast service network and wide
            parts availability, ensuring high uptime and a lower total cost of ownership for refurbished models.
          </p>
          <h3>Service and Parts Availability</h3>
          <p>
            With decades of market presence, GE OEC systems enjoy unparalleled service support across North America.
            Parts are readily available, and many independent service organizations are trained on these platforms,
            giving you flexibility and competitive pricing for maintenance contracts.
          </p>
          <h3>Comparison with Competing Brands</h3>
          <p>
            Compared to Siemens and Philips, GE OEC systems often provide better value in the refurbished market due to
            their widespread availability and lower service costs. While Siemens may offer more advanced software
            features, GE OEC delivers proven performance at a more accessible price point.
          </p>
        </div>
        <ModelGrid models={models} />
      </section>
    </main>
  )
}
