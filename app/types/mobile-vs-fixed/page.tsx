import SiteHeader from "@/components/site-header"
import { Breadcrumbs } from "@/components/breadcrumbs"

export const metadata = {
  title: "Mobile vs Fixed C-Arm Systems: Which is Right for You? | c-arms.net",
  description:
    "Compare mobile C-Arms with fixed hybrid OR systems. Consider throughput, footprint, costs, and clinical needs.",
  alternates: { canonical: "https://www.c-arms.net/types/mobile-vs-fixed" },
}

export default function MobileVsFixedPage() {
  return (
    <main>
      <SiteHeader />
      <section className="container mx-auto px-4 py-8">
        <Breadcrumbs
          items={[
            { label: "Home", href: "/" },
            { label: "Types of C-Arms", href: "/types" },
            { label: "Mobile vs Fixed", href: "/types/mobile-vs-fixed" },
          ]}
        />
        <h1 className="text-3xl font-bold">Mobile vs Fixed C-Arm Systems</h1>
        <div className="mt-2 grid gap-6 md:grid-cols-2">
          <div>
            <h2 className="text-xl font-semibold">Mobile C-Arms</h2>
            <ul className="mt-2 list-disc space-y-1 pl-5 text-slate-700">
              <li>Lower capital cost and flexible deployment</li>
              <li>Ideal for multi-specialty ASCs and hospitals</li>
              <li>Quick room turnover and easy service</li>
            </ul>
          </div>
          <div>
            <h2 className="text-xl font-semibold">Fixed/Hybrid OR</h2>
            <ul className="mt-2 list-disc space-y-1 pl-5 text-slate-700">
              <li>Highest image quality and workflow integration</li>
              <li>Best for high-volume vascular and complex cases</li>
              <li>Higher cost and room build-out requirements</li>
            </ul>
          </div>
        </div>
      </section>
    </main>
  )
}
