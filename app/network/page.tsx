"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Search, UserPlus, Filter, Users } from "lucide-react"

const intentFilters = ["All", "Hiring", "Mentorship", "Collaboration", "Learning"]

const networkPeople = [
  {
    name: "Priya Sharma",
    initials: "PS",
    role: "UX Designer",
    company: "DesignHub",
    skills: ["Figma", "User Research", "Prototyping"],
    intent: "Collaboration",
    mutualConnections: 12,
  },
  {
    name: "Marcus Johnson",
    initials: "MJ",
    role: "Data Scientist",
    company: "DataFlow Inc.",
    skills: ["Python", "Machine Learning", "SQL"],
    intent: "Mentorship",
    mutualConnections: 8,
  },
  {
    name: "Elena Rodriguez",
    initials: "ER",
    role: "Product Manager",
    company: "InnovateTech",
    skills: ["Agile", "Roadmapping", "Analytics"],
    intent: "Hiring",
    mutualConnections: 5,
  },
  {
    name: "David Chen",
    initials: "DC",
    role: "Full Stack Developer",
    company: "CloudScale",
    skills: ["React", "Node.js", "AWS"],
    intent: "Collaboration",
    mutualConnections: 15,
  },
  {
    name: "Aisha Williams",
    initials: "AW",
    role: "Marketing Manager",
    company: "BrandForce",
    skills: ["SEO", "Content Strategy", "Analytics"],
    intent: "Learning",
    mutualConnections: 3,
  },
  {
    name: "Thomas Park",
    initials: "TP",
    role: "Engineering Manager",
    company: "TechSolutions",
    skills: ["Leadership", "System Design", "Mentoring"],
    intent: "Mentorship",
    mutualConnections: 21,
  },
  {
    name: "Nina Patel",
    initials: "NP",
    role: "Junior Developer",
    company: "StartupXYZ",
    skills: ["JavaScript", "React", "CSS"],
    intent: "Learning",
    mutualConnections: 7,
  },
  {
    name: "Robert Kim",
    initials: "RK",
    role: "CTO",
    company: "BrightFin",
    skills: ["Architecture", "Team Building", "Strategy"],
    intent: "Hiring",
    mutualConnections: 19,
  },
]

const intentColors: Record<string, string> = {
  Hiring: "bg-accent/15 text-accent-foreground border-accent/30",
  Mentorship: "bg-primary/10 text-primary border-primary/30",
  Collaboration: "bg-success/10 text-success border-success/30",
  Learning: "bg-secondary text-foreground border-border",
}

export default function NetworkPage() {
  const [activeFilter, setActiveFilter] = useState("All")
  const [searchQuery, setSearchQuery] = useState("")

  const filtered = networkPeople.filter((p) => {
    const matchesFilter = activeFilter === "All" || p.intent === activeFilter
    const matchesSearch =
      searchQuery === "" ||
      p.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      p.role.toLowerCase().includes(searchQuery.toLowerCase()) ||
      p.skills.some((s) =>
        s.toLowerCase().includes(searchQuery.toLowerCase())
      )
    return matchesFilter && matchesSearch
  })

  return (
    <div className="mx-auto max-w-7xl px-4 py-6">
      {/* Header */}
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-foreground">Your Network</h1>
        <p className="mt-1 text-sm text-muted-foreground">
          Build meaningful connections based on shared intent
        </p>
      </div>

      {/* Search & Filters */}
      <Card className="mb-6">
        <CardContent className="flex flex-col gap-4 p-4 sm:flex-row sm:items-center">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
            <input
              type="text"
              placeholder="Search people, skills, or roles..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="h-10 w-full rounded-lg border border-border bg-secondary pl-9 pr-4 text-sm text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
            />
          </div>
          <div className="flex items-center gap-2 overflow-x-auto">
            <Filter className="h-4 w-4 shrink-0 text-muted-foreground" />
            {intentFilters.map((f) => (
              <button
                key={f}
                onClick={() => setActiveFilter(f)}
                className={`whitespace-nowrap rounded-full px-3.5 py-1.5 text-xs font-semibold transition-colors ${
                  activeFilter === f
                    ? "bg-primary text-primary-foreground shadow-sm"
                    : "bg-secondary text-muted-foreground hover:text-foreground"
                }`}
              >
                {f}
              </button>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* People Grid */}
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {filtered.map((person) => (
          <Card
            key={person.name}
            className="transition-shadow hover:shadow-md"
          >
            <CardContent className="p-5">
              <div className="flex flex-col items-center text-center">
                <div className="flex h-14 w-14 items-center justify-center rounded-full bg-primary text-lg font-bold text-primary-foreground">
                  {person.initials}
                </div>
                <h3 className="mt-3 font-semibold text-foreground">
                  {person.name}
                </h3>
                <p className="text-sm text-muted-foreground">{person.role}</p>
                <p className="text-xs text-muted-foreground">
                  {person.company}
                </p>

                {/* Intent Badge */}
                <span
                  className={`mt-2.5 inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold ${intentColors[person.intent]}`}
                >
                  {person.intent}
                </span>

                {/* Skills */}
                <div className="mt-3 flex flex-wrap justify-center gap-1.5">
                  {person.skills.map((skill) => (
                    <span
                      key={skill}
                      className="rounded-md bg-secondary px-2 py-0.5 text-xs font-medium text-foreground"
                    >
                      {skill}
                    </span>
                  ))}
                </div>

                <p className="mt-2.5 flex items-center gap-1 text-xs text-muted-foreground">
                  <Users className="h-3 w-3" />
                  {person.mutualConnections} mutual connections
                </p>

                <Button
                  className="mt-3 w-full gap-1.5 bg-primary text-primary-foreground hover:bg-primary/90"
                  size="sm"
                >
                  <UserPlus className="h-4 w-4" />
                  Connect
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {filtered.length === 0 && (
        <Card className="py-16 text-center">
          <CardContent>
            <p className="text-muted-foreground">
              No connections match your current filters.
            </p>
          </CardContent>
        </Card>
      )}
    </div>
  )
}
