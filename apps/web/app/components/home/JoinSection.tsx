import { Button } from "@/components/ui/button";
import Image from "next/image";

export function JoinSection() {
  return (
    <section className="container bg-[#0F172A] text-white pt-10">
      <div className="px-4 mx-auto max-w-7xl">
        <div className="grid items-center gap-8 lg:grid-cols-2 lg:gap-12">
          {/* Image container */}
          <div className="relative w-[350px] md:w-[600px] overflow-hidden h-[500px]">
            <Image
              src="/join-now.svg"
              alt="BuzzRoom Video Interface"
              width={100}
              height={100}
              className="object-contain w-full overflow-hidden"
            />
          </div>

          <div className="flex flex-col max-w-lg gap-6 py-4">
            <h2 className="text-3xl font-bold font-jost sm:text-4xl md:text-5xl">
              Join Now & Earn Your First Reward!
            </h2>
            <p className="text-lg text-gray-300">
              Sign up for BuzzRoom today and unlock the opportunity to earn
              money simply by watching videos. Completing your first daily task
              will immediately reward you, making it easy to start your earning
              journey. Don&apos;t miss out on the chance to turn your viewing
              time into cash—join now and reap the benefits!
            </p>
            <Button className="w-fit bg-white text-[#1B365D] hover:bg-gray-100">
              Get Started Now
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
