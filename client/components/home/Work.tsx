import { useState } from "react";

const SLIDES = [
  "https://api.builder.io/api/v1/image/assets/TEMP/725c62aa870b1d83edf3b21062ca815719806a58?width=2996",
  "https://api.builder.io/api/v1/image/assets/TEMP/839f05fd4681d59147c47b581ffddd22eb15d8d7?width=1224",
  "https://api.builder.io/api/v1/image/assets/TEMP/2a81a9a70bc62a9db2ff93fa85fe6e3641be6a55?width=836",
];

export default function Work() {
  const [active, setActive] = useState(0);

  return (
    <section id="work" className="bg-white px-6 py-20 lg:px-16">
      <div className="mx-auto max-w-[1440px]">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
          <div>
            <p className="text-right font-poppins text-2xl text-[#191919] lg:text-left">
              / OUR WORK
            </p>
            <h2 className="mt-4 font-poppins text-3xl font-semibold sm:text-4xl lg:text-5xl">
              <span className="bg-brand-gradient bg-clip-text text-transparent">
                HOW
              </span>{" "}
              Our <span className="font-semibold">Project Looks</span>
            </h2>
            <p className="mt-4 font-poppins text-lg text-[#232323]">
              Trusted By <span className="font-semibold">Brands</span>, Loved
              By <span className="font-semibold">Clients</span>
            </p>

            <div className="mt-10 flex gap-2">
              {SLIDES.map((_, i) => (
                <button
                  key={i}
                  aria-label={`Show slide ${i + 1}`}
                  onClick={() => setActive(i)}
                  className={`h-2.5 rounded-full transition-all ${
                    active === i
                      ? "w-10 bg-brand-gradient-v"
                      : "w-2.5 bg-black/15"
                  }`}
                />
              ))}
            </div>
          </div>

          <div className="overflow-hidden rounded-3xl shadow-xl">
            <img
              src={SLIDES[active]}
              alt="Project preview"
              className="h-full w-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
