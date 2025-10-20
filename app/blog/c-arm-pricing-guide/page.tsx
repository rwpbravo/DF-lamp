import SiteHeader from "@/components/site-header"
import { Breadcrumbs } from "@/components/breadcrumbs"
import { BreadcrumbSchema } from "@/components/breadcrumb-schema"
import { ArticleSchema } from "@/components/article-schema"
import { FAQSchema } from "@/components/faq-schema"
import { QuoteBanner } from "@/components/quote-banner"
import Link from "next/link"
import Image from "next/image"

export const metadata = {
  title: "C-Arm Pricing Guide 2025: Complete Comparison & Cost Breakdown",
  description:
    "C-Arm costs range from $25k (used mini) to $250k+ (new vascular). Learn what factors affect price: detector type, brand, condition. Compare GE, Siemens, Philips pricing.",
  alternates: { canonical: "https://www.c-arms.net/blog/c-arm-pricing-guide" },
  openGraph: {
    title: "C-Arm Pricing Guide 2025: How Much Does a C-Arm Cost?",
    description:
      "Complete C-Arm pricing breakdown. $25k-$250k+ depending on type, detector, and condition. Expert buying guidance.",
    url: "https://www.c-arms.net/blog/c-arm-pricing-guide",
    type: "article",
    images: [
      {
        url: "https://www.c-arms.net/images/c-arm-pricing-hero.png",
        width: 1200,
        height: 630,
        alt: "C-Arm pricing guide showing different system types and price ranges",
      },
    ],
  },
}

export default function PricingGuidePage() {
  const breadcrumbItems = [
    { name: "Home", url: "https://www.c-arms.net/" },
    { name: "Blog", url: "https://www.c-arms.net/blog" },
    { name: "C-Arm Pricing Guide", url: "https://www.c-arms.net/blog/c-arm-pricing-guide" },
  ]

  return (
    <main>
      <BreadcrumbSchema items={breadcrumbItems} />
      <ArticleSchema
        headline="C-Arm Pricing Guide: How Much Does a C-Arm Cost?"
        description="Comprehensive guide to C-Arm pricing covering mini, compact, and full-size systems. Learn what factors influence cost and how to get the best value."
        datePublished="2025-01-15"
        dateModified="2025-01-15"
        imageUrl="https://www.c-arms.net/images/c-arm-pricing-hero.png"
      />
      <SiteHeader />
      <section className="container mx-auto px-4 py-8">
        <Breadcrumbs
          items={[
            { label: "Home", href: "/" },
            { label: "Blog", href: "/blog" },
            { label: "C-Arm Pricing Guide", href: "/blog/c-arm-pricing-guide" },
          ]}
        />
        <div className="prose prose-slate mx-auto max-w-4xl lg:prose-lg">
          <h1>C-Arm Pricing Guide: How Much Does a C-Arm Cost?</h1>
          <p className="lead">
            C-Arm pricing can range from <strong>$25,000</strong> for a refurbished mini C-Arm to over{" "}
            <strong>$250,000</strong> for a new, high-end vascular system. Understanding the key factors that drive cost
            is essential to making a smart investment for your facility.
          </p>

          <Image
            src="/images/c-arm-pricing-hero.png"
            alt="Comparison chart showing C-arm pricing ranges for different system types and configurations"
            width={800}
            height={400}
            className="rounded-lg"
          />

          <h2>Key Factors Influencing C-Arm Price</h2>
          <h3>1. Detector Type: Flat Panel vs. Image Intensifier</h3>
          <p>
            This is the single biggest factor. <strong>Flat-panel detectors (FPDs)</strong> are newer technology,
            offering lower dose, better image quality, and no image distortion. They typically cost 30-50% more than
            systems with traditional <strong>Image Intensifiers (IIs)</strong>.
          </p>
          <h3>2. System Type: Mini, Compact, or Full-Size</h3>
          <ul>
            <li>
              <strong>Mini C-Arms:</strong> $25k - $70k. For extremities (hands, feet).
            </li>
            <li>
              <strong>Compact C-Arms:</strong> $35k - $80k. A balance of size and power.
            </li>
            <li>
              <strong>Full-Size C-Arms:</strong> $45k - $250k+. For spine, vascular, cardiac.
            </li>
          </ul>
          <h3>3. Brand and Model</h3>
          <p>
            Premium brands like <Link href="/brands/ge-oec">GE OEC</Link> and{" "}
            <Link href="/brands/siemens">Siemens</Link> often command higher prices due to their reputation, software
            features, and service networks. A refurbished GE OEC 9900 might be $60k, while a newer Siemens Cios Alpha
            could be over $150k.
          </p>
          <h3>4. Condition: New vs. Refurbished</h3>
          <p>
            A professionally refurbished C-Arm can offer 40-60% savings compared to a new system, often with a similar
            warranty and performance for many clinical applications.
          </p>

          <h2>Typical Price Ranges by Model</h2>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr>
                  <th>Model</th>
                  <th>Type</th>
                  <th>Typical Price Range (Refurbished)</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Hologic Fluoroscan Insight</td>
                  <td>Mini</td>
                  <td>$25,000 – $55,000</td>
                </tr>
                <tr>
                  <td>GE OEC 9800</td>
                  <td>Full-Size (II)</td>
                  <td>$25,000 – $55,000</td>
                </tr>
                <tr>
                  <td>Philips Pulsera</td>
                  <td>Full-Size (II)</td>
                  <td>$45,000 – $95,000</td>
                </tr>
                <tr>
                  <td>GE OEC 9900 Elite</td>
                  <td>Full-Size (II)</td>
                  <td>$60,000 – $120,000</td>
                </tr>
                <tr>
                  <td>Ziehm Vision RFD</td>
                  <td>Full-Size (FPD)</td>
                  <td>$130,000 – $210,000</td>
                </tr>
                <tr>
                  <td>Siemens Cios Alpha</td>
                  <td>Full-Size (FPD)</td>
                  <td>$140,000 – $220,000</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p>
            *Prices are estimates and vary based on configuration, warranty, and installation. For a precise number,{" "}
            <Link href="/contact">request a formal quote</Link>.
          </p>
        </div>
      </section>
      <QuoteBanner />
      <FAQSchema
        items={[
          {
            question: "How much does a used C-Arm cost?",
            answer:
              "A used or refurbished C-Arm typically costs between $25,000 for an older image intensifier model and $150,000+ for a recent flat-panel detector system.",
          },
          {
            question: "Is a flat-panel detector worth the extra cost?",
            answer:
              "For most practices, yes. The lower dose, superior image quality, and longer lifespan of a flat-panel detector provide significant clinical and financial benefits over time, justifying the higher initial investment.",
          },
          {
            question: "What is the cheapest C-Arm available?",
            answer:
              "The most affordable C-Arms are typically older, refurbished mini C-Arms or full-size systems with image intensifiers, such as the GE OEC 9800, which can be found for under $30,000.",
          },
        ]}
      />
    </main>
  )
}
