import SiteHeader from "@/components/site-header"
import { ModelGrid } from "@/components/model-grid"
import { Breadcrumbs } from "@/components/breadcrumbs"
import { getModels } from "@/data/models"

export const metadata = {
  title: "Mini C-Arms: Use Cases, Specs, and Pricing | c-arms.net",
  description:
    "Mini C-arms for extremity imaging in orthopedics and podiatry. Compare Orthoscan and Hologic models with detector options and typical prices.",
  alternates: { canonical: "https://www.c-arms.net/types/mini" },
}

export default function MiniTypesPage() {
  const models = getModels({ type: "Mini" })
  return (
    <main>
      <SiteHeader />
      <section className="container mx-auto px-4 py-8">
        <Breadcrumbs
          items={[
            { label: "Home", href: "/" },
            { label: "Types of C-Arms", href: "/types" },
            { label: "Mini C-Arms", href: "/types/mini" },
          ]}
        />
        <h1 className="text-3xl font-bold">Mini C-Arms</h1>
        <p className="mt-2 max-w-prose text-slate-600">
          Mini C-arms are optimized for extremity imaging with small footprints and lower dose. Ideal for outpatient
          orthopedic clinics and surgery centers.
        </p>
        <ModelGrid models={models} />
      </section>
    </main>
  )
}
