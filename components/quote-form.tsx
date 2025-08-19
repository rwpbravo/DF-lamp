"use client"

import type React from "react"

import { useState } from "react"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"

export function QuoteForm() {
  const [sent, setSent] = useState(false)
  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    const fd = new FormData(e.currentTarget)
    await fetch("/api/lead", {
      method: "POST",
      body: JSON.stringify({
        type: "quote",
        name: fd.get("name"),
        facility: fd.get("facility"),
        interest: fd.get("interest"),
        email: fd.get("email"),
        phone: fd.get("phone"),
        notes: fd.get("notes"),
      }),
    })
    setSent(true)
  }

  if (sent) {
    return <p className="text-sm text-teal-700">Thanks! We&apos;ll reach out within 1 business day.</p>
  }

  return (
    <form onSubmit={onSubmit} className="grid gap-3">
      <div className="grid gap-1">
        <Label htmlFor="name">Full name</Label>
        <Input id="name" name="name" required />
      </div>
      <div className="grid gap-1">
        <Label htmlFor="facility">Facility</Label>
        <Input id="facility" name="facility" />
      </div>
      <div className="grid gap-1">
        <Label htmlFor="interest">Product interest</Label>
        <Input id="interest" name="interest" placeholder="e.g., GE OEC 9900 or Mini C-Arm" />
      </div>
      <div className="grid gap-1">
        <Label htmlFor="email">Email</Label>
        <Input id="email" name="email" type="email" required />
      </div>
      <div className="grid gap-1">
        <Label htmlFor="phone">Phone</Label>
        <Input id="phone" name="phone" />
      </div>
      <div className="grid gap-1">
        <Label htmlFor="notes">Notes</Label>
        <Textarea id="notes" name="notes" placeholder="Procedures, budget, timeline..." />
      </div>
      <Button type="submit" className="bg-teal-600 hover:bg-teal-700">
        Request Quote
      </Button>
    </form>
  )
}
