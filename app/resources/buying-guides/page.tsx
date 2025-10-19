import SiteHeader from "@/components/site-header"
import { Breadcrumbs } from "@/components/breadcrumbs"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import Link from "next/link"
import Image from "next/image"
import {
  Calculator,
  GitCompare,
  CreditCard,
  TrendingUp,
  CheckCircle,
  DollarSign,
  Phone,
  ArrowRight,
  Award,
} from "lucide-react"

export const metadata = {
  title: "C-Arm Buying Guide: Smart Investment Planning for Your Practice | c-arms.net",
  description:
    "Complete C-Arm buying guide covering pricing, new vs used, financing options, ROI calculations, and the purchase process. Make confident purchasing decisions.",
  alternates: { canonical: "https://www.c-arms.net/resources/buying-guides" },
}

const buyerJourneyButtons = [
  { label: "Just Starting Research", href: "#pricing", variant: "outline" as const },
  { label: "Comparing Options", href: "#new-vs-used", variant: "outline" as const },
  { label: "Ready to Buy", href: "#buying-process", variant: "default" as const },
  { label: "Calculate ROI", href: "#roi", variant: "outline" as const },
]

const priceRanges = [
  {
    category: "Mini C-Arms",
    range: "$40K - $80K",
    features: ["Extremity imaging", "Compact design", "Lower power output", "Ideal for orthopedic clinics"],
  },
  {
    category: "Used Full-Size",
    range: "$60K - $120K",
    features: ["Image intensifier technology", "Proven reliability", "Good for general surgery", "Lower initial cost"],
  },
  {
    category: "New Full-Size",
    range: "$150K - $250K",
    features: ["Latest technology", "Full warranty", "Advanced features", "Flat panel options available"],
  },
  {
    category: "Premium Systems",
    range: "$250K+",
    features: ["Flat panel detectors", "Advanced software", "Vascular capabilities", "Hybrid OR integration"],
  },
]

const costBreakdown = [
  {
    title: "Base System Cost",
    description: "The C-Arm unit itself including the gantry, detector, generator, and basic software.",
  },
  {
    title: "Essential Accessories & Add-ons",
    description: "Additional monitors, tables, lead shielding, and positioning accessories.",
  },
  {
    title: "Installation & Setup Costs",
    description: "Delivery, installation, electrical work, and room modifications if needed.",
  },
  {
    title: "Training & Support Packages",
    description: "Operator training, clinical applications support, and initial service agreements.",
  },
  {
    title: "Extended Warranty Options",
    description: "Additional coverage beyond standard warranty for parts, labor, and preventive maintenance.",
  },
]

const newVsUsedComparison = {
  new: {
    title: "New C-Arm Systems",
    priceRange: "$150K - $300K+",
    pros: [
      "Latest technology and features",
      "Full manufacturer warranty (typically 1-2 years)",
      "No prior use or wear",
      "Latest software and connectivity",
      "Predictable performance",
    ],
    cons: [
      "Higher initial investment",
      "Longer depreciation period",
      "May include features you don't need",
      "Higher insurance costs",
    ],
    bestFor: "High-volume practices, complex procedures, latest technology requirements",
  },
  used: {
    title: "Used/Refurbished C-Arm Systems",
    priceRange: "$40K - $150K",
    pros: [
      "Significantly lower cost (40-60% savings)",
      "Proven, reliable technology",
      "Faster ROI timeline",
      "Good image quality for most procedures",
      "Widely available service and parts",
    ],
    cons: [
      "Limited or no warranty",
      "Potential for higher maintenance costs",
      "Older technology",
      "May have cosmetic wear",
      "Shorter remaining lifespan",
    ],
    bestFor: "Budget-conscious practices, standard procedures, lower volume, first-time buyers",
  },
}

