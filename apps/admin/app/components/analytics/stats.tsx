import React from "react";

type AnalyticsStatsType = {
  title: string;
  value: React.ReactNode | string;
  subtext?: string;
};
const AnalyticsStats = ({ title, value, subtext }: AnalyticsStatsType) => {
  return (
    <div className="w-full">
      <span className="text-sm text-gray-500">{title}</span>
      <h1 className="text-3xl  text-[#014D6E]">{value}</h1>
      <p className="font-light text-sm text-[#89868D]">{subtext}</p>
    </div>
  );
};

export default AnalyticsStats;
