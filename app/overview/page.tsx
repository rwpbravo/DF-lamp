import Image from "next/image"
import Link from "next/link"
import SiteHeader from "@/components/site-header"
import { Breadcrumbs } from "@/components/breadcrumbs"

export const metadata = {
  title: "What is a C-Arm? Types, Components, and Uses | c-arms.net",
  description:
    "C-Arm overview: learn how fluoroscopy works, key components, and types like mini, compact, and full-size. Includes clinical applications and internal links.",
  alternates: { canonical: "https://www.c-arms.net/overview" },
}

export default function OverviewPage() {
  return (
    <main>
      <SiteHeader />
      <section className="container mx-auto px-4 py-8">
        <Breadcrumbs
          items={[
            { label: "Home", href: "/" },
            { label: "C-Arm Overview", href: "/overview" },
          ]}
        />
        <h1 className="mb-3 text-3xl font-bold">C-Arm Overview: What is a C-Arm?</h1>
        <p className="max-w-prose text-slate-600">
          A C-Arm is a medical imaging device that provides real-time X-ray imaging (fluoroscopy) to guide procedures.
          The system consists of an X-ray tube and detector mounted on a C-shaped arm that rotates around the patient.
        </p>

        <div className="mt-8 grid gap-6 md:grid-cols-2">
          <div>
            <h2 className="text-2xl font-semibold">Key Components</h2>
            <ul className="mt-3 list-disc space-y-1 pl-5 text-slate-700">
              <li>Generator and X-ray tube</li>
              <li>Detector: image intensifier or flat-panel</li>
              <li>C-arm gantry and motorized movements</li>
              <li>Workstation and image processing software</li>
              <li>Monitors and documentation system</li>
            </ul>
            <div className="mt-6 flex flex-wrap gap-3 text-sm">
              <Link className="text-teal-700 underline underline-offset-4 hover:text-teal-900" href="/types">
                Explore Types of C-Arms
              </Link>
              <Link className="text-teal-700 underline underline-offset-4 hover:text-teal-900" href="/use-cases">
                Clinical Applications
              </Link>
            </div>
          </div>
          <Image
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/assets_task_01k2beks0efw6th55zzyhvetq3_1754878648_img_1-lBLlfDfIiC1bjF5kHUclCYzmlQwXjf.webp"
            alt="C-ARMS.NET teal logo"
            width={560}
            height={360}
            className="rounded-lg border bg-white object-contain p-6"
            priority
          />
        </div>

        <div className="mt-10">
          <h2 className="text-2xl font-semibold">Types of C-Arms</h2>
          <p className="mt-2 max-w-prose text-slate-600">
            Common categories include mini C-arms for extremities, compact mid-range systems, and full-size C-arms for
            spine, vascular, and complex interventions. Choose mobile systems for flexibility or fixed/OR installations
            for high throughput.
          </p>
          <div className="mt-4 grid gap-4 md:grid-cols-3">
            {[
              { label: "Mini C-Arms", href: "/types/mini" },
              { label: "Full-Size C-Arms", href: "/types/full-size" },
              { label: "Compact C-Arms", href: "/types/compact" },
            ].map((l) => (
              <Link key={l.href} href={l.href} className="rounded-lg border p-4 hover:bg-slate-50">
                <span className="font-medium">{l.label}</span>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}
