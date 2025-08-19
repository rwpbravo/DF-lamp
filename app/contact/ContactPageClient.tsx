"use client"

import SiteHeader from "@/components/site-header"
import { Breadcrumbs } from "@/components/breadcrumbs"
import { QuoteForm } from "@/components/quote-form"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function ContactPageClient() {
  return (
    <main>
      <SiteHeader />
      <section className="container mx-auto px-4 py-8">
        <Breadcrumbs
          items={[
            { label: "Home", href: "/" },
            { label: "Contact / Request a Quote", href: "/contact" },
          ]}
        />
        <h1 className="mb-4 text-3xl font-bold">Request a Quote</h1>
        <div className="grid gap-6 md:grid-cols-2">
          <Card>
            <CardHeader className="pb-2">
              <CardTitle>Tell us about your needs</CardTitle>
            </CardHeader>
            <CardContent>
              <QuoteForm />
            </CardContent>
          </Card>
          <div className="rounded-lg border p-4">
            <h2 className="text-xl font-semibold">What to expect</h2>
            <ul className="mt-2 list-disc space-y-1 pl-5 text-slate-700">
              <li>Consultative recommendations within 1 business day</li>
              <li>Transparent pricing and financing options</li>
              <li>Delivery, installation, and training support</li>
            </ul>
          </div>
        </div>
      </section>
    </main>
  )
}
