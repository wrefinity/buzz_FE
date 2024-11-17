"use client"

import Image from "next/image"
import CustomCarousel from "./Carousel"
import { teamMembers } from "./TeamMember"


export default function AboutUsComponent() {
  return (
    <>
      {/* Who We Are Section */}
      <div className="container flex flex-col items-center w-full gap-12 px-4 py-5 mx-auto lg:flex-row md:max-w-7xl">
        <div className="lg:w-1/2">
          <h1 className="mb-6 text-4xl font-bold">Who we are....</h1>
          <p className="text-lg leading-relaxed">
            At BuzzRoom, we believe that entertainment should be rewarding. We're a team of
            passionate creators and innovators, dedicated to providing an engaging platform
            where users can earn real rewards simply by watching videos. Our diverse team
            brings together expertise in technology, content creation, and user experience,
            ensuring a seamless and enjoyable journey for our users. With a commitment to
            quality and continuous improvement, we strive to make BuzzRoom your go-to
            platform for fun and earnings, wherever you are!
          </p>
        </div>
        <div className="lg:w-1/2">
          <Image
            src="/aboutperson.svg"
            alt="Person looking at phone"
            width={100}
            height={100}
            className="w-full rounded-lg"
          />
        </div>
      </div>

      {/* Meet Our Team Section */}
      <div className="bg-[#183B56] text-white py-8 px-4 mb-20">
        <h2 className="mb-4 text-4xl font-bold text-center">Meet Our Team</h2>
      </div>

      <div className="w-full p-5 mx-auto md:max-w-5xl">
        
        <CustomCarousel teamMembers={teamMembers}/>
      </div>
    </>
  )
}