import { useState, useEffect, useRef } from "react";
import ScrollReveal from "@/components/ui/ScrollReveal";

// ── Count-up hook ────────────────────────────────────────────────────────────
function useCountUp(target: number, duration = 1800) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLDivElement | null>(null);
  const started = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started.current) {
          started.current = true;
          const startTime = performance.now();

          const tick = (now: number) => {
            const elapsed = now - startTime;
            const progress = Math.min(elapsed / duration, 1);
            // ease-out quad
            const eased = 1 - (1 - progress) * (1 - progress);
            setCount(Math.floor(eased * target));
            if (progress < 1) requestAnimationFrame(tick);
          };

          requestAnimationFrame(tick);
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [target, duration]);

  return { count, ref };
}

// ── Data ─────────────────────────────────────────────────────────────────────
const SERVICES = [
  {
    icon: "https://api.builder.io/api/v1/image/assets/TEMP/448e6751651adcb3fbc74ebf776375d01f6cc1ae?width=144",
    title: "Web Development",
    desc: "We develop fast-loading, modern, intuitive, and mobile-compatible websites that deliver exceptional user experiences.",
  },
  {
    icon: "https://api.builder.io/api/v1/image/assets/TEMP/eb2bca0ba55381f3abe42a690130c7ccd452a2f6?width=160",
    title: "Software Development",
    desc: "We build robust, scalable software tailored to your business processes and goals.",
  },
  {
    icon: "https://api.builder.io/api/v1/image/assets/TEMP/961b70049048464b11a79aa9a7a2a8d48dd35b94?width=180",
    title: "AI Solutions",
    desc: "We integrate intelligent automation and AI features to help your business work smarter.",
  },
  {
    icon: "https://api.builder.io/api/v1/image/assets/TEMP/9466742985d3189d4ccc71678c51c343be2ce116?width=144",
    title: "Mobile App Development",
    desc: "We craft native and cross-platform mobile apps that keep your customers engaged.",
  },
  {
    icon: "https://api.builder.io/api/v1/image/assets/TEMP/061ff432ef8211e64e5754a270515470496ed46e?width=168",
    title: "POS & Cashier Systems",
    desc: "We design reliable point-of-sale systems that streamline your day to day operations.",
  },
  {
    icon: "https://api.builder.io/api/v1/image/assets/TEMP/66c0ef3ae33df242db9eac441ce8d79953eb279d?width=156",
    title: "IoT Solutions",
    desc: "We connect devices and data to unlock smarter, automated business solutions.",
  },
];

const SOCIAL = {
  icon: "https://api.builder.io/api/v1/image/assets/TEMP/51fe540eeb76d744e38322ed8b5f8b9d439ad812?width=176",
  title: "Social Media Marketing",
  desc: "Boost your online presence with engaging content and effective social media marketing.",
};

// target number + suffix symbol
const STATS: { target: number; suffix: string; label: string }[] = [
  { target: 50, suffix: "+", label: "Projects Completed" },
  { target: 30, suffix: "+", label: "Happy Clients" },
  { target: 7,  suffix: "+", label: "Years of experience" },
  { target: 98, suffix: "%", label: "Client Satisfaction" },
];

