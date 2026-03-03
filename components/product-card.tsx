"use client"

import Image from "next/image"
import type { Product } from "@/lib/products"

export function ProductCard({ product, index }: { product: Product; index: number }) {
  return (
    <div
      className="group relative flex flex-col overflow-hidden rounded-2xl border border-border bg-card transition-all duration-500 hover:shadow-2xl hover:shadow-primary/10 hover:-translate-y-1"
      style={{ animationDelay: `${index * 80}ms` }}
    >
      {/* Image */}
      <div className="relative aspect-[4/3] overflow-hidden bg-secondary">
        <Image
          src={product.image}
          alt={product.name}
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-110"
        />
        {/* Overlay on hover */}
        <div className="absolute inset-0 bg-foreground/0 transition-all duration-500 group-hover:bg-foreground/10" />

        {/* Badge */}
        {product.badge && (
          <span className="absolute left-3 top-3 rounded-full bg-primary px-3 py-1 text-[11px] font-bold uppercase tracking-wider text-primary-foreground shadow-lg">
            {product.badge}
          </span>
        )}

        {/* Category tag */}
        <span className="absolute right-3 top-3 rounded-full bg-card/90 backdrop-blur-sm px-3 py-1 text-[11px] font-semibold text-card-foreground border border-border">
          {product.category}
        </span>
      </div>

      {/* Content */}
      <div className="flex flex-1 flex-col p-5">
        <div className="flex items-start justify-between gap-3">
          <div>
            <h3 className="font-serif text-lg font-bold text-card-foreground leading-snug group-hover:text-primary transition-colors duration-300">
              {product.name}
            </h3>
            {product.nameInBengali && (
              <p className="mt-0.5 text-xs text-muted-foreground">
                {product.nameInBengali}
              </p>
            )}
          </div>
          <span className="flex-shrink-0 rounded-lg bg-primary/10 px-3 py-1.5 font-serif text-lg font-bold text-primary">
            {"₹"}{product.price}
          </span>
        </div>

        <p className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground line-clamp-3">
          {product.description}
        </p>

        {/* Action */}
        <div className="mt-4 flex items-center gap-3">
          {product.link ? (
            <a
              href={product.link}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 rounded-full bg-primary px-4 py-2.5 text-center text-sm font-semibold text-primary-foreground transition-all duration-300 hover:shadow-lg hover:shadow-primary/25"
            >
              View Product
            </a>
          ) : (
            <button
              className="flex-1 rounded-full border-2 border-primary/20 px-4 py-2.5 text-center text-sm font-semibold text-primary transition-all duration-300 hover:bg-primary hover:text-primary-foreground"
            >
              Janun Aro
            </button>
          )}
        </div>
      </div>
    </div>
  )
}
