import SiteHeader from "@/components/site-header"
import { Breadcrumbs } from "@/components/breadcrumbs"
import { ModelGrid } from "@/components/model-grid"
import { getModels } from "@/data/models"

export const metadata = {
  title: "Full-Size C-Arms: Specs, Flat-Panel vs Image Intensifier | c-arms.net",
  description:
    "Full-size C-arms for spine, vascular, and pain management. Compare GE OEC 9900, Siemens Cios, Philips Pulsera, Ziehm Vision with detector options.",
  alternates: { canonical: "https://www.c-arms.net/types/full-size" },
}

export default function FullSizeTypesPage() {
  const models = getModels({ type: "Full-Size" })
  return (
    <main>
      <SiteHeader />
      <section className="container mx-auto px-4 py-8">
        <Breadcrumbs
          items={[
            { label: "Home", href: "/" },
            { label: "Types of C-Arms", href: "/types" },
            { label: "Full-Size C-Arms", href: "/types/full-size" },
          ]}
        />
        <h1 className="text-3xl font-bold">Full-Size C-Arms</h1>
        <p className="mt-2 max-w-prose text-slate-600">
          Full-size systems deliver larger fields of view, higher generator power, and advanced software for demanding
          procedures.
        </p>
        <ModelGrid models={models} />
      </section>
    </main>
  )
}
