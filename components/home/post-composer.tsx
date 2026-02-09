"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ImageIcon, BarChart3, FileText, Send } from "lucide-react"

export function PostComposer() {
  return (
    <Card>
      <CardContent className="p-4">
        <div className="flex items-start gap-3">
          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary text-sm font-bold text-primary-foreground">
            AM
          </div>
          <input
            type="text"
            placeholder="Share a skill, project, or opportunity with your network"
            className="h-10 flex-1 rounded-lg border border-border bg-secondary px-4 text-sm text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
          />
        </div>
        <div className="mt-3 flex flex-wrap items-center gap-2">
          <Button variant="outline" size="sm" className="gap-1.5 text-muted-foreground bg-transparent">
            <FileText className="h-4 w-4" />
            Create Post
          </Button>
          <Button variant="outline" size="sm" className="gap-1.5 text-muted-foreground bg-transparent">
            <ImageIcon className="h-4 w-4" />
            Photo
          </Button>
          <Button variant="outline" size="sm" className="gap-1.5 text-muted-foreground bg-transparent">
            <BarChart3 className="h-4 w-4" />
            Poll
          </Button>
          <Button size="sm" className="ml-auto gap-1.5 bg-primary text-primary-foreground hover:bg-primary/90">
            <Send className="h-4 w-4" />
            Connect
          </Button>
        </div>
      </CardContent>
    </Card>
  )
}
