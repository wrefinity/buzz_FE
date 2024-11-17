import Image from "next/image";
import { Star } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { MainLayout } from "../MainLayout";

export function HeroSection() {
  return (
    <section className="w-full bg-[#F3F9FD]">
      <MainLayout>
        <div className="grid items-center gap-8 lg:grid-cols-2 sm:grid-cols-1">
          <div className="flex flex-col order-2 gap-6 md:order-1">
            <h1 className="text-3xl font-bold tracking-lighter font-jost sm:text-4xl xl:text-6xl">
              Turn Your Watching Time into Earning Time!
            </h1>
            <p className="text-muted-foreground text-md">
              With our app, you can make money just by watching videos in your
              free time. It&apos;s as simple as completing daily video tasks,
              earning rewards, and cashing out whenever you want!
            </p>
            <div className="flex gap-4">
              <a href="#" className="inline-block">
                <Image
                  src="/apple-download.png"
                  alt="Download on App Store"
                  width={140}
                  height={42}
                  className="h-[42px] w-[140px]"
                />
              </a>
              <a href="#" className="inline-block">
                <Image
                  src="/googlePlay.png"
                  alt="Get it on Google Play"
                  width={140}
                  height={42}
                  className="h-[42px] w-[140px]"
                />
              </a>
            </div>
            <div>
              <div className="flex items-center gap-4">
                <Avatar>
                  <AvatarImage
                    src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fHVzZXIlMjBwaWN0dXJlfGVufDB8fDB8fHww"
                    alt="Derika Samak"
                  />
                  <AvatarFallback>DS</AvatarFallback>
                </Avatar>
                <div>
                  <p className="text-sm font-semibold font-jost">
                    Derika Samak
                  </p>
                  <div className="flex text-yellow-400">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-current" />
                    ))}
                  </div>
                </div>
              </div>
              <p className="mt-2 text-sm text-muted-foreground md:max-w-md">
                Love this app! It&apos;s so easy to use, and I actually get paid
                for watching videos in my spare time. The daily tasks keep it
                interesting, and cashing out is fast and hassle-free!
              </p>
            </div>
          </div>

          {/* Image Section */}
          <div className="relative w-full lg:w-[600px] sm:w-[350px] order-1 md:order-2">
            <Image
              src="/home-bg.svg"
              alt="App Interface"
              width={100}
              height={100}
              className="object-contain w-full h-full"
            />
          </div>
        </div>
      </MainLayout>
    </section>
  );
}
