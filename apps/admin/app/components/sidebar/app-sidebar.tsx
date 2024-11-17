"use client";

import { Bot, LogOut, Settings2, SquareTerminal } from "lucide-react";
import * as React from "react";

import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarRail
} from "@/components/ui/sidebar";
import Image from "next/image";
import Link from "next/link";
import BuzzroomLogo from "../../../public/BuzzRoom.svg";
import { NavMain } from "./nav-main";
import { NavUser } from "./user";
// This is sample data.
const data = {
  user: {
    name: "shadcn",
    email: "m@example.com",
    avatar:
      "https://images.unsplash.com/photo-1611162616475-46b635cb6868?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8eW91dHViZXxlbnwwfHwwfHx8MA%3D%3D"
  },

  navMain: [
    {
      title: "Home",
      url: "#",
      icon: SquareTerminal,
      isActive: true,
      items: [
        {
          title: "Dashboard",
          url: "/"
        },
        {
          title: "Analytics",
          url: "/dashboard/analytics"
        },
        {
          title: "Users",
          url: "/dashboard/users"
        }
      ]
    },
    {
      title: "Tasks",
      url: "#",
      icon: Bot,
      items: [
        {
          title: "Social Tasks",
          url: "/task"
        },
        {
          title: "Video Tasks",
          url: "/task/video-task"
        }
      ]
    },
    {
      title: "Settings",
      url: "#",
      icon: Settings2,
      items: [
        {
          title: "Introduction",
          url: "#"
        },
        {
          title: "Get Started",
          url: "#"
        },
        {
          title: "Tutorials",
          url: "#"
        },
        {
          title: "Changelog",
          url: "#"
        }
      ]
    },
    {
      title: "Logout",
      url: "#",
      icon: LogOut,
      items: [
        {
          title: "General",
          url: "#"
        },
        {
          title: "Team",
          url: "#"
        },
        {
          title: "Billing",
          url: "#"
        },
        {
          title: "Limits",
          url: "#"
        }
      ]
    }
  ]
};

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar collapsible="icon" {...props}>
      <SidebarHeader>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton size="lg" asChild>
              <Link href="/" className="flex items-center gap-2">
                <Image
                  src={BuzzroomLogo}
                  alt="BuzzRoom Logo"
                  width={100}
                  height={100}
                  className="w-8 h-8"
                />
                <span className="text-lg font-semibold text-[#014D6E]">
                  BuzzRoom
                </span>
              </Link>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>
      <SidebarContent>
        <NavMain items={data.navMain} />
      </SidebarContent>
      <SidebarFooter>
        <NavUser user={data.user} />
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  );
}
