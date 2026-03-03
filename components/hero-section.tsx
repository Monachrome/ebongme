"use client"

import { useState, useEffect, useCallback } from "react"
import Image from "next/image"
import { ArrowDown } from "lucide-react"

const dynamicPhrases = [
  "Bangali Shilpi der Platform",
  "Udyogpoti der Thikana",
  "Sanskriti k Banchiye Rakhi",
  "Creators der Jagat",
  "Culture er Noya Disha",
  "Sobai k Niye Egiye Choli",
]

export function HeroSection() {
  const [currentPhrase, setCurrentPhrase] = useState("")
  const [phraseIndex, setPhraseIndex] = useState(0)
  const [charIndex, setCharIndex] = useState(0)
  const [isDeleting, setIsDeleting] = useState(false)
  const [logoLoaded, setLogoLoaded] = useState(false)
  const [showContent, setShowContent] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => setLogoLoaded(true), 300)
    const contentTimer = setTimeout(() => setShowContent(true), 800)
    return () => {
      clearTimeout(timer)
      clearTimeout(contentTimer)
    }
  }, [])

  const typeEffect = useCallback(() => {
    const phrase = dynamicPhrases[phraseIndex]

    if (!isDeleting) {
      if (charIndex < phrase.length) {
        setCurrentPhrase(phrase.substring(0, charIndex + 1))
        setCharIndex((prev) => prev + 1)
      } else {
        setTimeout(() => setIsDeleting(true), 2000)
        return
      }
    } else {
      if (charIndex > 0) {
        setCurrentPhrase(phrase.substring(0, charIndex - 1))
        setCharIndex((prev) => prev - 1)
      } else {
        setIsDeleting(false)
        setPhraseIndex((prev) => (prev + 1) % dynamicPhrases.length)
      }
    }
  }, [charIndex, isDeleting, phraseIndex])

  useEffect(() => {
    const speed = isDeleting ? 40 : 80
    const timer = setTimeout(typeEffect, speed)
    return () => clearTimeout(timer)
  }, [typeEffect, isDeleting])

  return (
    <section className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden px-6">
      {/* Background decorative elements */}
      <div className="pointer-events-none absolute inset-0">
        {/* Subtle texture overlay */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,var(--ebong-red)_0%,transparent_70%)] opacity-[0.03]" />
        {/* Top-right decorative brush stroke */}
        <svg
          className="absolute -right-20 -top-20 h-96 w-96 opacity-[0.06] text-primary"
          viewBox="0 0 200 200"
          fill="currentColor"
        >
          <path d="M 40 20 Q 80 10, 120 40 Q 160 70, 140 120 Q 120 170, 60 160 Q 0 150, 20 100 Q 40 50, 40 20 Z" />
        </svg>
        {/* Bottom-left decorative element */}
        <svg
          className="absolute -bottom-10 -left-10 h-72 w-72 opacity-[0.05] text-primary"
          viewBox="0 0 200 200"
          fill="currentColor"
        >
          <path d="M 100 10 Q 150 50, 180 100 Q 150 150, 100 190 Q 50 150, 20 100 Q 50 50, 100 10 Z" />
        </svg>
        {/* Floating dots pattern */}
        <div className="absolute right-[15%] top-[20%] h-2 w-2 rounded-full bg-primary/20 animate-float" />
        <div className="absolute left-[20%] top-[30%] h-1.5 w-1.5 rounded-full bg-ebong-gold/30 animate-float" style={{ animationDelay: "1s" }} />
        <div className="absolute right-[25%] bottom-[30%] h-2.5 w-2.5 rounded-full bg-primary/15 animate-float" style={{ animationDelay: "2s" }} />
        <div className="absolute left-[10%] bottom-[25%] h-1.5 w-1.5 rounded-full bg-ebong-gold/25 animate-float" style={{ animationDelay: "0.5s" }} />
      </div>

      {/* Main Hero Content */}
      <div className="relative z-10 flex flex-col items-center gap-8 text-center">
        {/* Logo */}
        <div
          className={`transition-all duration-1000 ease-out ${
            logoLoaded
              ? "translate-y-0 opacity-100 scale-100"
              : "translate-y-8 opacity-0 scale-90"
          }`}
        >
          <div className="relative">
            {/* Dark mode backdrop glow */}
            <div className="absolute inset-0 m-auto h-80 w-80 md:h-[22rem] md:w-[22rem] rounded-full bg-transparent dark:bg-[radial-gradient(circle,rgba(253,246,238,0.18)_0%,rgba(232,69,69,0.1)_50%,transparent_80%)] dark:shadow-[0_0_120px_rgba(232,69,69,0.4)]" />
            <Image
              src="/images/ebong-logo.png"
              alt="Ebong - Bengali for 'And'"
              width={340}
              height={340}
              priority
              className="relative z-10 animate-pulse-glow drop-shadow-2xl w-[280px] h-[280px] md:w-[340px] md:h-[340px] lg:w-[400px] lg:h-[400px] object-contain"
            />
            {/* Decorative ring around logo */}
            <div className="absolute -inset-8 rounded-full border border-dashed border-primary/20 animate-[spin_20s_linear_infinite]" />
            <div className="absolute -inset-16 rounded-full border border-dotted border-ebong-gold/10 animate-[spin_30s_linear_infinite_reverse]" />
          </div>
        </div>

        {/* Dynamic Typing Text */}
        <div
          className={`transition-all duration-1000 delay-500 ${
            showContent
              ? "translate-y-0 opacity-100"
              : "translate-y-6 opacity-0"
          }`}
        >
          <div className="flex items-center justify-center gap-1 text-xl font-medium text-foreground md:text-2xl lg:text-3xl">
            <span className="text-muted-foreground">{">"}</span>
            <span className="text-primary">{currentPhrase}</span>
            <span className="inline-block w-[3px] h-7 md:h-8 bg-primary animate-blink" />
          </div>
        </div>

        {/* Subtitle */}
        <div
          className={`max-w-2xl transition-all duration-1000 delay-700 ${
            showContent
              ? "translate-y-0 opacity-100"
              : "translate-y-6 opacity-0"
          }`}
        >
          <p className="text-base leading-relaxed text-muted-foreground md:text-lg">
            Bangali shilpi, udyogpoti, lekhok, photographer, chef, developer -- 
            jara nijer kaaj diye Bangla ke represent kore, tader sabar jonno <strong className="text-foreground">ekta platform</strong>.
          </p>
        </div>

        {/* CTA Buttons */}
        <div
          className={`flex flex-col items-center gap-4 sm:flex-row transition-all duration-1000 delay-1000 ${
            showContent
              ? "translate-y-0 opacity-100"
              : "translate-y-6 opacity-0"
          }`}
        >
          <a
            href="#about"
            className="group relative inline-flex items-center gap-2 overflow-hidden rounded-full bg-primary px-8 py-3.5 text-sm font-semibold text-primary-foreground transition-all duration-300 hover:shadow-xl hover:shadow-primary/25 hover:scale-105"
          >
            <span className="relative z-10">Explore Ebong</span>
            <span className="relative z-10 transition-transform duration-300 group-hover:translate-x-1">
              {"->"}
            </span>
            <div className="absolute inset-0 bg-foreground opacity-0 transition-opacity duration-300 group-hover:opacity-10" />
          </a>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 rounded-full border-2 border-border px-8 py-3.5 text-sm font-semibold text-foreground transition-all duration-300 hover:border-primary hover:text-primary hover:scale-105"
          >
            Amader Sathe Jog Din
          </a>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div
        className={`absolute bottom-8 transition-all duration-1000 delay-[1200ms] ${
          showContent ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
        }`}
      >
        <a
          href="#marquee"
          className="flex flex-col items-center gap-2 text-muted-foreground transition-colors hover:text-primary"
          aria-label="Scroll down"
        >
          <span className="text-xs font-medium uppercase tracking-widest">Niche Dekhi</span>
          <ArrowDown className="h-4 w-4 animate-bounce" />
        </a>
      </div>
    </section>
  )
}
