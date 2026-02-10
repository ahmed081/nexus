"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Search, Users, MessageSquare, Star, Filter } from "lucide-react"

const categories = ["All", "Offering Mentorship", "Seeking Mentorship", "Peer Learning"]

const mentors = [
  {
    name: "Thomas Park",
    initials: "TP",
    role: "Engineering Manager",
    company: "TechSolutions",
    type: "Offering Mentorship",
    expertise: ["System Design", "Leadership", "Career Growth"],
    rating: 4.9,
    sessions: 48,
    bio: "15+ years in software engineering. Passionate about helping engineers transition into leadership roles.",
  },
  {
    name: "Sophia Hernandez",
    initials: "SH",
    role: "Mentoring Lead",
    company: "IncentOps",
    type: "Offering Mentorship",
    expertise: ["Product Strategy", "UX", "Agile"],
    rating: 4.8,
    sessions: 35,
    bio: "Product leader helping aspiring PMs develop their strategic thinking and stakeholder management skills.",
  },
  {
    name: "Nina Patel",
    initials: "NP",
    role: "Junior Developer",
    company: "StartupXYZ",
    type: "Seeking Mentorship",
    expertise: ["JavaScript", "React", "Career Advice"],
    rating: 0,
    sessions: 0,
    bio: "Looking for a mentor in frontend development. Eager to learn best practices and grow my career in tech.",
  },
  {
    name: "David Chen",
    initials: "DC",
    role: "Full Stack Developer",
    company: "CloudScale",
    type: "Peer Learning",
    expertise: ["React", "Node.js", "System Design"],
    rating: 4.6,
    sessions: 12,
    bio: "Open to peer learning sessions. Currently focused on improving system design and distributed systems skills.",
  },
  {
    name: "Robert Kim",
    initials: "RK",
    role: "CTO",
    company: "BrightFin",
    type: "Offering Mentorship",
    expertise: ["Architecture", "Team Building", "Strategy"],
    rating: 5.0,
    sessions: 62,
    bio: "Helping engineers and technical leaders navigate complex decisions around architecture and team scaling.",
  },
  {
    name: "Aisha Williams",
    initials: "AW",
    role: "Marketing Manager",
    company: "BrandForce",
    type: "Seeking Mentorship",
    expertise: ["Digital Marketing", "Analytics", "Growth"],
    rating: 0,
    sessions: 0,
    bio: "Seeking mentorship in data-driven marketing and growth strategy. Transitioning from creative to analytical roles.",
  },
]

const typeColors: Record<string, string> = {
  "Offering Mentorship": "bg-success/10 text-success border-success/30",
  "Seeking Mentorship": "bg-primary/10 text-primary border-primary/30",
  "Peer Learning": "bg-accent/15 text-accent-foreground border-accent/30",
}

export default function MentorshipPage() {
  const [activeFilter, setActiveFilter] = useState("All")
  const [searchQuery, setSearchQuery] = useState("")

  const filtered = mentors.filter((m) => {
    const matchesFilter = activeFilter === "All" || m.type === activeFilter
    const matchesSearch =
      searchQuery === "" ||
      m.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      m.expertise.some((e) => e.toLowerCase().includes(searchQuery.toLowerCase()))
    return matchesFilter && matchesSearch
  })

  return (
    <div className="mx-auto max-w-7xl px-4 py-6">
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-foreground">Mentorship</h1>
        <p className="mt-1 text-sm text-muted-foreground">
          Find mentors, offer guidance, or connect with peers for mutual learning
        </p>
      </div>

      <Card className="mb-6">
        <CardContent className="flex flex-col gap-4 p-4 sm:flex-row sm:items-center">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
            <input
              type="text"
              placeholder="Search mentors, skills, or topics..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="h-10 w-full rounded-lg border border-border bg-secondary pl-9 pr-4 text-sm text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
            />
          </div>
          <div className="flex items-center gap-2 overflow-x-auto">
            <Filter className="h-4 w-4 shrink-0 text-muted-foreground" />
            {categories.map((c) => (
              <button
                key={c}
                onClick={() => setActiveFilter(c)}
                className={`whitespace-nowrap rounded-full px-3.5 py-1.5 text-xs font-semibold transition-colors ${
                  activeFilter === c
                    ? "bg-primary text-primary-foreground shadow-sm"
                    : "bg-secondary text-muted-foreground hover:text-foreground"
                }`}
              >
                {c}
              </button>
            ))}
          </div>
        </CardContent>
      </Card>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {filtered.map((mentor) => (
          <Card key={mentor.name} className="transition-shadow hover:shadow-md">
            <CardContent className="p-5">
              <div className="flex flex-col items-center text-center">
                <div className="flex h-14 w-14 items-center justify-center rounded-full bg-primary text-lg font-bold text-primary-foreground">
                  {mentor.initials}
                </div>
                <h3 className="mt-3 font-semibold text-foreground">{mentor.name}</h3>
                <p className="text-sm text-muted-foreground">{mentor.role}</p>
                <p className="text-xs text-muted-foreground">{mentor.company}</p>

                <span
                  className={`mt-2.5 inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold ${typeColors[mentor.type]}`}
                >
                  {mentor.type}
                </span>

                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{mentor.bio}</p>

                <div className="mt-3 flex flex-wrap justify-center gap-1.5">
                  {mentor.expertise.map((skill) => (
                    <span
                      key={skill}
                      className="rounded-md bg-secondary px-2 py-0.5 text-xs font-medium text-foreground"
                    >
                      {skill}
                    </span>
                  ))}
                </div>

                {mentor.sessions > 0 && (
                  <div className="mt-3 flex items-center gap-3 text-xs text-muted-foreground">
                    <span className="flex items-center gap-1">
                      <Star className="h-3 w-3 fill-accent text-accent" />
                      {mentor.rating}
                    </span>
                    <span className="flex items-center gap-1">
                      <Users className="h-3 w-3" />
                      {mentor.sessions} sessions
                    </span>
                  </div>
                )}

                <Button
                  className="mt-4 w-full gap-1.5 bg-primary text-primary-foreground hover:bg-primary/90"
                  size="sm"
                >
                  <MessageSquare className="h-4 w-4" />
                  {mentor.type === "Seeking Mentorship" ? "Offer to Mentor" : "Request Session"}
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {filtered.length === 0 && (
        <Card className="py-16 text-center">
          <CardContent>
            <p className="text-muted-foreground">No mentors match your current filters.</p>
          </CardContent>
        </Card>
      )}
    </div>
  )
}
