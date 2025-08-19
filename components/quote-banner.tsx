import { Button } from "@/components/ui/button"

export function QuoteBanner() {
  return (
    <section className="border-y">
      <div className="container mx-auto flex flex-col items-start justify-between gap-4 px-4 py-8 md:flex-row md:items-center">
        <div>
          <h2 className="text-xl font-semibold">Need pricing or availability?</h2>
          <p className="text-sm text-slate-600">Get a tailored quote with recommendations based on your procedures.</p>
        </div>
        <Button asChild className="bg-teal-600 hover:bg-teal-700">
          <a href="https://sentinelimaging.net/contact-us-ct-mri-x-ray/" target="_blank" rel="noopener noreferrer">
            Request a Quote
          </a>
        </Button>
      </div>
    </section>
  )
}

export function QuoteInline() {
  return (
    <section className="border-t bg-slate-50">
      <div className="container mx-auto flex flex-col items-start justify-between gap-3 px-4 py-6 md:flex-row md:items-center">
        <p className="text-sm text-slate-700">
          Have questions about this model? Our specialists can help with pricing and configuration options.
        </p>
        <div className="flex gap-2">
          <Button asChild variant="outline">
            <a href="/comparison">Compare Models</a>
          </Button>
          <Button asChild className="bg-teal-600 hover:bg-teal-700">
            <a href="https://sentinelimaging.net/contact-us-ct-mri-x-ray/" target="_blank" rel="noopener noreferrer">
              Get a Quote
            </a>
          </Button>
        </div>
      </div>
    </section>
  )
}
