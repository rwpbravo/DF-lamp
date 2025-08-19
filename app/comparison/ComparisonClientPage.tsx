"use client"

import SiteHeader from "@/components/site-header"
import { Breadcrumbs } from "@/components/breadcrumbs"
import { ComparisonTable } from "@/components/comparison-table"
import { ModelPicker } from "@/components/model-picker"
import { ComparisonProvider } from "@/components/state/comparison-context"

export default function ComparisonClientPage() {
  return (
    <main>
      <SiteHeader />
      <section className="container mx-auto px-4 py-8">
        <Breadcrumbs
          items={[
            { label: "Home", href: "/" },
            { label: "Comparison", href: "/comparison" },
          ]}
        />
        <h1 className="mb-4 text-3xl font-bold">C-Arm Comparison</h1>
        <ComparisonProvider>
          <ModelPicker />
          <ComparisonTable />
        </ComparisonProvider>
      </section>
    </main>
  )
}
