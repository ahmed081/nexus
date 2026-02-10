"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

export function WelcomeCard() {
  return (
    <Card className="overflow-hidden">
      <CardContent className="p-5">
        <h1 className="text-2xl font-bold text-foreground">
          Welcome back, <span className="text-primary">Alex!</span>
        </h1>
        <p className="mt-1 text-sm text-muted-foreground">
          Connect, Share and Grow Ethically in Your Career
        </p>

        <div className="mt-4 flex flex-col gap-3 sm:flex-row sm:items-center">
          <div className="flex-1">
            <div className="flex items-center justify-between text-sm">
              <span className="text-muted-foreground">
                Complete your profile to increase your visibility:
              </span>
              <span className="font-semibold text-primary">80% complete</span>
            </div>
            <div className="mt-2 h-2.5 overflow-hidden rounded-full bg-secondary">
              <div
                className="h-full rounded-full bg-primary transition-all duration-500"
                style={{ width: "80%" }}
              />
            </div>
          </div>
          <Button
            size="sm"
            className="shrink-0 bg-accent font-semibold text-accent-foreground shadow-none hover:bg-accent/90"
          >
            Improve Profile
          </Button>
        </div>
      </CardContent>
    </Card>
  )
}
