"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import {
  Search,
  MapPin,
  Clock,
  Building2,
  Filter,
  Bookmark,
  GraduationCap,
  CheckCircle,
  BadgeDollarSign,
} from "lucide-react"

const payFilters = ["All", "Paid", "Unpaid", "Stipend"]

const internships = [
  {
    title: "Data Analyst Intern",
    company: "Acme Corp",
    initials: "AC",
    location: "Remote",
    duration: "3 months",
    pay: "Paid",
    stipend: "$2,500/mo",
    skillMatch: 72,
    skills: ["SQL", "Excel", "Python", "Tableau"],
    outcomes: ["Data visualization", "Report generation", "Statistical analysis"],
    description: "Gain hands-on experience working with real datasets. You'll support the analytics team in building dashboards and generating actionable insights.",
  },
  {
    title: "Marketing Coordinator Intern",
    company: "BrandForce",
    initials: "BF",
    location: "Chicago, IL (Hybrid)",
    duration: "6 months",
    pay: "Paid",
    stipend: "$1,800/mo",
    skillMatch: 55,
    skills: ["Social Media", "Content Writing", "SEO", "Canva"],
    outcomes: ["Campaign management", "Content creation", "Analytics reporting"],
    description: "Work alongside the marketing team to plan, execute, and evaluate digital marketing campaigns across multiple channels.",
  },
  {
    title: "Junior Developer Intern",
    company: "TechSolutions",
    initials: "TS",
    location: "San Francisco, CA (On-site)",
    duration: "4 months",
    pay: "Paid",
    stipend: "$3,000/mo",
    skillMatch: 88,
    skills: ["JavaScript", "React", "Git", "HTML/CSS"],
    outcomes: ["Full-stack development", "Code reviews", "Agile workflows"],
    description: "Join a supportive team to build real features that ship to users. Mentorship included with senior developers.",
  },
  {
    title: "UX Research Intern",
    company: "DesignHub",
    initials: "DH",
    location: "Remote",
    duration: "3 months",
    pay: "Stipend",
    stipend: "$1,200/mo",
    skillMatch: 60,
    skills: ["User Interviews", "Wireframing", "Figma", "Survey Design"],
    outcomes: ["Research methodologies", "Usability testing", "Persona creation"],
    description: "Conduct user research to inform product decisions. Learn industry-standard methodologies alongside experienced researchers.",
  },
  {
    title: "Social Impact Intern",
    company: "EthicaGroup",
    initials: "EG",
    location: "New York, NY (On-site)",
    duration: "2 months",
    pay: "Unpaid",
    stipend: null,
    skillMatch: 40,
    skills: ["Research", "Writing", "Presentation", "Community Outreach"],
    outcomes: ["Impact assessment", "Grant writing", "Stakeholder engagement"],
    description: "Contribute to social impact projects and help communities. Academic credit available. Limited to 20 hrs/week.",
  },
  {
    title: "Cloud Engineering Intern",
    company: "CloudScale",
    initials: "CS",
    location: "Seattle, WA (Hybrid)",
    duration: "6 months",
    pay: "Paid",
    stipend: "$3,500/mo",
    skillMatch: 75,
    skills: ["AWS", "Linux", "Docker", "Python"],
    outcomes: ["Cloud architecture", "CI/CD pipelines", "Infrastructure as Code"],
    description: "Work on cloud infrastructure projects with real production workloads. Mentorship program and full-time conversion opportunity.",
  },
]

function getPayBadge(pay: string) {
  switch (pay) {
    case "Paid":
      return "bg-success/10 text-success"
    case "Unpaid":
      return "bg-destructive/10 text-destructive"
    case "Stipend":
      return "bg-accent/10 text-accent-foreground"
    default:
      return "bg-secondary text-foreground"
  }
}

function getMatchColor(match: number) {
  if (match >= 80) return "text-success"
  if (match >= 60) return "text-accent"
  return "text-muted-foreground"
}

