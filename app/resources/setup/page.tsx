import type { Metadata } from "next"
import SetupContent from "./setup-content"

export const metadata: Metadata = {
  title: "Setup & Installation - C-Arm Resources",
  description: "Setup guides, video tutorials, and installation instructions for C-Arm systems",
}

export default function SetupPage() {
  return <SetupContent />
}
