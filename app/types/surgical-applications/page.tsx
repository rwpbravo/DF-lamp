import SiteHeader from "@/components/site-header"
import { Breadcrumbs } from "@/components/breadcrumbs"
import Link from "next/link"
import Image from "next/image"

export const metadata = {
  title: "C-Arm Surgical Applications | Orthopedic, Pain, Vascular | c-arms.net",
  description:
    "Common surgical applications for C-arm fluoroscopy, including orthopedics, pain management, cardiology/vascular, and emergency medicine.",
  alternates: { canonical: "https://www.c-arms.net/types/surgical-applications" },
}

export default function SurgicalApplicationsPage() {
  return (
    <main>
      <SiteHeader />
      <section className="container mx-auto px-4 py-8">
        <Breadcrumbs
          items={[
            { label: "Home", href: "/" },
            { label: "Types of C-Arms", href: "/types" },
            { label: "Surgical Applications", href: "/types/surgical-applications" },
          ]}
        />
        <div className="mb-8 grid gap-6 md:grid-cols-2 md:items-center">
          <div>
            <h1 className="mb-3 text-3xl font-bold">Surgical Applications</h1>
            <p className="mt-2 max-w-prose text-slate-600">
              C-arm fluoroscopy systems are essential across multiple surgical specialties, providing real-time imaging
              guidance for precise procedures.
            </p>
          </div>
          <div className="flex justify-center">
            <Image
              src="/brand/logo-hero.webp"
              alt="C-ARMS.NET Logo"
              width={400}
              height={300}
              className="rounded-lg border bg-white object-contain p-6"
            />
          </div>
        </div>
        <ul className="mt-2 grid gap-3 md:grid-cols-2">
          {[
            { label: "Orthopedic", href: "/use-cases/orthopedic" },
            { label: "Pain Management", href: "/use-cases/pain-management" },
            { label: "Cardiology / Vascular", href: "/use-cases/cardiology-vascular" },
            { label: "Emergency Medicine", href: "/use-cases/emergency-medicine" },
          ].map((u) => (
            <li key={u.href} className="rounded-lg border p-4 hover:bg-slate-50">
              <Link className="font-medium text-teal-700 underline underline-offset-4" href={u.href}>
                {u.label}
              </Link>
            </li>
          ))}
        </ul>
      </section>
    </main>
  )
}
