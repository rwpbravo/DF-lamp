import SiteHeader from "@/components/site-header"
import { Breadcrumbs } from "@/components/breadcrumbs"

export const metadata = {
  title: "Orthopedic C-Arm Applications | Recommended Models | c-arms.net",
  description:
    "Orthopedic use cases for C-arms including fracture fixation and extremity imaging. Recommended models and features.",
  alternates: { canonical: "https://www.c-arms.net/use-cases/orthopedic" },
}

export default function OrthoUseCase() {
  return (
    <main>
      <SiteHeader />
      <section className="container mx-auto px-4 py-8">
        <Breadcrumbs
          items={[
            { label: "Home", href: "/" },
            { label: "Use Cases", href: "/use-cases" },
            { label: "Orthopedic", href: "/use-cases/orthopedic" },
          ]}
        />
        <h1 className="mb-3 text-3xl font-bold">Orthopedic Applications</h1>
        <p className="max-w-prose text-slate-600">
          Common procedures include fracture reduction, hardware placement, and extremity studies. Mini C-arms fit
          extremity clinics; full-size systems support complex trauma and spine.
        </p>
        <h2 className="mt-6 text-xl font-semibold">Recommended Features</h2>
        <ul className="mt-2 list-disc space-y-1 pl-5 text-slate-700">
          <li>Flat-panel detectors for lower dose and improved edge detail</li>
          <li>Pulse modes and motion compensation</li>
          <li>Metal artifact reduction algorithms</li>
        </ul>
      </section>
    </main>
  )
}
