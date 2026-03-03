"use client"

import { useEffect, useRef, useState } from "react"
import Image from "next/image"
import { ArrowRight } from "lucide-react"

const features = [
  {
    title: "Showcase Koro",
    description:
      "Tomar portfolio, tomar kaaj, tomar golpo -- Ebong e share koro ebong Bangali community r sathe connect hao.",
    image: "/images/culture-illustration.jpg",
    imageAlt: "Bengali cultural illustration showing artists and musicians",
  },
  {
    title: "Network Toiri Koro",
    description:
      "Onno creators, entrepreneurs, ebong like-minded Bangali der sathe networking koro. Collaboration er noya rasta khulo.",
    image: "/images/entrepreneur-illustration.jpg",
    imageAlt: "Illustration of Bengali entrepreneurs collaborating",
  },
  {
    title: "Grow Together",
    description:
      "Amader community te shikho, share koro, ebong boro hao. Events, workshops, ebong mentorship -- sob ache Ebong e.",
    image: "/images/community-illustration.jpg",
    imageAlt: "Illustration of Bengali community gathering",
  },
]

export function CommunitySection() {
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
      id="community"
      className="relative px-6 py-24 md:py-32"
    >
      <div className="mx-auto max-w-7xl">
        {/* Header */}
        <div className="mb-16 text-center">
          <span
            className={`inline-block rounded-full border border-primary/30 bg-primary/5 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-primary transition-all duration-700 ${
              isVisible ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"
            }`}
          >
            Community
          </span>
          <h2
            className={`mx-auto mt-4 max-w-3xl font-serif text-4xl font-bold leading-tight text-foreground md:text-5xl lg:text-6xl text-balance transition-all duration-700 delay-100 ${
              isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
            }`}
          >
            Eksathe <span className="text-primary">Boro</span> Hoi
          </h2>
          <p
            className={`mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-muted-foreground transition-all duration-700 delay-200 ${
              isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
            }`}
          >
            Ebong shudhu ekta directory noy -- eta ekta movement. Bangali creativity 
            ebong entrepreneurship ke promote korar jonno amra eksathe.
          </p>
        </div>

        {/* Feature Cards */}
        <div className="flex flex-col gap-8">
          {features.map((feature, i) => (
            <div
              key={feature.title}
              className={`group flex flex-col overflow-hidden rounded-3xl border border-border bg-card transition-all duration-700 hover:border-primary/30 hover:shadow-2xl hover:shadow-primary/5 md:flex-row ${
                i % 2 !== 0 ? "md:flex-row-reverse" : ""
              } ${
                isVisible
                  ? "translate-y-0 opacity-100"
                  : "translate-y-10 opacity-0"
              }`}
              style={{ transitionDelay: `${300 + i * 200}ms` }}
            >
              {/* Image */}
              <div className="relative h-64 w-full overflow-hidden md:h-auto md:w-1/2">
                <Image
                  src={feature.image}
                  alt={feature.imageAlt}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-primary/5 mix-blend-multiply" />
              </div>

              {/* Content */}
              <div className="flex flex-1 flex-col justify-center p-8 md:p-12 lg:p-16">
                <span className="mb-3 text-sm font-bold text-primary">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="font-serif text-3xl font-bold text-card-foreground md:text-4xl">
                  {feature.title}
                </h3>
                <p className="mt-4 text-base leading-relaxed text-muted-foreground md:text-lg">
                  {feature.description}
                </p>
                <div className="mt-6">
                  <span className="inline-flex items-center gap-2 text-sm font-semibold text-primary transition-all duration-300 group-hover:gap-3 cursor-pointer">
                    Aro Jano
                    <ArrowRight className="h-4 w-4" />
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