const financingOptions = [
  {
    name: "Equipment Financing Loans",
    description: "Traditional loan secured by the equipment itself",
    terms: "Typical terms: 3-7 years, 5-12% interest, 10-20% down payment",
    pros: ["Own the equipment", "Tax deductible interest", "Build business credit"],
    cons: ["Requires down payment", "Fixed payment schedule", "Equipment as collateral"],
    bestFor: "Established practices with good credit seeking ownership",
  },
  {
    name: "Capital Leases",
    description: "Lease-to-own arrangement with ownership transfer at end",
    terms: "Typical terms: 3-5 years, lower monthly payments, $1 buyout",
    pros: ["Lower monthly payments", "Ownership at end", "Tax benefits", "Preserve capital"],
    cons: ["Longer commitment", "Total cost higher than cash", "Early termination fees"],
    bestFor: "Practices wanting lower payments with eventual ownership",
  },
  {
    name: "Operating Leases",
    description: "True lease with option to return, upgrade, or purchase",
    terms: "Typical terms: 3-5 years, flexible end options, no ownership obligation",
    pros: ["Lowest monthly payments", "Upgrade flexibility", "Off-balance-sheet", "Tax deductible"],
    cons: ["No ownership", "Higher total cost", "Mileage/usage limits may apply"],
    bestFor: "Practices wanting flexibility and latest technology",
  },
  {
    name: "$1 Buyout Leases",
    description: "Lease with guaranteed purchase option for $1 at end",
    terms: "Typical terms: 3-5 years, fixed payments, ownership guaranteed",
    pros: ["Predictable payments", "Guaranteed ownership", "100% financing available", "Tax benefits"],
    cons: ["Higher payments than operating lease", "Commitment to ownership", "Less flexibility"],
    bestFor: "Practices certain they want to own the equipment",
  },
  {
    name: "SBA Loans for Medical Equipment",
    description: "Small Business Administration guaranteed loans",
    terms: "Typical terms: Up to 10 years, competitive rates, lower down payment",
    pros: ["Lower down payment", "Longer terms", "Competitive rates", "Government backed"],
    cons: ["Longer approval process", "More documentation", "SBA fees", "Eligibility requirements"],
    bestFor: "Small practices or startups with limited capital",
  },
]