export default function InternshipsPage() {
  const [activePay, setActivePay] = useState("All")
  const [searchQuery, setSearchQuery] = useState("")

  const filtered = internships.filter((i) => {
    const matchesPay = activePay === "All" || i.pay === activePay
    const matchesSearch =
      searchQuery === "" ||
      i.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      i.company.toLowerCase().includes(searchQuery.toLowerCase()) ||
      i.skills.some((s) => s.toLowerCase().includes(searchQuery.toLowerCase()))
    return matchesPay && matchesSearch
  })

  return (
    <div className="mx-auto max-w-7xl px-4 py-6">
      {/* Header */}
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-foreground">Internships</h1>
        <p className="mt-1 text-muted-foreground">
          Discover ethical internship opportunities with clear learning outcomes
        </p>
      </div>

      {/* Search & Filters */}
      <div className="mb-6 flex flex-col gap-4 sm:flex-row sm:items-center">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
          <input
            type="text"
            placeholder="Search internship titles, companies, or skills..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="h-10 w-full rounded-lg border border-border bg-card pl-9 pr-4 text-sm text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
          />
        </div>
        <div className="flex items-center gap-2">
          <Filter className="h-4 w-4 shrink-0 text-muted-foreground" />
          {payFilters.map((f) => (
            <button
              key={f}
              onClick={() => setActivePay(f)}
              className={`whitespace-nowrap rounded-full px-3.5 py-1.5 text-sm font-medium transition-colors ${
                activePay === f
                  ? "bg-primary text-primary-foreground"
                  : "bg-card text-muted-foreground hover:bg-secondary hover:text-foreground"
              }`}
            >
              {f}
            </button>
          ))}
        </div>
      </div>

      {/* Internship listings */}
      <div className="space-y-4">
        {filtered.map((internship) => (
          <Card key={`${internship.title}-${internship.company}`} className="transition-shadow hover:shadow-md">
            <CardContent className="p-5">
              <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
                <div className="flex items-start gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-primary text-sm font-bold text-primary-foreground">
                    {internship.initials}
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground">{internship.title}</h3>
                    <div className="mt-0.5 flex flex-wrap items-center gap-x-3 gap-y-1 text-sm text-muted-foreground">
                      <span className="flex items-center gap-1">
                        <Building2 className="h-3.5 w-3.5" />
                        {internship.company}
                      </span>
                      <span className="flex items-center gap-1">
                        <MapPin className="h-3.5 w-3.5" />
                        {internship.location}
                      </span>
                      <span className="flex items-center gap-1">
                        <Clock className="h-3.5 w-3.5" />
                        {internship.duration}
                      </span>
                      {internship.stipend && (
                        <span className="flex items-center gap-1">
                          <BadgeDollarSign className="h-3.5 w-3.5" />
                          {internship.stipend}
                        </span>
                      )}
                    </div>

                    <p className="mt-2 text-sm leading-relaxed text-foreground/80">
                      {internship.description}
                    </p>

                    {/* Skills */}
                    <div className="mt-2 flex flex-wrap gap-1.5">
                      {internship.skills.map((skill) => (
                        <span
                          key={skill}
                          className="rounded-md bg-secondary px-2 py-0.5 text-xs text-foreground"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>

                    {/* Learning Outcomes */}
                    <div className="mt-3">
                      <p className="text-xs font-medium text-muted-foreground">Learning Outcomes:</p>
                      <div className="mt-1 flex flex-wrap gap-1.5">
                        {internship.outcomes.map((outcome) => (
                          <span
                            key={outcome}
                            className="flex items-center gap-1 rounded-full bg-primary/5 px-2.5 py-0.5 text-xs font-medium text-primary"
                          >
                            <GraduationCap className="h-3 w-3" />
                            {outcome}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                <div className="flex shrink-0 flex-col items-end gap-2 sm:text-right">
                  {/* Pay badge */}
                  <span className={`rounded-full px-2.5 py-0.5 text-xs font-semibold ${getPayBadge(internship.pay)}`}>
                    {internship.pay}
                  </span>

                  <div className="flex items-center gap-1.5">
                    <CheckCircle className={`h-4 w-4 ${getMatchColor(internship.skillMatch)}`} />
                    <span className={`text-sm font-semibold ${getMatchColor(internship.skillMatch)}`}>
                      {internship.skillMatch}% match
                    </span>
                  </div>

                  <div className="flex items-center gap-2">
                    <Button variant="outline" size="sm" aria-label="Save internship">
                      <Bookmark className="h-4 w-4" />
                    </Button>
                    <Button size="sm" className="bg-accent text-accent-foreground hover:bg-accent/90">
                      Apply
                    </Button>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {filtered.length === 0 && (
        <div className="py-16 text-center text-muted-foreground">
          No internships match your current filters.
        </div>
      )}
    </div>
  )
}
