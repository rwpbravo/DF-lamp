import Image from "next/image"
import SiteHeader from "@/components/site-header"
import { Breadcrumbs } from "@/components/breadcrumbs"

export const metadata = {
  title: "About Sentinel Imaging | Services, Repairs, Financing | c-arms.net",
  description:
    "Sentinel Imaging overview: sales, repair/maintenance, parts supply, financing, and rentals for C-arm systems.",
  alternates: { canonical: "https://www.c-arms.net/about" },
}

export default function AboutPage() {
  return (
    <main>
      <SiteHeader />
      <section className="container mx-auto px-4 py-8">
        <Breadcrumbs
          items={[
            { label: "Home", href: "/" },
            { label: "About", href: "/about" },
          ]}
        />
        <h1 className="mb-3 text-3xl font-bold">About Sentinel Imaging</h1>
        <p className="max-w-prose text-slate-600">
          We help healthcare providers select, finance, and maintain the right C-arm systems. Our team brings years of
          hands-on service experience and trusted vendor relationships.
        </p>

        <div className="mt-6 grid gap-6 md:grid-cols-2">
          <div className="rounded-lg border p-4">
            <h2 className="text-xl font-semibold">Services</h2>
            <ul className="mt-2 list-disc space-y-1 pl-5 text-slate-700">
              <li>Sales and installation</li>
              <li>Repair and preventive maintenance</li>
              <li>Parts supply and upgrades</li>
              <li>Financing and rentals</li>
            </ul>
          </div>
          <Image
            src={"/images/sentinel-screenshot.jpg"}
            alt="Sentinel Imaging current site preview"
            width={560}
            height={340}
            className="rounded-lg border object-cover"
          />
        </div>
      </section>
    </main>
  )
}
