"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { MessageSquare, Repeat2, MoreHorizontal, Award, Zap } from "lucide-react"

interface FeedPostProps {
  author: string
  initials: string
  role: string
  company: string
  timeAgo: string
  content: string
  hashtags?: string[]
  image?: string
  matchCount?: number
  commentCount?: number
  type?: "milestone" | "project" | "hiring"
}

export function FeedPost({
  author,
  initials,
  role,
  company,
  timeAgo,
  content,
  hashtags = [],
  image,
  matchCount,
  commentCount,
  type = "project",
}: FeedPostProps) {
  const typeIcon = type === "milestone" ? (
    <Award className="h-4 w-4 text-success" />
  ) : type === "hiring" ? (
    <Zap className="h-4 w-4 text-accent" />
  ) : null

  return (
    <Card>
      <CardContent className="p-4">
        {/* Header */}
        <div className="flex items-start justify-between">
          <div className="flex items-start gap-3">
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary text-sm font-bold text-primary-foreground">
              {initials}
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="font-semibold text-foreground">{author}</span>
                <span className="text-xs text-muted-foreground">1st</span>
              </div>
              <p className="text-sm text-muted-foreground">
                {role} at {company}
              </p>
              <p className="text-xs text-muted-foreground">{timeAgo}</p>
            </div>
          </div>
          <button className="rounded-md p-1 text-muted-foreground hover:bg-secondary" aria-label="More options">
            <MoreHorizontal className="h-5 w-5" />
          </button>
        </div>

        {/* Content */}
        <div className="mt-3">
          {typeIcon && (
            <div className="mb-2 flex items-center gap-1.5">
              {typeIcon}
              <span className="text-xs font-medium capitalize text-muted-foreground">
                {type === "milestone" ? "Skill Milestone" : type === "hiring" ? "Hiring Announcement" : "Project Update"}
              </span>
            </div>
          )}
          <p className="text-sm leading-relaxed text-foreground">{content}</p>
          {hashtags.length > 0 && (
            <div className="mt-2 flex flex-wrap gap-1.5">
              {hashtags.map((tag) => (
                <span
                  key={tag}
                  className="text-sm font-medium text-primary hover:underline cursor-pointer"
                >
                  #{tag}
                </span>
              ))}
            </div>
          )}
        </div>

        {/* Image */}
        {image && (
          <div className="mt-3 overflow-hidden rounded-lg border border-border">
            <img
              src={image || "/placeholder.svg"}
              alt="Post attachment"
              className="h-52 w-full object-cover"
            />
          </div>
        )}

        {/* Actions */}
        <div className="mt-3 flex items-center gap-4 border-t border-border pt-3">
          {matchCount !== undefined && (
            <span className="text-sm text-muted-foreground">
              <MessageSquare className="mr-1 inline h-4 w-4" />
              {matchCount} Matches
            </span>
          )}
          {commentCount !== undefined && (
            <span className="text-sm text-muted-foreground">
              {commentCount} Comments
            </span>
          )}
          <div className="ml-auto flex items-center gap-2">
            <Button variant="ghost" size="sm" className="gap-1.5 text-muted-foreground hover:text-primary">
              <MessageSquare className="h-4 w-4" />
              Comment
            </Button>
            <Button variant="ghost" size="sm" className="gap-1.5 text-muted-foreground hover:text-primary">
              <Repeat2 className="h-4 w-4" />
              Share
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
