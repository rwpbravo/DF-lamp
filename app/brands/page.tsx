import SiteHeader from "@/components/site-header"
import { Breadcrumbs } from "@/components/breadcrumbs"
import Link from "next/link"

export const metadata = {
  title: "C-Arm Brands: GE OEC, Siemens, Philips, Ziehm, Orthoscan | c-arms.net",
  description:
    "Explore C-arm brands and series, including GE OEC 9800/9900/Elite, Siemens Arcadis & Cios, Philips Pulsera & Zenition, Ziehm Vision & Solo.",
  alternates: { canonical: "https://www.c-arms.net/brands" },
}

const brands = [
  { name: "GE OEC C-Arms", href: "/brands/ge-oec" },
  { name: "Siemens C-Arms", href: "/brands/siemens" },
  { name: "Philips C-Arms", href: "/brands/philips" },
  { name: "Ziehm C-Arms", href: "/brands/ziehm" },
  { name: "Other Brands", href: "/brands/other" },
]

export default function BrandsIndex() {
  return (
    <main>
      <SiteHeader />
      <section className="container mx-auto px-4 py-8">
        <Breadcrumbs
          items={[
            { label: "Home", href: "/" },
            { label: "Brands", href: "/brands" },
          ]}
        />
        <h1 className="mb-4 text-3xl font-bold">C-Arm Brands</h1>
        <div className="grid gap-4 md:grid-cols-2">
          {brands.map((b) => (
            <Link key={b.href} href={b.href} className="rounded-lg border p-4 hover:bg-slate-50">
              <span className="font-medium">{b.name}</span>
            </Link>
          ))}
        </div>
      </section>
    </main>
  )
}
