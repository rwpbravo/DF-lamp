import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowRight, ChevronRight, Filter, LineChart, ListOrdered } from "lucide-react"
import SiteHeader from "@/components/site-header"
import ChatWidget from "@/components/chat-widget"
import { QuoteBanner } from "@/components/quote-banner"
import { FAQSchema } from "@/components/faq-schema"

export const metadata = {
  title: "Comprehensive C-Arm Imaging Solutions | c-arms.net",
  description:
    "Learn, compare, and find the right C-Arm for your practice. Authoritative guides on mini, full-size, mobile C-arms plus pricing, models, and buyer tips.",
  alternates: {
    canonical: "https://www.c-arms.net/",
  },
  openGraph: {
    title: "Comprehensive C-Arm Imaging Solutions | c-arms.net",
    description:
      "Information-first resource to research C-arm imaging systems including GE OEC 9900, Siemens Cios, Philips Pulsera, and more.",
    url: "https://www.c-arms.net/",
    type: "website",
  },
}

function SiteSchemas() {
  const org = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Sentinel Imaging - C-ARMS.NET",
    url: "https://www.c-arms.net",
    sameAs: ["https://sentinelimaging.net"],
  }
  const webSite = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "C-ARMS.NET",
    url: "https://www.c-arms.net",
    potentialAction: {
      "@type": "SearchAction",
      target: "https://www.c-arms.net/search?q={query}",
      "query-input": "required name=query",
    },
  }
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(org) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(webSite) }} />
    </>
  )
}

