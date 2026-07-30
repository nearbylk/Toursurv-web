import { useState, useEffect } from "react";

// Each slide has a large featured image (right) and two stacked thumbnails (left)
const SLIDES = [
  {
    featured: "https://res.cloudinary.com/hvq7yafc/image/upload/v1785232166/j_tsr8ic.png",
    top: "https://res.cloudinary.com/hvq7yafc/image/upload/v1785150763/h_irdpn2.png",
    bottom: "https://res.cloudinary.com/hvq7yafc/image/upload/v1785232183/k_ruajhd.png",
  },

  {
    featured: "https://res.cloudinary.com/hvq7yafc/image/upload/v1785232183/a_fnbetz.png",
    top: "https://res.cloudinary.com/hvq7yafc/image/upload/v1785232174/s_im96tf.png",
    bottom: "https://res.cloudinary.com/hvq7yafc/image/upload/v1785232183/d_ybpsr9.png",
  },
  {
    featured: "https://res.cloudinary.com/hvq7yafc/image/upload/v1785232183/f_h1vhsl.png",
    top: "https://res.cloudinary.com/hvq7yafc/image/upload/v1785391137/l_ckdasr.png",
    bottom: "https://res.cloudinary.com/hvq7yafc/image/upload/v1785232153/g_ocq1ar.png",
  },

];
const TOTAL_DOTS = SLIDES.length;

export default function Work() {
  const [active, setActive] = useState(0);
  const slide = SLIDES[active];

  useEffect(() => {
    const interval = setInterval(() => {
      setActive((prev) => (prev + 1) % TOTAL_DOTS);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="work" className="bg-white px-6 py-20 lg:px-16">
      <div className="mx-auto max-w-[1440px]">

        {/* ── Section header ── */}
        <p className="text-left font-poppins text-lg md:text-2xl text-[#191919]">
          / OUR WORK
        </p>

        <div className="mt-4 flex flex-col gap-1 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <h2 className="mt-4 text-left font-poppins text-3xl font-semibold sm:text-4xl lg:text-5xl">

              <span className="bg-brand-gradient bg-clip-text text-transparent">
                Trusted By Brands,
              </span>{" "}
              <span className="font-semibold"> Loved by Clients</span>
            </h2>
            <p className="mt-3 font-poppins text-base text-[#5A5A5A]">
              Projects We Delivered with
              <span className="font-semibold text-[#1C1C1C]"> utmost care and after sales support helped</span>,
              us to become one of
              <span className="font-semibold text-[#1C1C1C]"> the most trusted solutions providers </span>
              nationally and internationally.{" "}
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
