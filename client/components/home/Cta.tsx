export default function Cta() {
  return (
    <section id="contact" className="relative overflow-hidden bg-white px-6 py-20 lg:px-16">
      <div className="mx-auto max-w-[1440px]">
        <div className="relative overflow-hidden rounded-[43px] border border-[#523FDD] bg-brand-gradient px-8 py-14 text-center text-white sm:px-14">
          <span className="inline-block rounded-full bg-black/10 px-4 py-1.5 font-poppins text-sm font-bold text-black">
            Contact with Us
          </span>
          <h2 className="mx-auto mt-6 max-w-xl font-poppins text-3xl font-bold sm:text-4xl">
            Ready to Grow Your Business
          </h2>
          <p className="mx-auto mt-4 max-w-lg font-poppins text-base font-semibold">
            Let's build something great together. Get a free consultation and
            discover the right solution for your business
          </p>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <a
              href="mailto:toursurv@gmail.com"
              className="inline-flex items-center gap-2 rounded-[13px] bg-white px-6 py-2.5 font-poppins text-sm font-medium text-[#343434]"
            >
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M17.25 2.75H6.75C5.49022 2.75 4.28204 3.25045 3.39124 4.14124C2.50044 5.03204 2 6.24022 2 7.5V16.5C2 17.1238 2.12286 17.7415 2.36157 18.3177C2.60028 18.894 2.95016 19.4177 3.39124 19.8588C4.28204 20.7496 5.49022 21.25 6.75 21.25H17.25C18.509 21.2474 19.7156 20.7461 20.6058 19.8558C21.4961 18.9656 21.9974 17.759 22 16.5V7.5C21.9974 6.24103 21.4961 5.03439 20.6058 4.14416C19.7156 3.25394 18.509 2.75264 17.25 2.75ZM13.6 11.07C13.108 11.3506 12.5514 11.4981 11.985 11.4981C11.4186 11.4981 10.862 11.3506 10.37 11.07L3.52 7.14C3.60857 6.3453 3.98701 5.61115 4.58292 5.07797C5.17883 4.54478 5.95038 4.25 6.75 4.25H17.25C18.049 4.25219 18.8194 4.54773 19.4148 5.0805C20.0103 5.61327 20.3893 6.34616 20.48 7.14L13.6 11.07Z"
                  fill="black"
                />
              </svg>
              Start Your Project
            </a>
            <a
              href="tel:0112755050"
              className="inline-flex items-center gap-2 rounded-[13px] bg-white px-6 py-2.5 font-poppins text-sm font-medium text-[#343434]"
            >
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M1.00003 2H9.58003L11.067 8.69L9.20703 10.55C10.3007 12.252 11.7477 13.6988 13.45 14.792L15.31 12.933L22 14.42V23H21C17.1504 23.0066 13.3814 21.8964 10.15 19.804C7.76725 18.262 5.73807 16.2328 4.19603 13.85C2.10365 10.6186 0.993465 6.84967 1.00003 3V2Z"
                  fill="black"
                />
              </svg>
              Schedule a Call
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
