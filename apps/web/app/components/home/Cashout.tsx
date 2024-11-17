import Image from "next/image";
import { MainLayout } from "../MainLayout";

export function CashOutSection() {
  return (
    <MainLayout className="h-[500px] overflow-hidden">
      <div className="grid items-center gap-8 lg:grid-cols-2">
        <div className="flex flex-col gap-6">
          <div className="space-y-4">
            <h2 className="text-4xl font-bold font-jost sm:text-5xl">
              Ready to Cash Out?
              <br />
              Join Today!
            </h2>
            <p className="text-muted-foreground md:text-xl">
              Are you ready to start earning money with BuzzRoom? Join today and
              gain access to exciting daily tasks that allow you to watch videos
              and accumulate rewards. With flexible cash-out options, you can
              easily turn your hard-earned rewards into real money whenever
              you&apos;re ready!
            </p>
          </div>
        </div>
        <div className="relative ">
        <div className="relative w-[350px] md:w-[600px]">
              <Image
                src="/cashout-now.svg"
                alt="BuzzRoom Welcome Screen"
                width={100}
                height={100}
                className="object-cover w-full"
              />
            </div>
        </div>
      </div>
    </MainLayout>
  );
}
