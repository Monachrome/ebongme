"use client"

import { useState, useEffect } from "react"
import { useTheme } from "next-themes"
import { Moon, Sun, Menu, X } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const navLinks = [
    { href: "/#about", label: "Amader Kotha" },
    { href: "/#categories", label: "Categories" },
    { href: "/products", label: "Products" },
    { href: "/#community", label: "Community" },
    { href: "/#contact", label: "Jog Din" },
  ]

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-background/80 backdrop-blur-xl border-b border-border shadow-sm"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <Link href="/" className="logo-dark-glow flex items-center group">
          <Image
            src="/images/ebong-logo.png"
            alt="Ebong Logo"
            width={44}
            height={44}
            className="transition-transform duration-300 group-hover:scale-110 dark:drop-shadow-[0_0_12px_rgba(232,69,69,0.5)]"
          />
        </Link>

        {/* Desktop Nav */}
        <div className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="relative text-sm font-medium text-muted-foreground transition-colors duration-300 hover:text-foreground after:absolute after:bottom-[-4px] after:left-0 after:h-[2px] after:w-0 after:bg-primary after:transition-all after:duration-300 hover:after:w-full"
            >
              {link.label}
            </Link>
          ))}
          <button
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            className="flex h-9 w-9 items-center justify-center rounded-full border border-border bg-secondary text-secondary-foreground transition-all duration-300 hover:bg-primary hover:text-primary-foreground hover:border-primary"
            aria-label="Toggle theme"
          >
            {mounted && (theme === "dark" ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />)}
          </button>
          <Link
            href="/#contact"
            className="rounded-full bg-primary px-5 py-2 text-sm font-semibold text-primary-foreground transition-all duration-300 hover:shadow-lg hover:shadow-primary/25 hover:scale-105"
          >
            Join Ebong
          </Link>
        </div>

        {/* Mobile Controls */}
        <div className="flex items-center gap-3 md:hidden">
          <button
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            className="flex h-9 w-9 items-center justify-center rounded-full border border-border bg-secondary text-secondary-foreground"
            aria-label="Toggle theme"
          >
            {mounted && (theme === "dark" ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />)}
          </button>
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="flex h-9 w-9 items-center justify-center text-foreground"
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`overflow-hidden transition-all duration-500 md:hidden ${
          mobileOpen ? "max-h-80 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="flex flex-col gap-1 bg-background/95 backdrop-blur-xl px-6 pb-6 border-b border-border">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setMobileOpen(false)}
              className="py-3 text-base font-medium text-muted-foreground transition-colors hover:text-foreground border-b border-border/50 last:border-0"
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/#contact"
            onClick={() => setMobileOpen(false)}
            className="mt-3 rounded-full bg-primary px-5 py-3 text-center text-sm font-semibold text-primary-foreground"
          >
            Join Ebong
          </Link>
        </div>
      </div>
    </nav>
  )
}
