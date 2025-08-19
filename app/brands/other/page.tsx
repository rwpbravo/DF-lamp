import SiteHeader from "@/components/site-header"
import { Breadcrumbs } from "@/components/breadcrumbs"
import { ModelGrid } from "@/components/model-grid"
import { getModels } from "@/data/models"

export const metadata = {
  title: "Other C-Arm Brands: Orthoscan, Hologic, Genoray, Turner | c-arms.net",
  description: "Browse additional brands including Orthoscan, Hologic, Genoray, and Turner Imaging.",
  alternates: { canonical: "https://www.c-arms.net/brands/other" },
}

export default function OtherBrandPage() {
  const models = getModels({ brand: ["Orthoscan", "Hologic", "Genoray", "Turner Imaging"] })
  return (
    <main>
      <SiteHeader />
      <section className="container mx-auto px-4 py-8">
        <Breadcrumbs
          items={[
            { label: "Home", href: "/" },
            { label: "Brands", href: "/brands" },
            { label: "Other Brands", href: "/brands/other" },
          ]}
        />
        <h1 className="mb-3 text-3xl font-bold">Other Brands</h1>
        <ModelGrid models={models} />
      </section>
    </main>
  )
}
