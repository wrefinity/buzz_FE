import { LucideIcon } from "lucide-react";

import { Card, CardContent } from "@/components/ui/card";

interface MetricCardProps {
  title: string;
  value: string;
  subtitle: string;
  icon: LucideIcon;
  className?: string;
  iconColor?: string;
  bgColor?: string;
}

export function MetricCard({
  title,
  value,
  subtitle,
  icon: Icon,
  className,
  iconColor,
  bgColor
}: MetricCardProps) {
  return (
    <Card className={`${className} min-h-[120px]`}>
      <CardContent className="flex items-center w-full h-full gap-4 p-6 ">
        <div
          className={`flex items-center justify-center w-12 h-12 rounded-full ${bgColor ? bgColor : "bg-muted/50"}`}
        >
          <Icon
            className={`w-6 h-6 ${iconColor ? iconColor : "text-muted-foreground"}`}
          />
        </div>
        <div className="flex flex-col items-start justify-between gap-3">
          <h3 className="flex-1 text-xl font-medium">{title}</h3>
          <div className="flex  gap-2 text-[#718EBF]">
            <span className="text-sm ">{value}</span>
            <span className="text-sm ">{subtitle}</span>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
