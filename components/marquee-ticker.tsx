"use client"

export function MarqueeTicker() {
  const items = [
    "Shilpi",
    "Udyogpoti",
    "Lekhok",
    "Photographer",
    "Filmmaker",
    "Chef",
    "Developer",
    "Designer",
    "Musician",
    "Poet",
    "Theatre Artist",
    "Painter",
    "Dancer",
    "Entrepreneur",
  ]

  const repeatedItems = [...items, ...items]

  return (
    <section id="marquee" className="overflow-hidden border-y border-border bg-secondary py-4">
      <div className="flex animate-marquee whitespace-nowrap">
        {repeatedItems.map((item, i) => (
          <span key={i} className="mx-6 flex items-center gap-6 text-sm font-semibold uppercase tracking-[0.2em] text-muted-foreground">
            {item}
            <span className="inline-block h-1.5 w-1.5 rounded-full bg-primary" />
          </span>
        ))}
      </div>
    </section>
  )
}
