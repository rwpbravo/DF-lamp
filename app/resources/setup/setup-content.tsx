"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Book, FileText, Download, Play, Clock } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

const setupGuides = [
  {
    title: "Initial Installation Guide",
    description: "Complete guide for unpacking and initial setup",
    type: "PDF",
    size: "8.2 MB",
    duration: "45 min read",
    icon: FileText,
  },
  {
    title: "Calibration Procedures",
    description: "Step-by-step calibration and alignment",
    type: "PDF",
    size: "4.5 MB",
    duration: "30 min read",
    icon: FileText,
  },
  {
    title: "Network Configuration",
    description: "DICOM and network setup instructions",
    type: "PDF",
    size: "2.1 MB",
    duration: "20 min read",
    icon: FileText,
  },
]

const videoTutorials = [
  {
    title: "Unboxing and Assembly",
    description: "Visual guide to unpacking and assembling your C-Arm",
    duration: "15:30",
    thumbnail: "/medical-equipment-unboxing.jpg",
  },
  {
    title: "First-Time Setup",
    description: "Complete walkthrough of initial system configuration",
    duration: "22:45",
    thumbnail: "/medical-device-setup-screen.jpg",
  },
  {
    title: "Calibration Process",
    description: "Detailed calibration and quality assurance procedures",
    duration: "18:20",
    thumbnail: "/medical-imaging-calibration.jpg",
  },
  {
    title: "Network Integration",
    description: "Connecting to PACS and hospital networks",
    duration: "12:15",
    thumbnail: "/medical-network-setup.jpg",
  },
]

const quickStart = [
  { step: 1, title: "Unpack Equipment", description: "Carefully remove all components from packaging" },
  { step: 2, title: "Position System", description: "Place C-Arm in designated area with proper clearance" },
  { step: 3, title: "Connect Power", description: "Ensure proper electrical connections and grounding" },
  { step: 4, title: "Initial Calibration", description: "Run automated calibration sequence" },
  { step: 5, title: "Network Setup", description: "Configure DICOM and network settings" },
  { step: 6, title: "Quality Check", description: "Perform initial quality assurance tests" },
]

export default function SetupContent() {
  const [downloadingId, setDownloadingId] = useState<string | null>(null)

  const handleDownload = (index: number) => {
    setDownloadingId(`guide-${index}`)
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
            <Book className="w-8 h-8 text-primary" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
            Setup & Installation
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Everything you need to get your C-Arm system up and running
          </p>
        </motion.div>

        <Tabs defaultValue="guides" className="mb-12">
          <TabsList className="grid w-full grid-cols-3 mb-8">
            <TabsTrigger value="guides">Setup Guides</TabsTrigger>
            <TabsTrigger value="videos">Video Tutorials</TabsTrigger>
            <TabsTrigger value="quickstart">Quick Start</TabsTrigger>
          </TabsList>

          <TabsContent value="guides">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {setupGuides.map((guide, index) => {
                const Icon = guide.icon
                return (
                  <Card key={index} className="p-6 hover:shadow-lg transition-shadow">
                    <div className="flex items-start justify-between mb-4">
                      <div className="p-3 bg-primary/10 rounded-lg">
                        <Icon className="w-6 h-6 text-primary" />
                      </div>
                      <span className="text-xs font-medium text-muted-foreground bg-muted px-2 py-1 rounded">
                        {guide.type}
                      </span>
                    </div>
                    <h3 className="font-semibold mb-2">{guide.title}</h3>
                    <p className="text-sm text-muted-foreground mb-4">{guide.description}</p>
                    <div className="flex items-center gap-4 text-xs text-muted-foreground mb-4">
                      <span>{guide.size}</span>
                      <span className="flex items-center gap-1">
                        <Clock className="w-3 h-3" />
                        {guide.duration}
                      </span>
                    </div>
                    <Button
                      onClick={() => handleDownload(index)}
                      disabled={downloadingId === `guide-${index}`}
                      className="w-full"
                    >
                      <Download className="w-4 h-4 mr-2" />
                      {downloadingId === `guide-${index}` ? "Downloading..." : "Download"}
                    </Button>
                  </Card>
                )
              })}
            </div>
          </TabsContent>

          <TabsContent value="videos">
            <div className="grid md:grid-cols-2 gap-6">
              {videoTutorials.map((video, index) => (
                <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow">
                  <div className="relative group cursor-pointer">
                    <img
                      src={video.thumbnail || "/placeholder.svg"}
                      alt={video.title}
                      className="w-full h-48 object-cover"
                    />
                    <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                      <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center">
                        <Play className="w-8 h-8 text-primary-foreground ml-1" />
                      </div>
                    </div>
                    <div className="absolute bottom-2 right-2 bg-black/80 text-white text-xs px-2 py-1 rounded">
                      {video.duration}
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="font-semibold mb-2">{video.title}</h3>
                    <p className="text-sm text-muted-foreground">{video.description}</p>
                  </div>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="quickstart">
            <Card className="p-8">
              <h2 className="text-2xl font-semibold mb-6">Quick Start Checklist</h2>
              <div className="space-y-6">
                {quickStart.map((item) => (
                  <div key={item.step} className="flex gap-4">
                    <div className="flex-shrink-0 w-10 h-10 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-semibold">
                      {item.step}
                    </div>
                    <div className="flex-1">
                      <h3 className="font-semibold mb-1">{item.title}</h3>
                      <p className="text-sm text-muted-foreground">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </Card>
          </TabsContent>
        </Tabs>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="p-6 bg-muted/50 rounded-lg"
        >
          <h3 className="font-semibold mb-2">Need Installation Support?</h3>
          <p className="text-sm text-muted-foreground mb-4">
            Our technical team is available to assist with installation and setup. Contact us to schedule an on-site
            installation or remote support session.
          </p>
          <Button>Contact Support</Button>
        </motion.div>
      </div>
    </div>
  )
}