export default function HomePage() {
  return (
    <main className="min-h-screen bg-white">
      <SiteHeader />
      <SiteSchemas />
      <section className="relative isolate overflow-hidden border-b bg-gradient-to-b from-teal-50 to-white">
        <div className="container mx-auto grid gap-8 px-4 py-12 lg:grid-cols-2 lg:items-center lg:gap-12 lg:py-20">
          <div className="space-y-6">
            <p className="inline-block rounded-full bg-teal-100 px-3 py-1 text-xs font-medium text-teal-800">
              C-Arm Resource Hub
            </p>
            <h1 className="text-4xl font-bold tracking-tight text-slate-900 md:text-5xl">
              Comprehensive C-Arm Imaging Solutions
            </h1>
            <p className="max-w-prose text-slate-600">
              Learn. Compare. Find the right C-Arm for your practice. Explore models like GE OEC 9900, Siemens Cios,
              Philips Pulsera, and more with guides, pricing insights, and expert tips.
            </p>
            <div className="flex flex-wrap gap-3">
              <Button asChild size="lg" className="bg-teal-600 hover:bg-teal-700">
                <a
                  href="https://sentinelimaging.net/contact-us-ct-mri-x-ray/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Request a Quote
                </a>
              </Button>
            </div>
            <div className="mt-6 flex flex-wrap items-center gap-3 text-sm text-slate-600">
              <Link className="inline-flex items-center hover:text-slate-900" href="/types">
                Types of C-Arms <ChevronRight className="ml-1 h-4 w-4" />
              </Link>
              <Link className="inline-flex items-center hover:text-slate-900" href="/brands">
                Brands <ChevronRight className="ml-1 h-4 w-4" />
              </Link>
              <Link className="inline-flex items-center hover:text-slate-900" href="/overview">
                What is a C-Arm? <ChevronRight className="ml-1 h-4 w-4" />
              </Link>
            </div>
          </div>
          <div className="relative flex justify-center">
            <Image
              src="/brand/logo-hero.webp"
              alt="C-ARMS.NET logo"
              width={760}
              height={520}
              priority
              className="rounded-xl border bg-white object-contain p-6 shadow-sm"
            />
          </div>
        </div>
      </section>

      <section aria-labelledby="quick-links" className="container mx-auto px-4 py-12 lg:py-16">
        <h2 id="quick-links" className="mb-6 text-2xl font-semibold">
          Start with the essentials
        </h2>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="flex items-center gap-2 text-lg">
                <ListOrdered className="h-5 w-5 text-teal-600" /> C-Arm Types
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3 text-sm text-slate-600">
              <p>
                Compare mini vs full-size, compact, and mobile vs fixed systems. Understand detectors, image
                intensifiers, flat panels, and use cases.
              </p>
              <Button asChild variant="secondary" className="group">
                <Link href="/types">
                  Explore Types <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                </Link>
              </Button>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="flex items-center gap-2 text-lg">
                <Filter className="h-5 w-5 text-teal-600" /> Browse Brands
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3 text-sm text-slate-600">
              <p>
                GE OEC, Siemens, Philips, Ziehm, Orthoscan, Hologic, Genoray, and more. Specs, pros/cons, and typical
                pricing ranges.
              </p>
              <Button asChild variant="secondary" className="group">
                <Link href="/brands">
                  View Brands <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                </Link>
              </Button>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="flex items-center gap-2 text-lg">
                <LineChart className="h-5 w-5 text-teal-600" /> Tools &amp; Comparisons
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3 text-sm text-slate-600">
              <p>
                Side-by-side model comparisons, a selector quiz to match your needs, and an ROI calculator for procedure
                revenue estimates.
              </p>
              <div className="flex flex-wrap gap-2">
                <Button asChild variant="secondary" size="sm">
                  <Link href="/comparison">Compare Models</Link>
                </Button>
                <Button asChild variant="secondary" size="sm">
                  <Link href="/tools/selector-quiz">Selector Quiz</Link>
                </Button>
                <Button asChild variant="secondary" size="sm">
                  <Link href="/tools/roi-calculator">ROI Calculator</Link>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      <section aria-labelledby="featured-models" className="border-y bg-slate-50">
        <div className="container mx-auto px-4 py-12 lg:py-16">
          <h2 id="featured-models" className="mb-2 text-2xl font-semibold">
            Popular C-Arm Models
          </h2>
          <p className="mb-6 max-w-prose text-slate-600">
            Explore frequently researched systems like GE OEC 9900, Siemens Cios Alpha, and Philips Pulsera with
            side-by-side specs and buying tips.
          </p>
          <div className="grid gap-6 md:grid-cols-3">
            <Link
              href="/models/ge-oec-9900-elite"
              className="group rounded-lg border bg-white p-4 shadow-sm transition hover:shadow-md"
            >
              <Image
                src="/images/models/ge-oec-9900-elite/featured.avif"
                alt="GE OEC 9900 Elite C-Arm System"
                width={360}
                height={220}
                className="rounded-md border object-contain bg-white p-2"
              />
              <div className="mt-3 flex items-center justify-between">
                <h3 className="text-base font-medium text-slate-900">GE OEC 9900 Elite</h3>
                <ArrowRight className="h-4 w-4 text-teal-600 opacity-0 transition group-hover:translate-x-0.5 group-hover:opacity-100" />
              </div>
              <p className="mt-1 text-sm text-slate-600">
                Popular full-size system with improved image processing and workflow vs 9800. Broad service
                availability.
              </p>
            </Link>
            <Link
              href="/models/siemens-cios-alpha"
              className="group rounded-lg border bg-white p-4 shadow-sm transition hover:shadow-md"
            >
              <Image
                src="/images/models/siemens-cios-alpha/featured.webp"
                alt="Siemens Cios Alpha C-Arm System"
                width={360}
                height={220}
                className="rounded-md border object-contain bg-white p-2"
              />
              <div className="mt-3 flex items-center justify-between">
                <h3 className="text-base font-medium text-slate-900">Siemens Cios Alpha</h3>
                <ArrowRight className="h-4 w-4 text-teal-600 opacity-0 transition group-hover:translate-x-0.5 group-hover:opacity-100" />
              </div>
              <p className="mt-1 text-sm text-slate-600">
                Premium full-size flat-panel system designed for demanding vascular and spine cases with advanced
                software.
              </p>
            </Link>
            <Link
              href="/models/philips-pulsera"
              className="group rounded-lg border bg-white p-4 shadow-sm transition hover:shadow-md"
            >
              <Image
                src="/images/models/philips-pulsera/card.jpg"
                alt="Philips Pulsera C-Arm System"
                width={360}
                height={220}
                className="rounded-md border object-contain bg-white p-2"
              />
              <div className="mt-3 flex items-center justify-between">
                <h3 className="text-base font-medium text-slate-900">Philips Pulsera</h3>
                <ArrowRight className="h-4 w-4 text-teal-600 opacity-0 transition group-hover:translate-x-0.5 group-hover:opacity-100" />
              </div>
              <p className="mt-1 text-sm text-slate-600">
                Reliable image intensifier-based system often used for general surgery and pain management procedures.
              </p>
            </Link>
          </div>
        </div>
      </section>

      <QuoteBanner />

      <section aria-labelledby="faq" className="container mx-auto px-4 py-12 lg:py-16">
        <h2 id="faq" className="mb-6 text-2xl font-semibold">
          Frequently Asked Questions
        </h2>
        <div className="grid gap-6 md:grid-cols-2">
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-lg">What is a C-arm machine?</CardTitle>
            </CardHeader>
            <CardContent className="text-sm text-slate-600">
              A C-Arm is a mobile fluoroscopy imaging system that uses X-rays in a C-shaped gantry for real-time imaging
              during procedures such as orthopedics, pain management, and vascular interventions.
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-lg">How much does a used C-Arm cost?</CardTitle>
            </CardHeader>
            <CardContent className="text-sm text-slate-600">
              Pricing varies by brand, detector type, and condition. Typical ranges are from {"$"}25,000–{"$"}150,000
              depending on features, warranty, and software packages.
            </CardContent>
          </Card>
        </div>
      </section>

      <ChatWidget />

      <FAQSchema
        items={[
          {
            question: "What is a C-arm and how does it work?",
            answer:
              "A C-arm is a fluoroscopy system with an X-ray source and detector mounted on a C-shaped arm. It provides live imaging for guidance during procedures.",
          },
          {
            question: "Mini vs full-size C-arm: which do I need?",
            answer:
              "Mini C-arms are ideal for extremities in orthopedics; full-size systems support larger fields of view for spine, vascular, and pain management.",
          },
          {
            question: "What factors affect C-arm price?",
            answer:
              "Brand, detector (flat panel vs image intensifier), generator power, software options, and system age all influence cost.",
          },
        ]}
      />
    </main>
  )
}
