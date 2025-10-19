"use client"

import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Menu, Phone } from "lucide-react"
import { usePathname } from "next/navigation"

const links = [
  { href: "/overview", label: "Overview" },
  { href: "/types", label: "Types" },
  { href: "/brands", label: "Brands" },
  { href: "/resources", label: "Resources" },
  { href: "/comparison", label: "Comparison" },
]

export default function SiteHeader() {
  const pathname = usePathname()
  return (
    <header className="sticky top-0 z-40 w-full border-b bg-white/90 backdrop-blur">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        <div className="flex items-center gap-3">
          <Link href="/" className="flex items-center gap-2" aria-label="C-ARMS.NET Home">
            <Image
              src="/brand/logo.webp"
              alt="C-ARMS.NET logo"
              width={140}
              height={36}
              priority
              className="h-9 w-auto"
            />
            <span className="sr-only">C-ARMS.NET</span>
          </Link>
          <span className="hidden h-5 w-px bg-slate-200 md:block" />
          <a
            href="tel:8888387488"
            className="hidden items-center gap-1 text-sm text-slate-600 hover:text-slate-900 md:flex"
          >
            <Phone className="h-4 w-4 text-teal-600" />
            {"888-838-7488"}
          </a>
        </div>
        <nav className="hidden items-center gap-4 md:flex">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className={`text-sm transition hover:text-slate-900 ${
                pathname === l.href ? "text-slate-900" : "text-slate-600"
              }`}
            >
              {l.label}
            </Link>
          ))}
          <Button asChild className="bg-teal-600 hover:bg-teal-700">
            <a href="https://sentinelimaging.net/contact-us-ct-mri-x-ray/" target="_blank" rel="noopener noreferrer">
              Request a Quote
            </a>
          </Button>
        </nav>
        <div className="md:hidden">
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="outline" size="icon" aria-label="Open menu">
                <Menu className="h-5 w-5" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-80">
              <div className="mt-8 grid gap-3">
                {links.map((l) => (
                  <Link key={l.href} href={l.href} className="text-base text-slate-800">
                    {l.label}
                  </Link>
                ))}
                <Button asChild className="mt-2 bg-teal-600 hover:bg-teal-700">
                  <a
                    href="https://sentinelimaging.net/contact-us-ct-mri-x-ray/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Request a Quote
                  </a>
                </Button>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  )
}
