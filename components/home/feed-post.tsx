"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import {
  MessageSquare,
  Share2,
  MoreHorizontal,
  Award,
  Zap,
  Rocket,
  ThumbsUp,
  Users,
  Clock,
  CheckCircle,
} from "lucide-react"

interface FeedPostProps {
  author: string
  initials: string
  role: string
  company: string
  connection?: string
  timeAgo: string
  content: string
  hashtags?: string[]
  image?: string
  matchCount?: number
  commentCount?: number
  type?: "milestone" | "project" | "hiring"
}

const typeConfig = {
  milestone: {
    icon: Award,
    label: "Skill Milestone",
    color: "text-success",
    bgColor: "bg-success/10",
  },
  project: {
    icon: Rocket,
    label: "Project Update",
    color: "text-primary",
    bgColor: "bg-primary/10",
  },
  hiring: {
    icon: Zap,
    label: "Hiring Announcement",
    color: "text-accent-foreground",
    bgColor: "bg-accent/10",
  },
}

export function FeedPost({
  author,
  initials,
  role,
  company,
  connection,
  timeAgo,
  content,
  hashtags = [],
  image,
  matchCount,
  commentCount,
  type = "project",
}: FeedPostProps) {
  const config = typeConfig[type]
  const TypeIcon = config.icon

  return (
    <Card className="overflow-hidden">
      <CardContent className="p-0">
        {/* Header */}
        <div className="flex items-start justify-between p-4 pb-0">
          <div className="flex items-start gap-3">
            <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-primary text-sm font-bold text-primary-foreground">
              {initials}
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="font-semibold text-foreground">{author}</span>
                {connection && (
                  <span className="rounded-full bg-secondary px-1.5 py-0.5 text-[10px] font-medium text-muted-foreground">
                    {connection}
                  </span>
                )}
              </div>
              <p className="text-sm text-muted-foreground">{role} at {company}</p>
              <div className="mt-0.5 flex items-center gap-1.5 text-xs text-muted-foreground">
                <Clock className="h-3 w-3" />
                {timeAgo}
              </div>
            </div>
          </div>
          <button
            className="rounded-lg p-1.5 text-muted-foreground transition-colors hover:bg-secondary"
            aria-label="More options"
          >
            <MoreHorizontal className="h-5 w-5" />
          </button>
        </div>

        {/* Content */}
        <div className="px-4 pt-3">
          {/* Type badge */}
          <div className={`mb-2 inline-flex items-center gap-1.5 rounded-full ${config.bgColor} px-2.5 py-1`}>
            <TypeIcon className={`h-3.5 w-3.5 ${config.color}`} />
            <span className={`text-xs font-medium ${config.color}`}>{config.label}</span>
          </div>

          <p className="text-sm leading-relaxed text-foreground">{content}</p>

          {hashtags.length > 0 && (
            <div className="mt-2 flex flex-wrap gap-1.5">
              {hashtags.map((tag) => (
                <span
                  key={tag}
                  className="cursor-pointer text-sm font-medium text-primary hover:underline"
                >
                  #{tag}
                </span>
              ))}
            </div>
          )}
        </div>

        {/* Image */}
        {image && (
          <div className="mt-3 px-4">
            <div className="overflow-hidden rounded-lg border border-border">
              <img
                src={image || "/placeholder.svg"}
                alt="Post attachment"
                className="h-56 w-full object-cover"
                crossOrigin="anonymous"
              />
            </div>
          </div>
        )}

        {/* Stats row */}
        <div className="mx-4 mt-3 flex items-center gap-4 border-b border-border pb-2 text-sm text-muted-foreground">
          {matchCount !== undefined && (
            <span className="flex items-center gap-1">
              <ThumbsUp className="h-3.5 w-3.5" />
              {matchCount} Matches
            </span>
          )}
          {commentCount !== undefined && (
            <span className="flex items-center gap-1">
              <MessageSquare className="h-3.5 w-3.5" />
              {commentCount} Comments
            </span>
          )}
          {type === "project" && (
            <span className="ml-auto flex items-center gap-1">
              <Users className="h-3.5 w-3.5" />
              {"Proofs"}
            </span>
          )}
        </div>

        {/* Action buttons */}
        <div className="flex items-center justify-between px-4 py-2">
          <div className="flex items-center gap-1">
            <Button
              variant="ghost"
              size="sm"
              className="gap-1.5 text-xs text-muted-foreground hover:text-primary"
            >
              <ThumbsUp className="h-4 w-4" />
              Like
            </Button>
            <Button
              variant="ghost"
              size="sm"
              className="gap-1.5 text-xs text-muted-foreground hover:text-primary"
            >
              <MessageSquare className="h-4 w-4" />
              Comment
            </Button>
          </div>
          <div className="flex items-center gap-1">
            <Button
              variant="ghost"
              size="sm"
              className="gap-1.5 text-xs text-muted-foreground hover:text-primary"
            >
              <Share2 className="h-4 w-4" />
              Share
            </Button>
            <Button
              size="sm"
              variant="outline"
              className="gap-1.5 rounded-full bg-transparent text-xs font-semibold text-primary hover:bg-primary/5"
            >
              <CheckCircle className="h-4 w-4" />
              Connect
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