const STAT_ICONS = [
  <path
    key="happy"
    d="M39.6583 9.34149C37.6712 7.33475 35.3072 5.74041 32.7021 4.65005C30.097 3.55969 27.3021 2.99481 24.4781 2.98786C21.654 2.98091 18.8563 3.53202 16.2459 4.60954C13.6354 5.68707 11.2636 7.26976 9.26669 9.26669C7.26976 11.2636 5.68707 13.6354 4.60954 16.2459C3.53202 18.8563 2.98091 21.654 2.98786 24.4781C2.99481 27.3021 3.55969 30.097 4.65005 32.7021C5.74041 35.3072 7.33475 37.6712 9.34149 39.6583C11.3286 41.6651 13.6926 43.2594 16.2977 44.3498C18.9028 45.4401 21.6977 46.005 24.5218 46.012C27.3458 46.0189 30.1435 45.4678 32.7539 44.3903C35.3644 43.3128 37.7362 41.7301 39.7331 39.7331C41.7301 37.7362 43.3128 35.3644 44.3903 32.7539C45.4678 30.1435 46.0189 27.3458 46.012 24.5218C46.005 21.6977 45.4401 18.9028 44.3498 16.2977C43.2594 13.6926 41.6651 11.3286 39.6583 9.34149ZM31.3905 19.9062C31.8448 19.9062 32.2889 20.0409 32.6666 20.2933C33.0443 20.5456 33.3387 20.9044 33.5126 21.3241C33.6864 21.7438 33.7319 22.2056 33.6433 22.6511C33.5547 23.0967 33.3359 23.5059 33.0147 23.8272C32.6934 24.1484 32.2842 24.3672 31.8386 24.4558C31.3931 24.5444 30.9313 24.4989 30.5116 24.3251C30.0919 24.1512 29.7331 23.8568 29.4808 23.4791C29.2284 23.1014 29.0937 22.6573 29.0937 22.203C29.0929 21.9012 29.1518 21.6022 29.267 21.3232C29.3821 21.0442 29.5513 20.7906 29.7647 20.5772C29.9781 20.3638 30.2317 20.1946 30.5107 20.0795C30.7897 19.9643 31.0887 19.9054 31.3905 19.9062ZM17.6093 19.9062C18.0636 19.9062 18.5076 20.0409 18.8854 20.2933C19.2631 20.5456 19.5575 20.9044 19.7313 21.3241C19.9052 21.7438 19.9507 22.2056 19.862 22.6511C19.7734 23.0967 19.5546 23.5059 19.2334 23.8272C18.9122 24.1484 18.5029 24.3672 18.0574 24.4558C17.6118 24.5444 17.15 24.4989 16.7303 24.3251C16.3106 24.1512 15.9519 23.8568 15.6995 23.4791C15.4471 23.1014 15.3124 22.6573 15.3124 22.203C15.3117 21.9012 15.3705 21.6022 15.4857 21.3232C15.6009 21.0442 15.77 20.7906 15.9835 20.5772C16.1969 20.3638 16.4504 20.1946 16.7294 20.0795C17.0084 19.9643 17.3074 19.9054 17.6093 19.9062ZM24.5047 36.7499C20.1579 36.7499 16.4896 33.9276 15.344 30.067C15.2445 29.7301 15.121 29.0937 15.121 29.0937H33.8788C33.8788 29.0937 33.7534 29.7339 33.6558 30.067C32.5284 33.9295 28.8515 36.7499 24.5047 36.7499Z"
    fill="white"
  />,
  <path
    key="target"
    d="M16.5377 43.3098C14.0536 42.2372 11.8929 40.7822 10.0554 38.9447C8.21787 37.1072 6.76353 34.9464 5.69233 32.4624C4.62114 29.9784 4.08486 27.3242 4.0835 24.4999C4.08214 21.6756 4.61842 19.0214 5.69233 16.5374C6.76625 14.0534 8.2206 11.8926 10.0554 10.0551C11.8902 8.21763 14.0509 6.76328 16.5377 5.69209C19.0244 4.62089 21.6786 4.08462 24.5002 4.08325C27.3217 4.08189 29.9759 4.61817 32.4627 5.69209C34.9494 6.766 37.1102 8.22035 38.945 10.0551C40.7797 11.8899 42.2348 14.0507 43.31 16.5374C44.3853 19.0242 44.9209 21.6783 44.9168 24.4999C44.9127 27.3215 44.3765 29.9757 43.308 32.4624C42.2395 34.9492 40.7852 37.1099 38.945 38.9447C37.1047 40.7795 34.944 42.2345 32.4627 43.3098C29.9814 44.3851 27.3272 44.9207 24.5002 44.9166C21.6731 44.9125 19.019 44.3783 16.5377 43.3098ZM36.0866 36.0864C39.2512 32.9218 40.8335 29.0596 40.8335 24.4999C40.8335 19.9402 39.2512 16.078 36.0866 12.9135C32.922 9.74888 29.0599 8.16659 24.5002 8.16659C19.9404 8.16659 16.0783 9.74888 12.9137 12.9135C9.74912 16.078 8.16683 19.9402 8.16683 24.4999C8.16683 29.0596 9.74912 32.9218 12.9137 36.0864C16.0783 39.251 19.9404 40.8333 24.5002 40.8333C29.0599 40.8333 32.922 39.251 36.0866 36.0864ZM15.8231 33.177C13.4411 30.7951 12.2502 27.9027 12.2502 24.4999C12.2502 21.0971 13.4411 18.2048 15.8231 15.8228C18.205 13.4409 21.0974 12.2499 24.5002 12.2499C27.9029 12.2499 30.7953 13.4409 33.1772 15.8228C35.5592 18.2048 36.7502 21.0971 36.7502 24.4999C36.7502 27.9027 35.5592 30.7951 33.1772 33.177C30.7953 35.5589 27.9029 36.7499 24.5002 36.7499C21.0974 36.7499 18.205 35.5589 15.8231 33.177ZM30.2679 30.2676C31.8672 28.6683 32.6668 26.7458 32.6668 24.4999C32.6668 22.2541 31.8672 20.3315 30.2679 18.7322C28.6686 17.1329 26.746 16.3333 24.5002 16.3333C22.2543 16.3333 20.3318 17.1329 18.7325 18.7322C17.1332 20.3315 16.3335 22.2541 16.3335 24.4999C16.3335 26.7458 17.1332 28.6683 18.7325 30.2676C20.3318 31.8669 22.2543 32.6666 24.5002 32.6666C26.746 32.6666 28.6686 31.8669 30.2679 30.2676ZM21.6173 27.3848C20.817 26.5845 20.4168 25.6228 20.4168 24.4999C20.4168 23.377 20.817 22.4161 21.6173 21.6171C22.4177 20.8181 23.3786 20.4179 24.5002 20.4166C25.6217 20.4152 26.5833 20.8154 27.385 21.6171C28.1867 22.4188 28.5862 23.3797 28.5835 24.4999C28.5808 25.6201 28.1813 26.5817 27.385 27.3848C26.5888 28.1878 25.6272 28.5873 24.5002 28.5833C23.3732 28.5792 22.4122 28.1797 21.6173 27.3848Z"
    fill="white"
  />,
  <path
    key="rocket"
    d="M22.1114 14.5162C26.6806 9.36504 33.7897 7.14575 40.3231 7.14575C40.7292 7.14575 41.1187 7.30708 41.4058 7.59424C41.693 7.88141 41.8543 8.27089 41.8543 8.677C41.8543 15.2103 39.635 22.3194 34.4839 26.8887C34.3594 28.963 33.7183 31.0394 32.8016 32.8626C31.7807 34.892 30.3618 36.7152 28.7734 37.9218C27.2196 39.1019 25.2106 39.888 23.2261 39.1489C21.3478 38.4486 20.082 36.5968 19.347 33.9671L15.0329 29.651C12.4033 28.9181 10.5515 27.6523 9.85119 25.7739C9.1121 23.7894 9.89815 21.7804 11.0782 20.2267C12.2849 18.6383 14.1081 17.2193 16.1375 16.1985C17.9607 15.2818 20.0371 14.6407 22.1094 14.5182M19.396 18.1544C18.7507 18.3699 18.1216 18.6313 17.5136 18.9364C15.8067 19.7959 14.3837 20.9413 13.518 22.0805C12.6258 23.2565 12.5115 24.1426 12.7218 24.7061C12.8912 25.1675 13.4404 25.8433 14.9554 26.413C15.3004 25.6392 15.7965 24.5693 16.4192 23.3423C17.2114 21.7845 18.22 19.9511 19.396 18.1544ZM22.5891 34.0488C23.1567 35.5637 23.8346 36.1109 24.296 36.2844C24.8574 36.4927 25.7456 36.3783 26.9216 35.4882C28.0608 34.6205 29.2062 33.1974 30.0657 31.4906C30.3747 30.8767 30.6354 30.2493 30.8477 29.6082C29.1742 30.6935 27.443 31.6872 25.6619 32.5849C24.4328 33.2076 23.3629 33.7038 22.5891 34.0488ZM10.2799 32.6768C11.1029 31.9893 12.1496 31.6278 13.2214 31.661C14.2933 31.6941 15.3156 32.1195 16.0946 32.8565L16.113 32.8769C17.7443 34.4898 17.7177 37.0705 16.3233 38.7263C15.721 39.4449 14.8982 39.9635 14.1244 40.3433C13.3343 40.7312 12.4829 41.0231 11.7254 41.2416C10.8149 41.5006 9.88882 41.7018 8.95286 41.8439L8.90386 41.85L8.88752 41.852H8.8814C8.64819 41.8833 8.41093 41.8603 8.18803 41.785C7.96513 41.7097 7.76258 41.584 7.59611 41.4177C7.42964 41.2515 7.30372 41.0491 7.22814 40.8263C7.15255 40.6034 7.12933 40.3662 7.16027 40.133V40.1268L7.16231 40.1105L7.17048 40.0615C7.20793 39.7956 7.25286 39.5307 7.30523 39.2673C7.40119 38.7548 7.55227 38.0505 7.77073 37.2848C7.99978 36.4589 8.29965 35.6542 8.66702 34.8798C9.04473 34.1039 9.56331 33.2832 10.2799 32.6768ZM32.0278 16.7824C31.7407 16.4957 31.3515 16.3346 30.9457 16.3346C30.5399 16.3346 30.1507 16.4957 29.8636 16.7824L28.4201 18.2259C28.1497 18.5162 28.0024 18.9001 28.0094 19.2968C28.0164 19.6935 28.1771 20.072 28.4577 20.3525C28.7382 20.6331 29.1167 20.7938 29.5134 20.8008C29.9101 20.8078 30.294 20.6605 30.5843 20.39L32.0278 18.9466C32.3145 18.6595 32.4756 18.2703 32.4756 17.8645C32.4756 17.4587 32.3145 17.0695 32.0278 16.7824Z"
    fill="white"
  />,
  <path
    key="heart"
    fillRule="evenodd"
    clipRule="evenodd"
    d="M16.5499 37.2542C10.8169 32.836 4.0835 27.6481 4.0835 18.6546C4.0835 8.72597 15.3127 1.68426 24.5002 11.2311V41.8541C22.4585 41.8541 20.4168 40.282 18.2976 38.6078C17.73 38.1641 17.1474 37.7129 16.5499 37.2542Z"
    fill="white"
    opacity={0.5}
  />,
];

