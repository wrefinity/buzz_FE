import { ThumbsUp, Play, ClipboardList } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const icons: any = {
  thumbsUp: ThumbsUp,
  play: Play,
  clipboard: ClipboardList
};

interface TaskCardProps {
  title: string;
  description: string;
  icon: keyof typeof icons | any;
  color: string;
  href: string;
}

export function TaskCard({
  title,
  description,
  icon,
  color,
  href
}: TaskCardProps) {
  const Icon = icons[icon];

  return (
    <Card className="transition-all hover:shadow-lg">
      <CardContent className="p-6">
        <div className="mb-4">
          <div
            className="flex items-center justify-center w-12 h-12 rounded-lg"
            style={{ backgroundColor: color }}
          >
            <Icon className="w-6 h-6 text-white" />
          </div>
        </div>
        <h3 className="mb-3 text-xl font-semibold">{title}</h3>
        <p className="mb-4 text-gray-600">{description}</p>
        <Button variant="outline" className="group" asChild>
          <a href={href}>
            Learn More
            <span className="inline-block transition-transform group-hover:translate-x-1">
              →
            </span>
          </a>
        </Button>
      </CardContent>
    </Card>
  );
}
