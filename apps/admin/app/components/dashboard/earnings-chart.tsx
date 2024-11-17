"use client";

import {
  Line,
  LineChart,
  CartesianGrid,
  XAxis,
  YAxis,
  AreaChart,
  Area
} from "recharts";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  ChartContainer,
  ChartLegend,
  ChartLegendContent,
  ChartTooltip,
  ChartTooltipContent
} from "@/components/ui/chart";
import { ChartConfig } from "../../../components/ui/chart";

const data = [
  { age: "15-20", earnings: 10 },
  { age: "20-25", earnings: 30 },
  { age: "25-30", earnings: 45 },
  { age: "30-35", earnings: 40 },
  { age: "35-40", earnings: 35 },
  { age: "40-45", earnings: 25 },
  { age: "45-50", earnings: 15 }
];
const chartConfig = {
  views: {
    label: "Page Views"
  },
  desktop: {
    label: "desktop",
    color: "#014D6E"
  },
  mobile: {
    label: "Mobile",
    color: "hsl(var(--chart-2))"
  }
} satisfies ChartConfig;
export function EarningsChart() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Earnings by Age</CardTitle>
      </CardHeader>
      <CardContent>
        <ChartContainer
          config={chartConfig}
          className="aspect-auto h-[250px] w-full"
        >
          <AreaChart accessibilityLayer data={data}>
            <CartesianGrid vertical={false} />
            <XAxis
              dataKey="earnings"
              tickMargin={8}
              tickLine={false}
              axisLine={false}
            />
            <YAxis />
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent indicator="line" />}
            />
            <ChartLegend content={<ChartLegendContent />} />
            <Area
              type="natural"
              dataKey="earnings"
              fill="var(--color-desktop)"
              stroke="var(--color-desktop)"
              strokeWidth={2}
              fillOpacity={0.4}
            />
          </AreaChart>
        </ChartContainer>
      </CardContent>
    </Card>
  );
}
