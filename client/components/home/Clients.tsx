const LOGOS_TOP = [
  "https://res.cloudinary.com/hvq7yafc/image/upload/v1785150746/1_qpsakf.png",
  "https://res.cloudinary.com/hvq7yafc/image/upload/v1785150746/2_t04foz.png",
  "https://res.cloudinary.com/hvq7yafc/image/upload/v1785150746/3_zguhtj.png",
  "https://res.cloudinary.com/hvq7yafc/image/upload/v1785150746/4_aaygk1.png",
  "https://res.cloudinary.com/hvq7yafc/image/upload/v1785150746/5_tag6g4.png",
];

const LOGOS_BOTTOM = [
  "https://res.cloudinary.com/hvq7yafc/image/upload/v1785150746/6_cde6ng.png",
  "https://res.cloudinary.com/hvq7yafc/image/upload/v1785150747/7_tjfro9.png  ",
  "https://res.cloudinary.com/hvq7yafc/image/upload/v1785150748/8_ojl0xl.png",
  "https://res.cloudinary.com/hvq7yafc/image/upload/v1785150749/9_eesktf.png",
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
    <section className="bg-white px-6 pt-6 pb-20 md:pt-20 lg:px-16">
      <div className="mx-auto max-w-[1440px]">
        <p className="mt-6 font-poppins text-lg md:text-2xl text-[#2F2F2F]">
          / TRUSTED COMPANIES
        </p>
        <br></br>
        <h2 className="mt-4 text-left font-poppins text-3xl font-semibold sm:text-4xl lg:text-5xl">
          <span className="bg-brand-gradient bg-clip-text text-transparent">
            Clients and Partners,
          </span>{" "}
          <span className="font-semibold"> we built our trust.</span>
        </h2>

        <p className="mt-3 font-poppins text-base text-[#5A5A5A]">
          Building  {" "}
          <span className="font-semibold text-[#1C1C1C]">strong trust</span>,
          with clients and partners takes clear communication, doing what you promise, and showing true care. {" "}

        </p>

        <div className="mt-12 flex flex-col gap-12">
          <MarqueeRow logos={LOGOS_TOP} />
          <MarqueeRow logos={LOGOS_BOTTOM} reverse={true} />
        </div>
      </div>
    </section>
  );
}
