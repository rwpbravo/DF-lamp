import SiteHeader from "@/components/site-header"
import { Breadcrumbs } from "@/components/breadcrumbs"

export const metadata = {
  title: "Cardiology and Vascular C-Arm Applications | c-arms.net",
  description:
    "Vascular and cardiology uses for C-arms with emphasis on dose control, large detector sizes, and advanced software.",
  alternates: { canonical: "https://www.c-arms.net/use-cases/cardiology-vascular" },
}

export default function VascularUseCase() {
  return (
    <main>
      <SiteHeader />
      <section className="container mx-auto px-4 py-8">
        <Breadcrumbs
          items={[
            { label: "Home", href: "/" },
            { label: "Use Cases", href: "/use-cases" },
            { label: "Cardiology/Vascular", href: "/use-cases/cardiology-vascular" },
          ]}
        />
        <h1 className="mb-3 text-3xl font-bold">Cardiology &amp; Vascular</h1>
        <p className="max-w-prose text-slate-600">
          Larger detectors, high-powered generators, and advanced roadmapping are critical for vascular interventions.
        </p>
      </section>
    </main>
  )
}