// ── Sub-components ────────────────────────────────────────────────────────────
function ServiceCard({
  icon,
  title,
  desc,
}: {
  icon: string;
  title: string;
  desc: string;
}) {
  return (
    <div className="flex flex-col items-center rounded-3xl border border-black/5 bg-white p-8 text-center shadow-sm transition-shadow hover:shadow-xl">
      <img src={icon} alt="" className="h-16 w-16 object-contain" />
      <h3 className="mt-5 font-poppins text-xl font-semibold text-[#191919]">
        {title}
      </h3>
      <p className="mt-3 font-poppins text-base font-medium text-[#2F2F2F]">
        {desc}
      </p>
      <a
        href="#contact"
        className="mt-6 inline-flex items-center gap-1.5 rounded-[9px] bg-brand-gradient-wide px-5 py-1.5 font-poppins text-sm font-semibold text-white transition-opacity hover:opacity-90"
      >
        Learn More
        <svg className="h-3 w-3" width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M4.75 9.54169L9.79167 4.5" stroke="white" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round"/><path d="M5.29167 4.66669H9.83333V9.20835" stroke="white" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round"/></svg>
      </a>
    </div>
  );
}

function StatCard({
  target,
  suffix,
  label,
  icon,
}: {
  target: number;
  suffix: string;
  label: string;
  icon: React.ReactNode;
}) {
  const { count, ref } = useCountUp(target);

  return (
    <div
      ref={ref}
      className="flex flex-col items-center justify-center gap-3 px-6 text-center lg:flex-1 lg:py-2"
    >
      {/* Icon circle — no overflow-hidden so paths aren't clipped */}
      <div className="flex h-14 w-14 items-center justify-center rounded-full bg-white/15">
        <svg
          width="36"
          height="36"
          viewBox="0 0 49 49"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          overflow="visible"
        >
          {icon}
        </svg>
      </div>
      {/* Animated number */}
      <p className="font-poppins text-4xl font-semibold leading-none sm:text-5xl">
        {count}{suffix}
      </p>
      {/* Label */}
      <p className="font-poppins text-xs font-medium leading-snug opacity-80 sm:text-sm">
        {label}
      </p>
    </div>
  );
}

