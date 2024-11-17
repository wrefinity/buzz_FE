"use client";

import { FileStack, ListChecks, PlusSquare, Sigma, SquarePlay } from "lucide-react";

import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import { MetricCard } from "./metric-card";
import { TaskRow } from "./task-row";
import { socialTasks, videoTasks } from "@/utils/data";

export function TaskList({ type }: { type: "social" | "video" }) {
  const router = useRouter();
  // const tasks = type === "social" ? socialTasks : videoTasks;

  return (
    <div className="space-y-6">
      {type === "social" && (
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
        <MetricCard
          title="Total Tasks"
          value="457"
          subtitle="Uploaded Tasks"
          icon={Sigma}
          bgColor="bg-[#014D6E29]"
          iconColor="text-[#014D6E]"
        />
        <MetricCard
          title="Completed Tasks"
          value="212"
          subtitle="Completed Tasks"
          icon={ListChecks}
          bgColor="bg-[#16DBCC2E]"
          iconColor="text-[#16DBCC]"
        />
        <MetricCard
          title="Active Tasks"
          value="156"
          subtitle="Active Tasks"
          icon={FileStack}
          bgColor="bg-[#0678313B]"
          iconColor="text-[#067831]"
        />
      </div>
      )}

{type === "video" && (
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
        <MetricCard
          title="Videos"
          value="457"
          subtitle="Uploaded Videos"
          icon={SquarePlay}
          bgColor="bg-[#595BD42B]"
          iconColor="text-[#595BD4]"
        />
        <MetricCard
          title="Watched Videos"
          value="212"
          subtitle="Watched Videos"
          icon={ListChecks}
          bgColor="bg-[#16DBCC2E]"
          iconColor="text-[#16DBCC]"
        />
        <MetricCard
          title="Active Videos"
          value="156"
          subtitle="Active Videos"
          icon={FileStack}
          bgColor="bg-[#0678313B]"
          iconColor="text-[#067831]"
        />
      </div>
      )}


      <div className="flex justify-end">
        <Button
          onClick={() => router.push(`/task/add-${type}-task`)}
          className="bg-[#014D6E] hover:bg-[#014D6E]"
        >
          <PlusSquare className="w-8 h-8" />
          Add New {type === "social" ? "Task" : "Video"}
        </Button>
      </div>

      {type === "social" && (
        <div className="space-y-4">
          {socialTasks.map((task) => (
            <TaskRow
              key={task.id}
              icon={task.icon}
              iconColor={task.iconColor}
              title={task.title}
              subtitle={task.subtitle}
              progress={task.progress}
              points={task.points}
              date={task.date}
              onViewDetails={() => {}}
            />
          ))}
        </div>
      )}

      {type === "video" && (
        <div className="space-y-4">
          {videoTasks.map((task) => (
            <TaskRow
              key={task.id}
              banner={task.banner}
              title={task.title}
              subtitle={task.subtitle}
              progress={task.progress}
              points={task.points}
              date={task.date}
              onViewDetails={() => {}}
            />
          ))}
        </div>
      )}
    </div>
  );
}
