"use client"
import Link from "next/link"
import { Breadcrumbs } from "@/components/breadcrumbs"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  Clipboard,
  Ruler,
  Hammer,
  Settings,
  CheckCircle,
  Phone,
  Mail,
  Users,
  Zap,
  Wind,
  Shield,
  ArrowRight,
  FileText,
  Download,
} from "lucide-react"

const projectPhases = [
  { phase: "Planning", icon: Clipboard, duration: "2-4 weeks", color: "text-blue-600" },
  { phase: "Design", icon: Ruler, duration: "3-6 weeks", color: "text-purple-600" },
  { phase: "Construction", icon: Hammer, duration: "6-12 weeks", color: "text-orange-600" },
  { phase: "Installation", icon: Settings, duration: "1-2 weeks", color: "text-green-600" },
  { phase: "Go-Live", icon: CheckCircle, duration: "1-2 weeks", color: "text-primary" },
]

const spaceRequirements = [
  { type: "Mini C-Arm", minSize: "10' x 12'", recommended: "12' x 14'", ceiling: "9' min" },
  { type: "Compact C-Arm", minSize: "12' x 14'", recommended: "14' x 16'", ceiling: "9' min" },
  { type: "Full-Size C-Arm", minSize: "15' x 18'", recommended: "18' x 20'", ceiling: "10' min" },
  { type: "Premium/3D Systems", minSize: "18' x 20'", recommended: "20' x 24'", ceiling: "12' min" },
]

const budgetCategories = [
  { category: "C-Arm Equipment", range: "$40K - $300K", percentage: 40 },
  { category: "Facility Construction", range: "$50K - $200K", percentage: 30 },
  { category: "Radiation Shielding", range: "$20K - $80K", percentage: 15 },
  { category: "Electrical & HVAC", range: "$15K - $50K", percentage: 10 },
  { category: "Regulatory & Testing", range: "$5K - $20K", percentage: 5 },
]

const teamMembers = [
  { role: "Radiation Physicist", responsibility: "Shielding design & compliance", when: "Early planning" },
  { role: "Architect", responsibility: "Space planning & design", when: "Planning phase" },
  { role: "Structural Engineer", responsibility: "Floor loading & support", when: "Design phase" },
  { role: "Electrical Engineer", responsibility: "Power requirements", when: "Design phase" },
  { role: "General Contractor", responsibility: "Construction management", when: "Construction phase" },
  { role: "C-Arm Vendor", responsibility: "Equipment & installation", when: "Throughout project" },
]

const clusterArticles = [
  { title: "Complete C-Arm Suite Planning Guide", category: "Planning" },
  { title: "Space Requirements for C-Arm Installation", category: "Design" },
  { title: "Radiation Shielding Requirements & Calculations", category: "Safety" },
  { title: "Budgeting for Your C-Arm Suite Project", category: "Financial" },
  { title: "C-Arm Installation: What to Expect", category: "Installation" },
  { title: "C-Arm Suite Project Timeline & Milestones", category: "Project Management" },
]

