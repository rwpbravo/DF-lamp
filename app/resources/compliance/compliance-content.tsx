"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { FileText, Download, Shield, CheckCircle2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

const complianceDocuments = {
  certifications: [
    { name: "FDA 510(k) Clearance", date: "2024", size: "2.1 MB" },
    { name: "CE Mark Certificate", date: "2024", size: "1.8 MB" },
    { name: "ISO 13485 Certificate", date: "2023", size: "890 KB" },
    { name: "IEC 60601-1 Compliance", date: "2024", size: "1.2 MB" },
  ],
  safety: [
    { name: "Safety Data Sheet", date: "2024", size: "450 KB" },
    { name: "Radiation Safety Report", date: "2024", size: "3.2 MB" },
    { name: "Electrical Safety Testing", date: "2024", size: "1.5 MB" },
    { name: "Risk Management File", date: "2023", size: "4.8 MB" },
  ],
  quality: [
    { name: "Quality Management System", date: "2024", size: "2.7 MB" },
    { name: "Design History File", date: "2023", size: "5.4 MB" },
    { name: "Device Master Record", date: "2024", size: "3.1 MB" },
    { name: "Post-Market Surveillance", date: "2024", size: "1.9 MB" },
  ],
}

const complianceStandards = [
  { name: "FDA 21 CFR Part 820", description: "Quality System Regulation" },
  { name: "ISO 13485:2016", description: "Medical Devices Quality Management" },
  { name: "IEC 60601-1", description: "Medical Electrical Equipment Safety" },
  { name: "DICOM Standard", description: "Digital Imaging Communications" },
]

export default function ComplianceContent() {
  const [downloadingId, setDownloadingId] = useState<string | null>(null)

  const handleDownload = (category: string, index: number) => {
    const id = `${category}-${index}`
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
          <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mb-4">
            <Shield className="w-8 h-8 text-primary" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
            Compliance & Certifications
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Access our regulatory compliance documents and certifications
          </p>
        </motion.div>

        <Tabs defaultValue="certifications" className="mb-12">
          <TabsList className="grid w-full grid-cols-3 mb-8">
            <TabsTrigger value="certifications">Certifications</TabsTrigger>
            <TabsTrigger value="safety">Safety</TabsTrigger>
            <TabsTrigger value="quality">Quality</TabsTrigger>
          </TabsList>

          {Object.entries(complianceDocuments).map(([category, documents]) => (
            <TabsContent key={category} value={category}>
              <div className="grid md:grid-cols-2 gap-4">
                {documents.map((doc, index) => {
                  const id = `${category}-${index}`
                  return (
                    <Card key={index} className="p-6 hover:shadow-lg transition-shadow">
                      <div className="flex items-start justify-between mb-4">
                        <div className="p-3 bg-primary/10 rounded-lg">
                          <FileText className="w-6 h-6 text-primary" />
                        </div>
                        <span className="text-xs font-medium text-muted-foreground bg-muted px-2 py-1 rounded">
                          PDF
                        </span>
                      </div>
                      <h3 className="font-semibold mb-2">{doc.name}</h3>
                      <div className="flex items-center gap-4 text-sm text-muted-foreground mb-4">
                        <span>Updated: {doc.date}</span>
                        <span>{doc.size}</span>
                      </div>
                      <Button
                        onClick={() => handleDownload(category, index)}
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
            </TabsContent>
          ))}
        </Tabs>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <h2 className="text-2xl font-semibold mb-6">Compliance Standards</h2>
          <div className="grid md:grid-cols-2 gap-4">
            {complianceStandards.map((standard, index) => (
              <Card key={index} className="p-6">
                <div className="flex items-start gap-4">
                  <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold mb-1">{standard.name}</h3>
                    <p className="text-sm text-muted-foreground">{standard.description}</p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-12 p-6 bg-muted/50 rounded-lg"
        >
          <h3 className="font-semibold mb-2">Document Access</h3>
          <p className="text-sm text-muted-foreground">
            Some documents may require authentication. For full access to compliance documentation, please contact our
            regulatory affairs team.
          </p>
        </motion.div>
      </div>
    </div>
  )
}
