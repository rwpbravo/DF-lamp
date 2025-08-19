import SiteHeader from "@/components/site-header"
import { Breadcrumbs } from "@/components/breadcrumbs"
import Image from "next/image"
import Link from "next/link"

export const metadata = {
  title: "Types of C-Arms: Mini, Compact, Full-Size, Mobile vs Fixed | c-arms.net",
  description:
    "Compare mini, compact, and full-size C-arms. Learn when to choose mobile vs fixed. See surgical applications and key specs.",
  alternates: { canonical: "https://www.c-arms.net/types" },
}

const tiles = [
  { title: "Mini C-Arms", href: "/types/mini", img: "/mini-c-arm.png" },
  { title: "Full-Size C-Arms", href: "/types/full-size", img: "/images/models/ge-oec-9900-elite/hero.avif" },
  { title: "Compact C-Arms", href: "/types/compact", img: "/images/models/ziehm-solo/hero.jpg" },
  { title: "Mobile vs Fixed", href: "/types/mobile-vs-fixed", img: "/mobile-vs-fixed-c-arm.png" },
  {
    title: "Surgical Applications",
    href: "/types/surgical-applications",
    img: "/images/tiles/surgical-applications.jpg",
  },
]

export default function TypesIndex() {
  return (
    <main>
      <SiteHeader />
      <section className="container mx-auto px-4 py-8">
        <Breadcrumbs
          items={[
            { label: "Home", href: "/" },
            { label: "Types of C-Arms", href: "/types" },
          ]}
        />
        <h1 className="mb-4 text-3xl font-bold">Types of C-Arms</h1>
        <p className="max-w-prose text-slate-600">
          Understand the differences between mini, compact, and full-size systems, plus the trade-offs between mobile
          and fixed installations.
        </p>
        <div className="mt-6 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {tiles.map((t) => (
            <Link key={t.href} href={t.href} className="group rounded-lg border p-4 hover:bg-slate-50">
              <Image
                src={t.img || "/placeholder.svg"}
                alt={t.title}
                width={300}
                height={180}
                className="rounded-md border object-cover"
              />
              <div className="mt-3 text-base font-medium text-slate-900">{t.title}</div>
              <p className="mt-1 text-sm text-slate-600">Learn differences, common specs, and ideal use cases.</p>
            </Link>
          ))}
        </div>
      </section>
    </main>
  )
}
