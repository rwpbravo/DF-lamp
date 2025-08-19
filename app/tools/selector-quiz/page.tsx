import SiteHeader from "@/components/site-header"
import { Breadcrumbs } from "@/components/breadcrumbs"
import SelectorQuiz from "@/components/selector-quiz"

export const metadata = {
  title: "C-Arm Selector Quiz | Get Personalized Recommendations | c-arms.net",
  description:
    "Answer a few questions about your procedures, space, and budget to see recommended C-arm types and models.",
  alternates: { canonical: "https://www.c-arms.net/tools/selector-quiz" },
}

export default function SelectorQuizPage() {
  return (
    <main>
      <SiteHeader />
      <section className="container mx-auto px-4 py-8">
        <Breadcrumbs
          items={[
            { label: "Home", href: "/" },
            { label: "Tools", href: "/comparison" },
            { label: "Selector Quiz", href: "/tools/selector-quiz" },
          ]}
        />
        <h1 className="mb-4 text-3xl font-bold">C-Arm Selector Quiz</h1>
        <SelectorQuiz />
      </section>
    </main>
  )
}
