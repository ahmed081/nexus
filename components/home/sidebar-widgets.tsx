"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import {
  ChevronRight,
  MessageSquare,
  UserPlus,
  Briefcase,
  GraduationCap,
  ChevronDown,
} from "lucide-react"

/* ── People You May Know ── */
const people = [
  {
    name: "Daniel Kim",
    role: "DevOps Engineer",
    company: "CloudScale",
    initials: "DK",
    mutualConnections: 4,
  },
  {
    name: "Sophia Hernandez",
    role: "Mentoring Lead",
    company: "IncentOps",
    initials: "SH",
    mutualConnections: 6,
  },
  {
    name: "Ananya Patel",
    role: "Content Strategist",
    company: "Gantia Morgas",
    initials: "AP",
    mutualConnections: 3,
  },
]

export function PeopleYouMayKnow() {
  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between px-4 pb-2 pt-4">
        <CardTitle className="text-sm font-bold text-foreground">
          People You May Know
        </CardTitle>
        <button className="text-xs font-medium text-primary hover:underline">
          See All
        </button>
      </CardHeader>
      <CardContent className="px-4 pb-4">
        <div className="space-y-3">
          {people.map((person) => (
            <div key={person.name} className="flex items-center gap-3">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary text-xs font-bold text-primary-foreground">
                {person.initials}
              </div>
              <div className="min-w-0 flex-1">
                <p className="truncate text-sm font-semibold text-foreground">
                  {person.name}
                </p>
                <p className="truncate text-xs text-muted-foreground">{person.role}</p>
                <p className="truncate text-xs text-muted-foreground">
                  {person.company} &middot; {person.mutualConnections} mutual
                </p>
              </div>
              <button
                className="rounded-lg p-2 text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground"
                aria-label={`Message ${person.name}`}
              >
                <MessageSquare className="h-4 w-4" />
              </button>
            </div>
          ))}
        </div>
        <button className="mt-3 flex items-center gap-1 text-xs font-medium text-primary hover:underline">
          See All <ChevronRight className="h-3 w-3" />
          <ChevronDown className="h-3 w-3" />
        </button>
      </CardContent>
    </Card>
  )
}

/* ── Recommended Internships ── */
const internships = [
  { company: "Acme Corp.", match: 60, initials: "AC", color: "bg-primary" },
  { company: "NewWave Analytics", match: 68, initials: "NW", color: "bg-success" },
  { company: "BrightStar Media", match: 72, initials: "BS", color: "bg-accent" },
]

export function RecommendedInternships() {
  return (
    <Card>
      <CardHeader className="px-4 pb-2 pt-4">
        <CardTitle className="text-sm font-bold text-foreground">
          Recommended Internships
        </CardTitle>
      </CardHeader>
      <CardContent className="px-4 pb-4">
        <div className="space-y-3">
          {internships.map((item) => (
            <div key={item.company} className="flex items-center gap-3">
              <div
                className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-lg ${item.color} text-xs font-bold text-primary-foreground`}
              >
                {item.initials}
              </div>
              <div className="min-w-0 flex-1">
                <p className="truncate text-sm font-semibold text-foreground">
                  {item.company}
                </p>
                <div className="flex items-center gap-1.5">
                  <span className="inline-block h-2 w-2 rounded-full bg-success" />
                  <span className="text-xs text-muted-foreground">
                    Skill Match: {item.match}%
                  </span>
                </div>
              </div>
              <Button
                size="sm"
                className="h-7 rounded-md bg-primary px-3 text-xs font-semibold text-primary-foreground hover:bg-primary/90"
              >
                Apply
              </Button>
            </div>
          ))}
        </div>
        <button className="mt-3 flex items-center gap-1 text-xs font-medium text-primary hover:underline">
          See All <ChevronRight className="h-3 w-3" />
        </button>
      </CardContent>
    </Card>
  )
}

/* ── Top Companies Hiring ── */
const companies = [
  {
    name: "TechSolutions",
    jobs: 18,
    detail: "1 Recommendation",
    initials: "TS",
  },
  {
    name: "BrightFin",
    jobs: 12,
    detail: "1 Mention",
    initials: "BF",
  },
  {
    name: "GlobalTech",
    jobs: 9,
    detail: "3 Connections",
    initials: "GT",
  },
]

export function TopCompaniesHiring() {
  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between px-4 pb-2 pt-4">
        <CardTitle className="text-sm font-bold text-foreground">
          Top Companies Hiring
        </CardTitle>
        <button className="text-xs font-medium text-primary hover:underline">
          See All
        </button>
      </CardHeader>
      <CardContent className="px-4 pb-4">
        <div className="space-y-3">
          {companies.map((company) => (
            <div key={company.name} className="flex items-center gap-3">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-secondary text-xs font-bold text-foreground">
                {company.initials}
              </div>
              <div className="min-w-0 flex-1">
                <p className="truncate text-sm font-semibold text-foreground">
                  {company.name}
                </p>
                <p className="flex items-center gap-1 truncate text-xs text-muted-foreground">
                  <Briefcase className="h-3 w-3" />
                  {company.detail}
                </p>
              </div>
              <span className="text-sm font-bold text-foreground">
                {company.jobs} jobs
              </span>
            </div>
          ))}
        </div>
        <button className="mt-3 flex items-center gap-1 text-xs font-medium text-primary hover:underline">
          See All <ChevronRight className="h-3 w-3" />
        </button>
      </CardContent>
    </Card>
  )
}
