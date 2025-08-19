import SiteHeader from "@/components/site-header"
import { Breadcrumbs } from "@/components/breadcrumbs"
import { ModelGrid } from "@/components/model-grid"
import { getModels } from "@/data/models"

export const metadata = {
  title: "Philips C-Arms: Pulsera, Zenition Series | c-arms.net",
  description:
    "Explore Philips Pulsera and Zenition models with flat-panel options, software features, and pricing guidance.",
  alternates: { canonical: "https://www.c-arms.net/brands/philips" },
}

export default function PhilipsBrandPage() {
  const models = getModels({ brand: "Philips" })
  return (
    <main>
      <SiteHeader />
      <section className="container mx-auto px-4 py-8">
        <Breadcrumbs
          items={[
            { label: "Home", href: "/" },
            { label: "Brands", href: "/brands" },
            { label: "Philips", href: "/brands/philips" },
          ]}
        />
        <h1 className="mb-3 text-3xl font-bold">Philips C-Arms</h1>
        <div className="prose prose-slate mb-4 max-w-none">
          <p>
            Philips C-arms, including the popular Pulsera and modern Zenition series, are valued for their workflow
            efficiency and robust performance. They offer unique features like the Metal-Smart algorithm for clear
            imaging around implants, making them a strong choice for orthopedics and general surgery.
          </p>
        </div>
        <ModelGrid models={models} />
      </section>
    </main>
  )
}
