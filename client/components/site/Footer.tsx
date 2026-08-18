export default function Footer() {
  return (
    <footer className="relative bg-[#0f0f14] text-white">

      {/* ── Top divider: asymmetric left-dip on mobile, step-curve on desktop ── */}
      <div className="absolute left-0 right-0 bottom-full w-full overflow-hidden leading-none">
        {/* Mobile SVG removed per user request */}
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
      <div className="px-6 pt-12 md:pt-0 pb-8 lg:px-16">
        <div className="mx-auto max-w-[1440px]">

          {/* ── "Join us today…" headline row ── */}
          <div className="relative top-0 md:-top-14 z-20 mt-8 md:mt-0 mb-6 md:mb-8 hidden md:flex flex-col items-center justify-between gap-6 w-full md:flex-row md:items-center">
            {/* Left spacer / brand tagline */}
            <p className="max-w-xs font-outfit text-sm font-light text-white/50">

            </p>

            {/* Large headline on the right */}
            <h2 className="w-full text-right font-poppins text-lg md:text-4xl font-semibold leading-tight">
              <span className="text-[#20D3FE]">Your success story </span>
              <br className="block md:hidden" />
              <span className="inline-block mr-14 md:mr-0 font-normal text-white/70">begins here.</span>
            </h2>
          </div>

          {/* ── Column grid: Company | Services | Contact ── */}
          <div className="grid grid-cols-1 gap-y-10 text-center md:grid-cols-3 md:gap-x-8 md:text-left">

            {/* Col 1: Company */}
            <div>
              <h4 className="font-outfit text-xs font-bold uppercase tracking-widest text-white/50">
                Toursurv (Pvt) Ltd
              </h4>
              <p className="mt-5 font-outfit text-sm font-light leading-relaxed text-white/70">
                Innovation isn't what we do; it's how we think.
              </p>
              <p className="mt-5 font-outfit text-sm font-light leading-relaxed text-white/70">
                A premier technology firm dedicated to designing dynamic, custom software ecosystems and robust, highly secure cloud infrastructure.
              </p>
            </div>

            {/* services */}
            <div>
              <h4 className="font-outfit text-xs font-bold uppercase tracking-widest text-white/50">
                Services
              </h4>
              <hr className="mt-3 mb-4 border-white/10" />

              {/* Two office blocks side-by-side on desktop, stacked on mobile */}
              <div className="grid grid-cols-1 gap-y-6 font-outfit text-sm font-light text-white/70 md:grid-cols-2 md:gap-x-8">

                {/* Sri Lanka Office */}
                <div>
                  <p>Web Development</p>
                  <p>Software Development</p>
                  <p>AI Solutions</p>
                  <p>Mobile App Development</p>
                  <p>POS & Cashier Systems</p>

                </div>

                {/* Bangladesh Office */}
                <div>
                  <p>IoT Solutions</p>
                  <p>Social Media Marketing</p>
                  <p>Cloud Infrastructure Solutions</p>
                  <p>Event Management</p>
                </div>

              </div>
            </div>

            {/* Col 3: Contact */}
            <div>
              <h4 className="font-outfit text-xs font-bold uppercase tracking-widest text-white/50">
                Contact
              </h4>
              <hr className="mt-3 mb-4 border-white/10" />

              {/* Two office blocks side-by-side on desktop, stacked on mobile */}
              <div className="grid grid-cols-1 gap-y-6 font-outfit text-sm font-light text-white/70 md:grid-cols-2 md:gap-x-8">

                {/* Sri Lanka Office */}
                <div>
                  <p className="mb-1 font-semibold text-white/90">Sri Lanka Office</p>
                  <p>General: <a href="tel:+94112755050" className="transition-colors hover:text-white">+94 112 75 50 50</a></p>
                  <p>Hotline: <a href="tel:+94711108108" className="transition-colors hover:text-white">+94 711 108 108</a></p>
                  <p className="mt-1 leading-snug">359/19, 06th Lane, Maya Mawatha,<br />Makumbura, Pannipitiya, Sri Lanka</p>
                  <p className="mt-1">
                    <a href="mailto:toursurvmarketing@gmail.com" className="transition-colors hover:text-white">
                      toursurvmarketing@gmail.com
                    </a>
                  </p>
                </div>

                {/* Bangladesh Office */}
                <div>
                  <p className="mb-1 font-semibold text-white/90">Bangladesh Office</p>
                  <p>Telephone: <a href="tel:+8801844646633" className="transition-colors hover:text-white">+88 01844-646633</a></p>
                  <p className="mt-1 leading-snug">357/10A - Modhubag, Moghbazar,<br />Dhaka, Bangladesh – 1217</p>
                </div>

              </div>
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
