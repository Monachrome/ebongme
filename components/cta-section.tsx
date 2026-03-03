"use client"

import { useEffect, useRef, useState } from "react"
import Image from "next/image"
import { Send } from "lucide-react"

export function CTASection() {
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
      id="contact"
      className="relative overflow-hidden px-6 py-24 md:py-32 bg-secondary"
    >
      {/* Background decorative */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 h-[600px] w-[600px] rounded-full bg-primary/[0.03]" />
      </div>

      <div className="relative mx-auto max-w-4xl text-center">
        {/* Logo */}
        <div
          className={`mb-8 flex justify-center transition-all duration-700 ${
            isVisible ? "translate-y-0 opacity-100 scale-100" : "translate-y-6 opacity-0 scale-90"
          }`}
        >
          <Image
            src="/images/ebong-logo.png"
            alt="Ebong"
            width={80}
            height={80}
            className="opacity-80"
          />
        </div>

        <span
          className={`inline-block rounded-full border border-primary/30 bg-primary/5 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-primary transition-all duration-700 ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"
          }`}
        >
          Jog Din
        </span>

        <h2
          className={`mt-6 font-serif text-4xl font-bold leading-tight text-foreground md:text-5xl lg:text-6xl text-balance transition-all duration-700 delay-100 ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
          }`}
        >
          Amader <span className="text-primary">Sathe</span>
          <br />
          Eksathe Choli
        </h2>

        <p
          className={`mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-muted-foreground transition-all duration-700 delay-200 ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
          }`}
        >
          Tumi ki ekjon Bengali creator, entrepreneur, ba shilpi? Tumi ki chai je 
          tomar kaaj aro manush dekhuk? Tahole Ebong tomar jonno.
        </p>

        {/* Email Form */}
        <div
          className={`mx-auto mt-10 max-w-lg transition-all duration-700 delay-400 ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
          }`}
        >
          <form
            onSubmit={(e) => e.preventDefault()}
            className="flex flex-col gap-3 sm:flex-row"
          >
            <input
              type="email"
              placeholder="tomar@email.com"
              className="flex-1 rounded-full border border-border bg-card px-6 py-3.5 text-sm text-card-foreground placeholder:text-muted-foreground transition-all duration-300 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
            />
            <button
              type="submit"
              className="group inline-flex items-center justify-center gap-2 rounded-full bg-primary px-8 py-3.5 text-sm font-semibold text-primary-foreground transition-all duration-300 hover:shadow-lg hover:shadow-primary/25 hover:scale-105"
            >
              <span>Join Koro</span>
              <Send className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-0.5" />
            </button>
          </form>
          <p className="mt-4 text-xs text-muted-foreground">
            Kono spam nei, promise. Shudhu Ebong er important updates pabe.
          </p>
        </div>

        {/* Trust badges */}
        <div
          className={`mt-16 flex flex-wrap items-center justify-center gap-8 transition-all duration-700 delay-500 ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
          }`}
        >
          {["100% Free", "Community Driven", "For Bengalis, By Bengalis"].map(
            (badge) => (
              <div
                key={badge}
                className="flex items-center gap-2 text-sm text-muted-foreground"
              >
                <span className="h-2 w-2 rounded-full bg-primary/60" />
                {badge}
              </div>
            )
          )}
        </div>
      </div>
    </section>
  )
}
