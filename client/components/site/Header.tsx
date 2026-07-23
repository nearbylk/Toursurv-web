import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";


const LINKS = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/#about" },
  { label: "Services", href: "/#services" },
  { label: "work", href: "/#work" },
  { label: "Contact", href: "/contact" },
];

export default function Header() {
  const { pathname } = useLocation();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Link එකේ active state එක අල්ලගන්න state එක
  const [activeLink, setActiveLink] = useState("/");

  // JS-based smooth scroll handler (works regardless of browser scroll-behavior support)
  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (href.includes("#")) {
      const targetId = href.split("#")[1];
      const elem = document.getElementById(targetId);
      if (elem) {
        e.preventDefault();
        const headerOffset = 90; // Account for sticky navbar + breathing room
        const elementPosition = elem.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.scrollY - headerOffset;

        window.scrollTo({
          top: offsetPosition,
          behavior: "smooth"
        });

        setActiveLink(href);
        setOpen(false);
      }
    } else if (href === "/") {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: "smooth" });
      setActiveLink("/");
      setOpen(false);
    }
  };

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 w-full bg-white/90 backdrop-blur transition-shadow ${scrolled ? "shadow-sm" : ""
        }`}
    >
      <div className="mx-auto flex max-w-[1440px] items-center justify-between gap-4 px-6 py-4 lg:px-16">
        {/* අලුත් Logo Styling එක */}
        <a
          href="/"
          className="shrink-0"
          onClick={(e) => {
            if (pathname === "/") {
              handleScroll(e, "/");
            }
          }}
        >
          <img
            src="https://api.builder.io/api/v1/image/assets/TEMP/576771355e375099b1ec817091b96f428dc5727c?width=508"
            alt="Logo"
            className="h-[42px] w-auto lg:h-[58px]"
          />
        </a>

        <nav className="hidden items-center gap-10 lg:flex">
          {LINKS.map((link) => {
            // Determine active state: if on /contact route, only /contact is active. 
            // If on home route (/), use the activeLink state to highlight the correct scrolled section.
            const isActive = pathname === "/contact"
              ? link.href === "/contact"
              : link.href === activeLink;

            return (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => {
                  if (pathname === "/" && (link.href === "/" || link.href.includes("#"))) {
                    // On home page, use smooth scroll for hashes and home
                    handleScroll(e, link.href);
                  } else {
                    // Cross-page navigation (e.g. from /contact to /#about) -> let browser handle it
                    setActiveLink(link.href);
                    setOpen(false);
                  }
                }}
                className="group relative pb-2 font-dmsans text-xl font-semibold text-[#1C1C1C]"
              >
                {link.label}
                {/* Animated underline — always in DOM for smooth width transition */}
                <span
                  className={`absolute -bottom-0 left-0 h-[3px] rounded-full bg-brand-gradient transition-all duration-300 ease-out ${isActive ? "w-full" : "w-0 group-hover:w-full"}`}
                />
              </a>
            );
          })}
        </nav>

        <a
          href="/contact"
          className="hidden items-center gap-2 rounded-[9px] bg-brand-gradient px-7 py-3 font-dmsans text-lg font-semibold text-white transition-opacity hover:opacity-90 lg:inline-flex"
        >
          Get Started
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="ml-1"><path d="M7 17L17 7" /><path d="M7 7h10v10" /></svg>
        </a>

        <button
          aria-label="Toggle menu"
          className="inline-flex flex-col gap-1.5 lg:hidden"
          onClick={() => setOpen((v) => !v)}
        >
          <span className="h-0.5 w-7 bg-[#1C1C1C]" />
          <span className="h-0.5 w-7 bg-[#1C1C1C]" />
          <span className="h-0.5 w-5 bg-[#1C1C1C]" />
        </button>
      </div>

      {open && (
        <div className="border-t border-black/5 bg-white lg:hidden">
          <nav className="flex flex-col gap-1 px-6 py-4">
            {LINKS.map((link) => {
              const isActive = pathname === "/contact"
                ? link.href === "/contact"
                : link.href === activeLink;

              return (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={(e) => {
                    if (pathname === "/" && (link.href === "/" || link.href.includes("#"))) {
                      handleScroll(e, link.href);
                    } else {
                      setActiveLink(link.href);
                      setOpen(false);
                    }
                  }}
                  className={`rounded-lg px-3 py-3 font-dmsans text-lg font-semibold ${isActive
                    ? "bg-brand-gradient bg-clip-text text-transparent"
                    : "text-[#1C1C1C] hover:bg-black/5"
                    }`}
                >
                  {link.label}
                </a>
              );
            })}
            <a
              href="/contact"
              onClick={() => setOpen(false)}
              className="mt-2 inline-flex items-center justify-center gap-2 rounded-[9px] bg-brand-gradient px-7 py-3 font-dmsans text-base font-semibold text-white"
            >
              Get Started
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="ml-1"><path d="M7 17L17 7" /><path d="M7 7h10v10" /></svg>
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}