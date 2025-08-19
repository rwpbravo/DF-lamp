import SiteHeader from "@/components/site-header"
import { Breadcrumbs } from "@/components/breadcrumbs"
import Link from "next/link"

export const metadata = {
  title: "C-Arm Use Cases & Clinical Applications | c-arms.net",
  description:
    "Orthopedic, pain management, cardiology/vascular, and emergency medicine use cases for C-arm systems with tips and recommended models.",
  alternates: { canonical: "https://www.c-arms.net/use-cases" },
}

export default function UseCasesIndex() {
  const links = [
    { label: "Orthopedic", href: "/use-cases/orthopedic" },
    { label: "Pain Management", href: "/use-cases/pain-management" },
    { label: "Cardiology / Vascular", href: "/use-cases/cardiology-vascular" },
    { label: "Emergency Medicine", href: "/use-cases/emergency-medicine" },
  ]
  return (
    <main>
      <SiteHeader />
      <section className="container mx-auto px-4 py-8">
        <Breadcrumbs
          items={[
            { label: "Home", href: "/" },
            { label: "Use Cases", href: "/use-cases" },
          ]}
        />
        <h1 className="mb-3 text-3xl font-bold">Use Cases &amp; Clinical Applications</h1>
        <ul className="grid gap-4 md:grid-cols-2">
          {links.map((l) => (
            <li key={l.href} className="rounded-lg border p-4 hover:bg-slate-50">
              <Link className="font-medium text-teal-700 underline underline-offset-4" href={l.href}>
                {l.label}
              </Link>
            </li>
          ))}
        </ul>
      </section>
    </main>
  )
}
