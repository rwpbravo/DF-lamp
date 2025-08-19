import ContactPageClient from "./ContactPageClient"

export const metadata = {
  title: "Request a Quote | Contact Sentinel Imaging | c-arms.net",
  description:
    "Request a quote for new or used C-arms. Share your facility details, clinical needs, and preferred models.",
  alternates: { canonical: "https://www.c-arms.net/contact" },
}

export default function ContactPage() {
  return <ContactPageClient />
}
