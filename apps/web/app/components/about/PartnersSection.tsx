import Image from "next/image";

export default function PartnersSection() {
  const partners = [
    { name: "/cyber1.svg", color: "text-blue-500" },
    { name: "/cyber2.svg", color: "text-amber-500" },
    { name: "/cyber3.svg", color: "text-orange-500" },
    { name: "/cyber4.svg", color: "text-white" },
    { name: "/cyber5.svg", color: "text-sky-400" }
  ];

  return (
    <section className="bg-[#183B56] text-white py-16 px-4">
      <div className="container max-w-4xl mx-auto text-center">
        <h2 className="mb-6 text-4xl font-bold">Who we are engaged with...</h2>
        <p className="max-w-3xl mx-auto mb-12 text-lg">
          We partner with humble, trusting leaders that think strategically.
          Businessmen and women who believe in the change they're making,
          embrace their mission and want to bring in a partner to accelerate
          their growth.
        </p>

        <div className="grid items-center grid-cols-2 gap-8 mb-8 md:grid-cols-3 lg:grid-cols-5">
          {partners.map((partner) => (
            <div key={partner.name} className="flex justify-center">
              <Image
                src={partner.name}
                alt={partner.color}
                width={160}
                height={100}
                className="object-contain"
                quality={75}
              />
            </div>
          ))}
        </div>

        <div className="flex justify-center">
          <div className="p-4 bg-white rounded-lg">
            <Image
              src="/support.svg"
              alt="Universal Chef"
              width={130}
              height={100}
              className="object-contain"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
