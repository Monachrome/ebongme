"use client"

import { useEffect, useRef, useState } from "react"
import Image from "next/image"

export function AboutSection() {
  const sectionRef = useRef<HTMLElement>(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true)
      },
      { threshold: 0.2 }
    )
    if (sectionRef.current) observer.observe(sectionRef.current)
    return () => observer.disconnect()
  }, [])

  return (
    <section
      ref={sectionRef}
      id="about"
      className="relative overflow-hidden px-6 py-24 md:py-32"
    >
      <div className="mx-auto max-w-7xl">
        {/* Section Label */}
        <div
          className={`mb-4 transition-all duration-700 ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"
          }`}
        >
          <span className="inline-block rounded-full border border-primary/30 bg-primary/5 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-primary">
            Amader Kotha
          </span>
        </div>

        <div className="flex flex-col gap-16 lg:flex-row lg:items-center lg:gap-20">
          {/* Left - Text Content */}
          <div className="flex-1">
            <h2
              className={`font-serif text-4xl font-bold leading-tight text-foreground md:text-5xl lg:text-6xl text-balance transition-all duration-700 delay-100 ${
                isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
              }`}
            >
              Bangla r <span className="text-primary">Culture</span> ke
              <br />
              Digital Duniya te Ani
            </h2>

            <p
              className={`mt-8 max-w-xl text-lg leading-relaxed text-muted-foreground transition-all duration-700 delay-200 ${
                isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
              }`}
            >
              Ebong holo amader Bengali community r nijer platform -- jekhane shilpi, 
              udyogpoti, lekhok, ebong creator ra nijer kaaj showcase korte pare. 
              Amra chai je prottek Bangali creator pabe tar deserve kora recognition.
            </p>

            <p
              className={`mt-4 max-w-xl text-lg leading-relaxed text-muted-foreground transition-all duration-700 delay-300 ${
                isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
              }`}
            >
              Chhoto business theke boro shilpi -- <strong className="text-foreground">
              Ebong sobai ke connect kore</strong>. Amader uddesho holo ekta emon 
              ecosystem toiri kora jekhane Bengali talent flourish korbe.
            </p>

            {/* Stats */}
            <div
              className={`mt-10 flex flex-wrap gap-10 transition-all duration-700 delay-500 ${
                isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
              }`}
            >
              {[
                { number: "50+", label: "Creators" },
                { number: "10+", label: "Categories" },
                { number: "1", label: "Mission" },
              ].map((stat) => (
                <div key={stat.label} className="flex flex-col">
                  <span className="font-serif text-4xl font-bold text-primary md:text-5xl">
                    {stat.number}
                  </span>
                  <span className="mt-1 text-sm font-medium uppercase tracking-widest text-muted-foreground">
                    {stat.label}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Right - Illustration */}
          <div
            className={`relative flex-1 transition-all duration-1000 delay-300 ${
              isVisible ? "translate-x-0 opacity-100" : "translate-x-12 opacity-0"
            }`}
          >
            <div className="relative">
              {/* Decorative border */}
              <div className="absolute -inset-3 rounded-2xl border-2 border-dashed border-primary/20 rotate-2" />
              <div className="relative overflow-hidden rounded-2xl">
                <Image
                  src="/images/hero-illustration.jpg"
                  alt="Bengali cultural scene - hand drawn illustration of village life"
                  width={600}
                  height={500}
                  className="h-auto w-full object-cover"
                />
                {/* Subtle overlay */}
                <div className="absolute inset-0 bg-primary/5 mix-blend-multiply" />
              </div>
              {/* Floating badge */}
              <div className="absolute -bottom-4 -left-4 rounded-xl bg-card px-5 py-3 shadow-xl border border-border">
                <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">Est.</p>
                <p className="font-serif text-2xl font-bold text-primary">2024</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
