import type { Metadata } from "next"
import Link from "next/link"
import { Breadcrumbs } from "@/components/breadcrumbs"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import {
  Building2,
  CheckCircle2,
  Star,
  Award,
  ArrowRight,
  Phone,
  Mail,
  GitCompare,
  Grid3x3,
  Shield,
  Zap,
  Users,
  DollarSign,
  ThumbsUp,
  BarChart3,
} from "lucide-react"

export const metadata: Metadata = {
  title: "C-Arm Brand Guides: Compare Manufacturers & Models | C-ARMS.NET",
  description:
    "Compare GE, Siemens, Philips, Ziehm and other C-Arm manufacturers. In-depth brand guides, model comparisons, and expert recommendations to find your perfect C-Arm match.",
}

const brands = [
  { name: "GE Healthcare", logo: "/brand/logo.webp", slug: "ge" },
  { name: "Siemens Healthineers", logo: "/brand/logo.webp", slug: "siemens" },
  { name: "Philips", logo: "/brand/logo.webp", slug: "philips" },
  { name: "Ziehm Imaging", logo: "/brand/logo.webp", slug: "ziehm" },
  { name: "Hologic", logo: "/brand/logo.webp", slug: "hologic" },
  { name: "OrthoScan", logo: "/brand/logo.webp", slug: "orthoscan" },
]

const brandComparison = [
  {
    name: "GE Healthcare",
    tagline: "Industry Leader in Mobile C-Arms",
    strengths: ["Largest installed base", "Proven reliability", "Wide service network", "OEC series dominance"],
    popularModels: ["OEC 9900 Elite", "OEC 9800", "OEC Elite CFD"],
    priceRange: "$75,000 - $250,000",
    bestFor: "Orthopedics, Pain Management, General Surgery",
    position: "Premium",
    marketShare: 35,
  },
  {
    name: "Siemens Healthineers",
    tagline: "German Engineering & Innovation",
    strengths: ["Superior image quality", "German engineering", "Innovation leadership", "Premium support"],
    popularModels: ["Cios Fusion", "Cios Alpha", "Cios Select"],
    priceRange: "$90,000 - $300,000",
    bestFor: "Vascular, Cardiology, Complex Procedures",
    position: "Premium",
    marketShare: 25,
  },
  {
    name: "Philips",
    tagline: "Advanced Imaging Technology",
    strengths: ["Advanced imaging", "Dose reduction", "Workflow efficiency", "Innovation focus"],
    popularModels: ["Veradius Unity", "BV Pulsera", "Veradius Neo"],
    priceRange: "$85,000 - $280,000",
    bestFor: "Vascular, Interventional, Hybrid OR",
    position: "Premium",
    marketShare: 15,
  },
  {
    name: "Ziehm Imaging",
    tagline: "Specialized Mobile Imaging Solutions",
    strengths: ["Mobile specialists", "Compact design", "Advanced features", "Excellent support"],
    popularModels: ["Vision RFD", "Vision R", "Solo"],
    priceRange: "$70,000 - $220,000",
    bestFor: "Orthopedics, Trauma, Mobile Applications",
    position: "Mid-Range",
    marketShare: 12,
  },
]

const popularComparisons = [
  {
    title: "GE OEC 9900 vs. Siemens Cios Fusion",
    category: "Premium Full-Size",
    winner: "Depends on priorities",
    summary:
      "GE offers proven reliability and lower cost, while Siemens provides superior image quality and latest technology.",
  },
  {
    title: "GE OEC 9800 vs. Philips BV Pulsera",
    category: "Mid-Range",
    winner: "GE for value",
    summary:
      "Both excellent systems. GE has larger installed base and better parts availability, Philips offers advanced imaging features.",
  },
  {
    title: "Ziehm Vision RFD vs. GE OEC 9900",
    category: "Mobile vs. Traditional",
    winner: "Depends on use case",
    summary:
      "Ziehm excels in mobility and compact spaces, GE offers more power and versatility for fixed installations.",
  },
  {
    title: "Flat Panel vs. Image Intensifier",
    category: "Technology Comparison",
    winner: "Flat panel for most",
    summary: "Flat panel offers better image quality, lower dose, and longer lifespan, but costs more upfront.",
  },
]

