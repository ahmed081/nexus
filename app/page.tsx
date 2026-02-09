import { WelcomeCard } from "@/components/home/welcome-card"
import { PostComposer } from "@/components/home/post-composer"
import { FeedTabs } from "@/components/home/feed-tabs"
import { FeedPost } from "@/components/home/feed-post"
import {
  PeopleYouMayKnow,
  RecommendedInternships,
  TopCompaniesHiring,
} from "@/components/home/sidebar-widgets"

const feedPosts = [
  {
    author: "James Carter",
    initials: "JC",
    role: "Senior Software Engineer",
    company: "TechSolutions",
    timeAgo: "1 hour ago",
    content:
      "Excited to be leading a new product development initiative at TechSolutions! We're working on an AI-driven analytics platform. Looking for feedback and collaboration opportunities \u2013 any data analytics experts in my network?",
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80",
    matchCount: 58,
    commentCount: 42,
    type: "project" as const,
  },
  {
    author: "Sarah Lee",
    initials: "SL",
    role: "Junior Data Analyst",
    company: "Acme Brages",
    timeAgo: "3 hours ago",
    content:
      "Completed my Advanced SQL course today! Feel more confident in my data skills. On to the next challenge!",
    hashtags: ["SkillGrowth", "DataScience"],
    matchCount: 32,
    commentCount: 14,
    type: "milestone" as const,
  },
  {
    author: "Acme Corp",
    initials: "AC",
    role: "HR Department",
    company: "Acme Corp",
    timeAgo: "4 hours ago",
    content:
      "We're hiring! We have several new remote, paid internship positions open for Summer 2026. Roles include Data Analyst, Marketing Coordinator, and Junior Developer. Apply using your Nexus profile today.",
    hashtags: ["Hiring", "Internships", "RemoteWork"],
    type: "hiring" as const,
    commentCount: 28,
  },
]

export default function HomePage() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-6">
      <div className="flex flex-col gap-6 lg:flex-row">
        {/* Main Feed */}
        <div className="flex-1 space-y-4">
          <WelcomeCard />
          <FeedTabs />
          <PostComposer />
          {feedPosts.map((post) => (
            <FeedPost key={`${post.author}-${post.timeAgo}`} {...post} />
          ))}
        </div>

        {/* Right Sidebar */}
        <aside className="w-full space-y-4 lg:w-80">
          <PeopleYouMayKnow />
          <RecommendedInternships />
          <TopCompaniesHiring />
        </aside>
      </div>
    </div>
  )
}
