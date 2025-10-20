import SiteHeader from "@/components/site-header"
import { Breadcrumbs } from "@/components/breadcrumbs"
import { BreadcrumbSchema } from "@/components/breadcrumb-schema"
import { getModelBySlug } from "@/data/models"
import Image from "next/image"
import Link from "next/link"
import { QuoteInline } from "@/components/quote-banner"
import { ProductSchema } from "@/components/product-schema"

type Props = { params: { slug: string } }

function getModelImagePath(slug: string, type: "card" | "hero" = "hero") {
  const imageMap: Record<string, { card: string; hero: string }> = {
    "philips-zenition-70": {
      card: "/images/models/philips-zenition-70/card.webp",
      hero: "/images/models/philips-zenition-70/hero.webp",
    },
    "hologic-fluoroscan-insight": {
      card: "/images/models/hologic-fluoroscan-insight/card.jpg",
      hero: "/images/models/hologic-fluoroscan-insight/hero.jpg",
    },
    "orthoscan-hd": {
      card: "/images/models/orthoscan-hd/card.jpg",
      hero: "/images/models/orthoscan-hd/hero.jpg",
    },
    "genoray-zen-7000": {
      card: "/images/models/genoray-zen-7000/card.jpg",
      hero: "/images/models/genoray-zen-7000/hero.jpg",
    },
    "ge-oec-elite-cfd": {
      card: "/images/models/ge-oec-elite-cfd/card.avif",
      hero: "/images/models/ge-oec-elite-cfd/hero.avif",
    },
    "ge-oec-9900-elite": {
      card: "/images/models/ge-oec-9900-elite/card.avif",
      hero: "/images/models/ge-oec-9900-elite/hero.avif",
    },
    "ge-oec-9800": {
      card: "/images/models/ge-oec-9800/card.avif",
      hero: "/images/models/ge-oec-9800/hero.avif",
    },
    "philips-pulsera": {
      card: "/images/models/philips-pulsera/card.jpg",
      hero: "/images/models/philips-pulsera/hero.jpg",
    },
    "ziehm-solo": {
      card: "/images/models/ziehm-solo/card.jpg",
      hero: "/images/models/ziehm-solo/hero.jpg",
    },
    "turner-imaging-smart-c": {
      card: "/images/models/turner-imaging-smart-c/card.jpg",
      hero: "/images/models/turner-imaging-smart-c/hero.jpg",
    },
    "siemens-arcadis-avantic": {
      card: "/images/models/siemens-arcadis-avantic/card.jpg",
      hero: "/images/models/siemens-arcadis-avantic/hero.jpg",
    },
    "ziehm-vision-rfd": {
      card: "/images/models/ziehm-vision-rfd/card.jpg",
      hero: "/images/models/ziehm-vision-rfd/hero.jpg",
    },
    "siemens-cios-alpha": {
      card: "/images/models/siemens-cios-alpha/card.webp",
      hero: "/images/models/siemens-cios-alpha/hero.webp",
    },
  }

  return imageMap[slug]?.[type] || "/c-arm-product-photo-large.png"
}

export async function generateMetadata({ params }: Props) {
  const model = getModelBySlug(params.slug)
  if (!model) {
    return {
      title: "C-Arm Model",
      description: "C-Arm model details.",
    }
  }
  return {
    title: `${model.name} C-Arm | ${model.price} | Refurbished | c-arms.net`,
    description: `${model.name}: ${model.detectorType} detector, ${model.generatorKw}kW generator. ${model.price} refurbished. Compare specs, view images, get instant quotes. Trusted by 500+ facilities.`,
    alternates: { canonical: `https://www.c-arms.net/models/${model.slug}` },
    openGraph: {
      title: `${model.name} C-Arm System | ${model.price}`,
      description: `${model.name} with ${model.detectorType} detector. ${model.price} refurbished. Get pricing and specs.`,
      url: `https://www.c-arms.net/models/${model.slug}`,
      type: "product",
      images: [
        {
          url: `https://www.c-arms.net${getModelImagePath(model.slug, "hero")}`,
          width: 1200,
          height: 630,
          alt: `${model.name} C-Arm System`,
        },
      ],
    },
  }
}

export default function ModelDetail({ params }: Props) {
  const model = getModelBySlug(params.slug)
  if (!model) {
    return (
      <main>
        <SiteHeader />
        <section className="container mx-auto px-4 py-8">
          <p>Model not found.</p>
        </section>
      </main>
    )
  }

  const breadcrumbItems = [
    { name: "Home", url: "https://www.c-arms.net/" },
    { name: "Brands", url: "https://www.c-arms.net/brands" },
    { name: model.brand, url: `https://www.c-arms.net/brands/${model.brandSlug}` },
    { name: model.name, url: `https://www.c-arms.net/models/${model.slug}` },
  ]

  return (
    <main>
      <ProductSchema model={model} />
      <BreadcrumbSchema items={breadcrumbItems} />
      <SiteHeader />
      <section className="container mx-auto px-4 py-8">
        <Breadcrumbs
          items={[
            { label: "Home", href: "/" },
            { label: "Brands", href: "/brands" },
            { label: model.brand, href: `/brands/${model.brandSlug}` },
            { label: model.name, href: `/models/${model.slug}` },
          ]}
        />
        <div className="grid gap-6 md:grid-cols-2">
          <div>
            <Image
              src={getModelImagePath(model.slug, "hero") || "/placeholder.svg"}
              alt={`${model.name} C-Arm fluoroscopy system with ${model.detectorType} detector for ${model.type} imaging`}
              width={560}
              height={380}
              className="rounded-lg border bg-white object-contain p-2"
              priority
            />
          </div>
          <div>
            <h1 className="text-3xl font-bold">{model.name}</h1>
            <p className="mt-2 text-lg text-slate-700">
              A {model.condition} {model.type} C-Arm System
            </p>
            <div className="mt-4 rounded-lg border bg-slate-50 p-4">
              <h2 className="text-lg font-semibold">Key Specifications</h2>
              <ul className="mt-2 grid gap-1 text-sm text-slate-700">
                <li>
                  <span className="font-medium">Type:</span> {model.type}
                </li>
                <li>
                  <span className="font-medium">Detector:</span> {model.detectorType}
                </li>
                <li>
                  <span className="font-medium">Generator:</span> {model.generatorKw} kW
                </li>
                <li>
                  <span className="font-medium">Typical Price:</span> {model.price}
                </li>
                <li>
                  <span className="font-medium">Condition:</span> {model.condition}
                </li>
              </ul>
            </div>
            <div className="mt-4 text-sm text-slate-600">
              <p>
                Looking for alternatives? Compare with other systems in the{" "}
                <Link className="text-teal-700 underline underline-offset-4" href="/comparison">
                  C-Arm Comparison Table
                </Link>
                .
              </p>
            </div>
          </div>
        </div>
        <div className="prose prose-slate mx-auto mt-8 max-w-none lg:prose-lg">
          <h2>Features, Applications, and Value</h2>
          <p>{model.summary}</p>
          <p>
            As a leading {model.detectorType}-based system from {model.brand}, the {model.name} is designed for
            high-quality imaging in demanding surgical environments. Its {model.generatorKw} kW generator provides ample
            power for a variety of cases, making it a versatile choice for hospitals and ambulatory surgery centers.
          </p>
        </div>
      </section>
      <QuoteInline />
    </main>
  )
}
