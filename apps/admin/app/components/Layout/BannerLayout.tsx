"use client";

import Image from "next/image";

const BannerLayout = ({
  title,
  description,
  children
}: {
  title: string;
  description: string;
  children: React.ReactNode;
}) => {
  return (
    <div className="relative w-full min-h-scren">
      {/* Background with waves */}
      <div className="relative w-full h-60">
        <Image
          src="/Base.svg"
          alt="Base page background"
          fill
          className="object-cover w-full"
        />

        <div className="absolute w-full text-center text-white transform -translate-x-1/2 -translate-y-1/2 md:p-5 top-1/2 left-1/2 ">
          <h1 className="text-3xl font-bold md:text-4xl">{title}</h1>
          <p className="w-full md:max-w-2xl md:mx-auto mt-4 text-lg text-[#FFFFFF]">
            {description}
          </p>
        </div>
      </div>

      <div className="relative w-full h-full">{children}</div>
    </div>
  );
};

export default BannerLayout;
