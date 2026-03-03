"use client"

import { useEffect, useRef, useState } from "react"
import {
  Camera,
  Palette,
  BookOpen,
  Music,
  Utensils,
  Code,
  Film,
  Shirt,
  Mic,
  Lightbulb,
} from "lucide-react"

const categories = [
  {
    icon: Palette,
    title: "Shilpi & Artists",
    description: "Painters, sculptors, ebong visual artists jara Bangla r shilpo ke banchiye rakhche.",
    count: "12+",
  },
  {
    icon: BookOpen,
    title: "Lekhok & Writers",
    description: "Bangla sahityo r noya protagonists -- kobi, golpokar, ebong bloggers.",
    count: "8+",
  },
  {
    icon: Camera,
    title: "Photographers",
    description: "Kolkata r goli theke Sundarbaner jungle -- Bengali photographers er lens e.",
    count: "6+",
  },
  {
    icon: Music,
    title: "Musicians",
    description: "Rabindra sangeet theke indie rock -- Bangali musicians der awaaz.",
    count: "5+",
  },
  {
    icon: Utensils,
    title: "Chefs & Food",
    description: "Rosogolla theke biriyani -- Bengali cuisine ke world e tule dhora.",
    count: "7+",
  },
  {
    icon: Code,
    title: "Tech Creators",
    description: "Developers, designers, ebong tech innovators jara Bengal theke build korche.",
    count: "10+",
  },
  {
    icon: Film,
    title: "Filmmakers",
    description: "Satyajit Ray er porompora te noya juger storytellers.",
    count: "4+",
  },
  {
    icon: Shirt,
    title: "Fashion & Design",
    description: "Tant saree theke modern fashion -- Bengali design er evolution.",
    count: "5+",
  },
  {
    icon: Mic,
    title: "Performers",
    description: "Theatre, stand-up, ebong spoken word artists der stage.",
    count: "6+",
  },
  {
    icon: Lightbulb,
    title: "Entrepreneurs",
    description: "Bengali udyogpotira jara nijer startup ebong business niye agrosor hocche.",
    count: "15+",
  },
]

export function CategoriesSection() {
  const sectionRef = useRef<HTMLElement>(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true)
      },
      { threshold: 0.1 }
    )
    if (sectionRef.current) observer.observe(sectionRef.current)
    return () => observer.disconnect()
  }, [])

  return (
    <section
      ref={sectionRef}
      id="categories"
      className="relative px-6 py-24 md:py-32 bg-secondary"
    >
      <div className="mx-auto max-w-7xl">
        {/* Header */}
        <div className="mb-16 max-w-3xl">
          <span
            className={`inline-block rounded-full border border-primary/30 bg-primary/5 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-primary transition-all duration-700 ${
              isVisible ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"
            }`}
          >
            Categories
          </span>
          <h2
            className={`mt-4 font-serif text-4xl font-bold leading-tight text-foreground md:text-5xl lg:text-6xl text-balance transition-all duration-700 delay-100 ${
              isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
            }`}
          >
            Prottek <span className="text-primary">Creator</span> er
            <br />
            Jonno Ekta Ghor
          </h2>
          <p
            className={`mt-6 text-lg leading-relaxed text-muted-foreground transition-all duration-700 delay-200 ${
              isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
            }`}
          >
            Amra shudhu ekta category te limited noi. Food theke tech, art theke 
            entrepreneurship -- Ebong sab dike ache.
          </p>
        </div>

        {/* Categories Grid */}
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
          {categories.map((cat, i) => {
            const Icon = cat.icon
            return (
              <div
                key={cat.title}
                className={`group relative overflow-hidden rounded-2xl border border-border bg-card p-6 transition-all duration-500 hover:border-primary/40 hover:shadow-xl hover:shadow-primary/5 hover:-translate-y-1 cursor-pointer ${
                  isVisible
                    ? "translate-y-0 opacity-100"
                    : "translate-y-8 opacity-0"
                }`}
                style={{ transitionDelay: `${200 + i * 80}ms` }}
              >
                {/* Icon */}
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary transition-all duration-300 group-hover:bg-primary group-hover:text-primary-foreground group-hover:scale-110">
                  <Icon className="h-5 w-5" />
                </div>

                {/* Content */}
                <h3 className="font-serif text-lg font-bold text-card-foreground transition-colors group-hover:text-primary">
                  {cat.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {cat.description}
                </p>

                {/* Count badge */}
                <div className="mt-4 inline-flex items-center gap-1.5 rounded-full bg-secondary px-3 py-1">
                  <span className="h-1.5 w-1.5 rounded-full bg-primary" />
                  <span className="text-xs font-semibold text-muted-foreground">
                    {cat.count} creators
                  </span>
                </div>

                {/* Hover accent line */}
                <div className="absolute bottom-0 left-0 h-1 w-0 bg-primary transition-all duration-500 group-hover:w-full" />
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
