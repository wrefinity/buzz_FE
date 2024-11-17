"use client";

import Image from "next/image";
import ContactInfo from "./ContactInfo";
import ContactForm from "./ContactForm";
import ContactMethods from "./ContactMethods";

export default function ContactComp() {
  return (
    <div className="relative w-full min-h-screen">
      {/* Background with waves */}
      <div className="relative w-full h-[750px]">
        <Image
          src="/contactBackground.svg"
          alt="Contact page background"
          className="z-0 object-cover w-full"
          fill
        />
      </div>

      {/* Contact Info */}
      <div className="absolute top-0 left-0 z-10 w-full px-5 py-8 md:py-16">
        <ContactInfo />
        {/* Contact Form */}
        <div className="container z-10 px-4 py-16 mx-auto">
          <ContactForm />
        </div>
      </div>

      {/* Contact Methods */}
      <div className="relative container px-4 py-20 mt-[330px] md:mt-20 md:max-w-7xl mx-auto bg-gradient-to-b from-[#FAFBFB00] to-[#F8FBFF]">
        <ContactMethods />
      </div>
    </div>
  );
}
