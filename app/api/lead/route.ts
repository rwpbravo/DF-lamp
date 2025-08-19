import { NextResponse } from "next/server"
import { Resend } from "resend"

const resend = new Resend(process.env.RESEND_API_KEY)

// Configuration via env (set in Vercel Project Settings)
const TO = process.env.LEAD_TO_EMAIL || "leads@example.com"
const FROM = process.env.LEAD_FROM_EMAIL || "Sentinel Imaging <onboarding@resend.dev>" // works for testing without domain verification
const REPLY_TO = process.env.LEAD_REPLY_TO || "sales@example.com"
const SEND_USER_CONFIRMATION = (process.env.SEND_USER_CONFIRMATION || "true").toLowerCase() === "true"

type LeadBody = {
  type?: "quote" | "guide" | string
  name?: string | null
  email?: string | null
  organization?: string | null
  facility?: string | null
  interest?: string | null
  phone?: string | null
  notes?: string | null
}

function sanitize(v: unknown) {
  return typeof v === "string" ? v.trim() : ""
}

function renderInternalHtml(data: LeadBody) {
  const rows: [string, string][] = [
    ["Type", sanitize(data.type)],
    ["Name", sanitize(data.name)],
    ["Email", sanitize(data.email)],
    ["Organization", sanitize(data.organization || data.facility)],
    ["Interest", sanitize(data.interest)],
    ["Phone", sanitize(data.phone)],
    ["Notes", sanitize(data.notes)],
  ]
  const trs = rows
    .filter(([, v]) => v)
    .map(
      ([k, v]) =>
        `<tr><td style="padding:6px 10px;border:1px solid #e5e7eb;font-weight:600">${k}</td><td style="padding:6px 10px;border:1px solid #e5e7eb">${v}</td></tr>`,
    )
    .join("")
  return `
  <div style="font-family:system-ui,-apple-system,Segoe UI,Roboto,Helvetica,Arial,sans-serif;color:#0f172a">
    <h2 style="margin:0 0 8px 0;font-size:18px">New website lead</h2>
    <p style="margin:0 0 12px 0;color:#475569">A new ${sanitize(data.type) || "lead"} was submitted from c-arms.net.</p>
    <table style="border-collapse:collapse;border:1px solid #e5e7eb">${trs}</table>
  </div>`
}

function renderUserHtml(data: LeadBody) {
  const name = sanitize(data.name) || "there"
  return `
  <div style="font-family:system-ui,-apple-system,Segoe UI,Roboto,Helvetica,Arial,sans-serif;color:#0f172a">
    <p style="margin:0 0 12px 0">Hi ${name},</p>
    <p style="margin:0 0 12px 0">Thanks for reaching out to Sentinel Imaging. We received your request${
      data.type === "guide" ? " for the Buyer’s Guide" : ""
    } and will respond within one business day.</p>
    <p style="margin:0 0 12px 0">If you need immediate assistance, call 888-838-7488.</p>
    <p style="margin:16px 0 4px 0;font-weight:600">Your submission</p>
    <ul style="margin:0 0 16px 18px;color:#475569">
      ${sanitize(data.interest) ? `<li>Interest: ${sanitize(data.interest)}</li>` : ""}
      ${sanitize(data.notes) ? `<li>Notes: ${sanitize(data.notes)}</li>` : ""}
    </ul>
    <p style="margin:0;color:#475569">Sentinel Imaging</p>
  </div>`
}

export async function POST(req: Request) {
  try {
    const body = (await req.json().catch(() => ({}))) as LeadBody
    const type = body.type === "guide" || body.type === "quote" ? body.type : "lead"
    const name = sanitize(body.name) || "Website Visitor"
    const email = sanitize(body.email)

    // Send internal notification
    const internalSubject =
      type === "quote" ? `[Website Lead] Quote request from ${name}` : `[Website Lead] Guide request from ${name}`

    await resend.emails.send({
      from: FROM,
      to: [TO],
      replyTo: REPLY_TO,
      subject: internalSubject,
      html: renderInternalHtml(body),
    })

    // Optional: user confirmation
    if (SEND_USER_CONFIRMATION && email) {
      const userSubject =
        type === "quote" ? "We received your quote request — Sentinel Imaging" : "Your guide request — Sentinel Imaging"
      await resend.emails.send({
        from: FROM,
        to: [email],
        replyTo: REPLY_TO,
        subject: userSubject,
        html: renderUserHtml(body),
      })
    }

    return NextResponse.json({ ok: true })
  } catch (err) {
    console.error("Lead submission error:", err)
    return NextResponse.json({ ok: false, error: "Failed to send email" }, { status: 500 })
  }
}
