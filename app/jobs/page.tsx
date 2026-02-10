"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import {
  Search,
  MapPin,
  DollarSign,
  Clock,
  Building2,
  Filter,
  Bookmark,
  CheckCircle,
  ArrowUpRight,
} from "lucide-react"

const jobTypes = ["All", "Full-time", "Part-time", "Contract", "Remote"]

const jobs = [
  {
    title: "Senior Frontend Developer",
    company: "TechSolutions",
    initials: "TS",
    location: "San Francisco, CA (Hybrid)",
    salary: "$130k - $170k",
    type: "Full-time",
    postedAgo: "2 hours ago",
    skillMatch: 92,
    skills: ["React", "TypeScript", "Next.js", "Tailwind CSS"],
    description:
      "Lead the frontend team in building scalable web applications with modern frameworks. Strong focus on performance and accessibility.",
  },
  {
    title: "Data Scientist",
    company: "DataFlow Inc.",
    initials: "DF",
    location: "New York, NY (Remote)",
    salary: "$120k - $155k",
    type: "Remote",
    postedAgo: "5 hours ago",
    skillMatch: 78,
    skills: ["Python", "Machine Learning", "SQL", "TensorFlow"],
    description:
      "Work on machine learning models and data pipelines to drive business intelligence and product analytics.",
  },
  {
    title: "Product Designer",
    company: "DesignHub",
    initials: "DH",
    location: "Austin, TX (On-site)",
    salary: "$100k - $130k",
    type: "Full-time",
    postedAgo: "1 day ago",
    skillMatch: 65,
    skills: ["Figma", "User Research", "Prototyping", "Design Systems"],
    description:
      "Shape product experiences from concept to launch. Collaborate closely with engineering and product teams.",
  },
  {
    title: "DevOps Engineer",
    company: "CloudScale",
    initials: "CS",
    location: "Seattle, WA (Remote)",
    salary: "$140k - $180k",
    type: "Remote",
    postedAgo: "1 day ago",
    skillMatch: 71,
    skills: ["AWS", "Kubernetes", "Terraform", "CI/CD"],
    description:
      "Build and maintain cloud infrastructure. Implement monitoring, alerting, and automated deployments.",
  },
  {
    title: "Marketing Coordinator",
    company: "BrandForce",
    initials: "BF",
    location: "Chicago, IL (Hybrid)",
    salary: "$55k - $70k",
    type: "Full-time",
    postedAgo: "2 days ago",
    skillMatch: 44,
    skills: ["SEO", "Content Writing", "Social Media", "Google Analytics"],
    description:
      "Coordinate marketing campaigns and content strategy. Track performance metrics and optimize for growth.",
  },
  {
    title: "Backend Developer",
    company: "BrightFin",
    initials: "BF",
    location: "Remote",
    salary: "$110k - $145k",
    type: "Contract",
    postedAgo: "3 days ago",
    skillMatch: 85,
    skills: ["Node.js", "PostgreSQL", "REST APIs", "Docker"],
    description:
      "Develop and optimize backend services for a high-traffic fintech platform. 6-month contract with extension potential.",
  },
]

function getMatchColor(match: number) {
  if (match >= 80) return "text-success"
  if (match >= 60) return "text-primary"
  return "text-muted-foreground"
}

function getMatchBg(match: number) {
  if (match >= 80) return "bg-success/10"
  if (match >= 60) return "bg-primary/10"
  return "bg-secondary"
}

