"use client"

import { Search, Globe, Wallet } from "lucide-react"
import { StepSection } from "./steps"

export default function StepSectionComp() {
  return (
    <div className="md:py-8">
      <StepSection
        number={1}
        title="Sign Up to BuzzRoom"
        description="Start your earning journey by creating a BuzzRoom account. It's quick, easy, and opens the door to exciting rewards just for watching videos!"
        imageSrc="/sign_up.svg"
        backgroundColor="bg-[#F8D0CB]"
        imagePosition="right"
        imageHeight={250}
      />

      <StepSection
        number={2}
        title="Choose and complete a task"
        description="Discover engaging tasks that can be completed in minutes. From watching short videos to engaging with trending content, there's always a quick and rewarding task waiting for you on BuzzRoom!"
        imageSrc="/task.svg"
        backgroundColor="bg-[#1E3A5F]"
        imagePosition="left"
        imageHeight={250}
        additionalContent={
          <div className="space-y-8">
            <div className="flex items-start gap-4">
              <Search className="w-6 h-6 mt-1 text-[#1E3A5F]" />
              <div>
                <h3 className="mb-2 font-semibold">Find quick and easy microtasks</h3>
                <p className="text-gray-600">
                  Discover engaging tasks that can be completed in minutes. From watching short videos to engaging with trending content, there's always a quick and rewarding task waiting for you on BuzzRoom!
                </p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <Globe className="w-6 h-6 mt-1 text-[#1E3A5F]" />
              <div>
                <h3 className="mb-2 font-semibold">Earn flexibly, anytime, anywhere with BuzzRoom</h3>
                <p className="text-gray-600">
                  Turn idle moments—whether you're commuting, waiting in line, or on a coffee break—into real rewards by simply watching videos!
                </p>
              </div>
            </div>
          </div>
        }
      />

      <StepSection
        number={3}
        title="Get Paid with BuzzRoom"
        description="Withdraw your BuzzRoom rewards easily! Once you've accumulated enough, cash out your earnings quickly and enjoy the benefits of your time spent watching."
        imageSrc="/sent.svg"
        backgroundColor="bg-[#2A9D8F]"
        imagePosition="right"
        imageHeight={250}
        additionalContent={
          <div className="flex items-start gap-4">
            <Wallet className="w-6 h-6 mt-1 text-[#1E3A5F]" />
            <div>
              <h3 className="mb-2 font-semibold">Withdraw BuzzRoom Rewards</h3>
              <p className="text-gray-600">
                Withdraw your BuzzRoom rewards easily! Once you've accumulated enough, cash out your earnings quickly and enjoy the benefits of your time spent watching.
              </p>
            </div>
          </div>
        }
      />
    </div>
  )
}