import SiteHeader from "@/components/site-header"
import { Breadcrumbs } from "@/components/breadcrumbs"
import { ModelGrid } from "@/components/model-grid"
import { getModels } from "@/data/models"

export const metadata = {
  title: "Siemens C-Arms: Arcadis, Cios Series | Specs & Pricing | c-arms.net",
  description:
    "Compare Siemens Arcadis and Cios series including Cios Alpha. Detector types, image quality, and use cases.",
  alternates: { canonical: "https://www.c-arms.net/brands/siemens" },
}

export default function SiemensBrandPage() {
  const models = getModels({ brand: "Siemens" })
  return (
    <main>
      <SiteHeader />
      <section className="container mx-auto px-4 py-8">
        <Breadcrumbs
          items={[
            { label: "Home", href: "/" },
            { label: "Brands", href: "/brands" },
            { label: "Siemens", href: "/brands/siemens" },
          ]}
        />
        <h1 className="mb-3 text-3xl font-bold">Siemens C-Arms</h1>
        <div className="prose prose-slate mb-4 max-w-none">
          <p>
            Siemens Healthineers is a leader in medical imaging innovation, and their C-arms are known for advanced
            software features, excellent flat-panel detector technology, and powerful generators. The Arcadis and Cios
            lines are designed for demanding surgical workflows, particularly in vascular, cardiac, and orthopedic
            procedures.
          </p>
        </div>
        <ModelGrid models={models} />
      </section>
    </main>
  )
}
