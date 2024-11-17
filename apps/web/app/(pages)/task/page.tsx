import EarnPage from "@/app/components/task/EarnPage";
import BannerLayout from "@/app/components/Layout/BannerLayout";
import { MainLayout } from "@/app/components/MainLayout";
import React from "react";

const TaskEarn = () => {
  return (
    <BannerLayout
      title="Pick a Task and Start Earning"
      description="Choose from a variety of tasks and start earning rewards right away. With each task completed, your BuzzRoom earnings grow, making it easy to reach your goals!"
    >
      <div className="space-y-5">
        <MainLayout className="space-y-5">
          <h1 className="text-2xl font-bold text-center capitalize md:text-3xl">
            See All Tasks Below
          </h1>
          <EarnPage />
        </MainLayout>
      </div>
    </BannerLayout>
  );
};

export default TaskEarn;
