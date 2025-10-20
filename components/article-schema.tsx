export function ArticleSchema({
  headline,
  description,
  datePublished,
  dateModified,
  authorName = "C-ARMS.NET Editorial Team",
  imageUrl,
}: {
  headline: string
  description: string
  datePublished: string
  dateModified?: string
  authorName?: string
  imageUrl?: string
}) {
  const data = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline,
    description,
    datePublished,
    dateModified: dateModified || datePublished,
    author: {
      "@type": "Organization",
      name: authorName,
    },
    publisher: {
      "@type": "Organization",
      name: "C-ARMS.NET",
      logo: {
        "@type": "ImageObject",
        url: "https://www.c-arms.net/brand/logo.webp",
      },
    },
    ...(imageUrl && {
      image: {
        "@type": "ImageObject",
        url: imageUrl,
      },
    }),
  }

  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }} />
}
