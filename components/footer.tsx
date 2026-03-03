"use client"

import Image from "next/image"
import { Heart } from "lucide-react"

export function Footer() {
  const links = [
    {
      title: "Platform",
      items: [
        { label: "Amader Kotha", href: "/#about" },
        { label: "Categories", href: "/#categories" },
        { label: "Products", href: "/products" },
        { label: "Community", href: "/#community" },
        { label: "Join Koro", href: "/#contact" },
      ],
    },
    {
      title: "Categories",
      items: [
        { label: "Artists", href: "#categories" },
        { label: "Writers", href: "#categories" },
        { label: "Photographers", href: "#categories" },
        { label: "Entrepreneurs", href: "#categories" },
      ],
    },
    {
      title: "Connect",
      items: [
        { label: "Instagram", href: "#" },
        { label: "Facebook", href: "#" },
        { label: "Twitter / X", href: "#" },
        { label: "Email", href: "mailto:hello@ebong.in" },
      ],
    },
  ]

  return (
    <footer className="border-t border-border bg-card">
      <div className="mx-auto max-w-7xl px-6 py-16 md:py-20">
        <div className="flex flex-col gap-12 lg:flex-row lg:gap-20">
          {/* Brand */}
          <div className="max-w-sm flex-shrink-0">
            <div className="logo-dark-glow inline-flex items-center">
              <Image
                src="/images/ebong-logo.png"
                alt="Ebong"
                width={40}
                height={40}
                className="dark:drop-shadow-[0_0_12px_rgba(232,69,69,0.5)]"
              />
            </div>
            <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
              Bengali shilpi, udyogpoti, ebong creator der platform. 
              Amra chai prottek Bangali creative mind pabe tar deserve kora spotlight.
            </p>
            <div className="mt-6 flex items-center gap-2 text-xs text-muted-foreground">
              <span>Made with</span>
              <Heart className="h-3 w-3 fill-primary text-primary" />
              <span>in Bengal</span>
            </div>
          </div>

          {/* Links */}
          <div className="flex flex-1 flex-wrap gap-12 lg:justify-end">
            {links.map((group) => (
              <div key={group.title} className="min-w-[140px]">
                <h4 className="text-xs font-bold uppercase tracking-[0.2em] text-foreground">
                  {group.title}
                </h4>
                <ul className="mt-4 flex flex-col gap-3">
                  {group.items.map((item) => (
                    <li key={item.label}>
                      <a
                        href={item.href}
                        className="text-sm text-muted-foreground transition-colors duration-300 hover:text-primary"
                      >
                        {item.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-16 flex flex-col items-center justify-between gap-4 border-t border-border pt-8 md:flex-row">
          <p className="text-xs text-muted-foreground">
            &copy; {new Date().getFullYear()} Ebong. Sob adhikar surakkhito.
          </p>
          <div className="flex items-center gap-6">
            <a href="#" className="text-xs text-muted-foreground transition-colors hover:text-primary">
              Privacy
            </a>
            <a href="#" className="text-xs text-muted-foreground transition-colors hover:text-primary">
              Terms
            </a>
          </div>
        </div>
      </div>

      {/* Giant brand watermark */}
      <div className="relative overflow-hidden border-t border-border bg-secondary py-8">
        <div className="mx-auto flex max-w-7xl items-center justify-center px-6">
          <span className="font-serif text-[8rem] font-bold leading-none text-foreground/[0.04] md:text-[12rem] lg:text-[16rem] select-none">
            Ebong
          </span>
        </div>
      </div>
    </footer>
  )
}
