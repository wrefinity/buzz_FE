import Image from "next/image";
import { Star } from "lucide-react";
import { MainLayout } from "../MainLayout";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const testimonials = [
  {
    name: "Jennifer Alexander",
    username: "@Jenny12",
    content:
      "I'm loving BuzzRoom! Watching videos for rewards is super enjoyable and straightforward. It's a great way to earn money in my free time, and I've had no issues at all!",
    avatar:
      "https://images.unsplash.com/photo-1441786485319-5e0f0c092803?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fG1hbnxlbnwwfHwwfHx8MA%3D%3D"
  },
  {
    name: "Jacob Jones",
    username: "@JonesJac34",
    content:
      "Great flexibility! I love how BuzzRoom allows me to watch videos whenever I want. The more I engage, the more I earn, and the support team is always quick to respond!",
    avatar:
      "https://images.unsplash.com/photo-1622861431942-b45f2b5b6564?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bWFufGVufDB8fDB8fHww"
  },
  {
    name: "Mark Wilson",
    username: "@Marke22",
    content:
      "I love BuzzRoom! Even though video content varies by location, there's always something to watch. The app feels very professional and makes me feel appreciated for the time I invest in earning rewards!",
    avatar:
      "https://images.unsplash.com/photo-1664575602554-2087b04935a5?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8d29tYW58ZW58MHx8MHx8fDA%3D"
  }
];

export function TestimonialsSection() {
  return (
    <MainLayout >
      <div className="text-center">
        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
          What our satisfied clients
          <br />
          say about BuzzRoom
        </h2>
        <p className="mx-auto mt-4 max-w-[800px] text-muted-foreground md:text-lg">
          BuzzRoom is a platform that connects you to a world of engaging
          videos, so no matter where you are, you can always earn rewards and
          feel at home while watching your favorite content.
        </p>
      </div>
      <div className="mt-16 grid gap-8 md:grid-cols-3">
        {testimonials.map((testimonial, index) => (
          <div key={index} className="rounded-lg border bg-card p-6 shadow-sm max-h-[400px] flex flex-col justify-between">
            <div className="flex text-yellow-400">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="h-4 w-4 fill-current" />
              ))}
            </div>
            <p className="mt-4 text-muted-foreground">{testimonial.content}</p>
            <div className="mt-6 flex items-center gap-4 w-full">
              <div>
                <Avatar>
                  <AvatarImage
                    src={testimonial.avatar}
                    alt={testimonial.name}
                  />
                  <AvatarFallback>DS</AvatarFallback>
                </Avatar>
              </div>
              <div>
                <p className="font-semibold">{testimonial.name}</p>
                <p className="text-sm text-muted-foreground">
                  {testimonial.username}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </MainLayout>
  );
}
