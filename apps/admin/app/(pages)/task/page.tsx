"use client";
import { TaskList } from "@/app/components/task/task-list";
import { ProtectedLayout } from "@/components/ProtectedLayout";

const TasksPage = () => {
 
  return (
    <div className="container py-10">
      <TaskList type="social" />
    </div>
  );
};

export default ProtectedLayout(TasksPage);
