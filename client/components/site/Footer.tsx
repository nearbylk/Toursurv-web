export default function Footer() {
  return (
    <footer className="relative bg-[#0f0f14] text-white">

      {/* ── Top divider: asymmetric left-dip on mobile, step-curve on desktop ── */}
      <div className="absolute left-0 right-0 bottom-full w-full overflow-hidden leading-none">
        <svg
          viewBox="0 0 1440 80"
          preserveAspectRatio="none"
          className="relative block w-full h-[60px] md:hidden"
        >
          {/* Mobile: curved dip on left only, straight across on right */}
          <path
            fill="#0f0f14"
            d="M0,120 L0,40 L600,40 C650,40 700,0 750,0 L3000,0 L3000,120 Z"
          />
        </svg>
        <svg
          viewBox="0 0 1440 120"
          preserveAspectRatio="none"
          className="relative hidden md:block w-full h-[120px]"
        >
          {/* Desktop: asymmetric step-curve */}
          <path
            fill="#0f0f14"
            d="M0,120 L0,80 L600,80 C650,80 700,0 750,0 L1440,0 L1440,120 Z"
          />
        </svg>
      </div>


      {/* ── Main footer body ── */}
      <div className="px-6 pb-8 lg:px-16">
        <div className="mx-auto max-w-[1440px]">

          {/* ── "Join us today…" headline row ── */}
          <div className="relative top-0 md:-top-14 z-8 mb-8 flex flex-col items-start justify-between gap-6 md:flex-row md:items-center">
            {/* Left spacer / brand tagline */}
            <p className="max-w-xs font-outfit text-sm font-light text-white/50">

            </p>

            {/* Large headline on the right */}
            <h2 className="self-end text-right font-poppins text-3xl -translate-x-[2px] -mt-[4px] -translate-y-[4px] font-semibold leading-tight md:text-4xl md:translate-x-0 md:mt-0 md:translate-y-0 lg:text-4xl">
              <span className="text-[#20D3FE]">Your success story </span>{" "}
              <span className="font-normal text-white/70">begins here.</span>

            </h2>
          </div>

          {/* ── 4-column links grid ── */}
          <div className="grid grid-cols-2 gap-x-8 gap-y-10 sm:grid-cols-4">

            {/* Col 1: Company */}
            <div>
              <h4 className="font-outfit text-xs font-bold uppercase tracking-widest text-white/50">
                Toursurv (Pvt) Ltd
              </h4>
              <ul className="mt-5 space-y-3 font-outfit text-sm font-light text-white/70">
                <li>Innovation isn't what we do; it's how we think.</li>
                <li>A premier technology firm dedicated to designing dynamic, custom software ecosystems and robust, highly secure cloud infrastructure. </li>
              </ul>
            </div>

            {/* Col 2: Services */}
            <div>
              <h4 className="font-outfit text-xs font-bold uppercase tracking-widest text-white/50">
                Services
              </h4>
              <ul className="mt-5 space-y-3 font-outfit text-sm font-light text-white/70">
                <li className="transition-colors hover:text-white">Website Development</li>
                <li className="transition-colors hover:text-white">Mobile App Development</li>
                <li className="transition-colors hover:text-white">Web App Development</li>
                <li className="transition-colors hover:text-white">IoT Solutions</li>
                <li className="transition-colors hover:text-white">Social Media Marketing</li>
              </ul>
            </div>

            {/* Col 3: Contact */}
            <div>
              <h4 className="font-outfit text-xs font-bold uppercase tracking-widest text-white/50">
                Contact
              </h4>
              <ul className="mt-5 space-y-3 font-outfit text-sm font-light text-white/70">
                <li>
                  <a href="mailto:toursurv@gmail.com" className="transition-colors hover:text-white">
                    toursurv@gmail.com
                  </a>
                </li>
                <li>
                  <a href="tel:0112755050" className="transition-colors hover:text-white">
                    0112-755050
                  </a>
                </li>
                <li>
                  <a href="tel:07111108108" className="transition-colors hover:text-white">
                    071-11108108
                  </a>
                </li>
              </ul>
            </div>

            {/* Col 4: Quick Links */}
            <div>
              <h4 className="font-outfit text-xs font-bold uppercase tracking-widest text-white/50">
                Quick Links
              </h4>
              <ul className="mt-5 space-y-3 font-outfit text-sm font-light text-white/70">
                <li>
                  <a href="#work" className="transition-colors hover:text-white">Portfolio</a>
                </li>
                <li>
                  <a href="#services" className="transition-colors hover:text-white">Our Products</a>
                </li>
                <li>
                  <a href="#about" className="transition-colors hover:text-white">About Us</a>
                </li>
                <li>
                  <a href="#contact" className="transition-colors hover:text-white">Contact Us</a>
                </li>
              </ul>
            </div>

          </div>

          {/* ── Horizontal divider ── */}
          <hr className="my-6 border-white/10" />

          {/* ── Bottom bar: centered on mobile | logo left + copyright right on desktop ── */}
          <div className="flex flex-col items-center justify-center gap-4 text-center sm:flex-row sm:items-center sm:justify-between sm:text-left">
            {/* Logo */}
            <img
              src="https://res.cloudinary.com/hvq7yafc/image/upload/v1785150752/grawhite_jczbkd.png"
              alt="Toursurv Logo"
              className="h-12 w-auto"
            />

            {/* Copyright */}
            <p className="font-outfit text-sm font-light text-white/50">
              © {new Date().getFullYear()} Toursurv (Pvt) Ltd. All rights reserved.
            </p>
          </div>

        </div>
      </div>
    </footer>
  );
}