export default function BuyingGuidesPage() {
  return (
    <main className="min-h-screen bg-white">
      <SiteHeader />

      {/* Hero Section */}
      <section className="relative isolate overflow-hidden border-b bg-gradient-to-b from-teal-50 to-white">
        <div className="container mx-auto px-4 py-12 lg:py-20">
          <Breadcrumbs
            items={[
              { label: "Home", href: "/" },
              { label: "Resources", href: "/resources" },
              { label: "Buying Guides", href: "/resources/buying-guides" },
            ]}
          />
          <div className="mx-auto max-w-4xl text-center">
            <h1 className="text-balance text-4xl font-bold tracking-tight text-slate-900 md:text-5xl lg:text-6xl">
              Your Complete C-Arm Buying & Investment Guide
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-pretty text-lg text-slate-600 md:text-xl">
              Make confident purchasing decisions with expert guidance on pricing, financing, new vs. used systems, and
              ROI calculations. Everything you need to invest wisely in the right C-Arm for your practice.
            </p>

            {/* Buyer Journey Buttons */}
            <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
              {buyerJourneyButtons.map((btn) => (
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
                  <a href={btn.href}>{btn.label}</a>
                </Button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Introductory Content */}
      <section className="container mx-auto px-4 py-12 lg:py-16">
        <div className="mx-auto max-w-3xl">
          <p className="text-pretty text-lg leading-relaxed text-slate-700 md:text-xl">
            Purchasing a C-Arm system is a significant investment that can transform your practice's capabilities and
            revenue. Whether you're buying your first C-Arm or upgrading an existing system, this comprehensive guide
            will help you navigate pricing, financing options, new vs. used considerations, and ROI calculations. Our
            goal is to help you make an informed decision that aligns with your clinical needs and financial goals.
          </p>

          {/* Statistics Bar */}
          <div className="mt-8 grid grid-cols-2 gap-4 md:grid-cols-4">
            <div className="rounded-lg bg-teal-50 p-4 text-center">
              <div className="text-2xl font-bold text-teal-900">$75K - $250K</div>
              <div className="mt-1 text-xs text-slate-600">Average C-Arm Investment</div>
            </div>
            <div className="rounded-lg bg-teal-50 p-4 text-center">
              <div className="text-2xl font-bold text-teal-900">12-24 months</div>
              <div className="mt-1 text-xs text-slate-600">Typical ROI Timeline</div>
            </div>
            <div className="rounded-lg bg-teal-50 p-4 text-center">
              <div className="text-2xl font-bold text-teal-900">5+ options</div>
              <div className="mt-1 text-xs text-slate-600">Financing Options</div>
            </div>
            <div className="rounded-lg bg-teal-50 p-4 text-center">
              <div className="text-2xl font-bold text-teal-900">30-50%</div>
              <div className="mt-1 text-xs text-slate-600">Potential Revenue Increase</div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 1: Understanding C-Arm Pricing */}
      <section id="pricing" className="border-t bg-slate-50">
        <div className="container mx-auto px-4 py-12 lg:py-16">
          <div className="mb-8 flex items-center gap-4">
            <div className="rounded-lg bg-teal-100 p-3">
              <Calculator className="h-10 w-10 text-teal-600" />
            </div>
            <div>
              <div className="text-sm font-medium text-teal-700">Step 1</div>
              <h2 className="text-3xl font-bold text-slate-900">Understanding C-Arm Costs & Pricing</h2>
            </div>
          </div>

          <div className="grid gap-8 lg:grid-cols-[1.5fr,1fr]">
            {/* Left Column */}
            <div className="space-y-6">
              <p className="text-lg text-slate-700">
                C-Arm pricing varies significantly based on technology, features, and condition. Understanding the cost
                breakdown helps you budget appropriately and identify the best value for your needs.
              </p>

              {/* Price Range Cards */}
              <div className="grid gap-4 md:grid-cols-2">
                {priceRanges.map((range, i) => (
                  <Card key={i}>
                    <CardHeader className="pb-2">
                      <CardTitle className="text-lg">{range.category}</CardTitle>
                      <div className="text-2xl font-bold text-teal-700">{range.range}</div>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-1 text-sm text-slate-600">
                        {range.features.map((feature, j) => (
                          <li key={j} className="flex items-start gap-2">
                            <CheckCircle className="mt-0.5 h-4 w-4 flex-shrink-0 text-teal-600" />
                            <span>{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                ))}
              </div>

              {/* Cost Breakdown Accordion */}
              <div>
                <h3 className="mb-3 text-xl font-semibold text-slate-900">Cost Breakdown</h3>
                <Accordion type="single" collapsible className="rounded-lg border bg-white">
                  {costBreakdown.map((item, i) => (
                    <AccordionItem key={i} value={`cost-${i}`}>
                      <AccordionTrigger className="px-4">{item.title}</AccordionTrigger>
                      <AccordionContent className="px-4">
                        <p className="text-sm text-slate-600">{item.description}</p>
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </div>
            </div>

            {/* Right Column */}
            <div className="space-y-6">
              {/* Featured Article */}
              <Card className="shadow-lg">
                <div className="relative h-40">
                  <Image
                    src="/images/models/ge-oec-9900-elite/card.avif"
                    alt="C-Arm Pricing Guide"
                    fill
                    className="rounded-t-lg object-cover"
                  />
                </div>
                <CardHeader className="pb-2">
                  <CardTitle className="text-lg">Complete C-Arm Pricing Guide 2025</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <p className="text-sm text-slate-600">
                    Detailed breakdown of costs by model, manufacturer, and configuration
                  </p>
                  <Button asChild size="sm" className="w-full bg-teal-600 hover:bg-teal-700">
                    <Link href="/blog/c-arm-pricing-guide">
                      Read Full Guide
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>

              {/* CTA Box */}
              <Card className="bg-teal-50">
                <CardHeader className="pb-2">
                  <CardTitle className="text-lg">Get a Custom Quote for Your Practice</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="mb-4 text-sm text-slate-700">
                    Receive personalized pricing based on your specific needs, procedures, and budget.
                  </p>
                  <Button asChild className="w-full bg-teal-600 hover:bg-teal-700">
                    <a
                      href="https://sentinelimaging.net/contact-us-ct-mri-x-ray/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Request Quote
                    </a>
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Cluster Articles */}
          <div className="mt-12">
            <h3 className="mb-6 text-2xl font-semibold text-slate-900">Pricing & Cost Resources</h3>
            <div className="grid gap-6 md:grid-cols-3">
              {[
                {
                  title: "How Much Does a C-Arm Cost? Complete Price Breakdown",
                  description: "Comprehensive pricing guide by model type and manufacturer",
                  href: "/blog/c-arm-pricing-guide",
                },
                {
                  title: "Hidden Costs of C-Arm Ownership You Need to Know",
                  description: "Beyond the purchase price: maintenance, service, and operating costs",
                  href: "/overview",
                },
                {
                  title: "C-Arm Pricing by Manufacturer: GE vs. Siemens vs. Philips",
                  description: "Compare pricing across major brands and understand value differences",
                  href: "/brands",
                },
              ].map((article, i) => (
                <Link
                  key={i}
                  href={article.href}
                  className="group rounded-lg border bg-white p-4 shadow-sm transition-all hover:-translate-y-1 hover:shadow-md"
                >
                  <h4 className="text-balance text-base font-semibold text-slate-900 group-hover:text-teal-700">
                    {article.title}
                  </h4>
                  <p className="mt-2 text-sm text-slate-600">{article.description}</p>
                  <div className="mt-3 flex items-center justify-between">
                    <span className="text-xs text-slate-500">6 min read</span>
                    <ArrowRight className="h-4 w-4 text-teal-600 opacity-0 transition-opacity group-hover:opacity-100" />
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Section 2: New vs Used C-Arms */}
      <section id="new-vs-used" className="border-t bg-white">
        <div className="container mx-auto px-4 py-12 lg:py-16">
          <div className="mb-8 flex items-center gap-4">
            <div className="rounded-lg bg-teal-100 p-3">
              <GitCompare className="h-10 w-10 text-teal-600" />
            </div>
            <div>
              <div className="text-sm font-medium text-teal-700">Step 2</div>
              <h2 className="text-3xl font-bold text-slate-900">New vs. Used C-Arms - Making the Right Choice</h2>
            </div>
          </div>

          {/* Side-by-Side Comparison */}
          <div className="grid gap-6 lg:grid-cols-2">
            {/* New C-Arms Card */}
            <Card className="border-2 border-teal-200">
              <CardHeader className="bg-teal-50 pb-4">
                <div className="mb-2 flex items-center justify-between">
                  <CardTitle className="text-2xl">{newVsUsedComparison.new.title}</CardTitle>
                  <Award className="h-8 w-8 text-teal-600" />
                </div>
                <div className="text-xl font-bold text-teal-700">{newVsUsedComparison.new.priceRange}</div>
              </CardHeader>
              <CardContent className="space-y-4 pt-6">
                <div>
                  <h4 className="mb-2 font-semibold text-green-700">Advantages</h4>
                  <ul className="space-y-1">
                    {newVsUsedComparison.new.pros.map((pro, i) => (
                      <li key={i} className="flex items-start gap-2 text-sm">
                        <CheckCircle className="mt-0.5 h-4 w-4 flex-shrink-0 text-green-600" />
                        <span>{pro}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h4 className="mb-2 font-semibold text-orange-700">Considerations</h4>
                  <ul className="space-y-1">
                    {newVsUsedComparison.new.cons.map((con, i) => (
                      <li key={i} className="flex items-start gap-2 text-sm">
                        <span className="mt-0.5 text-orange-600">•</span>
                        <span>{con}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="rounded-lg bg-slate-50 p-3">
                  <div className="text-xs font-semibold text-slate-700">Best For:</div>
                  <div className="text-sm text-slate-600">{newVsUsedComparison.new.bestFor}</div>
                </div>
              </CardContent>
            </Card>

            {/* Used C-Arms Card */}
            <Card className="border-2 border-blue-200">
              <CardHeader className="bg-blue-50 pb-4">
                <div className="mb-2 flex items-center justify-between">
                  <CardTitle className="text-2xl">{newVsUsedComparison.used.title}</CardTitle>
                  <DollarSign className="h-8 w-8 text-blue-600" />
                </div>
                <div className="text-xl font-bold text-blue-700">{newVsUsedComparison.used.priceRange}</div>
              </CardHeader>
              <CardContent className="space-y-4 pt-6">
                <div>
                  <h4 className="mb-2 font-semibold text-green-700">Advantages</h4>
                  <ul className="space-y-1">
                    {newVsUsedComparison.used.pros.map((pro, i) => (
                      <li key={i} className="flex items-start gap-2 text-sm">
                        <CheckCircle className="mt-0.5 h-4 w-4 flex-shrink-0 text-green-600" />
                        <span>{pro}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h4 className="mb-2 font-semibold text-orange-700">Considerations</h4>
                  <ul className="space-y-1">
                    {newVsUsedComparison.used.cons.map((con, i) => (
                      <li key={i} className="flex items-start gap-2 text-sm">
                        <span className="mt-0.5 text-orange-600">•</span>
                        <span>{con}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="rounded-lg bg-slate-50 p-3">
                  <div className="text-xs font-semibold text-slate-700">Best For:</div>
                  <div className="text-sm text-slate-600">{newVsUsedComparison.used.bestFor}</div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Cluster Articles */}
          <div className="mt-12">
            <h3 className="mb-6 text-2xl font-semibold text-slate-900">New vs. Used C-Arm Resources</h3>
            <div className="grid gap-6 md:grid-cols-3">
              {[
                {
                  title: "New vs. Used C-Arms: Complete Comparison Guide",
                  description: "Detailed analysis of pros, cons, and total cost of ownership",
                  href: "/overview",
                },
                {
                  title: "Benefits of Buying a Refurbished C-Arm System",
                  description: "How refurbished systems offer the best of both worlds",
                  href: "/overview",
                },
                {
                  title: "What to Look for When Buying a Used C-Arm",
                  description: "Inspection checklist and red flags to avoid",
                  href: "/overview",
                },
              ].map((article, i) => (
                <Link
                  key={i}
                  href={article.href}
                  className="group rounded-lg border bg-white p-4 shadow-sm transition-all hover:-translate-y-1 hover:shadow-md"
                >
                  <h4 className="text-balance text-base font-semibold text-slate-900 group-hover:text-teal-700">
                    {article.title}
                  </h4>
                  <p className="mt-2 text-sm text-slate-600">{article.description}</p>
                  <div className="mt-3 flex items-center justify-between">
                    <span className="text-xs text-slate-500">7 min read</span>
                    <ArrowRight className="h-4 w-4 text-teal-600 opacity-0 transition-opacity group-hover:opacity-100" />
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Section 3: Financing Options */}
      <section id="financing" className="border-t bg-slate-50">
        <div className="container mx-auto px-4 py-12 lg:py-16">
          <div className="mb-8 flex items-center gap-4">
            <div className="rounded-lg bg-teal-100 p-3">
              <CreditCard className="h-10 w-10 text-teal-600" />
            </div>
            <div>
              <div className="text-sm font-medium text-teal-700">Step 3</div>
              <h2 className="text-3xl font-bold text-slate-900">Financing Your C-Arm Investment</h2>
            </div>
          </div>

          <p className="mb-8 max-w-3xl text-lg text-slate-700">
            Most practices finance their C-Arm purchase rather than paying cash upfront. Understanding your financing
            options helps you preserve capital while acquiring the equipment you need.
          </p>

          {/* Financing Options Accordion */}
          <div className="mx-auto max-w-4xl">
            <Accordion type="single" collapsible className="space-y-4">
              {financingOptions.map((option, i) => (
                <AccordionItem key={i} value={`financing-${i}`} className="rounded-lg border bg-white px-6">
                  <AccordionTrigger className="text-left">
                    <div>
                      <div className="font-semibold text-slate-900">{option.name}</div>
                      <div className="text-sm text-slate-600">{option.description}</div>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="space-y-4">
                    <div className="rounded-lg bg-slate-50 p-4">
                      <div className="text-sm font-semibold text-slate-700">Typical Terms</div>
                      <div className="text-sm text-slate-600">{option.terms}</div>
                    </div>
                    <div className="grid gap-4 md:grid-cols-2">
                      <div>
                        <div className="mb-2 text-sm font-semibold text-green-700">Advantages</div>
                        <ul className="space-y-1">
                          {option.pros.map((pro, j) => (
                            <li key={j} className="flex items-start gap-2 text-sm">
                              <CheckCircle className="mt-0.5 h-4 w-4 flex-shrink-0 text-green-600" />
                              <span>{pro}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div>
                        <div className="mb-2 text-sm font-semibold text-orange-700">Considerations</div>
                        <ul className="space-y-1">
                          {option.cons.map((con, j) => (
                            <li key={j} className="flex items-start gap-2 text-sm">
                              <span className="mt-0.5 text-orange-600">•</span>
                              <span>{con}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                    <div className="rounded-lg bg-teal-50 p-3">
                      <div className="text-xs font-semibold text-teal-900">Best For:</div>
                      <div className="text-sm text-slate-700">{option.bestFor}</div>
                    </div>
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>

          {/* Cluster Articles */}
          <div className="mt-12">
            <h3 className="mb-6 text-2xl font-semibold text-slate-900">Financing Resources</h3>
            <div className="grid gap-6 md:grid-cols-3">
              {[
                {
                  title: "Complete Guide to C-Arm Financing Options",
                  description: "Compare all financing methods and find the best fit for your practice",
                  href: "/overview",
                },
                {
                  title: "Lease vs. Buy: Which is Better for Your C-Arm?",
                  description: "Detailed comparison of leasing and purchasing with ROI analysis",
                  href: "/overview",
                },
                {
                  title: "Tax Benefits of Financing Medical Equipment",
                  description: "Understanding Section 179 deductions and depreciation",
                  href: "/overview",
                },
              ].map((article, i) => (
                <Link
                  key={i}
                  href={article.href}
                  className="group rounded-lg border bg-white p-4 shadow-sm transition-all hover:-translate-y-1 hover:shadow-md"
                >
                  <h4 className="text-balance text-base font-semibold text-slate-900 group-hover:text-teal-700">
                    {article.title}
                  </h4>
                  <p className="mt-2 text-sm text-slate-600">{article.description}</p>
                  <div className="mt-3 flex items-center justify-between">
                    <span className="text-xs text-slate-500">8 min read</span>
                    <ArrowRight className="h-4 w-4 text-teal-600 opacity-0 transition-opacity group-hover:opacity-100" />
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Section 4: ROI Calculator */}
      <section id="roi" className="border-t bg-white">
        <div className="container mx-auto px-4 py-12 lg:py-16">
          <div className="mb-8 flex items-center gap-4">
            <div className="rounded-lg bg-teal-100 p-3">
              <TrendingUp className="h-10 w-10 text-teal-600" />
            </div>
            <div>
              <div className="text-sm font-medium text-teal-700">Step 4</div>
              <h2 className="text-3xl font-bold text-slate-900">Calculate Your C-Arm ROI</h2>
            </div>
          </div>

          <p className="mb-8 max-w-3xl text-lg text-slate-700">
            A C-Arm system isn't just an expense—it's a revenue-generating investment. Understanding your potential
            return on investment helps justify the purchase and set realistic expectations.
          </p>

          {/* ROI Calculator Card */}
          <Card className="mx-auto max-w-4xl shadow-lg">
            <CardHeader className="bg-teal-50">
              <CardTitle className="text-2xl">C-Arm ROI Calculator</CardTitle>
              <p className="text-sm text-slate-600">
                Estimate your return on investment based on procedure volume and reimbursement rates
              </p>
            </CardHeader>
            <CardContent className="p-6">
              <div className="rounded-lg bg-slate-50 p-6 text-center">
                <p className="text-slate-700">
                  Use our interactive ROI calculator to estimate your monthly and annual revenue potential.
                </p>
                <Button asChild size="lg" className="mt-4 bg-teal-600 hover:bg-teal-700">
                  <Link href="/tools/roi-calculator">
                    Launch ROI Calculator
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* Cluster Articles */}
          <div className="mt-12">
            <h3 className="mb-6 text-2xl font-semibold text-slate-900">ROI & Revenue Resources</h3>
            <div className="grid gap-6 md:grid-cols-3">
              {[
                {
                  title: "How to Calculate C-Arm ROI for Your Practice",
                  description: "Step-by-step guide to estimating return on investment",
                  href: "/tools/roi-calculator",
                },
                {
                  title: "Revenue Opportunities with In-Office C-Arm Imaging",
                  description: "Maximize profitability with strategic procedure planning",
                  href: "/overview",
                },
                {
                  title: "Reimbursement Rates for C-Arm Procedures 2025",
                  description: "Current CPT codes and Medicare reimbursement rates",
                  href: "/overview",
                },
              ].map((article, i) => (
                <Link
                  key={i}
                  href={article.href}
                  className="group rounded-lg border bg-white p-4 shadow-sm transition-all hover:-translate-y-1 hover:shadow-md"
                >
                  <h4 className="text-balance text-base font-semibold text-slate-900 group-hover:text-teal-700">
                    {article.title}
                  </h4>
                  <p className="mt-2 text-sm text-slate-600">{article.description}</p>
                  <div className="mt-3 flex items-center justify-between">
                    <span className="text-xs text-slate-500">9 min read</span>
                    <ArrowRight className="h-4 w-4 text-teal-600 opacity-0 transition-opacity group-hover:opacity-100" />
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Section 5: The Buying Process */}
      <section id="buying-process" className="border-t bg-slate-50">
        <div className="container mx-auto px-4 py-12 lg:py-16">
          <div className="mb-8 flex items-center gap-4">
            <div className="rounded-lg bg-teal-100 p-3">
              <CheckCircle className="h-10 w-10 text-teal-600" />
            </div>
            <div>
              <div className="text-sm font-medium text-teal-700">Step 5</div>
              <h2 className="text-3xl font-bold text-slate-900">Navigating the Purchase Process</h2>
            </div>
          </div>

          <p className="mb-8 max-w-3xl text-lg text-slate-700">
            Understanding the typical buying timeline and process helps you plan effectively and avoid common pitfalls.
          </p>

          {/* Timeline */}
          <div className="mx-auto max-w-4xl">
            <div className="space-y-4">
              {[
                { step: "Assess Your Needs", duration: "2-4 weeks", description: "Define requirements and budget" },
                { step: "Research Options", duration: "2-3 weeks", description: "Compare models and vendors" },
                { step: "Get Quotes", duration: "1-2 weeks", description: "Request pricing from multiple sources" },
                {
                  step: "Compare & Negotiate",
                  duration: "1-2 weeks",
                  description: "Evaluate offers and negotiate terms",
                },
                {
                  step: "Secure Financing",
                  duration: "2-4 weeks",
                  description: "Apply for and finalize financing",
                },
                { step: "Place Order", duration: "1 week", description: "Sign agreement and submit deposit" },
                {
                  step: "Installation & Training",
                  duration: "2-4 weeks",
                  description: "Delivery, setup, and staff training",
                },
                { step: "Go Live", duration: "1 week", description: "Begin using system for patient care" },
              ].map((item, i) => (
                <div key={i} className="flex gap-4 rounded-lg border bg-white p-4">
                  <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-teal-100 font-bold text-teal-700">
                    {i + 1}
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between">
                      <h4 className="font-semibold text-slate-900">{item.step}</h4>
                      <span className="text-sm text-slate-500">{item.duration}</span>
                    </div>
                    <p className="text-sm text-slate-600">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-6 rounded-lg bg-teal-50 p-4 text-center">
              <div className="text-sm font-semibold text-teal-900">Total Typical Timeline: 12-16 weeks</div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="border-t bg-white">
        <div className="container mx-auto px-4 py-12 lg:py-16">
          <h2 className="mb-8 text-center text-3xl font-bold text-slate-900">C-Arm Buying FAQs</h2>
          <div className="mx-auto max-w-3xl">
            <Accordion type="single" collapsible className="space-y-4">
              {[
                {
                  q: "How much should I budget for a C-Arm system?",
                  a: "Budget $40K-$80K for mini C-Arms, $60K-$150K for used full-size systems, $150K-$250K for new full-size systems, and $250K+ for premium flat panel systems. Don't forget to include installation, training, and accessories in your budget.",
                },
                {
                  q: "Is it better to buy new or used?",
                  a: "It depends on your budget, procedure volume, and technology requirements. Used systems offer 40-60% savings and are ideal for budget-conscious practices with standard procedures. New systems provide latest technology, full warranty, and are best for high-volume practices requiring advanced features.",
                },
                {
                  q: "What financing options are available?",
                  a: "Common options include equipment financing loans, capital leases, operating leases, $1 buyout leases, and SBA loans. Most practices choose financing to preserve capital. Terms typically range from 3-7 years with various down payment and interest rate options.",
                },
                {
                  q: "How long does the buying process take?",
                  a: "The typical buying process takes 12-16 weeks from initial research to go-live. This includes needs assessment (2-4 weeks), research and quotes (3-4 weeks), financing (2-4 weeks), and installation/training (2-4 weeks). Rush orders may be possible for an additional fee.",
                },
              ].map((item, i) => (
                <AccordionItem key={i} value={`faq-${i}`} className="rounded-lg border px-6">
                  <AccordionTrigger>{item.q}</AccordionTrigger>
                  <AccordionContent>
                    <p className="text-slate-700">{item.a}</p>
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="border-t bg-gradient-to-b from-teal-50 to-teal-100">
        <div className="container mx-auto px-4 py-12 lg:py-16">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-bold text-slate-900">Get Expert Guidance on Your C-Arm Purchase</h2>
            <p className="mt-4 text-pretty text-lg text-slate-700">
              Buying a C-Arm is a major decision. Our team of C-Arm specialists has helped hundreds of practices
              navigate the buying process, negotiate better prices, and find the perfect system for their needs. Get
              personalized guidance at no cost.
            </p>
            <div className="mt-8 grid gap-4 md:grid-cols-3">
              <div className="rounded-lg bg-white p-4">
                <CheckCircle className="mx-auto h-8 w-8 text-teal-600" />
                <div className="mt-2 font-semibold text-slate-900">Free Consultation</div>
                <div className="text-sm text-slate-600">No obligation expert advice</div>
              </div>
              <div className="rounded-lg bg-white p-4">
                <CheckCircle className="mx-auto h-8 w-8 text-teal-600" />
                <div className="mt-2 font-semibold text-slate-900">Unbiased Recommendations</div>
                <div className="text-sm text-slate-600">We work for you, not manufacturers</div>
              </div>
              <div className="rounded-lg bg-white p-4">
                <CheckCircle className="mx-auto h-8 w-8 text-teal-600" />
                <div className="mt-2 font-semibold text-slate-900">Negotiation Support</div>
                <div className="text-sm text-slate-600">Get the best price and terms</div>
              </div>
            </div>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
              <Button asChild size="lg" className="bg-white text-teal-700 hover:bg-slate-50">
                <a
                  href="https://sentinelimaging.net/contact-us-ct-mri-x-ray/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Schedule Free Consultation
                </a>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-teal-700 bg-transparent"
              >
                <a href="tel:8888387488">
                  <Phone className="mr-2 h-4 w-4" />
                  Call Now: 888-838-7488
                </a>
              </Button>
            </div>
            <div className="mt-6 flex flex-wrap items-center justify-center gap-4 text-sm text-slate-600">
              <div className="flex items-center gap-1">
                <CheckCircle className="h-4 w-4 text-teal-700" />
                500+ Practices Served
              </div>
              <div className="flex items-center gap-1">
                <CheckCircle className="h-4 w-4 text-teal-700" />
                20+ Years Experience
              </div>
              <div className="flex items-center gap-1">
                <CheckCircle className="h-4 w-4 text-teal-700" />
                A+ BBB Rating
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
