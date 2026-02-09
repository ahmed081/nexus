"use client"

import { useState } from "react"

const tabs = ["For You", "Profession", "Mentorship", "Industry"]

export function FeedTabs() {
  const [active, setActive] = useState("For You")

  return (
    <div className="flex items-center gap-1">
      <span className="mr-2 text-sm font-semibold text-foreground">Your Network Feed</span>
      {tabs.map((tab) => (
        <button
          key={tab}
          onClick={() => setActive(tab)}
          className={`rounded-md px-3 py-1.5 text-sm font-medium transition-colors ${
            active === tab
              ? "bg-primary text-primary-foreground"
              : "text-muted-foreground hover:bg-secondary hover:text-foreground"
          }`}
        >
          {tab}
        </button>
      ))}
    </div>
  )
}
