import { LucideIcon } from 'lucide-react';
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
  rewardTokens: number | string;
  createdAt: string;
  __v: number;
};

const formatDate = (date:string| any) => {
  const convertDate = new Date(date);
  return convertDate.toLocaleDateString("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric",
  });
}

export function TaskRow({
  icon: Icon,
  banner,
  title,
  subtitle,
  iconColor = "#183B56",
  progress,
  points,
  task,
  date,
  onViewDetails,
  className
}: TaskRowProps) {
  const lighterColor1 = `${iconColor}33`; // 20% opacity
  const lighterColor2 = `${iconColor}11`; // 7% opacity

  return (
    <Card className={`${className} w-full`}>
    <CardContent>
      <div className="flex items-center justify-between w-full gap-4 p-6">
        {/* Icon */}
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
  
        {/* Banner */}
        {banner || task.thumbnail && (
          <div className="relative w-20 h-16 overflow-hidden rounded-lg">
            <Image
              src={banner || task.thumbnail}
              alt={title || "banner image" || task.title}
              width={100}
              height={100}
              className="object-cover w-full h-full"
            />
          </div>
        )}
  
        {/* Title and Subtitle */}
        <div className="space-y-1 max-w-40">
          <h3 className="font-medium truncate hover:overflow-visible">{title || task.title}</h3>
          <p className="text-sm text-[#718EBF] line-clamp-2">{subtitle || task.description}</p>
        </div>
  
        {/* Status */}
        <div className="items-center w-32">
          <span className="text-center">Status</span>
          <div className="flex items-center justify-between gap-3 text-sm">
            <Progress
              value={progress}
              progressColor={`${
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
  
        {/* Task Points */}
        <div className="items-center w-20">
          <div className="mb-1 text-sm">Task Points</div>
          <div className="text-sm text-[#718EBF]">{points || task.rewardTokens}</div>
        </div>
  
        {/* Task Date (Hidden on Small and Medium Screens) */}
        <div className="hidden w-20 md:block">
          <div className="mb-1 text-sm">Task Date</div>
          <div className="text-sm text-[#718EBF]">{date || formatDate(task.createdAt)}</div>
        </div>
  
        {/* View Details Button */}
        <Button
          color="#718EBF"
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