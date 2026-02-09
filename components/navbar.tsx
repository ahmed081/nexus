"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import {
  Search,
  MessageSquare,
  Bell,
  Home,
  Briefcase,
  GraduationCap,
  Users,
  Building2,
  UserCircle,
  ChevronDown,
  Menu,
  X,
} from "lucide-react"
import { useState } from "react"

const navLinks = [
  { href: "/", label: "Home", icon: Home },
  { href: "/jobs", label: "Jobs", icon: Briefcase },
  { href: "/internships", label: "Internships", icon: GraduationCap },
  { href: "/network", label: "Network", icon: Users },
  { href: "/companies", label: "Companies", icon: Building2 },
  { href: "/profile", label: "Profile", icon: UserCircle },
]

export function Navbar() {
  const pathname = usePathname()
  const [mobileOpen, setMobileOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-primary text-primary-foreground">
      <div className="mx-auto flex h-14 max-w-7xl items-center justify-between px-4">
        {/* Logo */}
        <Link href="/" className="flex shrink-0 items-center gap-2">
          <svg width="28" height="28" viewBox="0 0 28 28" fill="none" aria-hidden="true">
            <path d="M4 4L14 2L24 4L26 14L24 24L14 26L4 24L2 14L4 4Z" fill="#F6C90E" />
            <path d="M8 10L14 6L20 10V18L14 22L8 18V10Z" fill="#1E3A8A" />
          </svg>
          <span className="text-lg font-bold tracking-tight">NEXUS</span>
        </Link>

        {/* Search bar - desktop */}
        <div className="mx-6 hidden max-w-md flex-1 md:block">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
            <input
              type="text"
              placeholder="Search people, jobs, companies"
              className="h-9 w-full rounded-md bg-primary-foreground/10 pl-9 pr-3 text-sm text-primary-foreground placeholder:text-primary-foreground/50 focus:bg-primary-foreground/20 focus:outline-none focus:ring-1 focus:ring-accent"
            />
          </div>
        </div>

        {/* Desktop nav links */}
        <nav className="hidden items-center gap-1 lg:flex" aria-label="Main navigation">
          {navLinks.map((link) => {
            const isActive = pathname === link.href
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`flex flex-col items-center gap-0.5 rounded-md px-3 py-1.5 text-xs font-medium transition-colors ${
                  isActive
                    ? "bg-primary-foreground/20 text-accent"
                    : "text-primary-foreground/80 hover:bg-primary-foreground/10 hover:text-primary-foreground"
                }`}
              >
                <link.icon className="h-5 w-5" />
                <span>{link.label}</span>
              </Link>
            )
          })}
        </nav>

        {/* Right side: notifications + avatar */}
        <div className="flex items-center gap-3">
          <button className="relative rounded-md p-2 text-primary-foreground/80 hover:bg-primary-foreground/10 hover:text-primary-foreground" aria-label="Messages">
            <MessageSquare className="h-5 w-5" />
            <span className="absolute right-1 top-1 flex h-4 w-4 items-center justify-center rounded-full bg-accent text-[10px] font-bold text-accent-foreground">3</span>
          </button>
          <button className="relative rounded-md p-2 text-primary-foreground/80 hover:bg-primary-foreground/10 hover:text-primary-foreground" aria-label="Notifications">
            <Bell className="h-5 w-5" />
            <span className="absolute right-1 top-1 flex h-4 w-4 items-center justify-center rounded-full bg-accent text-[10px] font-bold text-accent-foreground">5</span>
          </button>

          {/* Avatar */}
          <button className="hidden items-center gap-1.5 rounded-md px-2 py-1 hover:bg-primary-foreground/10 lg:flex">
            <div className="flex h-8 w-8 items-center justify-center rounded-full bg-accent text-sm font-bold text-accent-foreground">
              AM
            </div>
            <span className="text-sm font-medium text-primary-foreground">Alex Morgan</span>
            <ChevronDown className="h-3.5 w-3.5 text-primary-foreground/60" />
          </button>

          {/* Mobile menu toggle */}
          <button
            className="rounded-md p-2 text-primary-foreground/80 hover:bg-primary-foreground/10 lg:hidden"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {/* Mobile nav */}
      {mobileOpen && (
        <nav className="border-t border-primary-foreground/10 bg-primary px-4 pb-4 pt-2 lg:hidden" aria-label="Mobile navigation">
          {/* Mobile search */}
          <div className="relative mb-3 md:hidden">
            <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
            <input
              type="text"
              placeholder="Search people, jobs, companies"
              className="h-9 w-full rounded-md bg-primary-foreground/10 pl-9 pr-3 text-sm text-primary-foreground placeholder:text-primary-foreground/50 focus:outline-none"
            />
          </div>
          <div className="grid grid-cols-3 gap-2">
            {navLinks.map((link) => {
              const isActive = pathname === link.href
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className={`flex flex-col items-center gap-1 rounded-lg p-3 text-xs font-medium transition-colors ${
                    isActive
                      ? "bg-primary-foreground/20 text-accent"
                      : "text-primary-foreground/70 hover:bg-primary-foreground/10 hover:text-primary-foreground"
                  }`}
                >
                  <link.icon className="h-5 w-5" />
                  <span>{link.label}</span>
                </Link>
              )
            })}
          </div>
        </nav>
      )}
    </header>
  )
}
