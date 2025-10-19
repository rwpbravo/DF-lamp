import type { Metadata } from "next"
import ComplianceContent from "./compliance-content"

export const metadata: Metadata = {
  title: "Compliance & Certifications - C-Arm Resources",
  description: "Access regulatory compliance documents and certifications for C-Arm systems",
}

export default function CompliancePage() {
  return <ComplianceContent />
}
