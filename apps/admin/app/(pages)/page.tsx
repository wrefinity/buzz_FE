"use client"
import { Users, CheckSquare, DollarSign, Award } from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle
} from "@/components/ui/card";
import { StatCard } from "../components/dashboard/stat-card";
import { ActiveUsersChart } from "../components/dashboard/active-users-chat";
import { EarningsChart } from "../components/dashboard/earnings-chart";
import { DailyActiveUsers } from "../components/dashboard/daily-active-users";
import { Button } from "@/components/ui/button";
import { ProtectedLayout } from '../../components/ProtectedLayout';

const DashboardPage = () => {
  return (
    <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
      <div className="space-y-6 lg:col-span-2">
        <Card>
          <CardHeader>
          <CardTitle className="text-base font-medium">
          Active users right now
        </CardTitle>
            <CardDescription>An analytic overview of users within the system currently</CardDescription>
          </CardHeader>
          <CardContent className="space-y-6 ">
            <ActiveUsersChart />
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
              <StatCard
                icon={<Users className="w-6 h-6 text-[#014D6E]" />}
                iconBgcolor="bg-[#B2CAD3]"
                label="Total Users"
                value="35k"
                color="bg-[#014D6E]"
                valueNumber={35}
              />
              <StatCard
                icon={<CheckSquare className="w-6 h-6 text-[#533FE4]" />}
                label="Completed Tasks"
                 iconBgcolor="bg-[#CBC5F7]"
                value="1500"
                color="bg-[#533FE4]"
                valueNumber={45}
              />
              <StatCard
                icon={<DollarSign className="w-6 h-6 text-[#F93131]" />}
                label="Earnings"
                 iconBgcolor="bg-[#FFDFDF]"
                value="N400k"
                color="bg-[#F93131]"
                valueNumber={40}
              />
              <StatCard
                icon={<Award className="w-6 h-6 text-[#2DCCFF]" />}
                label="Total Points Earned"
                 iconBgcolor="bg-[#E0F8FF]"
                value="4568"
                color="bg-[#2DCCFF]"
                valueNumber={65}
              />
            </div>
          </CardContent>
        </Card>

        <EarningsChart />
      </div>
      <div className="space-y-6">
        <Card>
          <CardHeader>
            <CardTitle className="text-center">
              Total earning this month
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex flex-col items-center justify-center space-y-4">
              <h2 className="text-4xl font-bold text-[#014D6E]">N735.2k</h2>
              <p className="text-sm text-center text-gray-500">
                You can view your total Earnings for this month
              </p>
              <Button variant="outline" size="lg" className="text-primary">
                View Earnings
              </Button>
            </div>
          </CardContent>
        </Card>
        <DailyActiveUsers />
      </div>
    </div>
  );
}

export default ProtectedLayout(DashboardPage)