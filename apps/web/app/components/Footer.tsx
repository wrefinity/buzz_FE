"use client"

import * as React from "react"
import Link from "next/link"
import { Facebook, Twitter, Youtube } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { MainLayout } from "./MainLayout"

export function Footer() {
  return (
    <footer className="bg-[#183B56] text-white">
      <MainLayout>
        <div className="grid gap-8 md:grid-cols-3">
          <div>
            <h3 className="mb-6 text-xl font-semibold">Quick link</h3>
            <nav className="flex flex-col gap-4">
              <Link className="hover:underline" href="/">
                Home
              </Link>
              <Link className="hover:underline" href="/features">
                Features
              </Link>
              <Link className="hover:underline" href="/about">
                About us
              </Link>
              <Link className="hover:underline" href="/contact">
                Contact
              </Link>
            </nav>
          </div>
          <div className="text-center">
            <h3 className="mb-6 text-2xl font-bold">GET IN TOUCH</h3>
            <p className="mb-6 text-gray-300">
              We will deliver any latest updates about us directly to your mail.
            </p>
            <div className="flex max-w-md mx-auto">
              <Input
                className="flex-1 text-white bg-transparent border-white/20 placeholder:text-gray-400"
                placeholder="Enter email"
                type="email"
              />
              <Button className="ml-2 bg-white text-[#1B365D] hover:bg-gray-100">
                Subscribe
              </Button>
            </div>
          </div>
          <div className="md:text-right">
            <h3 className="mb-6 text-xl font-semibold">Useful</h3>
            <nav className="flex flex-col gap-4">
              <Link className="hover:underline" href="/privacy">
                Privacy policy
              </Link>
              <Link className="hover:underline" href="/legal">
                Legal
              </Link>
              <Link className="hover:underline" href="/faq">
                FAQ
              </Link>
              <Link className="hover:underline" href="/blogs">
                Blogs
              </Link>
            </nav>
          </div>
        </div>
        <div className="flex flex-col items-center gap-6 pt-8 mt-16 border-t border-white/10">
          <p className="text-sm text-center text-gray-300">
            Copywrite goes to - Wrash-Tech
          </p>
          <div className="flex gap-6">
            <Link href="#" className="hover:text-gray-300">
              <Twitter className="w-6 h-6" />
              <span className="sr-only">Twitter</span>
            </Link>
            <Link href="#" className="hover:text-gray-300">
              <Youtube className="w-6 h-6" />
              <span className="sr-only">YouTube</span>
            </Link>
            <Link href="#" className="hover:text-gray-300">
              <Facebook className="w-6 h-6" />
              <span className="sr-only">Facebook</span>
            </Link>
          </div>
        </div>
      </MainLayout>
    </footer>
  )
}