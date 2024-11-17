import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";

export function NewsletterSection() {
  return (
    <section className="bg-[#1B365D] text-white">
      <div className="container mx-auto px-4 py-24">
        <div className="mx-auto max-w-[800px] text-center">
          <h2 className="text-3xl font-bold font-jost sm:text-4xl md:text-5xl">
            Get latest Updates from us direct to your mail
          </h2>
          <p className="mx-auto mt-4 max-w-[600px] text-gray-300 md:text-lg">
            Subscribe to receive the latest updates from BuzzRoom directly in
            your inbox. Stay informed about new features, rewards, and
            opportunities to maximize your earnings!
          </p>
          <div className="mx-auto mt-8 max-w-md">
            <form className="flex gap-2">
              <Input
                type="email"
                placeholder="Enter your email address"
                className="bg-white"
              />
              <Button className="bg-yellow-400 text-black hover:bg-yellow-500">
                Subscribe Now
              </Button>
            </form>
            <p className="mt-2 text-sm text-gray-400">
              No ads, No trails, No commitments
            </p>
          </div>
          <div className="mt-16 flex flex-col md:flex-row items-center justify-between gap-8 pt-16">
            <div className="text-center flex-1">
              <p className="text-4xl font-bold">1,200+</p>
              <p className="mt-2 text-gray-300">Play Store Download</p>
              <p className="text-sm text-gray-400">In the last 1 year</p>
            </div>

            {/* Vertical Separator */}
            <div className="hidden md:block">
              <Separator
                orientation="vertical"
                className="h-full mx-4 border-gray-300"
              />
            </div>

            <div className="text-center flex-1">
              <p className="text-4xl font-bold">4,821</p>
              <p className="mt-2 text-gray-300">Active Users</p>
              <p className="text-sm text-gray-400">In last 2 years</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