// ── Main component ────────────────────────────────────────────────────────────
export default function Services() {
  return (
    <section id="services" className="bg-[#f7f7f9] px-6 py-20 lg:px-16">
      <div className="mx-auto max-w-[1440px]">
        <p className="text-left font-poppins text-2xl text-[#191919]">
          / SERVICES
        </p>
        <h2 className="mt-4 text-left font-poppins text-3xl font-semibold sm:text-4xl lg:text-5xl">
          <span className="bg-brand-gradient bg-clip-text text-transparent">
            Services
          </span>{" "}
          that <span className="font-semibold">Drive Success</span>
        </h2>
        <p className="mt-4 text-left font-poppins text-lg font-semibold text-[#2F2F2F]">
          End to End solutions to build your brand, engage you audience and{" "}
          <span className="font-bold">grow your business</span> online.
        </p>

        <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map((s, i) => (
            <ScrollReveal key={s.title} delay={i * 0.1} threshold={0.08}>
              <ServiceCard {...s} />
            </ScrollReveal>
          ))}
        </div>

        <div className="mx-auto mt-6 max-w-md">
          <ScrollReveal delay={SERVICES.length * 0.1} threshold={0.08}>
            <ServiceCard {...SOCIAL} />
          </ScrollReveal>
        </div>

        <ScrollReveal delay={0.1} threshold={0.1}>
          <div className="mt-16 rounded-[26px] bg-brand-gradient-wide px-8 py-10 text-white sm:px-12">
            {/* ── Single horizontal row: 40% left text | 60% right metrics ── */}
            <div className="flex flex-col gap-10 lg:flex-row lg:items-center lg:gap-0">

              {/* Left ~40%: text + button */}
              <div className="flex flex-col justify-center lg:w-[40%] lg:shrink-0 lg:pr-12">
                <p className="font-poppins text-sm font-semibold tracking-widest opacity-80 uppercase">
                  WHY CHOSE US
                </p>
                <h3 className="mt-3 font-poppins text-2xl font-semibold leading-snug sm:text-3xl lg:text-[28px]">
                  We Combine Code, Creativity &amp; Strategy To Deliver Results
                </h3>
                <p className="mt-3 font-poppins text-sm font-light leading-relaxed opacity-75">
                  We're not just developers or marketers — we're your growth
                  partners.
                </p>
                <a
                  href="#contact"
                  className="mt-7 inline-flex self-start items-center gap-2 rounded-[13px] bg-white px-6 py-2.5 font-poppins text-sm font-semibold text-[#343434] transition-opacity hover:opacity-90"
                >
                  Let's work together
                  <svg className="h-3.5 w-3.5" width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M4.75 9.54169L9.79167 4.5" stroke="#343434" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round"/><path d="M5.29167 4.66669H9.83333V9.20835" stroke="#343434" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round"/></svg>
                </a>
              </div>

              {/* Vertical divider (desktop only) */}
              <div className="hidden lg:block lg:h-36 lg:w-px lg:shrink-0 lg:bg-white/25" />

              {/* Right ~60%: stat cards — each cascades in individually */}
              <div className="grid grid-cols-2 gap-y-8 sm:grid-cols-4 lg:flex lg:flex-1 lg:items-center lg:divide-x lg:divide-white/20">
                {STATS.map((stat, i) => (
                  <ScrollReveal
                    key={stat.label}
                    delay={0.2 + i * 0.1}
                    threshold={0.05}
                    distance={30}
                  >
                    <StatCard
                      target={stat.target}
                      suffix={stat.suffix}
                      label={stat.label}
                      icon={STAT_ICONS[i]}
                    />
                  </ScrollReveal>
                ))}
              </div>

            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
