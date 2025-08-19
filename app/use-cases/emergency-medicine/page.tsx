import SiteHeader from "@/components/site-header"
import { Breadcrumbs } from "@/components/breadcrumbs"

export const metadata = {
  title: "Emergency Medicine C-Arm Applications | c-arms.net",
  description: "C-Arm use in emergency medicine including trauma and fracture management. Key features and workflows.",
  alternates: { canonical: "https://www.c-arms.net/use-cases/emergency-medicine" },
}

export default function EmergencyUseCase() {
  return (
    <main>
      <SiteHeader />
      <section className="container mx-auto px-4 py-8">
        <Breadcrumbs
          items={[
            { label: "Home", href: "/" },
            { label: "Use Cases", href: "/use-cases" },
            { label: "Emergency Medicine", href: "/use-cases/emergency-medicine" },
          ]}
        />
        <h1 className="mb-3 text-3xl font-bold">Emergency Medicine</h1>
        <p className="max-w-prose text-slate-600">
          Mobility, quick boot times, and robust hardware are crucial for ED environments with variable patient volumes.
        </p>
      </section>
    </main>
  )
}
