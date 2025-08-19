import SiteHeader from "@/components/site-header"
import { Breadcrumbs } from "@/components/breadcrumbs"
import { ModelGrid } from "@/components/model-grid"
import { getModels } from "@/data/models"

export const metadata = {
  title: "Compact C-Arms: Mid-Range Systems and Pricing | c-arms.net",
  description: "Compact C-arms balance footprint and performance for ASC and hospital use. Compare features and costs.",
  alternates: { canonical: "https://www.c-arms.net/types/compact" },
}

export default function CompactTypesPage() {
  const models = getModels({ type: "Compact" })
  return (
    <main>
      <SiteHeader />
      <section className="container mx-auto px-4 py-8">
        <Breadcrumbs
          items={[
            { label: "Home", href: "/" },
            { label: "Types of C-Arms", href: "/types" },
            { label: "Compact C-Arms", href: "/types/compact" },
          ]}
        />
        <h1 className="text-3xl font-bold">Compact C-Arms</h1>
        <p className="mt-2 max-w-prose text-slate-600">
          Mid-range systems with modern detectors and smaller footprints. Good for mixed-case environments.
        </p>
        <ModelGrid models={getModels({ type: "Compact" })} />
      </section>
    </main>
  )
}
