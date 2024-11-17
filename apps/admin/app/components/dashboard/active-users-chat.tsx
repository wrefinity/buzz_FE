"use client";

import { Bar, BarChart, CartesianGrid, XAxis, YAxis } from "recharts";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle
} from "@/components/ui/card";
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent
} from "@/components/ui/chart";
import { FileText, TrendingUp } from "lucide-react";

import { type ChartConfig } from "@/components/ui/chart";
import { Separator } from "@/components/ui/separator";
import InfoDash from "./info";

const data = [
  { time: "1", desktop: 200, mobile: 100 },
  { time: "2", desktop: 220, mobile: 130 },
  { time: "3", desktop: 270, mobile: 140 },
  { time: "4", desktop: 200, mobile: 200 },
  { time: "5", desktop: 230, mobile: 120 },
  { time: "6", desktop: 250, mobile: 160 },
  { time: "7", desktop: 270, mobile: 180 },
  { time: "8", desktop: 260, mobile: 190 },
  { time: "9", desktop: 300, mobile: 200 },
  { time: "10", desktop: 320, mobile: 210 }
];

const chartConfig = {
  desktop: {
    label: "Desktop",
    color: "#014D6E"
  },
  mobile: {
    label: "Mobile",
    color: "#FFFFFF"
  }
} satisfies ChartConfig;

export function ActiveUsersChart() {
  return (
    <Card className="w-full border-none shadow-none">
      <CardHeader className="pb-4">
        <CardTitle className="sr-only">
          Active users right now
        </CardTitle>
      </CardHeader>
      <CardContent className="p-0">
        <div className="grid grid-cols-1 gap-4 md:grid-cols-3 lg:grid-cols-3">
          <InfoDash />
          <div className="rounded-lg bg-gradient-to-r from-[#5CACCE] to-[#014D6E] p-4 md:col-span-2">
            <ChartContainer
              config={chartConfig}
              className="h-[200px] w-full"
            >
              <BarChart
                data={data}
                margin={{
                  top: 5,
                  right: 0,
                  left: 0,
                  bottom: 5
                }}
                stackOffset="expand"
              >
                <CartesianGrid vertical={false} strokeDasharray="5 5" />
                <XAxis
                  dataKey="time"
                  tickLine={false}
                  axisLine={false}
                  hide
                  tick={{ fill: "white", fontSize: 12 }}
                />
                <YAxis
                  tickFormatter={(value) => `${(value * 100).toFixed(0)}%`}
                  tickLine={false}
                  axisLine={false}
                  tick={{ fill: "white", fontSize: 12 }}
                />
                <ChartTooltip
                  cursor={false}
                  content={<ChartTooltipContent />}
                />
                <Bar
                  dataKey="mobile"
                  stackId="a"
                  fill="var(--color-mobile)"
                  radius={10}
                  barSize={8}
                />

                <Bar
                  dataKey="desktop"
                  stackId="a"
                  fill="var(--color-desktop)"
                  radius={10}
                  barSize={8}
                />
              </BarChart>
            </ChartContainer>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
