"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Download, FileText, ImageIcon } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"

const brandAssets = [
  {
    category: "Logos",
    items: [
      { name: "Primary Logo", format: "SVG", size: "2.4 KB", icon: ImageIcon },
      { name: "Logo Variations", format: "PNG", size: "156 KB", icon: ImageIcon },
      { name: "Monochrome Logo", format: "SVG", size: "1.8 KB", icon: ImageIcon },
    ],
  },
  {
    category: "Brand Guidelines",
    items: [
      { name: "Brand Style Guide", format: "PDF", size: "4.2 MB", icon: FileText },
      { name: "Color Palette", format: "PDF", size: "890 KB", icon: FileText },
      { name: "Typography Guide", format: "PDF", size: "1.1 MB", icon: FileText },
    ],
  },
  {
    category: "Marketing Materials",
    items: [
      { name: "Product Brochure", format: "PDF", size: "8.5 MB", icon: FileText },
      { name: "Presentation Template", format: "PPTX", size: "3.2 MB", icon: FileText },
      { name: "Social Media Kit", format: "ZIP", size: "12.4 MB", icon: ImageIcon },
    ],
  },
]

export default function BrandsContent() {
  const [downloadingId, setDownloadingId] = useState<string | null>(null)

  const handleDownload = (categoryIndex: number, itemIndex: number) => {
    const id = `${categoryIndex}-${itemIndex}`
    setDownloadingId(id)
    setTimeout(() => setDownloadingId(null), 1500)
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-muted/20">
      <div className="container mx-auto px-4 py-16 max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
            Brand Assets
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Download our official brand assets, logos, and marketing materials
          </p>
        </motion.div>

        <div className="space-y-8">
          {brandAssets.map((category, categoryIndex) => (
            <motion.div
              key={category.category}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: categoryIndex * 0.1 }}
            >
              <h2 className="text-2xl font-semibold mb-4">{category.category}</h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                {category.items.map((item, itemIndex) => {
                  const id = `${categoryIndex}-${itemIndex}`
                  const Icon = item.icon
                  return (
                    <Card key={itemIndex} className="p-6 hover:shadow-lg transition-shadow">
                      <div className="flex items-start justify-between mb-4">
                        <div className="p-3 bg-primary/10 rounded-lg">
                          <Icon className="w-6 h-6 text-primary" />
                        </div>
                        <span className="text-xs font-medium text-muted-foreground bg-muted px-2 py-1 rounded">
                          {item.format}
                        </span>
                      </div>
                      <h3 className="font-semibold mb-2">{item.name}</h3>
                      <p className="text-sm text-muted-foreground mb-4">{item.size}</p>
                      <Button
                        onClick={() => handleDownload(categoryIndex, itemIndex)}
                        disabled={downloadingId === id}
                        className="w-full"
                      >
                        <Download className="w-4 h-4 mr-2" />
                        {downloadingId === id ? "Downloading..." : "Download"}
                      </Button>
                    </Card>
                  )
                })}
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-12 p-6 bg-muted/50 rounded-lg"
        >
          <h3 className="font-semibold mb-2">Usage Guidelines</h3>
          <p className="text-sm text-muted-foreground">
            Please review our brand guidelines before using these assets. For custom requests or questions about brand
            usage, contact our marketing team.
          </p>
        </motion.div>
      </div>
    </div>
  )
}
