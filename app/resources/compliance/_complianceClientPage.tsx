"use client"
import Link from "next/link"
import { Breadcrumbs } from "@/components/breadcrumbs"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import {
  Shield,
  FileCheck,
  AlertTriangle,
  CheckCircle2,
  Map,
  Activity,
  ClipboardCheck,
  FileText,
  GraduationCap,
  Phone,
  Mail,
  Download,
  Award,
  AlertCircle,
  Clock,
  Target,
  ArrowRight,
} from "lucide-react"

const complianceChecklist = [
  { item: "Device registered with FDA", checked: false },
  { item: "Facility listed with FDA", checked: false },
  { item: "Annual registration renewed", checked: false },
  { item: "Device meets performance standards", checked: false },
  { item: "MDR procedures in place", checked: false },
  { item: "Adverse event reporting system established", checked: false },
  { item: "Compliance documentation maintained", checked: false },
  { item: "Staff trained on FDA requirements", checked: false },
]

const doseLimits = [
  { category: "Whole Body (Occupational)", limit: "5 rem (50 mSv) per year", type: "annual" },
  { category: "Eye Lens (Occupational)", limit: "15 rem (150 mSv) per year", type: "annual" },
  { category: "Extremities (Occupational)", limit: "50 rem (500 mSv) per year", type: "annual" },
  { category: "Public Exposure", limit: "0.1 rem (1 mSv) per year", type: "annual" },
]

const qaTests = [
  { test: "Visual inspection", frequency: "Daily", tolerance: "No defects", performer: "Operator" },
  { test: "Mechanical locks and brakes", frequency: "Daily", tolerance: "Functional", performer: "Operator" },
  { test: "Exposure switch function", frequency: "Daily", tolerance: "Dead-man type", performer: "Operator" },
  { test: "Image quality phantom", frequency: "Weekly", tolerance: "Within specs", performer: "Technologist" },
  { test: "High contrast resolution", frequency: "Monthly", tolerance: "≥ baseline", performer: "Technologist" },
  { test: "Dose rate verification", frequency: "Monthly", tolerance: "±20%", performer: "Technologist" },
  {
    test: "Complete performance evaluation",
    frequency: "Annual",
    tolerance: "All specs met",
    performer: "Medical Physicist",
  },
  { test: "Radiation survey", frequency: "Annual", tolerance: "<2 mR/hr", performer: "Medical Physicist" },
]

const stateRequirements = [
  {
    state: "California",
    facilityLicense: "Required",
    operatorCert: "Required",
    equipmentReg: "Required",
    inspectionFreq: "Annual",
    annualCost: "$2,000+",
  },
  {
    state: "Texas",
    facilityLicense: "Required",
    operatorCert: "Required",
    equipmentReg: "Required",
    inspectionFreq: "Biennial",
    annualCost: "$1,500+",
  },
  {
    state: "New York",
    facilityLicense: "Required",
    operatorCert: "Required",
    equipmentReg: "Required",
    inspectionFreq: "Annual",
    annualCost: "$2,500+",
  },
  {
    state: "Florida",
    facilityLicense: "Required",
    operatorCert: "Limited",
    equipmentReg: "Required",
    inspectionFreq: "Biennial",
    annualCost: "$1,000+",
  },
  {
    state: "Illinois",
    facilityLicense: "Required",
    operatorCert: "Required",
    equipmentReg: "Required",
    inspectionFreq: "Annual",
    annualCost: "$1,800+",
  },
]

const clusterArticles = [
  { title: "Complete Guide to FDA C-Arm Registration", category: "FDA Compliance" },
  { title: "State-by-State C-Arm Licensing Requirements", category: "State Regulations" },
  { title: "Complete C-Arm QA Program Guide", category: "Quality Assurance" },
  { title: "ALARA Principles in C-Arm Fluoroscopy", category: "Radiation Safety" },
  { title: "C-Arm Operator Training Requirements by State", category: "Training" },
  { title: "How to Prepare for an FDA Inspection", category: "Compliance" },
]

