"use client";

import AddTaskForm from "@/app/components/task/add-task-form";
import { ITask } from "@/app/components/task/task-row";
import useAxios from "@/hooks/useAxios";
import { getTaskById } from "@/service/task";
import { useEffect, useState } from "react";
export default function NewVideoPage({
  params
}: {
  params: { type: "social" | "video"; id: string };
}) {
  // console.log(params.id);
  const actualType = params.type.split("-")[1];
  const [taskData, setTaskData] = useState<ITask | null>(null);
  const [loading, setLoading] = useState(false)
  const { axiosHandler } = useAxios();

  useEffect(() => {
    async function getTask() {
      setLoading(true)
      const result = await axiosHandler<ITask>(
        getTaskById(params.id),
        "GET",
        null,
        true
      );
      if (result) {
        setLoading(false)
        setTaskData(result);
      }
      setLoading(false)
    }

    getTask();
  }, [params.id]);

  return (
    <div className="container max-w-4xl py-10 mx-auto">
      <AddTaskForm type={actualType as "social" | "video"} data={taskData} isLoading={loading} />
    </div>
  );
}
