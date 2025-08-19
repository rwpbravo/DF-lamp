import SiteHeader from "@/components/site-header"
import { Breadcrumbs } from "@/components/breadcrumbs"
import { ModelGrid } from "@/components/model-grid"
import { getModels } from "@/data/models"

export const metadata = {
  title: "Ziehm C-Arms: Vision, Solo, RFD | c-arms.net",
  description: "Compare Ziehm Vision, Solo, and RFD models with image quality features and workflow tools.",
  alternates: { canonical: "https://www.c-arms.net/brands/ziehm" },
}

export default function ZiehmBrandPage() {
  const models = getModels({ brand: "Ziehm" })
  return (
    <main>
      <SiteHeader />
      <section className="container mx-auto px-4 py-8">
        <Breadcrumbs
          items={[
            { label: "Home", href: "/" },
            { label: "Brands", href: "/brands" },
            { label: "Ziehm", href: "/brands/ziehm" },
          ]}
        />
        <h1 className="mb-3 text-3xl font-bold">Ziehm C-Arms</h1>
        <div className="prose prose-slate mb-4 max-w-none">
          <p>
            Ziehm Imaging has specialized exclusively in mobile C-arm technology for decades. Their systems are
            recognized for their compact, all-in-one designs, excellent image quality, and innovative features like
            liquid cooling for extended procedures, making them a top choice for demanding clinical environments.
          </p>
        </div>
        <ModelGrid models={models} />
      </section>
    </main>
  )
}
