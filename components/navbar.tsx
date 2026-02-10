"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import {
  Search,
  MessageSquare,
  Bell,
  ChevronDown,
  Menu,
  X,
  Mic,
} from "lucide-react"
import { useState } from "react"

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/jobs", label: "Jobs" },
  { href: "/internships", label: "Internships" },
  { href: "/network", label: "Network" },
  { href: "/mentorship", label: "Mentorship" },
  { href: "/learning", label: "Learning" },
]

export function Navbar() {
  const pathname = usePathname()
  const [mobileOpen, setMobileOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 shadow-sm">
      {/* Top Row: Logo + Search + Icons + Avatar */}
      <div className="border-b border-border bg-card">
        <div className="mx-auto flex h-14 max-w-7xl items-center gap-4 px-4">
          {/* Logo */}
          <Link href="/" className="flex shrink-0 items-center gap-2">
            <svg width="32" height="32" viewBox="0 0 32 32" fill="none" aria-hidden="true">
              <rect width="32" height="32" rx="6" fill="#1E3A8A" />
              <path
                d="M8 12L12 8L20 8L24 12L24 20L20 24L12 24L8 20Z"
                fill="#F6C90E"
                opacity="0.9"
              />
              <path
                d="M12 14L16 10L20 14V18L16 22L12 18V14Z"
                fill="#1E3A8A"
              />
            </svg>
            <span className="text-lg font-bold tracking-tight text-primary">NEXUS</span>
          </Link>

          {/* Search bar */}
          <div className="mx-4 hidden max-w-md flex-1 md:block">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
              <input
                type="text"
                placeholder="Search for people, jobs, companies"
                className="h-9 w-full rounded-lg border border-border bg-secondary pl-9 pr-10 text-sm text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
              />
              <Mic className="absolute right-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
            </div>
          </div>

          {/* Right side: notifications + avatar */}
          <div className="ml-auto flex items-center gap-1">
            <button
              className="relative rounded-lg p-2 text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground"
              aria-label="Messages"
            >
              <MessageSquare className="h-5 w-5" />
              <span className="absolute right-1 top-1 flex h-4 w-4 items-center justify-center rounded-full bg-destructive text-[10px] font-bold text-destructive-foreground">
                3
              </span>
            </button>
            <button
              className="relative rounded-lg p-2 text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground"
              aria-label="Notifications"
            >
              <Bell className="h-5 w-5" />
              <span className="absolute right-1 top-1 flex h-4 w-4 items-center justify-center rounded-full bg-destructive text-[10px] font-bold text-destructive-foreground">
                5
              </span>
            </button>

            {/* Avatar */}
            <button className="ml-2 hidden items-center gap-2 rounded-lg px-2 py-1.5 transition-colors hover:bg-secondary lg:flex">
              <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary text-xs font-bold text-primary-foreground">
                AM
              </div>
              <span className="text-sm font-medium text-foreground">Alex Morgan</span>
              <ChevronDown className="h-3.5 w-3.5 text-muted-foreground" />
            </button>

            {/* Mobile menu toggle */}
            <button
              className="ml-1 rounded-lg p-2 text-muted-foreground hover:bg-secondary lg:hidden"
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label="Toggle menu"
            >
              {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Bottom Row: Deep blue navigation bar */}
      <div className="bg-primary">
        <nav className="mx-auto hidden max-w-7xl items-center gap-0 px-4 lg:flex" aria-label="Main navigation">
          {navLinks.map((link) => {
            const isActive =
              link.href === "/" ? pathname === "/" : pathname.startsWith(link.href)
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`relative px-5 py-2.5 text-sm font-medium transition-colors ${
                  isActive
                    ? "text-primary-foreground"
                    : "text-primary-foreground/70 hover:text-primary-foreground"
                }`}
              >
                {link.label}
                {isActive && (
                  <span className="absolute bottom-0 left-2 right-2 h-0.5 rounded-full bg-accent" />
                )}
              </Link>
            )
          })}
        </nav>
      </div>

      {/* Mobile nav */}
      {mobileOpen && (
        <nav
          className="border-b border-border bg-card px-4 pb-4 pt-2 lg:hidden"
          aria-label="Mobile navigation"
        >
          {/* Mobile search */}
          <div className="relative mb-3 md:hidden">
            <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
            <input
              type="text"
              placeholder="Search for people, jobs, companies"
              className="h-9 w-full rounded-lg border border-border bg-secondary pl-9 pr-4 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none"
            />
          </div>
          <div className="flex flex-col gap-0.5">
            {navLinks.map((link) => {
              const isActive =
                link.href === "/" ? pathname === "/" : pathname.startsWith(link.href)
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className={`rounded-lg px-3 py-2.5 text-sm font-medium transition-colors ${
                    isActive
                      ? "bg-primary/5 text-primary"
                      : "text-muted-foreground hover:bg-secondary hover:text-foreground"
                  }`}
                >
                  {link.label}
                </Link>
              )
            })}
          </div>
          {/* Mobile avatar */}
          <div className="mt-3 flex items-center gap-3 rounded-lg bg-secondary p-3">
            <div className="flex h-9 w-9 items-center justify-center rounded-full bg-primary text-xs font-bold text-primary-foreground">
              AM
            </div>
            <div>
              <p className="text-sm font-medium text-foreground">Alex Morgan</p>
              <p className="text-xs text-muted-foreground">View Profile</p>
            </div>
          </div>
        </nav>
      )}
    </header>
  )
}
