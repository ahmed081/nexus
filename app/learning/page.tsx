"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import {
  Search,
  BookOpen,
  Clock,
  Users,
  Star,
  Filter,
  Play,
  Award,
  CheckCircle,
} from "lucide-react"

const categories = ["All", "Development", "Data Science", "Design", "Business", "Marketing"]

const courses = [
  {
    title: "Advanced React Patterns",
    instructor: "Thomas Park",
    initials: "TP",
    category: "Development",
    duration: "12 hours",
    enrolled: 3400,
    rating: 4.9,
    level: "Advanced",
    modules: 24,
    completed: 18,
    description: "Master advanced React patterns including compound components, render props, custom hooks, and performance optimization techniques.",
  },
  {
    title: "Machine Learning Fundamentals",
    instructor: "Marcus Johnson",
    initials: "MJ",
    category: "Data Science",
    duration: "20 hours",
    enrolled: 5200,
    rating: 4.8,
    level: "Intermediate",
    modules: 32,
    completed: 0,
    description: "Learn the foundations of machine learning including supervised and unsupervised learning, neural networks, and model evaluation.",
  },
  {
    title: "UX Research Methods",
    instructor: "Priya Sharma",
    initials: "PS",
    category: "Design",
    duration: "8 hours",
    enrolled: 1800,
    rating: 4.7,
    level: "Beginner",
    modules: 16,
    completed: 0,
    description: "Comprehensive guide to user research methodologies including interviews, surveys, usability testing, and persona creation.",
  },
  {
    title: "SQL for Data Analysis",
    instructor: "Sarah Lee",
    initials: "SL",
    category: "Data Science",
    duration: "10 hours",
    enrolled: 7800,
    rating: 4.9,
    level: "Beginner",
    modules: 20,
    completed: 20,
    description: "From basic queries to advanced analytics -- learn SQL techniques used by professional data analysts every day.",
  },
  {
    title: "Product Strategy & Roadmapping",
    instructor: "Sophia Hernandez",
    initials: "SH",
    category: "Business",
    duration: "6 hours",
    enrolled: 2100,
    rating: 4.6,
    level: "Intermediate",
    modules: 12,
    completed: 0,
    description: "Learn to build compelling product strategies, prioritize features, and create roadmaps that align stakeholders.",
  },
  {
    title: "Digital Marketing Analytics",
    instructor: "Aisha Williams",
    initials: "AW",
    category: "Marketing",
    duration: "9 hours",
    enrolled: 3100,
    rating: 4.5,
    level: "Intermediate",
    modules: 18,
    completed: 0,
    description: "Data-driven marketing strategies using Google Analytics, SEO tools, and social media analytics platforms.",
  },
]

const levelColors: Record<string, string> = {
  Beginner: "bg-success/10 text-success",
  Intermediate: "bg-primary/10 text-primary",
  Advanced: "bg-accent/15 text-accent-foreground",
}

export default function LearningPage() {
  const [activeCategory, setActiveCategory] = useState("All")
  const [searchQuery, setSearchQuery] = useState("")

  const filtered = courses.filter((c) => {
    const matchesCat = activeCategory === "All" || c.category === activeCategory
    const matchesSearch =
      searchQuery === "" ||
      c.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      c.instructor.toLowerCase().includes(searchQuery.toLowerCase())
    return matchesCat && matchesSearch
  })

  return (
    <div className="mx-auto max-w-7xl px-4 py-6">
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-foreground">Learning</h1>
        <p className="mt-1 text-sm text-muted-foreground">
          Build your skills with courses from industry professionals
        </p>
      </div>

      <Card className="mb-6">
        <CardContent className="flex flex-col gap-4 p-4 sm:flex-row sm:items-center">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
            <input
              type="text"
              placeholder="Search courses or instructors..."
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
                onClick={() => setActiveCategory(c)}
                className={`whitespace-nowrap rounded-full px-3.5 py-1.5 text-xs font-semibold transition-colors ${
                  activeCategory === c
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
        {filtered.map((course) => {
          const isComplete = course.completed === course.modules
          const isInProgress = course.completed > 0 && !isComplete
          const progress = Math.round((course.completed / course.modules) * 100)

          return (
            <Card key={course.title} className="flex flex-col transition-shadow hover:shadow-md">
              <CardContent className="flex flex-1 flex-col p-5">
                <div className="flex items-start gap-3">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-primary text-sm font-bold text-primary-foreground">
                    {course.initials}
                  </div>
                  <div className="min-w-0 flex-1">
                    <h3 className="font-semibold leading-snug text-foreground">{course.title}</h3>
                    <p className="mt-0.5 text-sm text-muted-foreground">by {course.instructor}</p>
                  </div>
                </div>

                <p className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground">
                  {course.description}
                </p>

                <div className="mt-3 flex flex-wrap items-center gap-2">
                  <span className={`rounded-full px-2.5 py-0.5 text-xs font-semibold ${levelColors[course.level]}`}>
                    {course.level}
                  </span>
                  <span className="rounded-full bg-secondary px-2.5 py-0.5 text-xs font-medium text-foreground">
                    {course.category}
                  </span>
                </div>

                <div className="mt-3 flex flex-wrap items-center gap-x-4 gap-y-1 text-xs text-muted-foreground">
                  <span className="flex items-center gap-1">
                    <Clock className="h-3 w-3" />
                    {course.duration}
                  </span>
                  <span className="flex items-center gap-1">
                    <BookOpen className="h-3 w-3" />
                    {course.modules} modules
                  </span>
                  <span className="flex items-center gap-1">
                    <Users className="h-3 w-3" />
                    {course.enrolled.toLocaleString()}
                  </span>
                  <span className="flex items-center gap-1">
                    <Star className="h-3 w-3 fill-accent text-accent" />
                    {course.rating}
                  </span>
                </div>

                {/* Progress bar for in-progress courses */}
                {isInProgress && (
                  <div className="mt-3">
                    <div className="flex items-center justify-between text-xs">
                      <span className="text-muted-foreground">Progress</span>
                      <span className="font-semibold text-primary">{progress}%</span>
                    </div>
                    <div className="mt-1 h-1.5 overflow-hidden rounded-full bg-secondary">
                      <div
                        className="h-full rounded-full bg-primary transition-all"
                        style={{ width: `${progress}%` }}
                      />
                    </div>
                  </div>
                )}

                {isComplete && (
                  <div className="mt-3 flex items-center gap-1.5 text-xs font-semibold text-success">
                    <CheckCircle className="h-4 w-4" />
                    Completed
                  </div>
                )}

                <Button
                  className="mt-4 w-full gap-1.5 bg-primary text-primary-foreground hover:bg-primary/90"
                  size="sm"
                >
                  {isComplete ? (
                    <>
                      <Award className="h-4 w-4" />
                      View Certificate
                    </>
                  ) : isInProgress ? (
                    <>
                      <Play className="h-4 w-4" />
                      Continue Learning
                    </>
                  ) : (
                    <>
                      <Play className="h-4 w-4" />
                      Start Course
                    </>
                  )}
                </Button>
              </CardContent>
            </Card>
          )
        })}
      </div>

      {filtered.length === 0 && (
        <Card className="py-16 text-center">
          <CardContent>
            <p className="text-muted-foreground">No courses match your current filters.</p>
          </CardContent>
        </Card>
      )}
    </div>
  )
}
