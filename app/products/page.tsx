import type { Metadata } from "next"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { ProductsGrid } from "@/components/products-grid"
import { getFeaturedProducts } from "@/lib/products"
import Image from "next/image"

export const metadata: Metadata = {
  title: "Products | Ebong - Bengali Products & Crafts",
  description:
    "Explore authentic Bengali products - handloom sarees, Patachitra paintings, Dokra art, spices, music, books, and more. Support Bengali artisans and entrepreneurs.",
}

export default function ProductsPage() {
  const featured = getFeaturedProducts()

  return (
    <main className="min-h-screen">
      <Navbar />

      {/* Hero Banner */}
      <section className="relative overflow-hidden px-6 pt-32 pb-16 md:pt-40 md:pb-20">
        {/* Background decoration */}
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top,var(--ebong-red)_0%,transparent_60%)] opacity-[0.04]" />

        <div className="mx-auto max-w-7xl">
          <div className="flex flex-col items-start gap-4">
            <span className="inline-block rounded-full border border-primary/30 bg-primary/5 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-primary">
              Amader Products
            </span>
            <h1 className="font-serif text-4xl font-bold leading-tight text-foreground md:text-6xl lg:text-7xl text-balance">
              Bengali <span className="text-primary">Craftsmanship</span>,
              <br />
              Delivered to You
            </h1>
            <p className="max-w-2xl text-lg leading-relaxed text-muted-foreground">
              Authentic handcrafted products from Bengali artisans and entrepreneurs. 
              Prottek product er pichone ache ekta golpo, ekta porompora, ebong ekta 
              Bangali mon.
            </p>
          </div>

          {/* Featured Products Highlight */}
          {featured.length > 0 && (
            <div className="mt-12">
              <h2 className="mb-6 text-xs font-bold uppercase tracking-[0.2em] text-muted-foreground">
                Featured Products
              </h2>
              <div className="flex gap-4 overflow-x-auto pb-4 -mx-6 px-6 scrollbar-hide">
                {featured.map((product) => (
                  <div
                    key={product.id}
                    className="group relative flex-shrink-0 flex items-center gap-4 rounded-2xl border border-border bg-card p-3 pr-6 transition-all duration-300 hover:shadow-lg hover:shadow-primary/10 hover:border-primary/30"
                  >
                    <div className="relative h-16 w-16 flex-shrink-0 overflow-hidden rounded-xl">
                      <Image
                        src={product.image}
                        alt={product.name}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div>
                      <h3 className="text-sm font-bold text-card-foreground group-hover:text-primary transition-colors">
                        {product.name}
                      </h3>
                      <p className="text-xs text-muted-foreground">{product.category}</p>
                      <p className="mt-0.5 text-sm font-bold text-primary">
                        {"₹"}{product.price}
                      </p>
                    </div>
                    {product.badge && (
                      <span className="absolute -right-1 -top-1 rounded-full bg-primary px-2 py-0.5 text-[10px] font-bold text-primary-foreground">
                        {product.badge}
                      </span>
                    )}
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Divider */}
      <div className="mx-auto max-w-7xl px-6">
        <div className="h-px bg-border" />
      </div>

      {/* Products Grid */}
      <section className="px-6 py-16 md:py-20">
        <div className="mx-auto max-w-7xl">
          <ProductsGrid />
        </div>
      </section>

      <Footer />
    </main>
  )
}
