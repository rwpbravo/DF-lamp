"use client"

import { useState } from "react"
import { MessageCircle, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function ChatWidget() {
  const [open, setOpen] = useState(false)
  return (
    <div className="fixed bottom-4 right-4 z-40">
      {open ? (
        <div className="w-80 rounded-xl border bg-white shadow-xl">
          <div className="flex items-center justify-between border-b p-3">
            <div className="text-sm font-medium">C-Arm Help</div>
            <button
              className="text-slate-500 hover:text-slate-900"
              aria-label="Close chat"
              onClick={() => setOpen(false)}
            >
              <X className="h-4 w-4" />
            </button>
          </div>
          <div className="max-h-64 space-y-3 overflow-auto p-3 text-sm">
            <p className="text-slate-700">Hi! Have questions about models, pricing, or availability?</p>
            <ul className="list-disc pl-5 text-slate-700">
              <li>
                Compare models:{" "}
                <Link href="/comparison" className="text-teal-700 underline">
                  C-Arm Comparison
                </Link>
              </li>
              <li>
                Pricing ranges:{" "}
                <Link href="/blog/c-arm-pricing-guide" className="text-teal-700 underline">
                  C-Arm Pricing
                </Link>
              </li>
              <li>
                Get a quote:{" "}
                <a
                  href="https://sentinelimaging.net/contact-us-ct-mri-x-ray/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-teal-700 underline"
                >
                  Request a Quote
                </a>
              </li>
            </ul>
          </div>
        </div>
      ) : null}
      <Button onClick={() => setOpen((v) => !v)} className="mt-3 rounded-full bg-teal-600 px-4 py-2 hover:bg-teal-700">
        <MessageCircle className="mr-2 h-4 w-4" />
        {open ? "Hide" : "Chat"}
      </Button>
    </div>
  )
}
