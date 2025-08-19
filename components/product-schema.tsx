import type { Model } from "@/data/models"

function parsePrice(priceRange: string) {
  const numbers = priceRange.match(/\d+/g)?.map(Number)
  if (!numbers || numbers.length === 0) return {}
  const scale = /k/i.test(priceRange) ? 1000 : 1
  const minPrice = numbers[0] * scale
  const maxPrice = (numbers[1] || numbers[0]) * scale
  return { minPrice, maxPrice }
}

function mapCondition(condition: Model["condition"]) {
  switch (condition) {
    case "New":
      return "https://schema.org/NewCondition"
    case "Refurbished":
      return "https://schema.org/RefurbishedCondition"
    case "Used":
      return "https://schema.org/UsedCondition"
    default:
      return "https://schema.org/UsedCondition"
  }
}

export function ProductSchema({ model }: { model: Model }) {
  const { minPrice, maxPrice } = parsePrice(model.price)

  const data = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: model.name,
    description: model.summary,
    image: `https://www.c-arms.net/images/models/${model.slug}/hero.jpg`, // Assuming hero images will exist
    sku: model.slug,
    brand: {
      "@type": "Brand",
      name: model.brand,
    },
    offers: {
      "@type": "AggregateOffer",
      priceCurrency: "USD",
      lowPrice: minPrice,
      highPrice: maxPrice,
      offerCount: 1, // Represents the availability of this configuration
      availability: "https://schema.org/InStock",
    },
    itemCondition: mapCondition(model.condition),
  }

  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }} />
}
