import SiteHeader from "@/components/site-header"
import { Breadcrumbs } from "@/components/breadcrumbs"
import { ModelGrid } from "@/components/model-grid"
import { getModels } from "@/data/models"

export const metadata = {
  title: "GE OEC C-Arms: 9800, 9900, Elite | Specs & Pricing | c-arms.net",
  description:
    "Compare GE OEC C-arm models including 9800, 9900, and Elite configurations. See detector options, generator power, and typical price ranges.",
  alternates: { canonical: "https://www.c-arms.net/brands/ge-oec" },
}

export default function GEOECBrandPage() {
  const models = getModels({ brand: "GE OEC" })
  return (
    <main>
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
          <p>
            GE OEC systems are renowned for their reliability, user-friendly interface, and excellent image quality. As
            one of the most established names in mobile imaging, facilities benefit from a vast service network and wide
            parts availability, ensuring high uptime and a lower total cost of ownership for refurbished models.
          </p>
        </div>
        <ModelGrid models={models} />
      </section>
    </main>
  )
}
