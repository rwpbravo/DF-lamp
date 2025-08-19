import SiteHeader from "@/components/site-header"
import { Breadcrumbs } from "@/components/breadcrumbs"

export const metadata = {
  title: "Pain Management C-Arm Applications | c-arms.net",
  description:
    "Pain management procedures with C-arms including epidural steroid injections and facet blocks. Features and models to consider.",
  alternates: { canonical: "https://www.c-arms.net/use-cases/pain-management" },
}

export default function PainUseCase() {
  return (
    <main>
      <SiteHeader />
      <section className="container mx-auto px-4 py-8">
        <Breadcrumbs
          items={[
            { label: "Home", href: "/" },
            { label: "Use Cases", href: "/use-cases" },
            { label: "Pain Management", href: "/use-cases/pain-management" },
          ]}
        />
        <h1 className="mb-3 text-3xl font-bold">Pain Management</h1>
        <p className="max-w-prose text-slate-600">
          Look for high-resolution imaging, low-dose modes, and workflow features that speed room turnover for
          injection-heavy schedules.
        </p>
      </section>
    </main>
  )
}
