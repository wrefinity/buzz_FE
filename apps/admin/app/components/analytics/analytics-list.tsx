import { Laptop, Smartphone, Tablet } from 'lucide-react'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

type StatItem = {
  icon: string | React.ReactNode
  label: string
  value: string
}

type StatListProps = {
  title: string
  items: StatItem[]
}

export const deviceData: StatItem[] = [
  {
    icon: <Smartphone className="w-6 h-6 text-[#014D6E]" />,
    label: "Mobile",
    value: "96.42%"
  },
  {
    icon: <Laptop className="w-6 h-6 text-[#014D6E]" />,
    label: "Desktop",
    value: "2.76%"
  },
  {
    icon: <Tablet className="w-6 h-6 text-[#014D6E]" />,
    label: "Tablet",
    value: "0.82%"
  }
]

// Countries data
export const countriesData: StatItem[] = [
  {
    icon: "🇳🇬",
    label: "Nigeria",
    value: "54%"
  },
  {
    icon: "🇩🇪",
    label: "Germany",
    value: "32%"
  },
  {
    icon: "🇺🇸",
    label: "United State",
    value: "27%"
  },
  {
    icon: "🇪🇸",
    label: "Spain",
    value: "25%"
  }
]

export function StatList({ title, items }: StatListProps) {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-xl font-semibold">{title}</CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        {items.map((item, index) => (
          <div key={index} className="flex flex-wrap items-center justify-between gap-5">
            <div className="flex items-center gap-4">
              <div className="flex items-center justify-center w-12 h-12 rounded-full bg-muted">
                {typeof item.icon === 'string' ? (
                  <span className="text-2xl">{item.icon}</span>
                ) : (
                  item.icon
                )}
              </div>
              <span className="text-lg">{item.label}</span>
            </div>
            <span className="text-lg font-medium">{item.value}</span>
          </div>
        ))}
      </CardContent>
    </Card>
  )
}