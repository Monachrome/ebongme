"use client"

import { useState } from "react"
import { Search } from "lucide-react"
import { products, getCategories } from "@/lib/products"
import { ProductCard } from "@/components/product-card"

export function ProductsGrid() {
  const [activeCategory, setActiveCategory] = useState("All")
  const [searchQuery, setSearchQuery] = useState("")
  const categories = ["All", ...getCategories()]

  const filtered = products.filter((product) => {
    const matchesCategory =
      activeCategory === "All" || product.category === activeCategory
    const matchesSearch =
      searchQuery === "" ||
      product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      product.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      (product.nameInBengali && product.nameInBengali.includes(searchQuery))
    return matchesCategory && matchesSearch
  })

  return (
    <div>
      {/* Filters Bar */}
      <div className="mb-10 flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
        {/* Search */}
        <div className="relative max-w-sm flex-1">
          <Search className="absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
          <input
            type="text"
            placeholder="Khujun product..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full rounded-full border border-border bg-card py-3 pl-11 pr-4 text-sm text-foreground placeholder:text-muted-foreground outline-none transition-all duration-300 focus:border-primary focus:ring-2 focus:ring-primary/20"
          />
        </div>

        {/* Category Pills */}
        <div className="flex flex-wrap gap-2">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`rounded-full px-4 py-2 text-sm font-medium transition-all duration-300 ${
                activeCategory === cat
                  ? "bg-primary text-primary-foreground shadow-md shadow-primary/25"
                  : "bg-secondary text-secondary-foreground hover:bg-primary/10 hover:text-primary"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Results count */}
      <p className="mb-6 text-sm text-muted-foreground">
        {filtered.length} {filtered.length === 1 ? "product" : "products"} paoa gechhe
        {activeCategory !== "All" && (
          <span>
            {" "}
            in <span className="font-semibold text-foreground">{activeCategory}</span>
          </span>
        )}
      </p>

      {/* Grid */}
      {filtered.length > 0 ? (
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((product, i) => (
            <ProductCard key={product.id} product={product} index={i} />
          ))}
        </div>
      ) : (
        <div className="flex flex-col items-center justify-center py-20 text-center">
          <div className="mb-4 text-6xl opacity-30">{"🔍"}</div>
          <h3 className="font-serif text-xl font-bold text-foreground">
            Kichhu paoa jaini
          </h3>
          <p className="mt-2 text-sm text-muted-foreground">
            Onno category ba search try korun
          </p>
          <button
            onClick={() => {
              setActiveCategory("All")
              setSearchQuery("")
            }}
            className="mt-4 rounded-full bg-primary px-6 py-2 text-sm font-semibold text-primary-foreground transition-all hover:shadow-lg hover:shadow-primary/25"
          >
            Sob Dekhun
          </button>
        </div>
      )}
    </div>
  )
}
