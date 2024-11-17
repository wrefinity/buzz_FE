

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

const ContactForm = () => {
  return (
    <div className="max-w-3xl p-8 mx-auto bg-white shadow-lg rounded-xl">
      <form className="space-y-6">
        <div className="grid gap-6 md:grid-cols-2">
          <div className="space-y-2">
            <label className="text-sm font-medium" htmlFor="name">Your name*</label>
            <Input id="name" placeholder="Julia William" required />
          </div>
          <div className="space-y-2">
            <label className="text-sm font-medium" htmlFor="email">Contact email *</label>
            <Input id="email" type="email" placeholder="you@example.com" required />
          </div>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          <div className="space-y-2">
            <label className="text-sm font-medium" htmlFor="company">Company name*</label>
            <Input id="company" placeholder="Company name" required />
          </div>
          <div className="space-y-2">
            <label className="text-sm font-medium">Country*</label>
            <Select>
              <SelectTrigger>
                <SelectValue placeholder="Select country" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="indonesia">Indonesia</SelectItem>
                <SelectItem value="malaysia">Malaysia</SelectItem>
                <SelectItem value="singapore">Singapore</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>

        <div className="space-y-2">
          <label className="text-sm font-medium" htmlFor="message">Your message*</label>
          <Textarea id="message" placeholder="Type your message...." className="min-h-[150px]" required />
        </div>

        <p className="text-sm text-gray-500">
          By submitting this form you agree to our terms and conditions and our Privacy Policy which explains how we may collect, use, and disclose your personal information.
        </p>

        <Button className="bg-[#1B365D] text-white hover:bg-[#152a4d]">Contact sales</Button>
      </form>
    </div>
  );
}

export default ContactForm
