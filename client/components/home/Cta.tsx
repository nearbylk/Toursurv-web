export default function Cta() {
  return (
    <section id="contact" className="relative overflow-hidden bg-white px-6 py-20 mb-32 md:mb-48 lg:px-16">
      <div className="mx-auto max-w-[1440px]">
        <div className="relative overflow-hidden rounded-[43px] border border-[#523FDD] bg-brand-gradient text-white">

          {/* ── 2-column grid ── */}
          <div className="grid grid-cols-1 md:grid-cols-2">

            {/* ── Left column: decorative illustration ── */}
            <div className="relative flex items-center justify-center overflow-hidden px-10 py-14">
              {/* Large background circle */}
              <div className="absolute left-1/2 top-1/2 h-72 w-72 -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/10" />
              <div className="absolute left-1/2 top-1/2 h-52 w-52 -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/10" />

              {/* Central phone SVG */}
              <svg
                viewBox="0 0 220 220"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="relative z-10 h-52 w-52 opacity-90"
              >
                {/* Phone body */}
                <rect x="60" y="20" width="100" height="170" rx="18" stroke="white" strokeWidth="5" strokeOpacity="0.25" />
                <rect x="75" y="38" width="70" height="110" rx="6" stroke="white" strokeWidth="3" strokeOpacity="0.2" />
                {/* Home button circle */}
                <circle cx="110" cy="170" r="8" stroke="white" strokeWidth="3" strokeOpacity="0.25" />
                {/* Screen lines */}
                <line x1="82" y1="55" x2="138" y2="55" stroke="white" strokeWidth="2.5" strokeOpacity="0.2" strokeLinecap="round" />
                <line x1="82" y1="68" x2="125" y2="68" stroke="white" strokeWidth="2.5" strokeOpacity="0.2" strokeLinecap="round" />
                <line x1="82" y1="81" x2="130" y2="81" stroke="white" strokeWidth="2.5" strokeOpacity="0.2" strokeLinecap="round" />

                {/* Floating mail envelope (top right) */}
                <g transform="translate(142, 28)">
                  <rect x="0" y="0" width="54" height="38" rx="7" stroke="white" strokeWidth="3.5" strokeOpacity="0.5" />
                  <path d="M0 6 L27 22 L54 6" stroke="white" strokeWidth="3.5" strokeOpacity="0.5" strokeLinecap="round" strokeLinejoin="round" />
                </g>

                {/* Floating phone handset (bottom left) */}
                <g transform="translate(18, 128)">
                  <path
                    d="M10 2C10 2 6 6 5 12C4 18 8 26 16 32C24 38 32 40 38 37C44 34 46 30 46 30L38 22C38 22 34 26 30 24C26 22 20 16 20 12C20 8 24 6 24 6L10 2Z"
                    stroke="white"
                    strokeWidth="3.5"
                    strokeOpacity="0.45"
                    strokeLinejoin="round"
                  />
                </g>

                {/* Small star / sparkle top-left */}
                <g transform="translate(32, 40)">
                  <line x1="10" y1="0" x2="10" y2="20" stroke="white" strokeWidth="3" strokeOpacity="0.35" strokeLinecap="round" />
                  <line x1="0" y1="10" x2="20" y2="10" stroke="white" strokeWidth="3" strokeOpacity="0.35" strokeLinecap="round" />
                  <line x1="3" y1="3" x2="17" y2="17" stroke="white" strokeWidth="2" strokeOpacity="0.2" strokeLinecap="round" />
                  <line x1="17" y1="3" x2="3" y2="17" stroke="white" strokeWidth="2" strokeOpacity="0.2" strokeLinecap="round" />
                </g>

                {/* Dot cluster bottom-right */}
                <circle cx="172" cy="155" r="4" fill="white" fillOpacity="0.3" />
                <circle cx="186" cy="148" r="3" fill="white" fillOpacity="0.2" />
                <circle cx="178" cy="168" r="2.5" fill="white" fillOpacity="0.2" />
              </svg>
            </div>

            {/* ── Right column: text + buttons ── */}
            <div className="flex flex-col items-start justify-center px-10 py-14 md:pl-6 md:pr-14">
              <span className="inline-block rounded-full bg-black/10 px-4 py-1.5 font-poppins text-sm font-bold text-black">
                Contact with Us
              </span>
              <h2 className="mt-5 font-poppins text-3xl font-bold leading-tight sm:text-4xl">
                Ready to Grow Your Business
              </h2>
              <p className="mt-4 max-w-sm font-poppins text-base font-semibold leading-relaxed opacity-90">
                Let's build something great together. Get a free consultation
                and discover the right solution for your business.
              </p>

              <div className="mt-8 flex flex-wrap gap-4">
                {/* Start Your Project */}
                <a
                  href="mailto:toursurv@gmail.com"
                  className="inline-flex items-center gap-2 rounded-[13px] bg-white px-6 py-2.5 font-poppins text-sm font-medium text-[#343434] transition-opacity hover:opacity-90"
                >
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M17.25 2.75H6.75C5.49022 2.75 4.28204 3.25045 3.39124 4.14124C2.50044 5.03204 2 6.24022 2 7.5V16.5C2 17.1238 2.12286 17.7415 2.36157 18.3177C2.60028 18.894 2.95016 19.4177 3.39124 19.8588C4.28204 20.7496 5.49022 21.25 6.75 21.25H17.25C18.509 21.2474 19.7156 20.7461 20.6058 19.8558C21.4961 18.9656 21.9974 17.759 22 16.5V7.5C21.9974 6.24103 21.4961 5.03439 20.6058 4.14416C19.7156 3.25394 18.509 2.75264 17.25 2.75ZM13.6 11.07C13.108 11.3506 12.5514 11.4981 11.985 11.4981C11.4186 11.4981 10.862 11.3506 10.37 11.07L3.52 7.14C3.60857 6.3453 3.98701 5.61115 4.58292 5.07797C5.17883 4.54478 5.95038 4.25 6.75 4.25H17.25C18.049 4.25219 18.8194 4.54773 19.4148 5.0805C20.0103 5.61327 20.3893 6.34616 20.48 7.14L13.6 11.07Z" fill="black" />
                  </svg>
                  Start Your Project
                </a>

                {/* Schedule a Call */}
                <a
                  href="tel:0112755050"
                  className="inline-flex items-center gap-2 rounded-[13px] bg-white px-6 py-2.5 font-poppins text-sm font-medium text-[#343434] transition-opacity hover:opacity-90"
                >
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M1.00003 2H9.58003L11.067 8.69L9.20703 10.55C10.3007 12.252 11.7477 13.6988 13.45 14.792L15.31 12.933L22 14.42V23H21C17.1504 23.0066 13.3814 21.8964 10.15 19.804C7.76725 18.262 5.73807 16.2328 4.19603 13.85C2.10365 10.6186 0.993465 6.84967 1.00003 3V2Z" fill="black" />
                  </svg>
                  Schedule a Call
                </a>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
