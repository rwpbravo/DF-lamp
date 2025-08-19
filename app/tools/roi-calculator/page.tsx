import SiteHeader from "@/components/site-header"
import { Breadcrumbs } from "@/components/breadcrumbs"
import ROICalculator from "@/components/roi-calculator"

export const metadata = {
  title: "C-Arm ROI & Reimbursement Calculator | c-arms.net",
  description:
    "Estimate monthly and annual revenue based on procedure volume, reimbursement rates, and utilization for C-arm investments.",
  alternates: { canonical: "https://www.c-arms.net/tools/roi-calculator" },
}

export default function ROIToolsPage() {
  return (
    <main>
      <SiteHeader />
      <section className="container mx-auto px-4 py-8">
        <Breadcrumbs
          items={[
            { label: "Home", href: "/" },
            { label: "Tools", href: "/comparison" },
            { label: "ROI Calculator", href: "/tools/roi-calculator" },
          ]}
        />
        <h1 className="mb-4 text-3xl font-bold">ROI &amp; Reimbursement Calculator</h1>
        <ROICalculator />
      </section>
    </main>
  )
}
