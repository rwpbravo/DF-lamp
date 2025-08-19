import Link from "next/link"

type Crumb = { label: string; href: string }

export function Breadcrumbs({ items }: { items: Crumb[] }) {
  return (
    <nav aria-label="Breadcrumb" className="mb-4 text-sm text-slate-600">
      <ol className="flex flex-wrap items-center gap-1">
        {items.map((c, idx) => (
          <li key={c.href} className="flex items-center">
            {idx > 0 && <span className="mx-1 text-slate-400">{"/"}</span>}
            <Link href={c.href} className="hover:text-slate-900">
              {c.label}
            </Link>
          </li>
        ))}
      </ol>
    </nav>
  )
}
