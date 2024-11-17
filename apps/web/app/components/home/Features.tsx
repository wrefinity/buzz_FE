import { ArrowRight, BarChart3, Target, Wallet } from "lucide-react"
import { Button } from "@/components/ui/button"
import { MainLayout } from "../MainLayout"

export function FeaturesSection() {
  return (
    <MainLayout>
      <div className="text-center">
        <h2 className="text-lg text-[#183B56] font-bold sm:text-xl md:text-3xl">New Personal Earning App</h2>
        <p className="mx-auto mt-4 max-w-[600px] text-muted-foreground font-sans font-light">
          BuzzRoom lets you earn money effortlessly by watching videos, track your rewards, and see your earnings grow in real-time
        </p>
      </div>
      <div className="mt-16 grid gap-8 md:grid-cols-3">
        {[
          {
            icon: Wallet,
            title: "Easy access",
            description:
              "Take BuzzRoom with you wherever you go, so you can stay on top of your earnings and rewards anytime, anywhere",
          },
          {
            icon: Target,
            title: "Plan Your Earnings",
            description:
              "Set achievable earning goals with BuzzRoom and watch your rewards grow as you complete daily video tasks.",
          },
          {
            icon: BarChart3,
            title: "Total control",
            description:
              "Take full control of your earnings with BuzzRoom. It helps you track your rewards anytime, anywhere.",
          },
        ].map((feature, index) => (
          <div key={index} className="flex flex-col items-center text-center">
            <div className="mb-4 rounded-full bg-primary/10 p-4">
              <feature.icon className="h-6 w-6 text-primary" />
            </div>
            <h3 className="mb-2 text-xl font-semibold text-[#183B56]">{feature.title}</h3>
            <p className="mb-4 text-muted-foreground font-sans">{feature.description}</p>
              <Button variant="link" className="group text-[#183B56] font-bold text-lg">
              Learn more{" "}
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Button>
          </div>
        ))}
      </div>
    </MainLayout>
  )
}