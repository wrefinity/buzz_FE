"use client"
import { FAQSection } from "../how-to-earn/faqs-section"
import { TaskCard } from "../how-to-earn/task-card"

const tasks = [
  {
    title: "Get Paid to Take Social Media Tasks",
    description: "Earn money by completing simple social media tasks on BuzzRoom. Engage, share, and connect—all while boosting your earnings!",
    icon: "thumbsUp",
    color: "#4267B2",
    href: "/tasks/social"
  },
  {
    title: "Get Paid to Watch Videos",
    description: "Earn money by completing simple social media tasks on BuzzRoom. Engage, share, and connect—all while boosting your earnings!",
    icon: "play",
    color: "#FFC107",
    href: "/tasks/videos"
  },
  {
    title: "Get Paid doing surveys",
    description: "Earn money by completing simple social media tasks on BuzzRoom. Engage, share, and connect—all while boosting your earnings!",
    icon: "clipboard",
    color: "#2A9D8F",
    href: "/tasks/surveys"
  },
  
  // Add more tasks as needed
]

export default function EarnPage() {
  return (
    <div className="space-y-5">
    
      <div className="grid grid-cols-1 gap-6 mb-20 md:grid-cols-2 lg:grid-cols-3">
        {tasks.map((task, index) => (
          <TaskCard key={index} {...task} />
        ))}
      </div>
      
      <div className="max-w-3xl mx-auto">
        <h2 className="mb-8 text-2xl font-bold text-center">
          Frequently Asked Questions
        </h2>
        <FAQSection />
      </div>
    </div>
  )
}