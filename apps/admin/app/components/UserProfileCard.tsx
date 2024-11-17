import { Check, Star } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader
} from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import Image from "next/image";

export interface UserProfileCardProps {
  id: string;
  name: string;
  email: string;
  imageUrl: string;
  tasksCompleted: number;
  totalPoints: number;
  dateJoined: string;
  contact: string;
  earnings:number;
  status:string;
  country: string;
  points:string
}

export function UserProfileCard({ user }: { user: UserProfileCardProps }) {
  return (
    <Card className="w-full">
      <CardHeader className="flex flex-col items-center pb-2 space-y-4">
        <div className="w-32 h-32 overflow-hidden rounded-lg">
          <Image
            src={user?.imageUrl}
            width={100}
            height={100}
            alt={user?.name}
            className="object-cover w-full h-full"
          />
        </div>
        <h2 className="text-2xl font-semibold text-center">{user.name}</h2>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="grid grid-cols-2 gap-4">
          <div className="flex items-center gap-2 p-4 rounded-lg bg-muted/50">
            <div className="p-2 rounded-lg bg-[#014D6E21]">
              <Check className="w-5 h-5 text-primary" />
            </div>
            <div>
              <p className="text-xl font-bold">{user.tasksCompleted}k</p>
              <p className="text-sm text-muted-foreground">Task Completed</p>
            </div>
          </div>
          <div className="flex items-center gap-2 p-4 rounded-lg bg-muted/50">
            <div className="p-2 rounded-lg bg-[#014D6E21]">
              <Star className="w-5 h-5 text-primary" />
            </div>
            <div>
              <p className="text-xl font-bold">{user.totalPoints}</p>
              <p className="text-sm text-muted-foreground">Total Points</p>
            </div>
          </div>
        </div>

        <div className="space-y-4">
          <h3 className="text-lg font-semibold">Details</h3>
          <Separator />
          <div className="space-y-4">
            <div className="grid grid-cols-3 gap-4">
              <p className="text-sm font-medium text-muted-foreground">
                Full Name:
              </p>
              <p className="col-span-2 text-sm">{user.name}</p>
            </div>

            <div className="grid grid-cols-3 gap-4">
              <p className="text-sm font-medium text-muted-foreground">
                Email:
              </p>
              <p className="col-span-2 text-sm break-all">{user.email}</p>
            </div>

            <div className="grid grid-cols-3 gap-4">
              <p className="text-sm font-medium text-muted-foreground">
                Date Joined:
              </p>
              <p className="col-span-2 text-sm">{user.dateJoined}</p>
            </div>

            <div className="grid grid-cols-3 gap-4">
              <p className="text-sm font-medium text-muted-foreground">
                Contact:
              </p>
              <p className="col-span-2 text-sm">{user.contact}</p>
            </div>

            <div className="grid grid-cols-3 gap-4">
              <p className="text-sm font-medium text-muted-foreground">
                Country:
              </p>
              <p className="col-span-2 text-sm">{user.country}</p>
            </div>
          </div>
        </div>
      </CardContent>
      <CardFooter className="flex justify-center">
        <Button variant="default" className="w-32 bg-[#014D6E] shadow-sm">
          EDIT
        </Button>
      </CardFooter>
    </Card>
  );
}
