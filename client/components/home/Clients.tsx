const LOGOS_TOP = [
  "/1.png",
  "/2.png",
  "/3.png",
  "/4.png",
  "/5.png",
];

const LOGOS_BOTTOM = [
  "/6.png",
  "/7.png",
  "/8.png",
  "/9.png",
];

function MarqueeRow({ logos, reverse = false }: { logos: string[], reverse?: boolean }) {
  const animationClass = reverse ? "animate-marquee-right" : "animate-marquee-left";
  return (
    <div className="flex w-full overflow-hidden">
      {[0, 1].map((stripIndex) => (
        <div
          key={stripIndex}
          className={`flex shrink-0 ${animationClass} items-center justify-around gap-16 min-w-full pr-16`}
        >
          {logos.map((src, i) => (
            <img
              key={i}
              src={src}
              alt="Trusted Company"
              className="h-12 sm:h-16 w-auto grayscale opacity-70 hover:grayscale-0 hover:opacity-100 transition-all duration-300 cursor-pointer object-contain shrink-0"
            />
          ))}
        </div>
      ))}
    </div>
  );
}

export default function Clients() {
  return (
    <section className="bg-white px-6 py-20 lg:px-16">
      <div className="mx-auto max-w-[1440px]">
        <p className="mt-6 font-poppins text-2xl text-[#2F2F2F]">
          / TRUSTED COMPANIES
        </p>
        <br></br>
        <h2 className="mt-4 text-left font-poppins text-3xl font-semibold sm:text-4xl lg:text-5xl">
          <span className="bg-brand-gradient bg-clip-text text-transparent">
            Who
          </span>{" "}
          <span className="font-semibold">We've Helped</span>
        </h2>

        <div className="mt-12 flex flex-col gap-12">
          <MarqueeRow logos={LOGOS_TOP} />
          <MarqueeRow logos={LOGOS_BOTTOM} reverse={true} />
        </div>
      </div>
    </section>
  );
}
