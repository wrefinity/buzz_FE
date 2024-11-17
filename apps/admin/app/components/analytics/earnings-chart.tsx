"use client";

import { TrendingUp } from "lucide-react";
import { Area, AreaChart, CartesianGrid, XAxis, YAxis } from "recharts";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue
} from "@/components/ui/select";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle
} from "@/components/ui/card";
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent
} from "@/components/ui/chart";
import { Button } from "@/components/ui/button";
const chartData = [
  { month: "January", desktop: 186 },
  { month: "February", desktop: 305 },
  { month: "March", desktop: 237 },
  { month: "April", desktop: 73 },
  { month: "May", desktop: 209 },
  { month: "June", desktop: 214 }
];

const chartConfig = {
  desktop: {
    label: "Desktop",
    color: "#174458"
  }
} satisfies ChartConfig;

export function AnalyticsEarningChart() {
  return (
    <Card>
      <CardHeader >
        <div className="flex items-center justify-between">
        <CardTitle>Earnings chart</CardTitle>
        <CardDescription className="sr-only">
          Showing total visitors for the last 6 months
        </CardDescription>
        <Select>
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="This month" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="days">Last 7 days</SelectItem>
            <SelectItem value="month">This Month</SelectItem>
            <SelectItem value="year">A year ago</SelectItem>
          </SelectContent>
        </Select>
        </div>
        
      </CardHeader>
      <CardContent>
        <ChartContainer config={chartConfig}  className="max-h-[220px] w-full">
          <AreaChart
            accessibilityLayer
            data={chartData}
            margin={{
              left: 12,
              right: 12
            }}
          >
            <CartesianGrid vertical={false} />
            <XAxis
              dataKey="month"
              tickLine={false}
              axisLine={false}
              tickMargin={8}
              tickFormatter={(value) => value.slice(0, 3)}
            />
            <YAxis />
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent indicator="dot" hideLabel />}
            />
            <Area
              dataKey="desktop"
              type="linear"
              fill="var(--color-desktop)"
              fillOpacity={0.4}
              stroke="var(--color-desktop)"
            />
          </AreaChart>
        </ChartContainer>
      </CardContent>
   
    </Card>
  );
}