const clusterArticles = [
  { title: "Complete Guide to GE OEC C-Arm Series", category: "Brand Guide" },
  { title: "Siemens Cios C-Arm Series: Comprehensive Review", category: "Brand Guide" },
  { title: "GE vs. Siemens C-Arms: Detailed Comparison", category: "Comparison" },
  { title: "Best C-Arm Brands by Specialty", category: "Buying Guide" },
  { title: "C-Arm Resale Value by Brand", category: "Investment" },
  { title: "Which C-Arm Brand Offers the Best Value?", category: "Analysis" },
]

export default function BrandsPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-muted/20">
      <div className="container mx-auto px-4 py-8 max-w-7xl">
        <Breadcrumbs
          items={[
            { label: "Home", href: "/" },
            { label: "Resources", href: "/resources" },
            { label: "Brand Guides & Model Comparisons" },
          ]}
        />

        {/* Hero Section */}
        <div className="mt-8 mb-16 text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-balance">
            Compare C-Arm Brands & Models: Find Your Perfect Match
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-4xl mx-auto mb-8 text-pretty">
            Explore in-depth guides for major C-Arm manufacturers including GE, Siemens, Philips, Ziehm, and more.
            Compare models side-by-side, understand brand differences, and discover which manufacturer offers the best
            solution for your practice.
          </p>

          {/* Quick Brand Navigator */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 max-w-4xl mx-auto mb-8">
            {brands.map((brand) => (
              <Button
                key={brand.slug}
                variant="outline"
                className="h-auto py-4 flex flex-col items-center gap-2 hover:border-primary hover:bg-primary/5 transition-all bg-transparent"
                asChild
              >
                <a href={`#${brand.slug}`}>
                  <Building2 className="h-6 w-6 text-primary" />
                  <span className="text-sm font-medium">{brand.name}</span>
                </a>
              </Button>
            ))}
            <Button
              variant="outline"
              className="h-auto py-4 flex flex-col items-center gap-2 hover:border-primary hover:bg-primary/5 transition-all bg-transparent"
              asChild
            >
              <a href="#comparison-tool">
                <GitCompare className="h-6 w-6 text-primary" />
                <span className="text-sm font-medium">Compare All Brands</span>
              </a>
            </Button>
            <Button
              variant="outline"
              className="h-auto py-4 flex flex-col items-center gap-2 hover:border-primary hover:bg-primary/5 transition-all bg-transparent"
              asChild
            >
              <Link href="/models">
                <Grid3x3 className="h-6 w-6 text-primary" />
                <span className="text-sm font-medium">View All Models</span>
              </Link>
            </Button>
          </div>
        </div>

        {/* Introductory Content */}
        <div className="max-w-4xl mx-auto mb-16">
          <p className="text-lg leading-relaxed mb-6">
            Choosing the right C-Arm brand is as important as selecting the right model. Each manufacturer has distinct
            strengths, technology approaches, and target markets. GE dominates with the OEC series, Siemens offers
            German engineering excellence, Philips brings imaging innovation, and Ziehm specializes in mobile systems.
            This comprehensive guide helps you understand what makes each brand unique and which models are best suited
            for your specific needs.
          </p>

          {/* Market Share Visualization */}
          <Card className="bg-gradient-to-br from-primary/5 to-primary/10 border-primary/20">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <BarChart3 className="h-5 w-5 text-primary" />
                C-Arm Market Share by Manufacturer
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {brandComparison.map((brand) => (
                  <div key={brand.name}>
                    <div className="flex justify-between mb-2">
                      <span className="font-medium">{brand.name}</span>
                      <span className="text-muted-foreground">{brand.marketShare}%</span>
                    </div>
                    <div className="h-3 bg-muted rounded-full overflow-hidden">
                      <div
                        className="h-full bg-primary rounded-full transition-all duration-1000"
                        style={{ width: `${brand.marketShare}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Brand Comparison Grid */}
        <section className="mb-20">
          <h2 className="text-3xl font-bold mb-8 text-center">Major Brand Overview</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {brandComparison.map((brand) => (
              <Card key={brand.name} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex-1">
                      <CardTitle className="text-2xl mb-2">{brand.name}</CardTitle>
                      <CardDescription className="text-base">{brand.tagline}</CardDescription>
                    </div>
                    <Badge variant="secondary">{brand.position}</Badge>
                  </div>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div>
                    <h4 className="font-semibold mb-3 flex items-center gap-2">
                      <Star className="h-4 w-4 text-primary" />
                      Key Strengths
                    </h4>
                    <ul className="space-y-2">
                      {brand.strengths.map((strength, idx) => (
                        <li key={idx} className="flex items-start gap-2 text-sm">
                          <CheckCircle2 className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                          <span>{strength}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h4 className="font-semibold mb-2">Popular Models</h4>
                    <p className="text-sm text-muted-foreground">{brand.popularModels.join(", ")}</p>
                  </div>

                  <div className="grid grid-cols-2 gap-4 pt-4 border-t">
                    <div>
                      <p className="text-xs text-muted-foreground mb-1">Price Range</p>
                      <p className="font-semibold text-sm">{brand.priceRange}</p>
                    </div>
                    <div>
                      <p className="text-xs text-muted-foreground mb-1">Market Share</p>
                      <p className="font-semibold text-sm">{brand.marketShare}%</p>
                    </div>
                  </div>

                  <div>
                    <p className="text-xs text-muted-foreground mb-1">Best For</p>
                    <p className="text-sm">{brand.bestFor}</p>
                  </div>

                  <div className="flex gap-3 pt-4">
                    <Button variant="outline" className="flex-1 bg-transparent" size="sm" asChild>
                      <a href={`#${brand.name.toLowerCase().split(" ")[0]}`}>Explore Models</a>
                    </Button>
                    <Button variant="ghost" size="sm" asChild>
                      <a href="#comparison-tool">
                        Compare <ArrowRight className="ml-1 h-4 w-4" />
                      </a>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* GE Healthcare Section */}
        <section id="ge" className="mb-20 scroll-mt-8">
          <div className="bg-gradient-to-r from-primary/10 to-primary/5 rounded-2xl p-8 mb-8">
            <div className="flex items-center gap-4 mb-4">
              <div className="h-16 w-16 bg-white rounded-lg flex items-center justify-center">
                <Building2 className="h-8 w-8 text-primary" />
              </div>
              <div>
                <h2 className="text-3xl font-bold">GE Healthcare C-Arms: The OEC Legacy</h2>
                <p className="text-lg text-muted-foreground">
                  Industry-leading mobile C-Arms with proven reliability and the largest installed base worldwide
                </p>
              </div>
            </div>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2 space-y-6">
              <div>
                <h3 className="text-xl font-semibold mb-4">Brand Overview</h3>
                <div className="prose prose-gray max-w-none space-y-4">
                  <p>
                    GE Healthcare has been a dominant force in the C-Arm market for over 40 years, primarily through its
                    acquisition and continued development of the OEC brand. The OEC series has become synonymous with
                    reliability and has established the largest installed base of any C-Arm manufacturer worldwide.
                  </p>
                  <p>
                    With over 15,000 systems installed globally and a comprehensive service network spanning 500+
                    centers, GE offers unmatched support and parts availability. This extensive presence translates to
                    faster service response times, better technician familiarity, and strong resale values.
                  </p>
                </div>
              </div>

              <Accordion type="single" collapsible className="w-full">
                <AccordionItem value="installed-base">
                  <AccordionTrigger className="text-lg font-semibold">
                    <span className="flex items-center gap-2">
                      <Users className="h-5 w-5 text-primary" />
                      Largest Installed Base
                    </span>
                  </AccordionTrigger>
                  <AccordionContent className="space-y-3 text-base">
                    <p>
                      GE's massive installed base of over 15,000 C-Arm systems worldwide provides significant advantages
                      for buyers:
                    </p>
                    <ul className="space-y-2 ml-4">
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                        <span>
                          <strong>Parts Availability:</strong> Extensive inventory means faster repairs and lower
                          downtime
                        </span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                        <span>
                          <strong>Technician Familiarity:</strong> Service technicians have extensive experience with GE
                          systems
                        </span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                        <span>
                          <strong>Resale Value:</strong> High demand in the used market maintains strong resale values
                        </span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                        <span>
                          <strong>Proven Track Record:</strong> Decades of real-world performance data validates
                          reliability
                        </span>
                      </li>
                    </ul>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="reliability">
                  <AccordionTrigger className="text-lg font-semibold">
                    <span className="flex items-center gap-2">
                      <Shield className="h-5 w-5 text-primary" />
                      OEC Series Reliability
                    </span>
                  </AccordionTrigger>
                  <AccordionContent className="space-y-3 text-base">
                    <p>
                      The OEC series has earned its reputation for exceptional reliability through decades of proven
                      performance:
                    </p>
                    <ul className="space-y-2 ml-4">
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                        <span>
                          <strong>Average Lifespan:</strong> 10-15 years with proper maintenance
                        </span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                        <span>
                          <strong>Uptime:</strong> Industry-leading uptime rates minimize procedure cancellations
                        </span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                        <span>
                          <strong>User Satisfaction:</strong> Consistently high ratings from orthopedic and pain
                          management practices
                        </span>
                      </li>
                    </ul>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="service">
                  <AccordionTrigger className="text-lg font-semibold">
                    <span className="flex items-center gap-2">
                      <Award className="h-5 w-5 text-primary" />
                      Comprehensive Service Network
                    </span>
                  </AccordionTrigger>
                  <AccordionContent className="space-y-3 text-base">
                    <p>GE's global service infrastructure provides unmatched support:</p>
                    <ul className="space-y-2 ml-4">
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                        <span>
                          <strong>500+ Service Centers:</strong> Worldwide coverage ensures rapid response
                        </span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                        <span>
                          <strong>Response Times:</strong> Typically 24-48 hours for service calls
                        </span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                        <span>
                          <strong>Service Contracts:</strong> Flexible options from basic to comprehensive coverage
                        </span>
                      </li>
                    </ul>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>

              <div>
                <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
                  <Zap className="h-5 w-5 text-primary" />
                  Technology Highlights
                </h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                    <span>
                      <strong>ClearPulse dose reduction technology</strong> - Reduces radiation exposure by up to 50%
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                    <span>
                      <strong>SmartMetal artifact reduction</strong> - Improves image quality around metal implants
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                    <span>
                      <strong>Motorized positioning systems</strong> - Precise, effortless C-arm positioning
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                    <span>
                      <strong>Advanced image processing</strong> - Real-time enhancement for optimal visualization
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                    <span>
                      <strong>DICOM connectivity</strong> - Seamless integration with PACS and EMR systems
                    </span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="space-y-6">
              <Card className="bg-gradient-to-br from-primary/5 to-primary/10 border-primary/20">
                <CardHeader>
                  <CardTitle>GE Model Lineup</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <h4 className="font-semibold mb-2 text-sm text-muted-foreground">Mini C-Arms</h4>
                    <div className="space-y-2">
                      <div className="p-3 bg-background rounded-lg">
                        <p className="font-medium">OEC One</p>
                        <p className="text-sm text-muted-foreground">Compact extremity imaging</p>
                        <p className="text-sm font-semibold text-primary mt-1">$40K - $60K</p>
                      </div>
                    </div>
                  </div>

                  <div>
                    <h4 className="font-semibold mb-2 text-sm text-muted-foreground">Compact C-Arms</h4>
                    <div className="space-y-2">
                      <div className="p-3 bg-background rounded-lg">
                        <p className="font-medium">OEC 9800</p>
                        <p className="text-sm text-muted-foreground">Versatile workhorse</p>
                        <p className="text-sm font-semibold text-primary mt-1">$75K - $120K</p>
                      </div>
                    </div>
                  </div>

                  <div>
                    <h4 className="font-semibold mb-2 text-sm text-muted-foreground">Full-Size C-Arms</h4>
                    <div className="space-y-2">
                      <div className="p-3 bg-background rounded-lg">
                        <p className="font-medium">OEC 9900 Elite</p>
                        <p className="text-sm text-muted-foreground">Premium performance</p>
                        <p className="text-sm font-semibold text-primary mt-1">$150K - $200K</p>
                      </div>
                      <div className="p-3 bg-background rounded-lg">
                        <p className="font-medium">OEC Elite CFD</p>
                        <p className="text-sm text-muted-foreground">Flat panel technology</p>
                        <p className="text-sm font-semibold text-primary mt-1">$180K - $250K</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Quick Stats</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-muted-foreground">Years in Manufacturing</span>
                    <span className="font-semibold">40+</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-muted-foreground">Global Installed Base</span>
                    <span className="font-semibold">15,000+</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-muted-foreground">Service Centers</span>
                    <span className="font-semibold">500+</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-muted-foreground">Avg. System Lifespan</span>
                    <span className="font-semibold">10-15 years</span>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Customer Satisfaction</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center gap-2 mb-2">
                    {[1, 2, 3, 4].map((i) => (
                      <Star key={i} className="h-5 w-5 fill-primary text-primary" />
                    ))}
                    <Star className="h-5 w-5 fill-primary/50 text-primary" />
                    <span className="font-semibold ml-2">4.5/5</span>
                  </div>
                  <p className="text-sm text-muted-foreground mb-2">Based on 500+ user reviews</p>
                  <p className="text-sm">
                    <strong>Most Praised For:</strong> Reliability, Service, Parts Availability
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Siemens Section (Condensed) */}
        <section id="siemens" className="mb-20 scroll-mt-8">
          <div className="bg-gradient-to-r from-blue-500/10 to-blue-500/5 rounded-2xl p-8 mb-8">
            <div className="flex items-center gap-4 mb-4">
              <div className="h-16 w-16 bg-white rounded-lg flex items-center justify-center">
                <Building2 className="h-8 w-8 text-blue-600" />
              </div>
              <div>
                <h2 className="text-3xl font-bold">Siemens Healthineers C-Arms: German Engineering Excellence</h2>
                <p className="text-lg text-muted-foreground">
                  Premium C-Arm systems with cutting-edge technology and superior image quality
                </p>
              </div>
            </div>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2 space-y-6">
              <p className="text-lg leading-relaxed">
                Siemens Healthineers brings over 125 years of medical imaging expertise to the C-Arm market. The Cios
                series represents the pinnacle of German engineering, offering superior image quality, innovative
                features, and premium build quality. While positioned at a higher price point, Siemens systems are
                favored by practices that prioritize image quality and cutting-edge technology.
              </p>

              <div>
                <h3 className="text-xl font-semibold mb-4">Key Advantages</h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-blue-600 mt-0.5 flex-shrink-0" />
                    <span>
                      <strong>Superior Image Quality:</strong> Industry-leading flat panel technology and advanced image
                      processing
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-blue-600 mt-0.5 flex-shrink-0" />
                    <span>
                      <strong>German Engineering:</strong> Exceptional build quality, precision mechanics, and long-term
                      reliability
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-blue-600 mt-0.5 flex-shrink-0" />
                    <span>
                      <strong>Innovation Leadership:</strong> First to market with new technologies and features
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-blue-600 mt-0.5 flex-shrink-0" />
                    <span>
                      <strong>Premium Support:</strong> White-glove service, comprehensive training, and application
                      support
                    </span>
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-4">Popular Models</h3>
                <div className="grid md:grid-cols-2 gap-4">
                  <Card>
                    <CardHeader>
                      <CardTitle className="text-lg">Cios Fusion</CardTitle>
                      <CardDescription>Premium full-size system</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm mb-2">Flat panel detector, 3D imaging, motorized positioning</p>
                      <p className="font-semibold text-primary">$200K - $300K</p>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardHeader>
                      <CardTitle className="text-lg">Cios Alpha</CardTitle>
                      <CardDescription>Compact mobile system</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm mb-2">Excellent image quality in compact design</p>
                      <p className="font-semibold text-primary">$120K - $180K</p>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Customer Satisfaction</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center gap-2 mb-2">
                    {[1, 2, 3, 4, 5].map((i) => (
                      <Star key={i} className="h-5 w-5 fill-blue-600 text-blue-600" />
                    ))}
                    <span className="font-semibold ml-2">4.7/5</span>
                  </div>
                  <p className="text-sm">
                    <strong>Most Praised For:</strong> Image Quality, Innovation, Build Quality
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Popular Comparisons */}
        <section id="comparison-tool" className="mb-20 scroll-mt-8">
          <h2 className="text-3xl font-bold mb-4 text-center">Popular C-Arm Model Comparisons</h2>
          <p className="text-lg text-muted-foreground text-center mb-8 max-w-3xl mx-auto">
            See how the most commonly compared models stack up against each other
          </p>

          <div className="grid md:grid-cols-2 gap-6">
            {popularComparisons.map((comparison, idx) => (
              <Card key={idx} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-start justify-between mb-2">
                    <CardTitle className="text-xl">{comparison.title}</CardTitle>
                    <Badge variant="outline">{comparison.category}</Badge>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="p-4 bg-primary/5 rounded-lg">
                    <p className="text-sm font-semibold text-primary mb-1">Winner</p>
                    <p className="font-medium">{comparison.winner}</p>
                  </div>
                  <p className="text-sm leading-relaxed">{comparison.summary}</p>
                  <Button variant="outline" className="w-full bg-transparent" asChild>
                    <Link href="/comparison">
                      Read Full Comparison <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Cluster Articles */}
        <section className="mb-20">
          <h2 className="text-3xl font-bold mb-8 text-center">Brand & Model Resources</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {clusterArticles.map((article, idx) => (
              <Card key={idx} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <Badge variant="secondary" className="w-fit mb-2">
                    {article.category}
                  </Badge>
                  <CardTitle className="text-lg">{article.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <Button variant="ghost" className="w-full justify-between" asChild>
                    <Link href="/blog/c-arm-pricing-guide">
                      Read Article <ArrowRight className="h-4 w-4" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Bottom CTA */}
        <section className="bg-gradient-to-r from-primary to-primary/80 rounded-2xl p-8 md:p-12 text-white text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Find Your Perfect C-Arm Brand & Model?</h2>
          <p className="text-lg mb-8 max-w-3xl mx-auto opacity-90">
            Our brand specialists have in-depth knowledge of every major C-Arm manufacturer and model. We'll help you
            compare options, understand the differences, and find the perfect match for your clinical needs and budget.
          </p>

          <div className="grid md:grid-cols-3 gap-6 mb-8 max-w-4xl mx-auto">
            <div className="flex flex-col items-center gap-2">
              <ThumbsUp className="h-8 w-8" />
              <p className="font-semibold">Unbiased Recommendations</p>
            </div>
            <div className="flex flex-col items-center gap-2">
              <Building2 className="h-8 w-8" />
              <p className="font-semibold">All Brands Available</p>
            </div>
            <div className="flex flex-col items-center gap-2">
              <DollarSign className="h-8 w-8" />
              <p className="font-semibold">Price Matching Guarantee</p>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" asChild>
              <Link href="https://sentinelimaging.net/contact-us-ct-mri-x-ray/">Get Brand Recommendations</Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="bg-white/10 border-white text-white hover:bg-white/20"
              asChild
            >
              <Link href="/comparison">Compare Models for Me</Link>
            </Button>
          </div>

          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4 text-sm">
            <a href="tel:888-838-7488" className="flex items-center gap-2 hover:underline">
              <Phone className="h-4 w-4" />
              Call: 888-838-7488
            </a>
            <span className="hidden sm:inline">|</span>
            <a href="mailto:brands@c-arm.net" className="flex items-center gap-2 hover:underline">
              <Mail className="h-4 w-4" />
              Email: brands@c-arm.net
            </a>
          </div>
        </section>
      </div>
    </div>
  )
}
