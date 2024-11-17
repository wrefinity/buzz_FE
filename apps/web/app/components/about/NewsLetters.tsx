"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export default function NewsletterSection() {
  const [email, setEmail] = useState("")

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle newsletter subscription
    console.log("Subscribing email:", email)
  }

  return (
    <section className="px-4 py-16">
      <div className="container mx-auto md:max-w-6xl">
        <div className="flex flex-col items-center justify-between gap-8 p-8 bg-gray-50 rounded-xl md:p-12 md:flex-row">
         <div className="md:w-[60%]">
         <h2 className="mb-4 text-3xl font-bold">Stay in the loop</h2>
          <p className="max-w-xl mb-8 text-gray-600">
            Subscribe to receive the latest news and updates about BuzzRoom.
            We promise not to spam you!
          </p>
         </div>
          
          <form onSubmit={handleSubmit} className="flex flex-col md:w-[40%] gap-4 md:flex-row">
            <Input
              type="email"
              placeholder="Enter email address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="flex-1 bg-white"
              required
            />
            <Button 
              type="submit"
              className="bg-[#1E3A5F] hover:bg-[#15293f] text-white md:w-auto"
            >
              Continue
            </Button>
          </form>
        </div>
      </div>
    </section>
  )
}