export default function JobsPage() {
  const [activeType, setActiveType] = useState("All")
  const [searchQuery, setSearchQuery] = useState("")

  const filtered = jobs.filter((job) => {
    const matchesType = activeType === "All" || job.type === activeType
    const matchesSearch =
      searchQuery === "" ||
      job.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      job.company.toLowerCase().includes(searchQuery.toLowerCase()) ||
      job.skills.some((s) =>
        s.toLowerCase().includes(searchQuery.toLowerCase())
      )
    return matchesType && matchesSearch
  })

  return (
    <div className="mx-auto max-w-7xl px-4 py-6">
      {/* Header */}
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-foreground">Jobs</h1>
        <p className="mt-1 text-sm text-muted-foreground">
          Find roles that match your skills. Apply with your profile -- no CV spam.
        </p>
      </div>

      {/* Search & Filters */}
      <Card className="mb-6">
        <CardContent className="flex flex-col gap-4 p-4 sm:flex-row sm:items-center">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
            <input
              type="text"
              placeholder="Search job titles, companies, or skills..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="h-10 w-full rounded-lg border border-border bg-secondary pl-9 pr-4 text-sm text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
            />
          </div>
          <div className="flex items-center gap-2 overflow-x-auto">
            <Filter className="h-4 w-4 shrink-0 text-muted-foreground" />
            {jobTypes.map((t) => (
              <button
                key={t}
                onClick={() => setActiveType(t)}
                className={`whitespace-nowrap rounded-full px-3.5 py-1.5 text-xs font-semibold transition-colors ${
                  activeType === t
                    ? "bg-primary text-primary-foreground shadow-sm"
                    : "bg-secondary text-muted-foreground hover:text-foreground"
                }`}
              >
                {t}
              </button>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Job listings */}
      <div className="space-y-3">
        {filtered.map((job) => (
          <Card
            key={`${job.title}-${job.company}`}
            className="transition-shadow hover:shadow-md"
          >
            <CardContent className="p-5">
              <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
                <div className="flex items-start gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-primary text-sm font-bold text-primary-foreground">
                    {job.initials}
                  </div>
                  <div className="min-w-0">
                    <h3 className="font-semibold text-foreground">
                      {job.title}
                    </h3>
                    <div className="mt-1 flex flex-wrap items-center gap-x-3 gap-y-1 text-sm text-muted-foreground">
                      <span className="flex items-center gap-1">
                        <Building2 className="h-3.5 w-3.5" />
                        {job.company}
                      </span>
                      <span className="flex items-center gap-1">
                        <MapPin className="h-3.5 w-3.5" />
                        {job.location}
                      </span>
                      <span className="flex items-center gap-1">
                        <DollarSign className="h-3.5 w-3.5" />
                        {job.salary}
                      </span>
                      <span className="flex items-center gap-1">
                        <Clock className="h-3.5 w-3.5" />
                        {job.postedAgo}
                      </span>
                    </div>
                    <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                      {job.description}
                    </p>
                    <div className="mt-2.5 flex flex-wrap gap-1.5">
                      {job.skills.map((skill) => (
                        <span
                          key={skill}
                          className="rounded-md bg-secondary px-2 py-0.5 text-xs font-medium text-foreground"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="flex shrink-0 flex-col items-end gap-2.5">
                  {/* Match score */}
                  <div
                    className={`flex items-center gap-1.5 rounded-full px-3 py-1 ${getMatchBg(job.skillMatch)}`}
                  >
                    <CheckCircle
                      className={`h-4 w-4 ${getMatchColor(job.skillMatch)}`}
                    />
                    <span
                      className={`text-sm font-bold ${getMatchColor(job.skillMatch)}`}
                    >
                      {job.skillMatch}% match
                    </span>
                  </div>
                  <span className="rounded-full bg-secondary px-2.5 py-0.5 text-xs font-medium text-foreground">
                    {job.type}
                  </span>
                  <div className="flex items-center gap-2">
                    <Button
                      variant="outline"
                      size="sm"
                      className="bg-transparent"
                      aria-label="Save job"
                    >
                      <Bookmark className="h-4 w-4" />
                    </Button>
                    <Button
                      size="sm"
                      className="gap-1.5 bg-accent font-semibold text-accent-foreground hover:bg-accent/90"
                    >
                      Apply
                      <ArrowUpRight className="h-3.5 w-3.5" />
                    </Button>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {filtered.length === 0 && (
        <Card className="py-16 text-center">
          <CardContent>
            <p className="text-muted-foreground">
              No jobs match your current filters.
            </p>
          </CardContent>
        </Card>
      )}
    </div>
  )
}
