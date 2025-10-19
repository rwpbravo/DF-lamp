import SiteHeader from "@/components/site-header"
import { Breadcrumbs } from "@/components/breadcrumbs"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import Link from "next/link"
import Image from "next/image"
import {
  Stethoscope,
  Activity,
  Heart,
  Droplet,
  Scissors,
  Ambulance,
  ArrowRight,
  Phone,
  CheckCircle2,
} from "lucide-react"

export const metadata = {
  title: "C-Arm Systems by Medical Specialty: Find the Perfect Match for Your Practice | c-arms.net",
  description:
    "Find the right C-Arm for your specialty. Expert guides for orthopedics, pain management, vascular procedures, urology, general surgery, and emergency medicine.",
  alternates: { canonical: "https://www.c-arms.net/resources/c-arms-by-specialty" },
}

const specialties = [
  {
    id: "orthopedic",
    icon: Stethoscope,
    name: "Orthopedic Surgery",
    overview:
      "Orthopedic procedures demand high-resolution bone imaging with large fields of view for extremities and spine. The ideal C-Arm must provide exceptional detail for hardware placement while maintaining workflow efficiency in the OR.",
    keyRequirements: [
      "High-resolution imaging for bone detail",
      "Large field of view for extremities",
      "Pulsed fluoroscopy for dose reduction",
      "Motorized positioning for surgical workflow",
      "Multiple magnification modes",
    ],
    procedures: [
      "Fracture fixation",
      "Joint replacement",
      "Spinal fusion",
      "Hardware placement",
      "Extremity procedures",
      "Trauma surgery",
    ],
    featuredArticle: {
      title: "Complete Guide to C-Arms for Orthopedic Surgery",
      description: "Detailed analysis of imaging requirements, recommended models, and workflow optimization",
      readTime: "12 min read",
      href: "/use-cases/orthopedic",
      image: "/images/models/ge-oec-9900-elite/card.avif",
    },
    quickStats: {
      costRange: "$75K - $200K",
      popularModels: ["GE OEC 9900", "Siemens Cios Alpha", "Ziehm Vision RFD"],
      roiTimeline: "18-24 months",
    },
    relatedArticles: [
      {
        title: "Mini C-Arms vs. Full-Size C-Arms for Orthopedic Procedures",
        description: "Compare imaging capabilities and determine which system fits your practice",
        readTime: "8 min read",
        href: "/types/mini",
      },
      {
        title: "Best C-Arm Models for Orthopedic Surgery Centers",
        description: "Top-rated systems for ASCs and hospital orthopedic departments",
        readTime: "10 min read",
        href: "/brands",
      },
      {
        title: "C-Arm Positioning Techniques for Orthopedic Procedures",
        description: "Master optimal angles and positioning for common orthopedic cases",
        readTime: "6 min read",
        href: "/overview",
      },
    ],
  },
  {
    id: "pain-management",
    icon: Activity,
    name: "Pain Management & Interventional Spine",
    overview:
      "Pain management procedures require precise needle guidance with minimal radiation exposure. Compact systems with excellent image quality and dose management are essential for high-volume practices.",
    keyRequirements: [
      "Precise needle guidance capabilities",
      "Low-dose pulsed fluoroscopy",
      "Compact design for procedure rooms",
      "Dose tracking and reporting",
      "Quick positioning and setup",
    ],
    procedures: [
      "Epidural injections",
      "Facet joint injections",
      "Nerve blocks",
      "Radiofrequency ablation",
      "Spinal cord stimulation",
      "Vertebroplasty",
    ],
    featuredArticle: {
      title: "C-Arms for Pain Management: Complete Buyer's Guide",
      description: "Everything you need to know about selecting a C-Arm for interventional pain procedures",
      readTime: "10 min read",
      href: "/use-cases/pain-management",
      image: "/images/models/ziehm-solo/card.jpg",
    },
    quickStats: {
      costRange: "$60K - $150K",
      popularModels: ["Ziehm Solo", "GE OEC 9800", "Philips Pulsera"],
      roiTimeline: "12-18 months",
    },
    relatedArticles: [
      {
        title: "Radiation Safety in Pain Management Fluoroscopy",
        description: "Best practices for minimizing dose in high-volume pain practices",
        readTime: "7 min read",
        href: "/overview",
      },
      {
        title: "Compact C-Arms for Pain Management Clinics",
        description: "Space-efficient systems perfect for outpatient settings",
        readTime: "8 min read",
        href: "/types/compact",
      },
      {
        title: "Dose Tracking Requirements for Pain Management",
        description: "Understanding compliance and documentation needs",
        readTime: "5 min read",
        href: "/overview",
      },
    ],
  },
  {
    id: "vascular",
    icon: Heart,
    name: "Vascular & Interventional Radiology",
    overview:
      "Vascular procedures demand real-time imaging with superior contrast resolution and large display monitors. Flat panel detectors and advanced roadmapping capabilities are essential for complex interventions.",
    keyRequirements: [
      "Flat panel detector for superior image quality",
      "Roadmapping and subtraction capabilities",
      "Large high-resolution monitors",
      "Extended C-arm reach and rotation",
      "Advanced dose management",
    ],
    procedures: [
      "Angiography",
      "Stent placement",
      "Embolization",
      "Thrombectomy",
      "Dialysis access",
      "Peripheral interventions",
    ],
    featuredArticle: {
      title: "Vascular C-Arms: Advanced Imaging for Interventional Procedures",
      description: "Comprehensive guide to flat panel systems and advanced imaging features",
      readTime: "14 min read",
      href: "/use-cases",
      image: "/images/models/siemens-cios-alpha/card.webp",
    },
    quickStats: {
      costRange: "$150K - $300K+",
      popularModels: ["Siemens Cios Alpha", "Philips Zenition", "GE OEC Elite CFD"],
      roiTimeline: "24-36 months",
    },
    relatedArticles: [
      {
        title: "Flat Panel vs Image Intensifier for Vascular Procedures",
        description: "Why flat panel technology matters for interventional radiology",
        readTime: "9 min read",
        href: "/overview",
      },
      {
        title: "Roadmapping and Advanced Imaging Features",
        description: "Understanding software capabilities for complex interventions",
        readTime: "11 min read",
        href: "/overview",
      },
      {
        title: "C-Arm Requirements for Hybrid ORs",
        description: "Integrating C-Arm systems in advanced surgical suites",
        readTime: "8 min read",
        href: "/overview",
      },
    ],
  },
  {
    id: "urology",
    icon: Droplet,
    name: "Urology",
    overview:
      "Urological procedures benefit from compact, maneuverable C-Arms with excellent image quality for stone procedures and minimally invasive surgery. Dose management is critical for patient safety.",
    keyRequirements: [
      "Compact design for flexible positioning",
      "High-resolution imaging for stone visualization",
      "Pulsed fluoroscopy for dose reduction",
      "Quick setup and positioning",
      "Durable construction for frequent use",
    ],
    procedures: [
      "Kidney stone procedures",
      "PCNL (percutaneous nephrolithotomy)",
      "Ureteral stent placement",
      "Prostate procedures",
      "Bladder procedures",
      "Minimally invasive surgery",
    ],
    featuredArticle: {
      title: "C-Arms for Urology: Imaging Solutions for Stone and Minimally Invasive Procedures",
      description: "Selecting the right C-Arm for urological applications",
      readTime: "9 min read",
      href: "/use-cases",
      image: "/images/models/philips-pulsera/card.jpg",
    },
    quickStats: {
      costRange: "$70K - $180K",
      popularModels: ["Ziehm Vision RFD", "GE OEC 9900", "Siemens Arcadis"],
      roiTimeline: "18-24 months",
    },
    relatedArticles: [
      {
        title: "Best C-Arms for Kidney Stone Procedures",
        description: "Imaging requirements and recommended systems for lithotripsy",
        readTime: "7 min read",
        href: "/overview",
      },
      {
        title: "Compact C-Arms for Urology Suites",
        description: "Space-efficient systems with excellent maneuverability",
        readTime: "6 min read",
        href: "/types/compact",
      },
      {
        title: "Radiation Safety in Urological Fluoroscopy",
        description: "Protecting patients and staff during stone procedures",
        readTime: "8 min read",
        href: "/overview",
      },
    ],
  },
  {
    id: "general-surgery",
    icon: Scissors,
    name: "General Surgery",
    overview:
      "General surgery requires versatile C-Arms capable of handling diverse procedures. Mobile systems with quick setup and multi-purpose capabilities are ideal for busy surgical departments.",
    keyRequirements: [
      "Mobile design for multi-room use",
      "Versatile imaging capabilities",
      "Quick setup and positioning",
      "Reliable performance",
      "Easy-to-use interface",
    ],
    procedures: [
      "Intraoperative cholangiography",
      "Foreign body localization",
      "Fracture reduction",
      "Hardware placement",
      "Soft tissue procedures",
      "Emergency surgery",
    ],
    featuredArticle: {
      title: "Versatile C-Arms for General Surgery Departments",
      description: "Multi-purpose systems for diverse surgical applications",
      readTime: "10 min read",
      href: "/use-cases",
      image: "/images/models/ge-oec-9800/card.avif",
    },
    quickStats: {
      costRange: "$80K - $200K",
      popularModels: ["GE OEC 9900", "Philips Pulsera", "Ziehm Vision"],
      roiTimeline: "20-30 months",
    },
    relatedArticles: [
      {
        title: "Mobile C-Arms for Multi-Room Surgical Departments",
        description: "Maximizing utilization across multiple ORs",
        readTime: "8 min read",
        href: "/types/mobile-vs-fixed",
      },
      {
        title: "C-Arm Workflow Integration in General Surgery",
        description: "Optimizing setup and positioning for efficient procedures",
        readTime: "7 min read",
        href: "/overview",
      },
      {
        title: "Cost-Effective C-Arms for Community Hospitals",
        description: "Balancing capability and budget for general surgical imaging",
        readTime: "9 min read",
        href: "/blog/c-arm-pricing-guide",
      },
    ],
  },
  {
    id: "emergency",
    icon: Ambulance,
    name: "Emergency & Trauma",
    overview:
      "Emergency departments need rugged, mobile C-Arms with fast imaging capabilities and reliable performance. Battery backup and durable construction are essential for 24/7 operation.",
    keyRequirements: [
      "Mobile design for rapid deployment",
      "Fast imaging and quick setup",
      "Battery backup for reliability",
      "Rugged, durable construction",
      "Simple, intuitive operation",
    ],
    procedures: [
      "Trauma imaging",
      "Fracture assessment",
      "Foreign body removal",
      "Emergency procedures",
      "Bedside imaging",
      "Critical care procedures",
    ],
    featuredArticle: {
      title: "C-Arms for Emergency Departments: Rapid Imaging for Trauma Care",
      description: "Selecting reliable systems for 24/7 emergency operations",
      readTime: "11 min read",
      href: "/use-cases",
      image: "/images/models/siemens-arcadis-avantic/card.jpg",
    },
    quickStats: {
      costRange: "$90K - $220K",
      popularModels: ["GE OEC 9900", "Siemens Arcadis", "Ziehm Vision"],
      roiTimeline: "24-36 months",
    },
    relatedArticles: [
      {
        title: "Mobile C-Arms for Emergency Departments",
        description: "Portable systems for rapid response and bedside imaging",
        readTime: "8 min read",
        href: "/types/mobile-vs-fixed",
      },
      {
        title: "Reliability and Uptime in Emergency C-Arms",
        description: "Ensuring 24/7 availability for critical care",
        readTime: "7 min read",
        href: "/overview",
      },
      {
        title: "Battery Backup and Power Management",
        description: "Maintaining operation during power outages",
        readTime: "6 min read",
        href: "/overview",
      },
    ],
  },
]

