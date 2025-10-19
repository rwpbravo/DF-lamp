import SiteHeader from "@/components/site-header"
import { Breadcrumbs } from "@/components/breadcrumbs"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import Link from "next/link"
import Image from "next/image"
import {
  Stethoscope,
  DollarSign,
  Cpu,
  BarChart3,
  Shield,
  Building2,
  Search,
  Wrench,
  ArrowRight,
  Phone,
} from "lucide-react"

export const metadata = {
  title: "C-Arm Resource Center | Expert Guides & Buying Advice | c-arms.net",
  description:
    "Your complete C-Arm resource hub. Expert guides, buying advice, technical resources, and interactive tools to help you find, purchase, and maintain the perfect C-Arm system.",
  alternates: { canonical: "https://www.c-arms.net/resources" },
}

const pillarCards = [
  {
    icon: Stethoscope,
    title: "C-Arms by Medical Specialty",
    description:
      "Find the right C-Arm for your specific procedures. Explore detailed guides for orthopedics, pain management, vascular procedures, and more.",
    badge: "8 Guides",
    cta: "Find Your Specialty Guide",
    href: "/resources/c-arms-by-specialty", // Updated href to new pillar page
  },
  {
    icon: DollarSign,
    title: "Smart Buying & Investment Planning",
    description:
      "Make confident purchasing decisions with our comprehensive buying guides. Compare new vs. used systems, understand financing options, and calculate ROI.",
    badge: "12 Articles",
    cta: "Start Your Buying Journey",
    href: "/resources/buying-guides", // Updated href to new pillar page
  },
  {
    icon: Cpu,
    title: "Technology & Technical Deep-Dives",
    description:
      "Understand the technology behind C-Arm systems. Learn about image intensifiers vs. flat panel detectors, radiation dose management, and image quality factors.",
    badge: "15 Articles",
    cta: "Explore the Technology",
    href: "/overview",
  },
  {
    icon: BarChart3,
    title: "Brand Guides & Model Comparisons",
    description:
      "Deep-dive into major C-Arm manufacturers including GE, Siemens, Philips, and Ziehm. Compare models side-by-side and understand brand differences.",
    badge: "20+ Models",
    cta: "Compare Brands & Models",
    href: "/brands",
  },
  {
    icon: Shield,
    title: "Compliance, Safety & Regulations",
    description:
      "Stay compliant with FDA regulations, state requirements, and safety protocols. Learn about operator training and radiation safety standards.",
    badge: "10 Guides",
    cta: "Ensure Compliance",
    href: "/resources",
  },
  {
    icon: Building2,
    title: "Setting Up Your C-Arm Suite",
    description:
      "Planning to add a C-Arm to your practice? Get step-by-step guidance on room design, radiation shielding, electrical requirements, and staff training.",
    badge: "6 Guides",
    cta: "Plan Your Setup",
    href: "/resources",
  },
  {
    icon: Search,
    title: "Interactive Tools & Comparisons",
    description:
      "Use our interactive tools to find your perfect C-Arm match. Take the selector quiz, compare specifications side-by-side, and explore budget-based recommendations.",
    badge: "3 Tools",
    cta: "Use Our Tools",
    href: "/comparison",
  },
  {
    icon: Wrench,
    title: "Maintenance & Support Resources",
    description:
      "Keep your C-Arm running smoothly with our maintenance guides and troubleshooting resources. Learn preventive maintenance best practices and solve common problems.",
    badge: "8 Articles",
    cta: "Get Support Resources",
    href: "/resources",
  },
]

const popularResources = [
  {
    title: "GE OEC 9900 vs. 9800: Complete Comparison",
    description: "Side-by-side comparison of two popular GE C-Arm models",
    readTime: "5 min read",
    href: "/models/ge-oec-9900-elite",
    image: "/images/models/ge-oec-9900-elite/card.avif",
  },
  {
    title: "C-Arm Pricing Guide 2025",
    description: "Comprehensive pricing breakdown by brand and model",
    readTime: "8 min read",
    href: "/blog/c-arm-pricing-guide",
    image: "/images/models/siemens-cios-alpha/card.webp",
  },
  {
    title: "Mini vs Full-Size C-Arms: Which Do You Need?",
    description: "Expert guidance on choosing the right C-Arm type",
    readTime: "6 min read",
    href: "/types",
    image: "/images/models/ziehm-solo/card.jpg",
  },
  {
    title: "C-Arm Selector Quiz",
    description: "Find your perfect C-Arm in 3 quick questions",
    readTime: "2 min read",
    href: "/tools/selector-quiz",
    image: "/images/models/philips-pulsera/card.jpg",
  },
]

const quickNavButtons = [
  { label: "Just Starting Research", variant: "outline" as const, href: "/overview" },
  { label: "Comparing Models", variant: "outline" as const, href: "/comparison" },
  { label: "Ready to Buy", variant: "default" as const, href: "https://sentinelimaging.net/contact-us-ct-mri-x-ray/" },
  { label: "I Own a C-Arm", variant: "outline" as const, href: "/resources" },
]

