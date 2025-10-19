import type { Metadata } from "next"
import BrandsContent from "./brands-content"

export const metadata: Metadata = {
  title: "Brand Assets - C-Arm Resources",
  description: "Download official C-Arm brand assets, logos, and marketing materials",
}

export default function BrandsPage() {
  return <BrandsContent />
}
