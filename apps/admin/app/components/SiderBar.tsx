"use client"

import * as React from "react"
import { BarChart3, ChevronDown, Home, LayoutDashboard, LogOut, Settings, Users2 } from 'lucide-react'
import { usePathname } from "next/navigation"

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible"
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuSub,
  SidebarMenuSubItem,
  SidebarMenuSubButton,
  SidebarProvider,
  SidebarRail,
  SidebarTrigger,
} from "@/components/ui/sidebar"

const navigation = [
  {
    title: "Home",
    icon: Home,
    href: "/",
    items: [
      { title: "Overview", href: "/" },
      { title: "Notifications", href: "/notifications" },
    ],
  },
  {
    title: "Dashboard",
    icon: LayoutDashboard,
    href: "/dashboard",
    items: [
      { title: "Main Dashboard", href: "/dashboard" },
      { title: "Projects", href: "/dashboard/projects" },
      { title: "Tasks", href: "/dashboard/tasks" },
    ],
  },
  {
    title: "Analytics",
    icon: BarChart3,
    href: "/analytics",
    items: [
      { title: "Overview", href: "/analytics" },
      { title: "Reports", href: "/analytics/reports" },
      { title: "Insights", href: "/analytics/insights" },
    ],
  },
  {
    title: "Users",
    icon: Users2,
    href: "/users",
    items: [
      { title: "All Users", href: "/users" },
      { title: "User Groups", href: "/users/groups" },
      { title: "Permissions", href: "/users/permissions" },
    ],
  },
]

export function MainSidebar() {
  const pathname = usePathname()

  return (
    <Sidebar collapsible="icon">
      <SidebarHeader>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton size="lg" asChild>
              <a href="/" className="flex items-center gap-2">
                <div className="flex items-center justify-center rounded-lg aspect-square size-8 bg-primary text-primary-foreground">
                  <BarChart3 className="size-4" />
                </div>
                <span className="font-semibold">BuzzRoom</span>
              </a>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>
      <SidebarContent>
        <SidebarMenu>
          {navigation.map((item) => (
            <Collapsible key={item.title} asChild>
              <SidebarMenuItem>
                <CollapsibleTrigger asChild>
                  <SidebarMenuButton
                    tooltip={item.title}
                    isActive={pathname.startsWith(item.href)}
                  >
                    <item.icon className="size-4" />
                    <span>{item.title}</span>
                    <ChevronDown className="ml-auto size-4 transition-transform duration-200 group-data-[state=open]/collapsible:rotate-180" />
                  </SidebarMenuButton>
                </CollapsibleTrigger>
                <CollapsibleContent asChild>
                  <SidebarMenuSub>
                    {item.items.map((subItem) => (
                      <SidebarMenuSubItem key={subItem.title}>
                        <SidebarMenuSubButton
                          asChild
                          isActive={pathname === subItem.href}
                        >
                          <a href={subItem.href}>{subItem.title}</a>
                        </SidebarMenuSubButton>
                      </SidebarMenuSubItem>
                    ))}
                  </SidebarMenuSub>
                </CollapsibleContent>
              </SidebarMenuItem>
            </Collapsible>
          ))}
        </SidebarMenu>
      </SidebarContent>
      <SidebarFooter>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton asChild tooltip="Settings">
              <a href="/settings">
                <Settings className="size-4" />
                <span>Settings</span>
              </a>
            </SidebarMenuButton>
          </SidebarMenuItem>
          <SidebarMenuItem>
            <SidebarMenuButton asChild tooltip="Logout">
              <a href="/logout">
                <LogOut className="size-4" />
                <span>Logout</span>
              </a>
            </SidebarMenuButton>
          </SidebarMenuItem>
          <SidebarMenuItem>
            <SidebarMenuButton
              size="lg"
              className="mt-2"
              asChild
              tooltip="Profile"
            >
              <a href="/profile" className="flex items-center gap-2">
                <Avatar className="size-8">
                  <AvatarImage src="/avatars/01.png" alt="John Doe" />
                  <AvatarFallback>JD</AvatarFallback>
                </Avatar>
                <div className="flex flex-col items-start text-sm">
                  <span className="font-medium">John Doe</span>
                  <span className="text-xs text-muted-foreground">
                    johndoe@gmail.com
                  </span>
                </div>
              </a>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  )
}