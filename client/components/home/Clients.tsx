const LOGOS_TOP = [
  "https://api.builder.io/api/v1/image/assets/TEMP/62028aed5a1395c09ab407b43320cf5740d4781e?width=524",
  "https://api.builder.io/api/v1/image/assets/TEMP/20527632d4543f507e17c23278f8d484681afc9c?width=706",
  "https://api.builder.io/api/v1/image/assets/TEMP/123b210fd4ad57d135a62ff2703e26b274bd5af1?width=732",
  "https://api.builder.io/api/v1/image/assets/TEMP/d32556152c6476e8cedc22dfc8131e8fb31fe335?width=702",
  "https://api.builder.io/api/v1/image/assets/TEMP/a4f05249c0ce1e414f5b71abac2d2fa0a93af37b?width=594",
];

const LOGOS_BOTTOM = [
  "https://api.builder.io/api/v1/image/assets/TEMP/7789efff2e210191df19b4fb6f969e77dda66be9?width=528",
  "https://api.builder.io/api/v1/image/assets/TEMP/82c6ec52654fce70a9df57482e37ffa502a70d2a?width=586",
  "https://api.builder.io/api/v1/image/assets/TEMP/fc00618b6a9dcb57249512cc6945204e278dfa60?width=278",
  "https://api.builder.io/api/v1/image/assets/TEMP/92b432a09b701128d45307790640bcc5038fd075?width=508",
];

function MarqueeRow({ logos }: { logos: string[] }) {
  return (
    <div className="flex w-full overflow-hidden">
      {[0, 1].map((stripIndex) => (
        <div
          key={stripIndex}
          className="flex shrink-0 animate-marquee-right items-center justify-around gap-24 min-w-full pr-24"
        >
          {logos.map((src, i) => (
            <img
              key={i}
              src={src}
              alt=""
              className="h-10 w-auto object-contain opacity-80 grayscale transition hover:opacity-100 hover:grayscale-0 sm:h-12"
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
        <h2 className="font-poppins text-3xl font-semibold sm:text-4xl">
          <span className="font-bold">Who</span>{" "}
          <span className="bg-brand-gradient bg-clip-text text-transparent">
            We've Helped
          </span>
        </h2>

        <p className="mt-6 font-poppins text-2xl text-[#2F2F2F]">
          / TRUSTED COMPANIES
        </p>

        <div className="mt-10 flex flex-col gap-12">
          <MarqueeRow logos={LOGOS_TOP} />
          <MarqueeRow logos={LOGOS_BOTTOM} />
        </div>
      </div>
    </section>
  );
}
