"use client";

import {
  FileStack,
  ListChecks,
  PlusSquare,
  Sigma,
  SquarePlay
} from "lucide-react";

import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import { MetricCard } from "./metric-card";
import { ITask, TaskRow } from "./task-row";
import { socialTasks, videoTasks } from "@/utils/data";
import useAxios from "@/hooks/useAxios";
import { getTask } from "@/service/task";
import { useEffect, useState } from "react";
import { Skeleton } from "@/components/ui/skeleton";

export function TaskList({ type }: { type: "social" | "video" }) {
  const router = useRouter();
  const { axiosHandler } = useAxios();
  const [tasks, setTasks] = useState<ITask[] | []>([]);
  const [loading, setLoading] = useState(false);
  // const tasks = type === "social" ? socialTasks : videoTasks;
  const getTaskData = async () => {
    setLoading(true);
    const result = await axiosHandler(getTask, "GET", null, true);
    if (result) {
      // console.log(result);

      setTasks(result as any);
      setLoading(false);
    }
    setLoading(false);
  };
  useEffect(() => {
    getTaskData();
  }, []);

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
          {loading ? (
            <div className="space-y-5">
              {[1, 2, 3, 4].map((i) => (
                <Skeleton
                  key={i}
                  className="w-full p-5 space-y-5 rounded-md h-[160px]"
                />
              ))}
            </div>
          ) : (
            <div className="space-y-5">
              {tasks.map((task) => (
                <TaskRow
                  key={task._id}
                  task={task}
                  progress={50}
                  onViewDetails={() => {
                    router.push(`/task/add-${type}-task/${task._id}`);
                  }}
                />
              ))}
            </div>
          )}
        </div>
      )}

      {type === "video" && (
        <div className="space-y-4">
          {loading ? (
            <div className="space-y-5">
              {[1, 2, 3, 4].map((i) => (
                <Skeleton
                  key={i}
                  className="w-full p-5 space-y-5 rounded-md h-[160px]"
                />
              ))}
            </div>
          ) : (
            <div className="space-y-5">
              {tasks.map((task) => (
                <TaskRow
                  key={task._id}
                  task={task}
                  progress={50}
                  onViewDetails={() => {
                    router.push(`/task/add-${type}-task/${task._id}`);
                  }}
                />
              ))}
            </div>
          )}
        </div>
      )}
    </div>
  );
}