export default function ResourceCenterPage() {
  return (
    <main className="min-h-screen bg-white">
      <SiteHeader />
      <section className="relative isolate overflow-hidden border-b bg-gradient-to-b from-teal-50 to-white">
        <div className="container mx-auto px-4 py-12 lg:py-20">
          <Breadcrumbs
            items={[
              { label: "Home", href: "/" },
              { label: "Resources", href: "/resources" },
            ]}
          />
          <div className="mx-auto max-w-4xl text-center">
            <h1 className="text-balance text-4xl font-bold tracking-tight text-slate-900 md:text-5xl lg:text-6xl">
              Your Complete C-Arm Resource Center
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-pretty text-lg text-slate-600 md:text-xl">
              Expert guides, buying advice, and technical resources to help you find, purchase, and maintain the perfect
              C-Arm system for your practice.
            </p>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
              {quickNavButtons.map((btn) => (
                <Button
                  key={btn.label}
                  asChild
                  variant={btn.variant}
                  size="lg"
                  className={
                    btn.variant === "default"
                      ? "bg-teal-600 hover:bg-teal-700"
                      : "border-teal-600 text-teal-700 hover:bg-teal-50"
                  }
                >
                  {btn.href.startsWith("http") ? (
                    <a href={btn.href} target="_blank" rel="noopener noreferrer">
                      {btn.label}
                    </a>
                  ) : (
                    <Link href={btn.href}>{btn.label}</Link>
                  )}
                </Button>
              ))}
            </div>
            <p className="mt-6 text-xs text-slate-500">Last Updated: January 2025</p>
          </div>
        </div>
      </section>

      <section className="container mx-auto px-4 py-12 lg:py-16">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-pretty text-lg leading-relaxed text-slate-700 md:text-xl">
            Welcome to Your Complete C-Arm Resource Center. Finding the right C-Arm system for your practice shouldn't
            feel overwhelming. Whether you're a surgeon researching imaging options for the first time, a practice
            administrator comparing models and prices, or a facility manager planning an installation, we've created
            this resource center to give you clear, practical answers.
          </p>
        </div>
      </section>

      <section aria-labelledby="resource-pillars" className="border-y bg-slate-50">
        <div className="container mx-auto px-4 py-12 lg:py-16">
          <h2 id="resource-pillars" className="mb-8 text-center text-3xl font-bold text-slate-900">
            Explore Our Resource Library
          </h2>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {pillarCards.map((pillar) => {
              const Icon = pillar.icon
              return (
                <Card
                  key={pillar.title}
                  className="group transition-all duration-200 hover:-translate-y-1 hover:shadow-lg"
                >
                  <CardHeader className="pb-3">
                    <div className="mb-3 flex items-start justify-between">
                      <div className="rounded-lg bg-teal-50 p-3">
                        <Icon className="h-10 w-10 text-teal-600" />
                      </div>
                      <span className="rounded-full bg-teal-100 px-3 py-1 text-xs font-medium text-teal-800">
                        {pillar.badge}
                      </span>
                    </div>
                    <CardTitle className="text-xl">{pillar.title}</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <p className="text-sm leading-relaxed text-slate-600">{pillar.description}</p>
                    <Button
                      asChild
                      variant="outline"
                      className="w-full border-teal-600 text-teal-700 transition-colors hover:bg-teal-600 hover:text-white bg-transparent"
                    >
                      <Link href={pillar.href}>
                        {pillar.cta}
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>
      </section>

      <section aria-labelledby="help-section" className="border-b bg-teal-50">
        <div className="container mx-auto px-4 py-12 lg:py-16">
          <div className="mx-auto max-w-3xl text-center">
            <h2 id="help-section" className="text-3xl font-bold text-slate-900">
              Not Sure Where to Start?
            </h2>
            <p className="mt-4 text-pretty text-lg text-slate-700">
              Feeling overwhelmed? We're here to help. Our team of C-Arm experts can answer your questions and provide
              personalized recommendations based on your specific needs, procedures, and budget.
            </p>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
              <Button asChild size="lg" className="bg-teal-600 hover:bg-teal-700">
                <a
                  href="https://sentinelimaging.net/contact-us-ct-mri-x-ray/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Request a Free Consultation
                </a>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-teal-600 text-teal-700 hover:bg-white bg-transparent"
              >
                <a
                  href="https://sentinelimaging.net/contact-us-ct-mri-x-ray/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Get a Custom Quote
                </a>
              </Button>
            </div>
            <div className="mt-6 flex items-center justify-center gap-2 text-lg font-semibold text-teal-700">
              <Phone className="h-5 w-5" />
              <a href="tel:8888387488" className="hover:text-teal-900">
                Call us at 888-838-7488
              </a>
            </div>
          </div>
        </div>
      </section>

      <section aria-labelledby="popular-resources" className="container mx-auto px-4 py-12 lg:py-16">
        <h2 id="popular-resources" className="mb-8 text-center text-3xl font-bold text-slate-900">
          Popular Resources
        </h2>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {popularResources.map((resource) => (
            <Link
              key={resource.title}
              href={resource.href}
              className="group rounded-lg border bg-white shadow-sm transition-all hover:-translate-y-1 hover:shadow-md"
            >
              <div className="relative h-40 overflow-hidden rounded-t-lg">
                <Image
                  src={resource.image || "/placeholder.svg"}
                  alt={resource.title}
                  fill
                  className="object-cover transition-transform group-hover:scale-105"
                />
              </div>
              <div className="p-4">
                <h3 className="text-balance text-base font-semibold text-slate-900 group-hover:text-teal-700">
                  {resource.title}
                </h3>
                <p className="mt-1 text-sm text-slate-600">{resource.description}</p>
                <div className="mt-3 flex items-center justify-between">
                  <span className="text-xs text-slate-500">{resource.readTime}</span>
                  <ArrowRight className="h-4 w-4 text-teal-600 opacity-0 transition-opacity group-hover:opacity-100" />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </main>
  )
}
