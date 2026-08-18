export default function Cta() {
  return (
    <section id="contact" className="relative overflow-hidden bg-white px-6 py-12 md:py-20 mb-8 md:mb-48 lg:px-16">
      <div className="mx-auto max-w-[1440px]">
        <div className="relative overflow-hidden rounded-[43px] border bg-brand-gradient text-white min-h-[340px] flex items-center">

          {/* ── Left graphic: absolute decoration ── */}
          <img
            src="/contact-information%202.png"
            alt="Contact Graphic"
            className="absolute -left-8 top-1/2 -translate-y-1/2 w-[400px] lg:w-[535px] object-contain pointer-events-none select-none opacity-50 md:opacity-100"
          />

          {/* ── Content: pushed to right half on desktop ── */}
          <div className="relative z-10 w-full max-w-3xl mx-auto md:mx-0 md:ml-auto md:mr-12 lg:mr-32 flex flex-col items-center text-center px-10 py-14">
            <span className="font-poppins text-3xl font-bold text-white">
              Connect With Us
            </span>
            <h2 className="mt-5 font-poppins text-3xl font-bold leading-tight sm:text-4xl">
              Ready to Grow Your Business
            </h2>
            <p className="mt-4 max-w-2xl mx-auto font-poppins text-base font-semibold leading-relaxed opacity-90">
              Let's build something great together. Get a free consultation
              and discover the right solution for your business.
            </p>

            <div className="mt-8 flex flex-wrap justify-center gap-4">
              {/* Start Your Project */}
              <a
                href="mailto:toursurvmarketing@gmail.com"
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
    </section>
  );
}
