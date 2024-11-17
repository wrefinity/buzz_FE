"use client";
import {
  countriesData,
  deviceData,
  StatList
} from "@/app/components/analytics/analytics-list";
import { AnalyticsEarningChart } from "@/app/components/analytics/earnings-chart";
import AnalyticsStats from "@/app/components/analytics/stats";
import { WatchlistChart } from "@/app/components/analytics/watch-list-chart";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import React from "react";

const analyticsSummary = [
  {
    id: 1,
    title: "Total Points Earned",
    value: "7890",
  },
  {
    id: 2,
    title: "Total Earnings",
    value: <span>N2,868.99</span>,
  },
  {
    id: 2,
    title: "Total Users",
    value: <span>156 K</span>,
    subtext: "Total views for the last 30 days"
  }
];

const AnalayticsPage = () => {
  return (
    <div className="space-y-5">
      <Card className="w-full">
        <CardHeader>
          <CardTitle className="sr-only">Analytics</CardTitle>
        </CardHeader>
        <CardContent>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-3 sm:gap-0 sm:divide-x">
          {analyticsSummary.map((stat, index) => (
            <div key={index} className={cn("px-4", { "sm:pl-6": index === 0, "sm:pr-6": index === analyticsSummary.length - 1 })}>
              <AnalyticsStats
                title={stat.title}
                value={stat.value}
                subtext={stat.subtext}
              />
            </div>
          ))}
        </div>
        </CardContent>
      </Card>

      <div className="grid w-full gap-5 gird-cols-1 md:grid-cols-3 lg:gap-8">
        <div className="md:col-span-2">
          <AnalyticsEarningChart />
        </div>
        <StatList title="Device Category" items={deviceData} />
      </div>

      <div className="grid w-full gap-5 gird-cols-1 md:grid-cols-3 lg:gap-8">
        <div className="md:col-span-2">
          <WatchlistChart />
        </div>
        <StatList title="Top Countries" items={countriesData} />
      </div>
    </div>
  );
};

export default AnalayticsPage;
