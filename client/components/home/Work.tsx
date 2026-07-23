import { useState } from "react";

// Each slide has a large featured image (right) and two stacked thumbnails (left)
const SLIDES = [
  {
    featured: "/h.png",
    top: "/j.png",
    bottom: "/k.png",
  },

  {
    featured: "/a.png",
    top: "/s.png",
    bottom: "/d.png",
  },
  {
    featured: "/f.png",
    top: "/l.png",
    bottom: "/g.png",
  },

];
const TOTAL_DOTS = SLIDES.length;

export default function Work() {
  const [active, setActive] = useState(0);
  const slide = SLIDES[active];

  return (
    <section id="work" className="bg-white px-6 py-20 lg:px-16">
      <div className="mx-auto max-w-[1440px]">

        {/* ── Section header ── */}
        <p className="text-left font-poppins text-2xl text-[#191919]">
          / OUR WORK
        </p>

        <div className="mt-4 flex flex-col gap-1 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <h2 className="mt-4 text-left font-poppins text-3xl font-semibold sm:text-4xl lg:text-5xl">

              <span className="bg-brand-gradient bg-clip-text text-transparent">
                How
              </span>{" "}
              <span className="font-semibold">Our Projects Looks</span>
            </h2>
            <p className="mt-3 font-poppins text-base text-[#5A5A5A]">
              Trusted By{" "}
              <span className="font-semibold text-[#1C1C1C]">Brands</span>,
              Loved By{" "}
              <span className="font-semibold text-[#1C1C1C]">Clients</span>
            </p>
          </div>
        </div>

        {/* ── Asymmetric gallery ── */}
        <div className="mt-10 grid grid-cols-1 gap-5 md:grid-cols-[1fr_1.9fr]">

          {/* Left column — two stacked thumbnails */}
          <div className="flex flex-col gap-5">
            {/* Top thumbnail — organic: large radius top-right + bottom-left */}
            <div className="overflow-hidden rounded-tl-[8px] rounded-tr-[48px] rounded-br-[8px] rounded-bl-[48px] shadow-md aspect-[4/3]">
              <img
                src={slide.top}
                alt="Project thumbnail top"
                className="h-full w-full object-cover transition-transform duration-700 hover:scale-105"
              />
            </div>

            {/* Bottom thumbnail — organic: inverse asymmetric corners */}
            <div className="overflow-hidden rounded-tl-[48px] rounded-tr-[8px] rounded-br-[48px] rounded-bl-[8px] shadow-md aspect-[4/3]">
              <img
                src={slide.bottom}
                alt="Project thumbnail bottom"
                className="h-full w-full object-cover transition-transform duration-700 hover:scale-105"
              />
            </div>
          </div>

          {/* Right column — large featured image */}
          <div className="overflow-hidden rounded-tl-[8px] rounded-tr-[56px] rounded-br-[8px] rounded-bl-[56px] shadow-xl md:row-span-1">
            <img
              src={slide.featured}
              alt="Featured project"
              className="h-full w-full object-cover transition-transform duration-700 hover:scale-105"
              style={{ minHeight: "360px" }}
            />
          </div>
        </div>

        {/* ── Pagination dots ── */}
        <div className="mt-8 flex items-center justify-center gap-2">
          {Array.from({ length: TOTAL_DOTS }).map((_, i) => (
            <button
              key={i}
              aria-label={`Go to slide ${i + 1}`}
              onClick={() => setActive(i)}
              className={`h-2.5 rounded-full transition-all duration-300 ${active === i
                ? "w-8 bg-brand-gradient"
                : "w-2.5 bg-black/15 hover:bg-black/30"
                }`}
            />
          ))}
        </div>

      </div>
    </section>
  );
}
