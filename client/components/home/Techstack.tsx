const ALL_LOGOS = [
    "/image%2044.png",
    "/image%2045.png",
    "/image%2046.png",
    "/image%2047.png",
    "/image%2048.png",
    "/image%2049.png",
];

function MarqueeRow({ logos }: { logos: string[] }) {
    return (
        <div className="flex w-full overflow-hidden">
            {[0, 1, 2, 3, 4].map((stripIndex) => (
                <div
                    key={stripIndex}
                    className="flex shrink-0 animate-marquee-right items-center justify-start gap-10 w-max pr-10"
                >
                    {logos.map((src, i) => (
                        <img
                            key={i}
                            src={src}
                            alt=""
                            className="h-16 w-auto object-contain opacity-80 grayscale transition hover:opacity-100 hover:grayscale-0 md:h-20"
                        />
                    ))}
                </div>
            ))}
        </div>
    );
}

export default function Clients() {
    return (
        <section className="bg-white px-6 py-20 lg:px-16">
            <div className="mx-auto max-w-[1440px]">
                <p className="mt-6 font-poppins text-2xl text-[#2F2F2F]">
                    / TECH STACK
                </p>
                <h2 className="mt-4 text-left font-poppins text-3xl font-semibold sm:text-4xl lg:text-5xl">

                    <span className="bg-brand-gradient bg-clip-text text-transparent">
                        What
                    </span>{" "}
                    We <span className="font-semibold">Use</span>
                </h2>

                <div className="mt-10 overflow-hidden">
                    <MarqueeRow logos={ALL_LOGOS} />
                </div>
            </div>
        </section>
    );
}
