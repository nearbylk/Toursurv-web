import { useState, useEffect, useRef } from "react";

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

const TOTAL_DESKTOP_DOTS = SLIDES.length;

// Flatten the 3 slides into 9 individual images for the mobile carousel, preserving their original border radius classes
const MOBILE_CAROUSEL_ITEMS = SLIDES.flatMap(slide => [
  {
    src: slide.featured,
    className: "rounded-tl-[8px] rounded-tr-[56px] rounded-br-[8px] rounded-bl-[56px] h-[250px]",
  },
  {
    src: slide.top,
    className: "rounded-tl-[8px] rounded-tr-[48px] rounded-br-[8px] rounded-bl-[48px] h-[250px]",
  },
  {
    src: slide.bottom,
    className: "rounded-tl-[48px] rounded-tr-[8px] rounded-br-[48px] rounded-bl-[8px] h-[250px]",
  },
]);

export default function Work() {
  // Desktop state
  const [activeDesktop, setActiveDesktop] = useState(0);
  const desktopSlide = SLIDES[activeDesktop];

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveDesktop((prev) => (prev + 1) % TOTAL_DESKTOP_DOTS);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  // Mobile state
  const [activeMobile, setActiveMobile] = useState(0);
  const mobileScrollRef = useRef<HTMLDivElement>(null);
  const [userInteracted, setUserInteracted] = useState(false);
  const TOTAL_MOBILE_DOTS = MOBILE_CAROUSEL_ITEMS.length;

  // Auto-play mobile carousel every 5s
  useEffect(() => {
    if (userInteracted) {
      // Pause auto-play for 8 seconds after manual interaction
      const timeout = setTimeout(() => setUserInteracted(false), 8000);
      return () => clearTimeout(timeout);
    }
    const interval = setInterval(() => {
      setActiveMobile((prev) => (prev + 1) % TOTAL_MOBILE_DOTS);
    }, 5000);
    return () => clearInterval(interval);
  }, [userInteracted]);

  // Sync scroll position with active mobile index
  useEffect(() => {
    const el = mobileScrollRef.current;
    if (!el) return;
    
    if (TOTAL_MOBILE_DOTS > 1) {
      const maxScrollLeft = el.scrollWidth - el.clientWidth;
      if (maxScrollLeft > 0) {
        // Accurately calculate the exact scroll position including all gaps
        const targetLeft = (activeMobile / (TOTAL_MOBILE_DOTS - 1)) * maxScrollLeft;
        el.scrollTo({ left: targetLeft, behavior: "smooth" });
      }
    }
  }, [activeMobile, TOTAL_MOBILE_DOTS]);

  const handleMobileScroll = () => {
    const el = mobileScrollRef.current;
    if (!el) return;
    if (TOTAL_MOBILE_DOTS <= 1) return;
    
    const maxScrollLeft = el.scrollWidth - el.clientWidth;
    if (maxScrollLeft <= 0) return;

    // Calculate index by mapping the current scroll ratio to the total number of items
    let index = Math.round((el.scrollLeft / maxScrollLeft) * (TOTAL_MOBILE_DOTS - 1));
    index = Math.max(0, Math.min(index, TOTAL_MOBILE_DOTS - 1));
    
    setActiveMobile((prev) => {
      if (prev !== index) return index;
      return prev;
    });
  };

  const handleMobileInteraction = () => {
    setUserInteracted(true);
  };

  const handleDotClick = (i: number) => {
    handleMobileInteraction();
    setActiveMobile(i);
  };

  // Mobile drag state
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeftPos, setScrollLeftPos] = useState(0);

  const handleDragStart = (e: React.MouseEvent | React.TouchEvent) => {
    handleMobileInteraction();
    setIsDragging(true);
    const el = mobileScrollRef.current;
    if (!el) return;
    const pageX = 'touches' in e ? e.touches[0].pageX : (e as React.MouseEvent).pageX;
    setStartX(pageX - el.offsetLeft);
    setScrollLeftPos(el.scrollLeft);
  };

  const handleDragEnd = () => {
    setIsDragging(false);
  };

  const handleDragMove = (e: React.MouseEvent | React.TouchEvent) => {
    if (!isDragging) return;
    e.preventDefault();
    const el = mobileScrollRef.current;
    if (!el) return;
    const pageX = 'touches' in e ? e.touches[0].pageX : (e as React.MouseEvent).pageX;
    const x = pageX - el.offsetLeft;
    const walk = (x - startX) * 1.5; // Drag speed multiplier
    el.scrollLeft = scrollLeftPos - walk;
  };


  return (
    <section id="work" className="bg-white px-6 pt-20 pb-6 md:pb-20 lg:px-16">
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

        {/* ──────────────────────────────────────────────────────────
            MOBILE VIEW: 9-card horizontal snap-scroll carousel
        ───────────────────────────────────────────────────────────── */}
        <div className="md:hidden">
          <div
            ref={mobileScrollRef}
            onScroll={handleMobileScroll}
            onMouseDown={handleDragStart}
            onMouseLeave={handleDragEnd}
            onMouseUp={handleDragEnd}
            onMouseMove={handleDragMove}
            onTouchStart={handleDragStart}
            onTouchEnd={handleDragEnd}
            onTouchMove={handleDragMove}
            className={`mt-10 flex overflow-x-auto gap-6 scrollbar-hide ${
              !isDragging ? "snap-x snap-mandatory" : ""
            }`}
          >
            {MOBILE_CAROUSEL_ITEMS.map((item, i) => (
              <div key={i} className="min-w-full flex-shrink-0 snap-center">
                <div className={`overflow-hidden shadow-xl w-full ${item.className}`}>
                  <img
                    src={item.src}
                    alt={`Project ${i}`}
                    draggable={false}
                    className="h-full w-full object-contain transition-transform duration-700 hover:scale-105 select-none"
                  />
                </div>
              </div>
            ))}
          </div>

          {/* Mobile pagination dots (9 dots) */}
          <div className="mt-8 flex items-center justify-center gap-2 flex-wrap">
            {MOBILE_CAROUSEL_ITEMS.map((_, i) => (
              <button
                key={i}
                aria-label={`Go to slide ${i + 1}`}
                onClick={() => handleDotClick(i)}
                className={`h-2.5 rounded-full transition-all duration-300 ${
                  activeMobile === i
                    ? "w-8 bg-brand-gradient"
                    : "w-2.5 bg-black/15 hover:bg-black/30"
                }`}
              />
            ))}
          </div>
        </div>

        {/* ──────────────────────────────────────────────────────────
            DESKTOP VIEW: Original 3-slide asymmetric grid layout
        ───────────────────────────────────────────────────────────── */}
        <div className="hidden md:block">
          <div className="mt-10 grid grid-cols-[1fr_1.9fr] gap-5">
            {/* Left column — two stacked thumbnails */}
            <div className="flex flex-col gap-5">
              <div className="overflow-hidden rounded-tl-[8px] rounded-tr-[48px] rounded-br-[8px] rounded-bl-[48px] shadow-md aspect-[4/3]">
                <img
                  src={desktopSlide.top}
                  alt="Project thumbnail top"
                  className="h-full w-full object-cover transition-transform duration-700 hover:scale-105"
                />
              </div>
              <div className="overflow-hidden rounded-tl-[48px] rounded-tr-[8px] rounded-br-[48px] rounded-bl-[8px] shadow-md aspect-[4/3]">
                <img
                  src={desktopSlide.bottom}
                  alt="Project thumbnail bottom"
                  className="h-full w-full object-cover transition-transform duration-700 hover:scale-105"
                />
              </div>
            </div>

            {/* Right column — large featured image */}
            <div className="overflow-hidden rounded-tl-[8px] rounded-tr-[56px] rounded-br-[8px] rounded-bl-[56px] shadow-xl">
              <img
                src={desktopSlide.featured}
                alt="Featured project"
                className="h-full w-full object-cover transition-transform duration-700 hover:scale-105"
                style={{ minHeight: "360px" }}
              />
            </div>
          </div>

          {/* Desktop pagination dots (3 dots) */}
          <div className="mt-8 flex items-center justify-center gap-2">
            {Array.from({ length: TOTAL_DESKTOP_DOTS }).map((_, i) => (
              <button
                key={i}
                aria-label={`Go to slide ${i + 1}`}
                onClick={() => setActiveDesktop(i)}
                className={`h-2.5 rounded-full transition-all duration-300 ${
                  activeDesktop === i
                    ? "w-8 bg-brand-gradient"
                    : "w-2.5 bg-black/15 hover:bg-black/30"
                }`}
              />
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
