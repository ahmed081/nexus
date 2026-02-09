"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import {
  MapPin,
  Mail,
  Calendar,
  Edit3,
  Upload,
  ExternalLink,
  Award,
  Briefcase,
  Code,
  BookOpen,
} from "lucide-react"

const skills = [
  { name: "React", level: 92 },
  { name: "TypeScript", level: 88 },
  { name: "Next.js", level: 85 },
  { name: "Node.js", level: 80 },
  { name: "Python", level: 72 },
  { name: "SQL", level: 78 },
  { name: "Tailwind CSS", level: 90 },
  { name: "Git", level: 85 },
]

const projects = [
  {
    title: "AI Analytics Dashboard",
    description: "Built a real-time analytics dashboard using React, D3.js, and Node.js. Featured skill-based matching algorithms.",
    tech: ["React", "D3.js", "Node.js", "PostgreSQL"],
    date: "Jan 2026",
  },
  {
    title: "Ethical Hiring Platform",
    description: "Contributed to an open-source hiring platform that prioritizes skills over credentials.",
    tech: ["Next.js", "TypeScript", "Prisma"],
    date: "Nov 2025",
  },
  {
    title: "Community Learning Hub",
    description: "Designed and developed a peer-to-peer learning platform for tech mentorship connections.",
    tech: ["React", "Firebase", "Tailwind CSS"],
    date: "Aug 2025",
  },
]

const experience = [
  {
    role: "Senior Software Engineer",
    company: "TechSolutions",
    period: "2024 - Present",
    description: "Lead frontend architecture for enterprise analytics platform. Mentor junior developers.",
  },
  {
    role: "Software Engineer",
    company: "DataFlow Inc.",
    period: "2022 - 2024",
    description: "Built data visualization tools and internal dashboards. Promoted after 18 months.",
  },
  {
    role: "Junior Developer",
    company: "StartupXYZ",
    period: "2021 - 2022",
    description: "Full-stack development on customer-facing web application using React and Node.js.",
  },
]

function SkillBar({ name, level }: { name: string; level: number }) {
  return (
    <div>
      <div className="flex items-center justify-between text-sm">
        <span className="font-medium text-foreground">{name}</span>
        <span className="text-muted-foreground">{level}%</span>
      </div>
      <div className="mt-1 h-2 overflow-hidden rounded-full bg-secondary">
        <div
          className="h-full rounded-full bg-primary transition-all"
          style={{ width: `${level}%` }}
        />
      </div>
    </div>
  )
}

