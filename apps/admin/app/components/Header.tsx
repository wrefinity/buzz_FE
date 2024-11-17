"use client"

import { Input } from "@/components/ui/input";
import { SidebarTrigger } from "@/components/ui/sidebar";
import { Search } from "lucide-react";
import { usePathname } from "next/navigation";
import React from "react";

const Header = () => {
  const currentPath = usePathname();
  const pathSegments = currentPath.split('/').filter(Boolean);
  const lastSegment = pathSegments[pathSegments.length - 1];
  const formattedTitle = lastSegment?.split('-').join(' ');
  const pageTitle = formattedTitle || lastSegment || "Dashboard";

  return (
    <div className="p-5">
      <div className="flex items-center gap-5">
      <SidebarTrigger size="icon" />
        <h1 className="text-xl text-[#014D6E] font-semibold capitalize">{pageTitle}</h1>
        <div className="relative w-full max-w-xs ml-4">
          <Input
            type="search"
            placeholder="Search anything here..."
            className="pl-10"
          />
          <Search className="absolute w-4 h-4 text-gray-400 transform -translate-y-1/2 left-3 top-1/2" />
        </div>
      </div>
    </div>
  );
};

export default Header;