export default function ComplianceClientPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-muted/20">
      <div className="container mx-auto px-4 py-8 max-w-7xl">
        <Breadcrumbs
          items={[
            { label: "Home", href: "/" },
            { label: "Resources", href: "/resources" },
            { label: "Compliance, Safety & Regulations" },
          ]}
        />

        {/* Hero Section */}
        <div className="mt-8 mb-16 text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-balance">
            C-Arm Compliance, Safety & Regulatory Requirements
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-4xl mx-auto mb-8 text-pretty">
            Stay compliant with FDA regulations, state requirements, and safety protocols. Comprehensive guidance on
            operator training, radiation safety, quality assurance, and regulatory compliance for C-Arm systems.
          </p>

          {/* Quick Access Buttons */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto mb-8">
            <Button
              variant="outline"
              className="h-auto py-4 flex flex-col items-center gap-2 hover:border-primary hover:bg-primary/5 transition-all bg-transparent"
              asChild
            >
              <a href="#fda">
                <Shield className="h-6 w-6 text-primary" />
                <span className="text-sm font-medium">FDA Requirements</span>
              </a>
            </Button>
            <Button
              variant="outline"
              className="h-auto py-4 flex flex-col items-center gap-2 hover:border-primary hover:bg-primary/5 transition-all bg-transparent"
              asChild
            >
              <a href="#state">
                <Map className="h-6 w-6 text-primary" />
                <span className="text-sm font-medium">State Regulations</span>
              </a>
            </Button>
            <Button
              variant="outline"
              className="h-auto py-4 flex flex-col items-center gap-2 hover:border-primary hover:bg-primary/5 transition-all bg-transparent"
              asChild
            >
              <a href="#safety">
                <Activity className="h-6 w-6 text-primary" />
                <span className="text-sm font-medium">Safety Protocols</span>
              </a>
            </Button>
            <Button
              variant="outline"
              className="h-auto py-4 flex flex-col items-center gap-2 hover:border-primary hover:bg-primary/5 transition-all bg-transparent"
              asChild
            >
              <a href="#training">
                <GraduationCap className="h-6 w-6 text-primary" />
                <span className="text-sm font-medium">Training Requirements</span>
              </a>
            </Button>
          </div>
        </div>

        {/* Compliance Alert */}
        <div className="max-w-4xl mx-auto mb-12">
          <Card className="border-amber-500/50 bg-amber-50 dark:bg-amber-950/20">
            <CardContent className="pt-6">
              <div className="flex gap-4">
                <AlertTriangle className="h-6 w-6 text-amber-600 flex-shrink-0 mt-1" />
                <div>
                  <p className="font-semibold text-amber-900 dark:text-amber-100 mb-2">Important Compliance Notice</p>
                  <p className="text-sm text-amber-800 dark:text-amber-200">
                    Compliance requirements vary by state and facility type. This guide provides general information.
                    Always consult with your state radiation control program and legal counsel for specific
                    requirements.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Introductory Content */}
        <div className="max-w-4xl mx-auto mb-16">
          <p className="text-lg leading-relaxed">
            Operating a C-Arm system comes with significant regulatory and safety responsibilities. From FDA
            registration and state licensing to operator training and radiation safety protocols, compliance is
            essential for patient safety, staff protection, and avoiding costly penalties. This comprehensive guide
            covers all federal and state requirements, safety best practices, and compliance strategies to keep your
            practice operating safely and legally.
          </p>
        </div>

        {/* FDA Requirements Section */}
        <section id="fda" className="mb-20 scroll-mt-8">
          <div className="bg-gradient-to-r from-primary/10 to-primary/5 rounded-2xl p-8 mb-8">
            <div className="flex items-center gap-4">
              <div className="h-16 w-16 bg-white rounded-lg flex items-center justify-center">
                <Shield className="h-8 w-8 text-primary" />
              </div>
              <div>
                <h2 className="text-3xl font-bold">FDA Requirements & Registration</h2>
                <p className="text-lg text-muted-foreground">Federal regulations for C-Arm systems and facilities</p>
              </div>
            </div>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2 space-y-6">
              <p className="text-lg leading-relaxed">
                The FDA regulates C-Arm systems as medical devices under the Federal Food, Drug, and Cosmetic Act.
                Understanding FDA requirements is essential for legal operation and patient safety.
              </p>

              <Accordion type="single" collapsible className="w-full">
                <AccordionItem value="registration">
                  <AccordionTrigger className="text-lg font-semibold">
                    <span className="flex items-center gap-2">
                      <FileCheck className="h-5 w-5 text-primary" />
                      Device Registration & Listing
                    </span>
                  </AccordionTrigger>
                  <AccordionContent className="space-y-4 text-base">
                    <div>
                      <h4 className="font-semibold mb-2">What It Is</h4>
                      <p>
                        FDA requires manufacturers, distributors, and facilities that use C-Arm systems to register with
                        the agency and list their devices. This helps the FDA track medical devices and respond to
                        safety issues.
                      </p>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-2">Who Must Register</h4>
                      <ul className="space-y-2 ml-4">
                        <li className="flex items-start gap-2">
                          <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                          <span>Manufacturers of C-Arm systems</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                          <span>Distributors and dealers</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                          <span>Facilities using C-Arm systems (in some cases)</span>
                        </li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-2">How to Register</h4>
                      <ol className="space-y-2 ml-4 list-decimal">
                        <li>Create an FDA account at FDA.gov</li>
                        <li>Complete the establishment registration form</li>
                        <li>List all devices at your facility</li>
                        <li>Pay applicable registration fees</li>
                        <li>Renew annually between October 1 and December 31</li>
                      </ol>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-2">Penalties for Non-Compliance</h4>
                      <p>
                        Failure to register can result in warning letters, fines up to $10,000 per violation, and
                        potential seizure of equipment. The FDA takes registration requirements seriously.
                      </p>
                    </div>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="performance">
                  <AccordionTrigger className="text-lg font-semibold">
                    <span className="flex items-center gap-2">
                      <Target className="h-5 w-5 text-primary" />
                      Radiation Safety Performance Standards
                    </span>
                  </AccordionTrigger>
                  <AccordionContent className="space-y-4 text-base">
                    <div>
                      <h4 className="font-semibold mb-2">21 CFR 1020.32</h4>
                      <p>
                        All fluoroscopic equipment, including C-Arms, must meet federal performance standards outlined
                        in 21 CFR 1020.32. These standards ensure basic safety features are present and functional.
                      </p>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-2">Required Safety Features</h4>
                      <ul className="space-y-2 ml-4">
                        <li className="flex items-start gap-2">
                          <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                          <span>
                            <strong>Dead-man exposure switch:</strong> X-rays stop when switch is released
                          </span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                          <span>
                            <strong>Audible/visible signals:</strong> Alerts when X-rays are being produced
                          </span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                          <span>
                            <strong>Beam limitation:</strong> Collimation to reduce unnecessary exposure
                          </span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                          <span>
                            <strong>Exposure rate limits:</strong> Maximum dose rates specified
                          </span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                          <span>
                            <strong>Timer requirements:</strong> Automatic shutoff after specified time
                          </span>
                        </li>
                      </ul>
                    </div>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="mdr">
                  <AccordionTrigger className="text-lg font-semibold">
                    <span className="flex items-center gap-2">
                      <AlertCircle className="h-5 w-5 text-primary" />
                      Medical Device Reporting (MDR)
                    </span>
                  </AccordionTrigger>
                  <AccordionContent className="space-y-4 text-base">
                    <p>
                      Facilities must report certain adverse events and malfunctions to the FDA through the MedWatch
                      system.
                    </p>
                    <div>
                      <h4 className="font-semibold mb-2">What Must Be Reported</h4>
                      <ul className="space-y-2 ml-4">
                        <li className="flex items-start gap-2">
                          <AlertCircle className="h-5 w-5 text-amber-600 mt-0.5 flex-shrink-0" />
                          <span>Death or serious injury caused by the device</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <AlertCircle className="h-5 w-5 text-amber-600 mt-0.5 flex-shrink-0" />
                          <span>Device malfunction that could cause death or serious injury</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <AlertCircle className="h-5 w-5 text-amber-600 mt-0.5 flex-shrink-0" />
                          <span>Unexpected radiation overexposure</span>
                        </li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-2">Reporting Timeline</h4>
                      <p>
                        <strong>5-day reports:</strong> Death or serious injury
                        <br />
                        <strong>30-day reports:</strong> Malfunctions that could cause harm
                      </p>
                    </div>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>

            <div className="space-y-6">
              <Card className="bg-gradient-to-br from-primary/5 to-primary/10 border-primary/20">
                <CardHeader>
                  <CardTitle>FDA Compliance Checklist</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  {complianceChecklist.map((item, idx) => (
                    <div key={idx} className="flex items-start gap-3">
                      <div className="h-5 w-5 rounded border-2 border-muted-foreground/30 mt-0.5 flex-shrink-0" />
                      <span className="text-sm">{item.item}</span>
                    </div>
                  ))}
                  <Button className="w-full mt-4 bg-transparent" variant="outline">
                    <Download className="mr-2 h-4 w-4" />
                    Download Checklist PDF
                  </Button>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">FDA Resources</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <a href="#" className="block text-sm text-primary hover:underline">
                    FDA Device Registration Portal →
                  </a>
                  <a href="#" className="block text-sm text-primary hover:underline">
                    21 CFR 1020.32 Full Text →
                  </a>
                  <a href="#" className="block text-sm text-primary hover:underline">
                    MedWatch Reporting System →
                  </a>
                  <a href="#" className="block text-sm text-primary hover:underline">
                    FDA Guidance Documents →
                  </a>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* State Regulations Section */}
        <section id="state" className="mb-20 scroll-mt-8">
          <div className="bg-gradient-to-r from-blue-500/10 to-blue-500/5 rounded-2xl p-8 mb-8">
            <div className="flex items-center gap-4">
              <div className="h-16 w-16 bg-white rounded-lg flex items-center justify-center">
                <Map className="h-8 w-8 text-blue-600" />
              </div>
              <div>
                <h2 className="text-3xl font-bold">State Radiation Control Requirements</h2>
                <p className="text-lg text-muted-foreground">
                  State-specific licensing, certification, and inspection requirements
                </p>
              </div>
            </div>
          </div>

          <div className="mb-8">
            <p className="text-lg leading-relaxed mb-6">
              In addition to federal FDA requirements, each state has its own radiation control program with specific
              requirements for C-Arm facilities and operators. Requirements vary significantly by state.
            </p>

            <Card>
              <CardHeader>
                <CardTitle>State-by-State Requirements Comparison</CardTitle>
                <CardDescription>Sample of states with strict C-Arm regulations</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="overflow-x-auto">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="border-b">
                        <th className="text-left p-3 font-semibold">State</th>
                        <th className="text-left p-3 font-semibold">Facility License</th>
                        <th className="text-left p-3 font-semibold">Operator Cert</th>
                        <th className="text-left p-3 font-semibold">Equipment Reg</th>
                        <th className="text-left p-3 font-semibold">Inspection Freq</th>
                        <th className="text-left p-3 font-semibold">Annual Cost</th>
                      </tr>
                    </thead>
                    <tbody>
                      {stateRequirements.map((state, idx) => (
                        <tr key={idx} className="border-b hover:bg-muted/50">
                          <td className="p-3 font-medium">{state.state}</td>
                          <td className="p-3">
                            <Badge variant={state.facilityLicense === "Required" ? "default" : "secondary"}>
                              {state.facilityLicense}
                            </Badge>
                          </td>
                          <td className="p-3">
                            <Badge variant={state.operatorCert === "Required" ? "default" : "secondary"}>
                              {state.operatorCert}
                            </Badge>
                          </td>
                          <td className="p-3">
                            <Badge variant={state.equipmentReg === "Required" ? "default" : "secondary"}>
                              {state.equipmentReg}
                            </Badge>
                          </td>
                          <td className="p-3">{state.inspectionFreq}</td>
                          <td className="p-3 font-semibold">{state.annualCost}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
                <p className="text-sm text-muted-foreground mt-4">
                  Note: This is a sample of states. Requirements vary for all 50 states. Contact your state radiation
                  control program for specific requirements.
                </p>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Radiation Safety Section */}
        <section id="safety" className="mb-20 scroll-mt-8">
          <div className="bg-gradient-to-r from-green-500/10 to-green-500/5 rounded-2xl p-8 mb-8">
            <div className="flex items-center gap-4">
              <div className="h-16 w-16 bg-white rounded-lg flex items-center justify-center">
                <Activity className="h-8 w-8 text-green-600" />
              </div>
              <div>
                <h2 className="text-3xl font-bold">Radiation Safety: Protecting Patients & Staff</h2>
                <p className="text-lg text-muted-foreground">ALARA principles, dose limits, and safety equipment</p>
              </div>
            </div>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 mb-8">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Clock className="h-5 w-5 text-primary" />
                  Time
                </CardTitle>
                <CardDescription>Minimize exposure duration</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                    <span>Use pulsed fluoroscopy instead of continuous</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                    <span>Limit fluoroscopy time per procedure</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                    <span>Use last image hold feature</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                    <span>Plan procedures carefully</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Target className="h-5 w-5 text-primary" />
                  Distance
                </CardTitle>
                <CardDescription>Maximize distance from source</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                    <span>Position staff as far as practical</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                    <span>Use remote controls when possible</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                    <span>Extend image intensifier/detector</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                    <span>Step back during imaging</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Shield className="h-5 w-5 text-primary" />
                  Shielding
                </CardTitle>
                <CardDescription>Use appropriate barriers</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                    <span>Lead aprons (0.5mm Pb minimum)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                    <span>Thyroid shields for all staff</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                    <span>Lead glasses for eye protection</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                    <span>Mobile shields and barriers</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Regulatory Dose Limits</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {doseLimits.map((limit, idx) => (
                    <div key={idx} className="flex justify-between items-center p-3 bg-muted/50 rounded-lg">
                      <span className="text-sm font-medium">{limit.category}</span>
                      <span className="text-sm font-semibold text-primary">{limit.limit}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Quality Assurance Section */}
        <section id="qa" className="mb-20 scroll-mt-8">
          <div className="bg-gradient-to-r from-purple-500/10 to-purple-500/5 rounded-2xl p-8 mb-8">
            <div className="flex items-center gap-4">
              <div className="h-16 w-16 bg-white rounded-lg flex items-center justify-center">
                <ClipboardCheck className="h-8 w-8 text-purple-600" />
              </div>
              <div>
                <h2 className="text-3xl font-bold">Quality Assurance & Performance Testing</h2>
                <p className="text-lg text-muted-foreground">Required QA testing schedules and documentation</p>
              </div>
            </div>
          </div>

          <Card>
            <CardHeader>
              <CardTitle>Required QA Testing Schedule</CardTitle>
              <CardDescription>Comprehensive testing requirements for C-Arm systems</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b">
                      <th className="text-left p-3 font-semibold">Test</th>
                      <th className="text-left p-3 font-semibold">Frequency</th>
                      <th className="text-left p-3 font-semibold">Tolerance</th>
                      <th className="text-left p-3 font-semibold">Performer</th>
                    </tr>
                  </thead>
                  <tbody>
                    {qaTests.map((test, idx) => (
                      <tr key={idx} className="border-b hover:bg-muted/50">
                        <td className="p-3">{test.test}</td>
                        <td className="p-3">
                          <Badge variant="outline">{test.frequency}</Badge>
                        </td>
                        <td className="p-3 text-muted-foreground">{test.tolerance}</td>
                        <td className="p-3">{test.performer}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <div className="mt-6 flex gap-4">
                <Button variant="outline">
                  <Download className="mr-2 h-4 w-4" />
                  Download QA Program Template
                </Button>
                <Button variant="outline">
                  <FileText className="mr-2 h-4 w-4" />
                  View Testing Procedures
                </Button>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Training Section */}
        <section id="training" className="mb-20 scroll-mt-8">
          <div className="bg-gradient-to-r from-orange-500/10 to-orange-500/5 rounded-2xl p-8 mb-8">
            <div className="flex items-center gap-4">
              <div className="h-16 w-16 bg-white rounded-lg flex items-center justify-center">
                <GraduationCap className="h-8 w-8 text-orange-600" />
              </div>
              <div>
                <h2 className="text-3xl font-bold">Operator Training & Certification Requirements</h2>
                <p className="text-lg text-muted-foreground">
                  Training pathways and certification requirements by role
                </p>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <Card>
              <CardHeader>
                <CardTitle>Physicians</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h4 className="font-semibold mb-2 text-sm">Training Requirements</h4>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                      <span>Medical school radiation safety</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                      <span>Residency fluoroscopy training</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                      <span>Specialty-specific training</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                      <span>State certification (some states)</span>
                    </li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-2 text-sm">Continuing Education</h4>
                  <p className="text-sm text-muted-foreground">CME requirements vary by state</p>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Radiologic Technologists</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h4 className="font-semibold mb-2 text-sm">Training Requirements</h4>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                      <span>ARRT certification</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                      <span>State licensing</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                      <span>C-Arm-specific training</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                      <span>Fluoroscopy certification</span>
                    </li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-2 text-sm">Continuing Education</h4>
                  <p className="text-sm text-muted-foreground">24 CE credits per 2 years (typical)</p>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Support Staff</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h4 className="font-semibold mb-2 text-sm">Training Requirements</h4>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                      <span>Basic radiation safety</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                      <span>Role-specific training</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                      <span>PPE use</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                      <span>Emergency procedures</span>
                    </li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-2 text-sm">Continuing Education</h4>
                  <p className="text-sm text-muted-foreground">Annual refreshers recommended</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Cluster Articles */}
        <section className="mb-20">
          <h2 className="text-3xl font-bold mb-8 text-center">Compliance & Safety Resources</h2>
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
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Need Help with C-Arm Compliance?</h2>
          <p className="text-lg mb-8 max-w-3xl mx-auto opacity-90">
            Navigating the complex landscape of C-Arm regulations can be overwhelming. Our compliance specialists can
            help you understand requirements, implement safety programs, and maintain ongoing compliance.
          </p>

          <div className="grid md:grid-cols-3 gap-6 mb-8 max-w-4xl mx-auto">
            <div className="flex flex-col items-center gap-2">
              <ClipboardCheck className="h-8 w-8" />
              <p className="font-semibold">Compliance Audits</p>
            </div>
            <div className="flex flex-col items-center gap-2">
              <GraduationCap className="h-8 w-8" />
              <p className="font-semibold">Training Programs</p>
            </div>
            <div className="flex flex-col items-center gap-2">
              <Award className="h-8 w-8" />
              <p className="font-semibold">QA Services</p>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" asChild>
              <Link href="https://sentinelimaging.net/contact-us-ct-mri-x-ray/">Schedule Compliance Audit</Link>
            </Button>
            <Button size="lg" variant="outline" className="bg-white/10 border-white text-white hover:bg-white/20">
              <Download className="mr-2 h-4 w-4" />
              Download Compliance Guide
            </Button>
          </div>

          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4 text-sm">
            <a href="tel:888-838-7488" className="flex items-center gap-2 hover:underline">
              <Phone className="h-4 w-4" />
              Call: 888-838-7488
            </a>
            <span className="hidden sm:inline">|</span>
            <a href="mailto:compliance@c-arm.net" className="flex items-center gap-2 hover:underline">
              <Mail className="h-4 w-4" />
              Email: compliance@c-arm.net
            </a>
          </div>
        </section>
      </div>
    </div>
  )
}
