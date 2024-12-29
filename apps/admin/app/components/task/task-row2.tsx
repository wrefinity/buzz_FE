import { type LucideIcon } from 'lucide-react';
import Image from "next/image";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";

interface TaskRowProps {
  icon?: LucideIcon;
  banner?: string;
  title?: string;
  iconColor?: string;
  subtitle?: string;
  progress: number;
  points?: string;
  date?: string;
  task: ITask;
  onViewDetails: () => void;
  className?: string;
}

export interface ITask {
  completedBy: string[];
  _id: string;
  title: string;
  description: string;
  thumbnail: string;
  url: string;
  socialPlatform: string;
  rewardTokens: number;
  createdAt: string;
  __v: number;
}

const formatDate = (date: string | any) => {
  const convertDate = new Date(date);
  return convertDate.toLocaleDateString("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric",
  });
}

export default function TaskRow({
  icon: Icon,
  banner,
  iconColor = "#183B56",
  progress,
  task,
  onViewDetails,
  className
}: TaskRowProps) {
  const lighterColor1 = `${iconColor}33`; // 20% opacity
  const lighterColor2 = `${iconColor}11`; // 7% opacity

  return (
    <Card className={`${className} w-full`}>
      <CardContent>
        <div className="flex items-center justify-between w-full gap-4 p-6">
          {Icon && (
            <div
              className={`flex items-center justify-center w-12 h-12 rounded-lg`}
              style={{
                background: `linear-gradient(135deg, ${lighterColor1}, ${lighterColor2})`
              }}
            >
              <Icon className="w-6 h-6" style={{ color: iconColor }} />
            </div>
          )}
  
          {(banner || task.thumbnail) && (
            <div className="relative w-20 h-16 overflow-hidden rounded-lg">
              <Image
                src={banner || task.thumbnail}
                alt={task.title || "banner image"}
                width={100}
                height={100}
                className="object-cover w-full h-full"
              />
            </div>
          )}
  
          <div className="space-y-1 max-w-40">
            <h3 className="font-medium truncate hover:overflow-visible">{task.title}</h3>
            <p className="text-sm text-[#718EBF] line-clamp-2">{task.description}</p>
          </div>
  
          <div className="items-center w-32">
            <span className="text-center">Status</span>
            <div className="flex items-center justify-between gap-3 text-sm">
              <Progress
                value={progress}
                className={`${
                  progress > 50
                    ? "bg-[#00D92F]"
                    : progress < 25
                    ? "bg-[#FF8A00]"
                    : "bg-[#FFE600]"
                }`}
              />
              <span>{progress}%</span>
            </div>
          </div>
  
          <div className="items-center w-20">
            <div className="mb-1 text-sm">Task Points</div>
            <div className="text-sm text-[#718EBF]">{task.rewardTokens}</div>
          </div>
  
          <div className="hidden w-20 md:block">
            <div className="mb-1 text-sm">Task Date</div>
            <div className="text-sm text-[#718EBF]">{formatDate(task.createdAt)}</div>
          </div>
  
          <Button
            variant="outline"
            className="rounded-2xl text-[#718EBF] w-30"
            onClick={onViewDetails}
          >
            View Details
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}

