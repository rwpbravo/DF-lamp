import ComparisonClientPage from "./ComparisonClientPage"

export const metadata = {
  title: "C-Arm Comparison Table | Side-by-Side Specs | c-arms.net",
  description:
    "Compare popular C-arm models side-by-side including GE OEC 9900, Siemens Cios Alpha, Philips Pulsera, and Ziehm Vision RFD.",
  alternates: { canonical: "https://www.c-arms.net/comparison" },
}

export default function ComparisonPage() {
  return <ComparisonClientPage />
}
