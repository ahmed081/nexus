"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import {
  Search,
  MapPin,
  Users,
  Briefcase,
  GraduationCap,
  ShieldCheck,
  ExternalLink,
  Building2,
} from "lucide-react"

const companies = [
  {
    name: "TechSolutions",
    initials: "TS",
    tagline: "Building the future of enterprise software",
    industry: "Software Development",
    location: "San Francisco, CA",
    size: "500-1000",
    openJobs: 18,
    openInternships: 4,
    trustScore: 96,
    verified: true,
    description:
      "TechSolutions develops cutting-edge enterprise platforms with a focus on AI-driven analytics, cloud infrastructure, and developer tools. Known for strong engineering culture and mentorship.",
  },
  {
    name: "BrightFin",
    initials: "BF",
    tagline: "Ethical financial technology for everyone",
    industry: "Fintech",
    location: "New York, NY",
    size: "200-500",
    openJobs: 12,
    openInternships: 2,
    trustScore: 91,
    verified: true,
    description:
      "BrightFin creates accessible financial tools that prioritize transparency and user education. A mission-driven fintech company with strong growth.",
  },
  {
    name: "GlobalTech",
    initials: "GT",
    tagline: "Connecting the world through technology",
    industry: "Technology Services",
    location: "Austin, TX",
    size: "1000+",
    openJobs: 9,
    openInternships: 6,
    trustScore: 88,
    verified: true,
    description:
      "GlobalTech provides IT consulting and managed services to enterprises worldwide. Known for investing in employee growth and remote-first culture.",
  },
  {
    name: "DesignHub",
    initials: "DH",
    tagline: "Design that makes a difference",
    industry: "Design & Creative",
    location: "Austin, TX",
    size: "50-200",
    openJobs: 5,
    openInternships: 3,
    trustScore: 94,
    verified: true,
    description:
      "DesignHub is a product design agency that partners with startups and enterprises. We value creativity, accessibility, and human-centered design.",
  },
  {
    name: "CloudScale",
    initials: "CS",
    tagline: "Scale with confidence",
    industry: "Cloud Infrastructure",
    location: "Seattle, WA",
    size: "200-500",
    openJobs: 7,
    openInternships: 2,
    trustScore: 90,
    verified: false,
    description:
      "CloudScale helps companies migrate and optimize their cloud infrastructure on AWS, GCP, and Azure. Strong DevOps culture and cutting-edge tooling.",
  },
  {
    name: "EthicaGroup",
    initials: "EG",
    tagline: "Social impact through innovation",
    industry: "Non-profit / Social Impact",
    location: "New York, NY",
    size: "10-50",
    openJobs: 2,
    openInternships: 5,
    trustScore: 97,
    verified: true,
    description:
      "EthicaGroup is a non-profit focused on leveraging technology for social good. We partner with communities and governments to drive equitable outcomes.",
  },
]

export default function CompaniesPage() {
  const [searchQuery, setSearchQuery] = useState("")

  const filtered = companies.filter(
    (c) =>
      searchQuery === "" ||
      c.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      c.industry.toLowerCase().includes(searchQuery.toLowerCase())
  )

  return (
    <div className="mx-auto max-w-7xl px-4 py-6">
      {/* Header */}
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-foreground">Companies</h1>
        <p className="mt-1 text-muted-foreground">
          Discover trusted companies that value ethical hiring and transparency
        </p>
      </div>

      {/* Search */}
      <div className="relative mb-6 max-w-lg">
        <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
        <input
          type="text"
          placeholder="Search companies or industries..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="h-10 w-full rounded-lg border border-border bg-card pl-9 pr-4 text-sm text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
        />
      </div>

      {/* Company Grid */}
      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
        {filtered.map((company) => (
          <Card key={company.name} className="flex flex-col transition-shadow hover:shadow-md">
            <CardContent className="flex flex-1 flex-col p-5">
              {/* Header */}
              <div className="flex items-start gap-4">
                <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl bg-primary text-lg font-bold text-primary-foreground">
                  {company.initials}
                </div>
                <div className="min-w-0 flex-1">
                  <div className="flex items-center gap-2">
                    <h3 className="truncate font-semibold text-foreground">{company.name}</h3>
                    {company.verified && (
                      <ShieldCheck className="h-4 w-4 shrink-0 text-success" />
                    )}
                  </div>
                  <p className="text-sm text-muted-foreground">{company.tagline}</p>
                </div>
              </div>

              {/* Details */}
              <div className="mt-3 flex flex-wrap items-center gap-x-4 gap-y-1 text-sm text-muted-foreground">
                <span className="flex items-center gap-1">
                  <Building2 className="h-3.5 w-3.5" />
                  {company.industry}
                </span>
                <span className="flex items-center gap-1">
                  <MapPin className="h-3.5 w-3.5" />
                  {company.location}
                </span>
                <span className="flex items-center gap-1">
                  <Users className="h-3.5 w-3.5" />
                  {company.size} employees
                </span>
              </div>

              <p className="mt-3 flex-1 text-sm leading-relaxed text-foreground/80">
                {company.description}
              </p>

              {/* Trust + Stats */}
              <div className="mt-4 flex items-center justify-between border-t border-border pt-3">
                <div className="flex items-center gap-4">
                  <div className="text-center">
                    <p className="text-lg font-bold text-foreground">{company.openJobs}</p>
                    <p className="flex items-center gap-1 text-xs text-muted-foreground">
                      <Briefcase className="h-3 w-3" /> Jobs
                    </p>
                  </div>
                  <div className="text-center">
                    <p className="text-lg font-bold text-foreground">{company.openInternships}</p>
                    <p className="flex items-center gap-1 text-xs text-muted-foreground">
                      <GraduationCap className="h-3 w-3" /> Internships
                    </p>
                  </div>
                </div>
                <div className="text-right">
                  <p className="text-sm font-semibold text-success">
                    {company.trustScore}% Trust
                  </p>
                  <p className="text-xs text-muted-foreground">Ethical Score</p>
                </div>
              </div>

              {/* Actions */}
              <div className="mt-3 flex gap-2">
                <Button variant="outline" size="sm" className="flex-1 gap-1.5 bg-transparent">
                  <ExternalLink className="h-4 w-4" />
                  View Profile
                </Button>
                <Button size="sm" className="flex-1 bg-primary text-primary-foreground hover:bg-primary/90">
                  View Jobs
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {filtered.length === 0 && (
        <div className="py-16 text-center text-muted-foreground">
          No companies match your search.
        </div>
      )}
    </div>
  )
}