export default function ProfilePage() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-6">
      <div className="flex flex-col gap-6 lg:flex-row">
        {/* Left Column - Profile Info */}
        <div className="w-full space-y-4 lg:w-80">
          {/* Profile Card */}
          <Card>
            <CardContent className="p-6">
              <div className="flex flex-col items-center text-center">
                <div className="flex h-20 w-20 items-center justify-center rounded-full bg-primary text-2xl font-bold text-primary-foreground">
                  AM
                </div>
                <h2 className="mt-3 text-xl font-bold text-foreground">Alex Morgan</h2>
                <p className="text-sm text-muted-foreground">Senior Software Engineer</p>
                <p className="text-sm text-muted-foreground">TechSolutions</p>

                <div className="mt-3 flex flex-wrap justify-center gap-x-4 gap-y-1 text-xs text-muted-foreground">
                  <span className="flex items-center gap-1">
                    <MapPin className="h-3 w-3" />
                    San Francisco, CA
                  </span>
                  <span className="flex items-center gap-1">
                    <Mail className="h-3 w-3" />
                    alex@nexus.dev
                  </span>
                  <span className="flex items-center gap-1">
                    <Calendar className="h-3 w-3" />
                    Joined Mar 2021
                  </span>
                </div>

                <div className="mt-4 w-full">
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-muted-foreground">Profile Completion</span>
                    <span className="font-semibold text-primary">80%</span>
                  </div>
                  <div className="mt-1.5 h-2 overflow-hidden rounded-full bg-secondary">
                    <div className="h-full w-4/5 rounded-full bg-primary" />
                  </div>
                </div>

                <div className="mt-4 flex w-full gap-2">
                  <Button variant="outline" size="sm" className="flex-1 gap-1.5 bg-transparent">
                    <Edit3 className="h-4 w-4" />
                    Edit Profile
                  </Button>
                  <Button variant="outline" size="sm" className="flex-1 gap-1.5 bg-transparent">
                    <Upload className="h-4 w-4" />
                    Upload CV
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Availability */}
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-semibold text-foreground">Availability</CardTitle>
            </CardHeader>
            <CardContent className="pb-4">
              <div className="space-y-2">
                <div className="flex items-center justify-between text-sm">
                  <span className="text-muted-foreground">Career Stage</span>
                  <span className="font-medium text-foreground">Mid-Senior</span>
                </div>
                <div className="flex items-center justify-between text-sm">
                  <span className="text-muted-foreground">Open to Work</span>
                  <span className="rounded-full bg-success/10 px-2 py-0.5 text-xs font-medium text-success">
                    Yes
                  </span>
                </div>
                <div className="flex items-center justify-between text-sm">
                  <span className="text-muted-foreground">Open to Mentor</span>
                  <span className="rounded-full bg-success/10 px-2 py-0.5 text-xs font-medium text-success">
                    Yes
                  </span>
                </div>
                <div className="flex items-center justify-between text-sm">
                  <span className="text-muted-foreground">Preferred</span>
                  <span className="font-medium text-foreground">Remote / Hybrid</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Right Column - Skills, Projects, Experience */}
        <div className="flex-1 space-y-4">
          {/* Skills */}
          <Card>
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="flex items-center gap-2 text-base font-semibold text-foreground">
                <Code className="h-5 w-5 text-primary" />
                Skills
              </CardTitle>
              <Button variant="ghost" size="sm" className="text-primary">
                <Edit3 className="mr-1.5 h-4 w-4" />
                Edit
              </Button>
            </CardHeader>
            <CardContent className="pb-5">
              <div className="grid gap-3 sm:grid-cols-2">
                {skills.map((skill) => (
                  <SkillBar key={skill.name} {...skill} />
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Projects */}
          <Card>
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="flex items-center gap-2 text-base font-semibold text-foreground">
                <Award className="h-5 w-5 text-accent" />
                Projects
              </CardTitle>
              <Button variant="ghost" size="sm" className="text-primary">
                Add Project
              </Button>
            </CardHeader>
            <CardContent className="pb-5">
              <div className="space-y-4">
                {projects.map((project) => (
                  <div key={project.title} className="rounded-lg border border-border p-4">
                    <div className="flex items-start justify-between">
                      <h4 className="font-semibold text-foreground">{project.title}</h4>
                      <span className="text-xs text-muted-foreground">{project.date}</span>
                    </div>
                    <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
                      {project.description}
                    </p>
                    <div className="mt-2 flex flex-wrap gap-1.5">
                      {project.tech.map((t) => (
                        <span key={t} className="rounded-md bg-primary/5 px-2 py-0.5 text-xs font-medium text-primary">
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Experience */}
          <Card>
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="flex items-center gap-2 text-base font-semibold text-foreground">
                <Briefcase className="h-5 w-5 text-primary" />
                Experience
              </CardTitle>
              <Button variant="ghost" size="sm" className="text-primary">
                <Edit3 className="mr-1.5 h-4 w-4" />
                Edit
              </Button>
            </CardHeader>
            <CardContent className="pb-5">
              <div className="space-y-4">
                {experience.map((exp) => (
                  <div key={exp.role} className="flex gap-4">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-secondary text-xs font-bold text-foreground">
                      {exp.company.substring(0, 2).toUpperCase()}
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground">{exp.role}</h4>
                      <p className="text-sm text-muted-foreground">
                        {exp.company} &middot; {exp.period}
                      </p>
                      <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
                        {exp.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
