import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import TeamMemberCard from "./TeamMember";
import { ChevronLeft, ChevronRight } from "lucide-react";


const CustomCarousel = ({ teamMembers }:any) => {
  return (
    <div className="relative max-w-5xl mx-auto">
      <Carousel
        opts={{
          align: "start",
          loop: true,
        }}
        className="w-full"
        plugins={[
          Autoplay({
            delay: 5000,
          }),
        ]}
      >
        {/* Left Arrow */}
        <div className="absolute left-0 z-10 hidden transform -translate-y-1/2 top-1/2">
          <CarouselPrevious className="bg-[#014D6E] p-3 rounded-full text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all">
            <ChevronLeft size={24} />
          </CarouselPrevious>
        </div>

        {/* Carousel Content */}
        <CarouselContent>
          {teamMembers.map((member:any, index:number) => (
            <CarouselItem key={index} className="pl-4 sm:basis-1/2 lg:basis-1/3">
              <TeamMemberCard member={member} />
            </CarouselItem>
          ))}
        </CarouselContent>

        {/* Right Arrow */}
        <div className="absolute right-0 z-10 hidden transform -translate-y-1/2 top-1/2">
          <CarouselNext className="bg-[#014D6E] p-3 rounded-full text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all">
            <ChevronRight size={24} />
          </CarouselNext>
        </div>

        {/* For larger screens, make sure arrows are outside the carousel */}
        <div className="absolute left-0 z-10 hidden transform -translate-y-1/2 top-1/2 md:block">
          <CarouselPrevious className="bg-[#014D6E] p-3 rounded-full text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all">
            <ChevronLeft size={32} />
          </CarouselPrevious>
        </div>

        <div className="absolute right-0 z-10 hidden transform -translate-y-1/2 top-1/2 md:block">
          <CarouselNext className="bg-[#014D6E] p-3 rounded-full text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all">
            <ChevronRight size={32} />
          </CarouselNext>
        </div>
      </Carousel>
    </div>
  );
};

export default CustomCarousel