const quickNavButtons = specialties.map((s) => ({
  label: s.name.split("&")[0].trim(),
  icon: s.icon,
  href: `#${s.id}`,
}))

export default function CarmsBySpecialtyPage() {
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
              { label: "C-Arms by Medical Specialty", href: "/resources/c-arms-by-specialty" },
            ]}
          />
          <div className="mx-auto max-w-4xl text-center">
            <h1 className="text-balance text-4xl font-bold tracking-tight text-slate-900 md:text-5xl lg:text-6xl">
              Find the Perfect C-Arm for Your Medical Specialty
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-pretty text-lg text-slate-600 md:text-xl">
              Every specialty has unique imaging requirements. Explore our comprehensive guides to discover which C-Arm
              systems, features, and configurations are ideal for your specific procedures and practice.
            </p>

            {/* Quick Specialty Selector */}
            <div className="mt-10 grid grid-cols-2 gap-3 md:grid-cols-3 lg:grid-cols-6">
              {quickNavButtons.map((btn) => {
                const Icon = btn.icon
                return (
                  <a
                    key={btn.href}
                    href={btn.href}
                    className="flex flex-col items-center gap-2 rounded-lg border border-teal-200 bg-white p-4 text-center transition-all hover:border-teal-400 hover:bg-teal-50 hover:shadow-md"
                  >
                    <Icon className="h-8 w-8 text-teal-600" />
                    <span className="text-xs font-medium text-slate-700">{btn.label}</span>
                  </a>
                )
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Introductory Content */}
      <section className="container mx-auto px-4 py-12 lg:py-16">
        <div className="mx-auto max-w-3xl">
          <p className="text-pretty text-lg leading-relaxed text-slate-700 md:text-xl">
            Choosing the right C-Arm system starts with understanding your specialty's specific imaging needs. Different
            medical specialties require different imaging capabilities, from the high-resolution bone detail needed in
            orthopedics to the real-time vascular imaging required for interventional procedures. This guide breaks down
            the ideal C-Arm features, recommended models, and key considerations for each major medical specialty.
          </p>
          <div className="mt-6 rounded-lg bg-teal-50 p-6">
            <p className="text-sm leading-relaxed text-slate-700">
              <strong className="text-teal-900">Not sure which specialty guide fits your needs?</strong> Our C-Arm
              experts can help you identify the perfect system. Call us at{" "}
              <a href="tel:8888387488" className="font-semibold text-teal-700 hover:text-teal-900">
                888-838-7488
              </a>{" "}
              or{" "}
              <a
                href="https://sentinelimaging.net/contact-us-ct-mri-x-ray/"
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold text-teal-700 hover:text-teal-900"
              >
                request a consultation
              </a>
              .
            </p>
          </div>
        </div>
      </section>

      {/* Specialty Sections */}
      {specialties.map((specialty, idx) => {
        const Icon = specialty.icon
        return (
          <section
            key={specialty.id}
            id={specialty.id}
            className={`border-t ${idx % 2 === 0 ? "bg-white" : "bg-slate-50"}`}
          >
            <div className="container mx-auto px-4 py-12 lg:py-16">
              <div className="mb-8 flex items-center gap-4">
                <div className="rounded-lg bg-teal-100 p-3">
                  <Icon className="h-12 w-12 text-teal-600 md:h-14 md:w-14" />
                </div>
                <h2 className="text-3xl font-bold text-slate-900 md:text-4xl">{specialty.name}</h2>
              </div>

              <div className="grid gap-8 lg:grid-cols-[1.5fr,1fr]">
                {/* Left Column */}
                <div className="space-y-6">
                  <p className="text-lg leading-relaxed text-slate-700">{specialty.overview}</p>

                  {/* Key Requirements */}
                  <div>
                    <h3 className="mb-3 text-xl font-semibold text-slate-900">Key Requirements</h3>
                    <ul className="space-y-2">
                      {specialty.keyRequirements.map((req, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <CheckCircle2 className="mt-0.5 h-5 w-5 flex-shrink-0 text-teal-600" />
                          <span className="text-slate-700">{req}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Features Accordion */}
                  <div>
                    <h3 className="mb-3 text-xl font-semibold text-slate-900">Recommended Features</h3>
                    <Accordion type="single" collapsible className="rounded-lg border">
                      <AccordionItem value="essential">
                        <AccordionTrigger className="px-4">Essential Features</AccordionTrigger>
                        <AccordionContent className="px-4">
                          <p className="text-sm text-slate-600">
                            Core imaging capabilities required for {specialty.name.toLowerCase()} procedures, including
                            appropriate detector technology, generator power, and positioning systems.
                          </p>
                        </AccordionContent>
                      </AccordionItem>
                      <AccordionItem value="nice-to-have">
                        <AccordionTrigger className="px-4">Nice-to-Have Features</AccordionTrigger>
                        <AccordionContent className="px-4">
                          <p className="text-sm text-slate-600">
                            Advanced features that enhance workflow and image quality but may not be critical for all
                            practices, such as motorized positioning, advanced software, and connectivity options.
                          </p>
                        </AccordionContent>
                      </AccordionItem>
                      <AccordionItem value="budget">
                        <AccordionTrigger className="px-4">Budget Considerations</AccordionTrigger>
                        <AccordionContent className="px-4">
                          <p className="text-sm text-slate-600">
                            Balance cost with capability by prioritizing features that directly impact your clinical
                            outcomes. Consider used or refurbished systems for budget-conscious practices.
                          </p>
                        </AccordionContent>
                      </AccordionItem>
                    </Accordion>
                  </div>

                  {/* Typical Procedures */}
                  <div>
                    <h3 className="mb-3 text-xl font-semibold text-slate-900">Typical Procedures</h3>
                    <div className="grid grid-cols-2 gap-2 md:grid-cols-3">
                      {specialty.procedures.map((proc, i) => (
                        <div key={i} className="rounded-md bg-slate-100 px-3 py-2 text-sm text-slate-700">
                          {proc}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Right Column */}
                <div className="space-y-6">
                  {/* Featured Article Card */}
                  <Card className="overflow-hidden shadow-lg">
                    <div className="relative h-48">
                      <Image
                        src={specialty.featuredArticle.image || "/placeholder.svg"}
                        alt={specialty.featuredArticle.title}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <CardHeader className="pb-2">
                      <CardTitle className="text-lg">{specialty.featuredArticle.title}</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-3">
                      <p className="text-sm text-slate-600">{specialty.featuredArticle.description}</p>
                      <div className="flex items-center justify-between">
                        <span className="text-xs text-slate-500">{specialty.featuredArticle.readTime}</span>
                        <Button asChild size="sm" className="bg-teal-600 hover:bg-teal-700">
                          <Link href={specialty.featuredArticle.href}>
                            Read Full Guide
                            <ArrowRight className="ml-2 h-4 w-4" />
                          </Link>
                        </Button>
                      </div>
                    </CardContent>
                  </Card>

                  {/* Quick Stats */}
                  <Card>
                    <CardHeader className="pb-2">
                      <CardTitle className="text-base">Quick Stats</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-3 text-sm">
                      <div>
                        <div className="font-medium text-slate-900">Typical C-Arm Cost Range</div>
                        <div className="text-slate-600">{specialty.quickStats.costRange}</div>
                      </div>
                      <div>
                        <div className="font-medium text-slate-900">Most Popular Models</div>
                        <div className="text-slate-600">{specialty.quickStats.popularModels.join(", ")}</div>
                      </div>
                      <div>
                        <div className="font-medium text-slate-900">Average ROI Timeline</div>
                        <div className="text-slate-600">{specialty.quickStats.roiTimeline}</div>
                      </div>
                    </CardContent>
                  </Card>

                  {/* Related Specialties */}
                  <div className="rounded-lg border bg-white p-4">
                    <h4 className="mb-2 text-sm font-semibold text-slate-900">Related Specialties</h4>
                    <div className="flex flex-wrap gap-2">
                      {specialties
                        .filter((s) => s.id !== specialty.id)
                        .slice(0, 3)
                        .map((s) => (
                          <a
                            key={s.id}
                            href={`#${s.id}`}
                            className="rounded-full bg-teal-100 px-3 py-1 text-xs font-medium text-teal-800 hover:bg-teal-200"
                          >
                            {s.name.split("&")[0].trim()}
                          </a>
                        ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Cluster Articles */}
              <div className="mt-12">
                <h3 className="mb-6 text-2xl font-semibold text-slate-900">Related Guides for {specialty.name}</h3>
                <div className="grid gap-6 md:grid-cols-3">
                  {specialty.relatedArticles.map((article, i) => (
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
                        <span className="text-xs text-slate-500">{article.readTime}</span>
                        <ArrowRight className="h-4 w-4 text-teal-600 opacity-0 transition-opacity group-hover:opacity-100" />
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </section>
        )
      })}

      {/* FAQ Section */}
      <section className="border-t bg-white">
        <div className="container mx-auto px-4 py-12 lg:py-16">
          <h2 className="mb-8 text-center text-3xl font-bold text-slate-900">
            Frequently Asked Questions About Specialty-Specific C-Arms
          </h2>
          <div className="mx-auto max-w-3xl">
            <Accordion type="single" collapsible className="space-y-4">
              <AccordionItem value="multi-specialty" className="rounded-lg border px-6">
                <AccordionTrigger>Can one C-Arm work for multiple specialties?</AccordionTrigger>
                <AccordionContent>
                  <p className="text-slate-700">
                    Yes, many full-size C-Arms are versatile enough to handle multiple specialties. However, specialized
                    features like mini C-Arms for orthopedic extremities or flat panel detectors for vascular work may
                    be necessary for optimal results in specific applications. Consider your primary use case and
                    procedure volume when selecting a system.
                  </p>
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="mini-vs-full" className="rounded-lg border px-6">
                <AccordionTrigger>What's the difference between a mini C-Arm and full-size C-Arm?</AccordionTrigger>
                <AccordionContent>
                  <p className="text-slate-700">
                    Mini C-Arms are compact systems designed primarily for extremity imaging in orthopedics and
                    podiatry. They offer lower power output and smaller fields of view but are more affordable and
                    space-efficient. Full-size C-Arms provide larger imaging areas, higher power, and are suitable for
                    spine, vascular, and general surgical procedures.
                  </p>
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="detector-type" className="rounded-lg border px-6">
                <AccordionTrigger>
                  Do I need a flat panel detector or is an image intensifier sufficient?
                </AccordionTrigger>
                <AccordionContent>
                  <p className="text-slate-700">
                    It depends on your specialty and procedures. Flat panel detectors offer superior image quality,
                    consistent performance, and better dose efficiency, making them ideal for vascular and complex
                    interventional procedures. Image intensifiers are more affordable and sufficient for many
                    orthopedic, pain management, and general surgical applications. Consider your image quality
                    requirements and budget.
                  </p>
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="cost" className="rounded-lg border px-6">
                <AccordionTrigger>How much does a specialty-specific C-Arm cost?</AccordionTrigger>
                <AccordionContent>
                  <p className="text-slate-700">
                    Costs vary significantly by specialty requirements. Mini C-Arms for orthopedics range from
                    $40K-$80K. Standard systems for pain management and general surgery typically cost $60K-$150K.
                    Premium flat panel systems for vascular and interventional procedures range from $150K-$300K+. Used
                    and refurbished systems offer significant savings while maintaining clinical capability.
                  </p>
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="upgrade" className="rounded-lg border px-6">
                <AccordionTrigger>Can I upgrade my current C-Arm for different procedures?</AccordionTrigger>
                <AccordionContent>
                  <p className="text-slate-700">
                    Some upgrades are possible, such as software enhancements, additional monitors, or positioning
                    accessories. However, core components like the detector type and generator power cannot typically be
                    upgraded. If your procedure mix is changing significantly, it may be more cost-effective to trade in
                    your current system for one better suited to your new needs.
                  </p>
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="important-features" className="rounded-lg border px-6">
                <AccordionTrigger>What are the most important features for my specialty?</AccordionTrigger>
                <AccordionContent>
                  <p className="text-slate-700">
                    The most important features depend on your specialty. Orthopedics prioritizes high resolution and
                    large FOV. Pain management needs dose management and compact design. Vascular requires flat panel
                    detectors and roadmapping. Urology benefits from maneuverability and quick setup. Review the
                    specialty-specific sections above for detailed feature recommendations, or contact our experts for
                    personalized guidance.
                  </p>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="border-t bg-gradient-to-b from-teal-50 to-teal-100">
        <div className="container mx-auto px-4 py-12 lg:py-16">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-bold text-slate-900">Ready to Find Your Perfect C-Arm Match?</h2>
            <p className="mt-4 text-pretty text-lg text-slate-700">
              Our C-Arm specialists have helped hundreds of practices across every medical specialty find the ideal
              imaging system. Get personalized recommendations based on your procedures, volume, and budget.
            </p>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
              <Button asChild size="lg" className="bg-teal-600 hover:bg-teal-700">
                <a
                  href="https://sentinelimaging.net/contact-us-ct-mri-x-ray/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Schedule a Consultation
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
              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-teal-600 text-teal-700 hover:bg-white bg-transparent"
              >
                <Link href="/tools/selector-quiz">Take the C-Arm Quiz</Link>
              </Button>
            </div>
            <div className="mt-6 flex items-center justify-center gap-2 text-lg font-semibold text-teal-700">
              <Phone className="h-5 w-5" />
              <a href="tel:8888387488" className="hover:text-teal-900">
                Call us at 888-838-7488
              </a>
              <span className="text-slate-400">|</span>
              <a href="mailto:experts@c-arm.net" className="hover:text-teal-900">
                Email: experts@c-arm.net
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
