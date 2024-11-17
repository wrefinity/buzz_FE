"use client";

import * as React from "react";
import Link from "next/link";
import { ChevronDown } from "lucide-react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger
} from "@/components/ui/dropdown-menu";
import BuzzroomLogo from "../../public/BuzzRoom.svg";
import { usePathname, useRouter } from "next/navigation";
import { MobileMenu } from "./header/mobile-menu";

const links = [
  { name: "Home", href: "/" },
  {
    name: "Services",
    href: "/services",
    dropdown: [{ name: "Task", href: "/task" }]
  },
  { name: "How to Earn", href: "/how-to-earn" },
  { name: "About Us", href: "/about" },
  { name: "Contact Us", href: "/contact" }
];

export function Header() {
  const pathname = usePathname();
  const router = useRouter();
  const isActive = (path: string) => pathname === path;

  const handleClick = (path: string) => {
    router.push(path);
  };

  return (
    <header className="w-full border-b">
      <div className="container flex items-center justify-between h-16 px-4 py-8 mx-auto max-w-7xl">
        <Link href="/" className="flex items-center gap-2">
          <Image
            src={BuzzroomLogo}
            alt="BuzzRoom Logo"
            width={100}
            height={100}
            className="w-8 h-8"
          />
          <span className="text-lg font-semibold text-[#014D6E]">BuzzRoom</span>
        </Link>
        <nav className="hidden gap-6 md:flex">
          <ul className="flex gap-6">
            {links.map((link) => (
              <li key={link.name} className="relative">
                {link.dropdown ? (
                  <DropdownMenu>
                    <DropdownMenuTrigger
                      className="flex items-center gap-1 text-sm font-medium hover:underline"
                      onClick={() => handleClick(link.href)}
                    >
                      {link.name}
                      <ChevronDown className="w-4 h-4" />
                    </DropdownMenuTrigger>
                    <DropdownMenuContent className="absolute left-0 mt-2">
                      {link.dropdown.map((subLink) => (
                        <DropdownMenuItem key={subLink.name}>
                          <Link
                            href={subLink.href}
                            className={`text-sm font-medium hover:underline ${
                              isActive(subLink.href)
                                ? "font-bold text-[#014D6E]"
                                : ""
                            }`}
                          >
                            {subLink.name}
                          </Link>
                        </DropdownMenuItem>
                      ))}
                    </DropdownMenuContent>
                  </DropdownMenu>
                ) : (
                  <Link
                    href={link.href}
                    className={`text-sm font-medium hover:underline ${
                      isActive(link.href) ? "font-bold text-[#014D6E]" : ""
                    }`}
                  >
                    {link.name}
                  </Link>
                )}
              </li>
            ))}
          </ul>
        </nav>
        <div className="flex items-center gap-4">
          <Link
            className="hidden text-sm font-medium md:inline-block hover:underline"
            href="/sign-in"
          >
            Login
          </Link>
          <Button className="hidden md:inline-flex bg-[#1B365D] text-white hover:bg-[#152a4d]" onClick={() => handleClick('/sign-up')}>
            Get Started
          </Button>
          <MobileMenu links={links} />
        </div>
      </div>
    </header>
  );
}
