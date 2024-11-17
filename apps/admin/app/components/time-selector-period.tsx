"use client"

import * as React from "react"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"

type Period = "day" | "week" | "month"

export default function MultipleTimeSelect({
  onChange = () => {},
  defaultValue = "day"
}: {
  onChange?: (value: Period) => void
  defaultValue?: Period
}) {
  const [selected, setSelected] = React.useState<Period>(defaultValue)

  const handleSelect = (period: Period) => {
    setSelected(period)
    onChange(period)
  }

  return (
    <div className="inline-flex items-center p-1 rounded-lg bg-slate-100 text-[#014D6E]">
      <Button
        variant="ghost"
        onClick={() => handleSelect("day")}
        className={cn(
          "rounded-md px-8",
          selected === "day" ? "bg-white shadow" : "hover:bg-white/50 hover:shadow-none"
        )}
      >
        Day
      </Button>
      <Button
        variant="ghost"
        onClick={() => handleSelect("week")}
        className={cn(
          "rounded-md px-8",
          selected === "week" ? "bg-white shadow" : "hover:bg-white/50 hover:shadow-none"
        )}
      >
        Week
      </Button>
      <Button
        variant="ghost"
        onClick={() => handleSelect("month")}
        className={cn(
          "rounded-md px-8",
          selected === "month" ? "bg-white shadow" : "hover:bg-white/50 hover:shadow-none"
        )}
      >
        Month
      </Button>
      
    </div>
  )
}