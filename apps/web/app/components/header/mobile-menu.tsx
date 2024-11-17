"use client";

import * as React from "react";
import Link from "next/link";
import { Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetTitle,
  SheetTrigger
} from "@/components/ui/sheet";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger
} from "@/components/ui/accordion";
import { useRouter } from "next/navigation";

interface MobileMenuProps {
  links: {
    name: string;
    href: string;
    dropdown?: { name: string; href: string }[];
  }[];
}

export function MobileMenu({ links }: MobileMenuProps) {
  const [open, setOpen] = React.useState(false);
  const router = useRouter();

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <Button variant="ghost" size="icon" className="md:hidden">
          <Menu className="w-6 h-6" />
          <span className="sr-only">Toggle menu</span>
        </Button>
      </SheetTrigger>
      <SheetContent side="left" className="w-[300px] sm:w-[400px]">
        <SheetTitle>Mobile Menu Screen</SheetTitle>
        <SheetDescription>mobile menu</SheetDescription>
        <nav className="flex-grow">
          <Accordion type="single" collapsible className="w-full">
            {links.map((link, index) => (
              <AccordionItem value={`item-${index}`} key={link.name}>
                {link.dropdown ? (
                  <>
                    <AccordionTrigger>{link.name}</AccordionTrigger>
                    <AccordionContent>
                      <div className="pl-4 space-y-2">
                        {link.dropdown.map((subLink) => (
                          <Link
                            key={subLink.name}
                            href={subLink.href}
                            className="block py-2 text-sm"
                            onClick={() => setOpen(false)}
                          >
                            {subLink.name}
                          </Link>
                        ))}
                      </div>
                    </AccordionContent>
                  </>
                ) : (
                  <Link
                    href={link.href}
                    className="flex items-center py-4 text-sm"
                    onClick={() => setOpen(false)}
                  >
                    {link.name}
                  </Link>
                )}
              </AccordionItem>
            ))}
          </Accordion>
        </nav>
        <div className="pt-4 mt-auto border-t">
          <Link
            href="/sign-in"
            className="block py-2 text-sm"
            onClick={() => setOpen(false)}
          >
            Login
          </Link>
          <Button
            className="w-full mt-2 bg-[#1B365D] text-white hover:bg-[#152a4d]"
            onClick={() => {
              router.push("/sign-up");
              setOpen(false);
            }}
          >
            Get Started
          </Button>
        </div>
      </SheetContent>
    </Sheet>
  );
}
