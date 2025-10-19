import type React from "react"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "C-Arm Suite Setup Guide: Planning, Design & Implementation | C-ARMS.NET",
  description:
    "Complete guide to planning, designing, and implementing a C-Arm imaging suite. From space requirements and radiation shielding to installation and go-live.",
}

export default function SetupLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