export function SetupClientPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-muted/20">
      <div className="container mx-auto px-4 py-8 max-w-7xl">
        <Breadcrumbs
          items={[
            { label: "Home", href: "/" },
            { label: "Resources", href: "/resources" },
            { label: "Setting Up Your C-Arm Suite" },
          ]}
        />

        {/* Hero Section */}
        <div className="mt-8 mb-16 text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-balance">
            Plan & Build Your Perfect C-Arm Imaging Suite
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-4xl mx-auto mb-8 text-pretty">
            Complete guidance for adding C-Arm capabilities to your practice. From initial planning and room design to
            radiation shielding, equipment installation, and staff training. Everything you need for a successful C-Arm
            suite implementation.
          </p>

          {/* Project Phase Navigator */}
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4 max-w-5xl mx-auto mb-8">
            {projectPhases.map((phase, idx) => {
              const Icon = phase.icon
              return (
                <Button
                  key={idx}
                  variant="outline"
                  className="h-auto py-4 flex flex-col items-center gap-2 hover:border-primary hover:bg-primary/5 transition-all bg-transparent"
                  asChild
                >
                  <a href={`#phase-${idx + 1}`}>
                    <Icon className={`h-6 w-6 ${phase.color}`} />
                    <div className="text-center">
                      <div className="text-sm font-medium">
                        Phase {idx + 1}: {phase.phase}
                      </div>
                      <div className="text-xs text-muted-foreground">{phase.duration}</div>
                    </div>
                  </a>
                </Button>
              )
            })}
          </div>
        </div>

        {/* Introductory Content */}
        <div className="max-w-4xl mx-auto mb-16">
          <p className="text-lg leading-relaxed mb-6">
            Adding a C-Arm to your practice is an exciting project that can significantly expand your clinical
            capabilities and revenue. However, successful implementation requires careful planning across multiple
            domains: facility design, radiation shielding, electrical and HVAC systems, regulatory compliance, equipment
            selection, and staff training. This comprehensive guide walks you through every phase of your C-Arm suite
            project, from initial concept to successful go-live.
          </p>

          <Card className="bg-gradient-to-br from-primary/5 to-primary/10 border-primary/20">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <CheckCircle className="h-5 w-5 text-primary" />
                Keys to C-Arm Suite Success
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                  <span>
                    <strong>Start with thorough planning</strong> - Invest time upfront to avoid costly changes later
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                  <span>
                    <strong>Engage qualified professionals early</strong> - Radiation physicist, architect, engineers
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                  <span>
                    <strong>Budget for all project components</strong> - Equipment is only part of the total cost
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                  <span>
                    <strong>Allow adequate timeline</strong> - Rushing leads to mistakes and cost overruns
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                  <span>
                    <strong>Train staff comprehensively</strong> - Proper training ensures safety and optimal outcomes
                  </span>
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>

        {/* Phase 1: Planning */}
        <section id="phase-1" className="mb-20 scroll-mt-8">
          <div className="bg-gradient-to-r from-blue-500/10 to-blue-500/5 rounded-2xl p-8 mb-8">
            <div className="flex items-center gap-4">
              <div className="h-16 w-16 bg-white rounded-lg flex items-center justify-center">
                <Clipboard className="h-8 w-8 text-blue-600" />
              </div>
              <div>
                <Badge variant="outline" className="mb-2">
                  Phase 1
                </Badge>
                <h2 className="text-3xl font-bold">Planning & Feasibility Assessment</h2>
                <p className="text-lg text-muted-foreground">Duration: 2-4 weeks</p>
              </div>
            </div>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 mb-8">
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-semibold mb-4">Space Requirements</h3>
                <Card>
                  <CardContent className="pt-6">
                    <div className="space-y-4">
                      {spaceRequirements.map((req, idx) => (
                        <div key={idx} className="p-4 bg-muted/50 rounded-lg">
                          <h4 className="font-semibold mb-2">{req.type}</h4>
                          <div className="grid grid-cols-3 gap-2 text-sm">
                            <div>
                              <p className="text-muted-foreground">Minimum</p>
                              <p className="font-medium">{req.minSize}</p>
                            </div>
                            <div>
                              <p className="text-muted-foreground">Recommended</p>
                              <p className="font-medium">{req.recommended}</p>
                            </div>
                            <div>
                              <p className="text-muted-foreground">Ceiling</p>
                              <p className="font-medium">{req.ceiling}</p>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-4">Budget Planning</h3>
                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg">Typical Project Budget Breakdown</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    {budgetCategories.map((cat, idx) => (
                      <div key={idx}>
                        <div className="flex justify-between mb-2">
                          <span className="font-medium">{cat.category}</span>
                          <span className="text-muted-foreground">{cat.range}</span>
                        </div>
                        <div className="h-2 bg-muted rounded-full overflow-hidden">
                          <div className="h-full bg-primary rounded-full" style={{ width: `${cat.percentage}%` }} />
                        </div>
                      </div>
                    ))}
                    <div className="pt-4 border-t">
                      <div className="flex justify-between items-center">
                        <span className="font-semibold">Total Project Range</span>
                        <span className="text-xl font-bold text-primary">$130K - $650K+</span>
                      </div>
                      <p className="text-sm text-muted-foreground mt-2">
                        Actual costs vary based on project scope, location, and equipment selection
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>

            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-semibold mb-4">Project Team Assembly</h3>
                <Card>
                  <CardContent className="pt-6">
                    <div className="space-y-4">
                      {teamMembers.map((member, idx) => (
                        <div key={idx} className="flex gap-4 p-4 bg-muted/50 rounded-lg">
                          <Users className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                          <div className="flex-1">
                            <h4 className="font-semibold mb-1">{member.role}</h4>
                            <p className="text-sm text-muted-foreground mb-1">{member.responsibility}</p>
                            <Badge variant="outline" className="text-xs">
                              {member.when}
                            </Badge>
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>

              <Card className="bg-gradient-to-br from-primary/5 to-primary/10 border-primary/20">
                <CardHeader>
                  <CardTitle>Get a Custom Project Plan</CardTitle>
                  <CardDescription>
                    Our project specialists can create a detailed plan tailored to your specific needs
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Button className="w-full" asChild>
                    <Link href="https://sentinelimaging.net/contact-us-ct-mri-x-ray/">Request Free Consultation</Link>
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Phase 2: Design (Condensed) */}
        <section id="phase-2" className="mb-20 scroll-mt-8">
          <div className="bg-gradient-to-r from-purple-500/10 to-purple-500/5 rounded-2xl p-8 mb-8">
            <div className="flex items-center gap-4">
              <div className="h-16 w-16 bg-white rounded-lg flex items-center justify-center">
                <Ruler className="h-8 w-8 text-purple-600" />
              </div>
              <div>
                <Badge variant="outline" className="mb-2">
                  Phase 2
                </Badge>
                <h2 className="text-3xl font-bold">Design & Engineering</h2>
                <p className="text-lg text-muted-foreground">Duration: 3-6 weeks</p>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <Card>
              <CardHeader>
                <Shield className="h-8 w-8 text-primary mb-2" />
                <CardTitle>Radiation Shielding</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                    <span>Shielding calculations by physicist</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                    <span>Lead-lined walls, doors, windows</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                    <span>Floor and ceiling shielding</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                    <span>Controlled area designation</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <Zap className="h-8 w-8 text-primary mb-2" />
                <CardTitle>Electrical Systems</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                    <span>Dedicated 208V or 480V circuit</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                    <span>60-100 amp service typical</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                    <span>Emergency power backup</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                    <span>Lighting and outlets</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <Wind className="h-8 w-8 text-primary mb-2" />
                <CardTitle>HVAC Requirements</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                    <span>Temperature control (68-75°F)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                    <span>Humidity control (30-60%)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                    <span>Adequate air changes</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                    <span>Equipment heat dissipation</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Remaining Phases (Condensed) */}
        <section className="mb-20">
          <div className="grid md:grid-cols-3 gap-6">
            <Card>
              <CardHeader>
                <Hammer className="h-8 w-8 text-orange-600 mb-2" />
                <Badge variant="outline" className="mb-2">
                  Phase 3
                </Badge>
                <CardTitle>Construction</CardTitle>
                <CardDescription>6-12 weeks</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm mb-4">
                  Construction phase includes shielding installation, electrical and HVAC work, flooring, and finishing.
                </p>
                <Button variant="outline" className="w-full bg-transparent" size="sm" asChild>
                  <a href="#phase-3">
                    Learn More <ArrowRight className="ml-2 h-4 w-4" />
                  </a>
                </Button>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <Settings className="h-8 w-8 text-green-600 mb-2" />
                <Badge variant="outline" className="mb-2">
                  Phase 4
                </Badge>
                <CardTitle>Installation</CardTitle>
                <CardDescription>1-2 weeks</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm mb-4">
                  Equipment delivery, installation, calibration, and acceptance testing by qualified physicist.
                </p>
                <Button variant="outline" className="w-full bg-transparent" size="sm" asChild>
                  <a href="#phase-4">
                    Learn More <ArrowRight className="ml-2 h-4 w-4" />
                  </a>
                </Button>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CheckCircle className="h-8 w-8 text-primary mb-2" />
                <Badge variant="outline" className="mb-2">
                  Phase 5
                </Badge>
                <CardTitle>Go-Live</CardTitle>
                <CardDescription>1-2 weeks</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm mb-4">
                  Staff training, workflow optimization, regulatory compliance verification, and first procedures.
                </p>
                <Button variant="outline" className="w-full bg-transparent" size="sm" asChild>
                  <a href="#phase-5">
                    Learn More <ArrowRight className="ml-2 h-4 w-4" />
                  </a>
                </Button>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Cluster Articles */}
        <section className="mb-20">
          <h2 className="text-3xl font-bold mb-8 text-center">C-Arm Suite Setup Resources</h2>
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
                      Read Guide <ArrowRight className="h-4 w-4" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Bottom CTA */}
        <section className="bg-gradient-to-r from-primary to-primary/80 rounded-2xl p-8 md:p-12 text-white text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Start Your C-Arm Suite Project?</h2>
          <p className="text-lg mb-8 max-w-3xl mx-auto opacity-90">
            Our project specialists have guided hundreds of practices through successful C-Arm suite implementations.
            We'll help you plan, design, and execute your project from start to finish.
          </p>

          <div className="grid md:grid-cols-3 gap-6 mb-8 max-w-4xl mx-auto">
            <div className="flex flex-col items-center gap-2">
              <FileText className="h-8 w-8" />
              <p className="font-semibold">Free Project Planning</p>
            </div>
            <div className="flex flex-col items-center gap-2">
              <Users className="h-8 w-8" />
              <p className="font-semibold">Expert Team Assembly</p>
            </div>
            <div className="flex flex-col items-center gap-2">
              <CheckCircle className="h-8 w-8" />
              <p className="font-semibold">Turnkey Solutions</p>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" asChild>
              <Link href="https://sentinelimaging.net/contact-us-ct-mri-x-ray/">Schedule Project Consultation</Link>
            </Button>
            <Button size="lg" variant="outline" className="bg-white/10 border-white text-white hover:bg-white/20">
              <Download className="mr-2 h-4 w-4" />
              Download Project Guide
            </Button>
          </div>

          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4 text-sm">
            <a href="tel:888-838-7488" className="flex items-center gap-2 hover:underline">
              <Phone className="h-4 w-4" />
              Call: 888-838-7488
            </a>
            <span className="hidden sm:inline">|</span>
            <a href="mailto:setup@c-arm.net" className="flex items-center gap-2 hover:underline">
              <Mail className="h-4 w-4" />
              Email: setup@c-arm.net
            </a>
          </div>
        </section>
      </div>
    </div>
  )
}
