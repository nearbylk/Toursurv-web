import ScrollReveal from "@/components/ui/ScrollReveal";

const TECH_ICONS = [
  "https://api.builder.io/api/v1/image/assets/TEMP/6a600a180dd1f2de81ca239ba704cf48cdba9617?width=190",
  "https://api.builder.io/api/v1/image/assets/TEMP/f8b293db721d284383c3270a5e27dc72ff733aec?width=190",
  "https://api.builder.io/api/v1/image/assets/TEMP/ec86970ef680ecb97b199c1623453fac5d3dde34?width=190",
  "https://api.builder.io/api/v1/image/assets/TEMP/9ca49b02c85bb642813fefcccc51d900159e8031?width=190",
  "https://api.builder.io/api/v1/image/assets/TEMP/54b4afa6c359b45637c3311a6fefcdd8b4315e30?width=190",
  "https://api.builder.io/api/v1/image/assets/TEMP/2dcfafe53448c98a10e82947047dabc72ff79f52?width=190",
  "https://api.builder.io/api/v1/image/assets/TEMP/0bf10024f766c1b5bc092235cdfdb72fe7492694?width=138",
  "https://api.builder.io/api/v1/image/assets/TEMP/a0aec7389b59c267fe9e6cb147a75e605ac97963?width=190",
];

const PILLARS = [
  {
    icon: "https://api.builder.io/api/v1/image/assets/TEMP/f1b7943e36788edc95a336d6cafb7a8334168bd3?width=112",
    title: "Strategic Excellence",
  },
  {
    icon: "https://api.builder.io/api/v1/image/assets/TEMP/4ffa13d0823669ee0f8853c8ce366a34e8324a6f?width=100",
    title: "Creative Solutions",
  },
  {
    icon: "https://api.builder.io/api/v1/image/assets/TEMP/46d59fb5766c550a64463f110f9095b2892b41df?width=112",
    title: "Comprehensive Service",
  },
  {
    icon: "https://api.builder.io/api/v1/image/assets/TEMP/b718d7de953113cfcf76aef17abe3e8a253b5f0f?width=112",
    title: "Transparency & Partnership",
  },
];

export default function About() {
  return (
    <section id="about" className="bg-white px-6 py-20 lg:px-16">
      <div className="mx-auto max-w-[1440px]">
        <p className="font-poppins text-lg md:text-2xl text-[#191919]">/ ABOUT US</p>
        <h2 className="mt-4 w-full font-poppins text-3xl leading-[1.2] text-[#191919] sm:text-4xl lg:text-5xl">
          <span className="bg-brand-gradient bg-clip-text font-semibold text-transparent">
            Toursurv
          </span>{" "}
          is a growing tech company dedicated to{" "}
          <span className="font-semibold">simplifying</span> businesses
          through smart, people-focused{" "}
          <span className="font-semibold">software solutions.</span>
        </h2>

        {/* ── PILLARS: horizontal icon + text rows ── */}
        <div className="mt-16 grid grid-cols-1 gap-10 lg:gap-12 sm:grid-cols-2 lg:grid-cols-4">
          {PILLARS.map((p, i) => (
            <ScrollReveal key={p.title} delay={(i + 1) * 0.1} threshold={0.1}>
              <div className="flex flex-col items-center justify-center text-center gap-4">
                <img src={p.icon} alt="" className="h-20 w-20 shrink-0 object-contain" />
                <h3 className="max-w-[200px] bg-brand-gradient-v bg-clip-text font-poppins text-lg font-semibold leading-tight text-transparent md:text-xl">
                  {p.title}
                </h3>
              </div>
            </ScrollReveal>
          ))}
        </div>

        {/* ── TECH STACK banner ── */}
        <div className="mt-14 flex items-stretch overflow-hidden rounded-[24px] bg-[#f3f4f6]">
          {/* Left: white curved label */}
          {/* <div className="flex shrink-0 items-center bg-white pr-10 rounded-br-[60px] rounded-tr-[60px] py-6 pl-6 md:pl-0 md:pr-12">
            <p className="whitespace-nowrap font-poppins text-base font-semibold text-[#191919] md:text-lg">
              / OUR TECH STACK
            </p>
          </div> */}

          {/* Right: tech icons row */}
          {/* <div className="flex flex-1 flex-wrap items-center gap-6 px-8 py-6 sm:gap-10">
            {TECH_ICONS.map((src, i) => (
              <img
                key={i}
                src={src}
                alt=""
                className="h-10 w-auto object-contain grayscale opacity-60 transition-all duration-300 hover:grayscale-0 hover:opacity-100 sm:h-12"
              />
            ))}
          </div> */}
        </div>
      </div>
    </section>
  );
}
