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
import { useEffect, useState } from "react";
import { usePathname, useRouter } from "next/navigation";
import { useStore } from "@/context/storeProvider";
import { auth_token } from "@/utils/constants";
import { ActionTypeEnum } from "@/utils/types";
// This is sample data.

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  const {
    dispatch,
    state: { activeUser }
  } = useStore();
  const router = useRouter();
  const currentPath = usePathname();
  console.log(activeUser);
  const handleLogout = () => {
    localStorage.removeItem(auth_token);
    dispatch({ type: ActionTypeEnum.SetActiveUser, payload: null });
    router.replace("/");
  };
  const data = {
    user: {
      name: activeUser?.username,
      email: activeUser?.email,
      action: handleLogout,
      avatar:
        "https://images.unsplash.com/photo-1611162616475-46b635cb6868?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8eW91dHViZXxlbnwwfHwwfHx8MA%3D%3D"
    },

    navMain: [
      {
        title: "Home",
        url: "/",
        icon: SquareTerminal,
        isActive: currentPath === "/" || currentPath.startsWith("/dashboard"),
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
        url: "/task",
        icon: Bot,
        isActive: currentPath.startsWith("/task"),
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
        url: "/settings",
        icon: Settings2,
        isActive: currentPath.startsWith("/settings"),
        items: [
          {
            title: "Introduction",
            url: "/settings/introduction"
          },
          {
            title: "Get Started",
            url: "/settings/get-started"
          },
          {
            title: "Tutorials",
            url: "/settings/tutorials"
          },
          {
            title: "Changelog",
            url: "/settings/changelog"
          }
        ]
      },
      {
        title: "Logout",
        url: "/logout",
        icon: LogOut,
        isActive: false,
        items: [
          {
            title: "General",
            url: "/logout/general"
          },
          {
            title: "Team",
            url: "/logout/team"
          },
          {
            title: "Billing",
            url: "/logout/billing"
          },
          {
            title: "Limits",
            url: "/logout/limits"
          }
        ]
      }
    ]
  };

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
        <NavUser user={data.user as any} />
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  );
}
