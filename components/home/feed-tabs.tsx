"use client"

import { useState } from "react"
import { ChevronDown, FileText, ImageIcon, BarChart3, CircleDot } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

const tabs = ["For You", "Profession", "Mentorship"]

export function FeedCard() {
  const [active, setActive] = useState("For You")

  return (
    <Card>
      <CardContent className="p-0">
        {/* Header with title + tabs */}
        <div className="flex flex-wrap items-center gap-2 px-5 pt-4 pb-3">
          <h2 className="mr-1 text-base font-bold text-foreground">Your Network Feed</h2>
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActive(tab)}
              className={`rounded-full px-3.5 py-1.5 text-xs font-semibold transition-colors ${
                active === tab
                  ? "bg-primary text-primary-foreground shadow-sm"
                  : "text-muted-foreground ring-1 ring-border hover:bg-secondary hover:text-foreground"
              }`}
            >
              {tab}
            </button>
          ))}
          <button
            onClick={() => setActive("Industry")}
            className={`flex items-center gap-1 rounded-full px-3 py-1.5 text-xs font-semibold transition-colors ${
              active === "Industry"
                ? "bg-primary text-primary-foreground shadow-sm"
                : "text-muted-foreground ring-1 ring-border hover:bg-secondary hover:text-foreground"
            }`}
          >
            Industry
            <ChevronDown className="h-3 w-3" />
          </button>
        </div>

        {/* Divider */}
        <div className="border-t border-border" />

        {/* Composer input row */}
        <div className="flex items-center gap-3 px-5 py-3">
          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary text-sm font-bold text-primary-foreground">
            AM
          </div>
          <input
            type="text"
            placeholder="Share a skill, project, or opportunity with your network"
            className="h-10 flex-1 rounded-full border border-border bg-secondary px-4 text-sm text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
          />
          <button className="flex shrink-0 items-center gap-1.5 text-sm text-muted-foreground hover:text-foreground">
            <CircleDot className="h-4 w-4" />
            <span className="hidden sm:inline">Poll</span>
          </button>
        </div>

        {/* Action buttons row */}
        <div className="flex flex-wrap items-center gap-2 border-t border-border px-5 py-3">
          <Button variant="outline" size="sm" className="gap-1.5 rounded-full bg-transparent text-muted-foreground">
            <FileText className="h-4 w-4" />
            Create Post
            <ChevronDown className="h-3 w-3" />
          </Button>
          <Button variant="outline" size="sm" className="gap-1.5 rounded-full bg-transparent text-muted-foreground">
            <ImageIcon className="h-4 w-4" />
            Photo
            <ChevronDown className="h-3 w-3" />
          </Button>
          <Button variant="outline" size="sm" className="gap-1.5 rounded-full bg-transparent text-muted-foreground">
            <BarChart3 className="h-4 w-4" />
            Poll
          </Button>
          <Button
            size="sm"
            className="ml-auto gap-1.5 rounded-full bg-primary font-semibold text-primary-foreground hover:bg-primary/90"
          >
            Connect
          </Button>
        </div>
      </CardContent>
    </Card>
  )
}
