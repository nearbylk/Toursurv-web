
const COLLAGE = [
  {
    src: "https://api.builder.io/api/v1/image/assets/TEMP/644d19cf7ed7c6119a26df7234ddcd23ed1c1a34?width=1130",
    className: "col-span-2 row-span-2",
  },
  {
    src: "https://api.builder.io/api/v1/image/assets/TEMP/37fe504f185d53dc8cca173e906b4edcacb460c9?width=772",
    className: "col-span-2",
  },
  {
    src: "https://api.builder.io/api/v1/image/assets/TEMP/0284713dcc93c2c6ef255e19a78ca70743d55567?width=532",
    className: "row-span-2",
  },
  {
    src: "https://api.builder.io/api/v1/image/assets/TEMP/ca0b64abf625876d8d75a9247e3aec192a5bdf9c?width=762",
    className: "",
  },
  {
    src: "https://api.builder.io/api/v1/image/assets/TEMP/922210f0a3e5be4fbc04743aed47b84bf2b6d371?width=832",
    className: "",
  },
  {
    src: "https://api.builder.io/api/v1/image/assets/TEMP/4d7fe8f103476655d4f168ee64fdf9435073408f?width=474",
    className: "",
  },
];

export default function Hero() {
  return (
    <section
      id="home"
      className="relative overflow-hidden bg-gradient-to-b from-white via-white to-[#f4f4f4]"
    >
      <div className="mx-auto max-w-[1440px] px-6 pb-16 pt-16 lg:px-16 lg:pt-24">
        <div className="mx-auto max-w-4xl text-center">
          <h1 className="font-poppins text-5xl leading-[1.1] text-[#242424] sm:text-6xl md:text-7xl lg:text-[90px] lg:leading-[1.1]">
            We Build <span className="font-semibold">Digital</span> <br className="hidden sm:block" />
            <span className="font-semibold">Solutions</span> That <br className="hidden sm:block" />
            <span className="text-transparent bg-brand-gradient bg-clip-text">
              <span className="font-semibold">Grow </span>
              <span className="font-normal">Your </span>
              <span className="font-semibold">Business</span>
            </span>
          </h1>
          <p className="mx-auto mt-8 max-w-3xl font-dmsans text-lg font-semibold text-[#656565]">
            From powerful web & mobile applications to results driven
            marketing strategies we help brands create impact, connect with
            audiences and archive real results.
          </p>
          <a
            href="#contact"
            className="mt-8 inline-flex items-center justify-center gap-2 rounded-[9px] bg-brand-gradient px-10 py-3 font-dmsans text-lg font-semibold text-white transition-opacity hover:opacity-90"
          >
            Learn More
          </a>
        </div>

        <div className="relative mx-auto mt-16 grid max-w-5xl grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
          {COLLAGE.map((item, i) => (
            <div
              key={i}
              className={`overflow-hidden rounded-2xl bg-black/5 shadow-lg ${item.className}`}
            >
              <img
                src={item.src}
                alt=""
                className="h-full w-full object-cover"
              />
            </div>
          ))}

          <div className="relative col-span-2 flex flex-col items-center justify-center gap-4 rounded-2xl bg-[#C17EC3] p-6 sm:col-span-1">
            <div className="flex gap-3">
              <a
                href="#"
                aria-label="Facebook"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-white/90"
              >
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 34 34"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M31.1668 17C31.1668 9.18001 24.8202 2.83334 17.0002 2.83334C9.18016 2.83334 2.8335 9.18001 2.8335 17C2.8335 23.8567 7.70683 29.5658 14.1668 30.8833V21.25H11.3335V17H14.1668V13.4583C14.1668 10.7242 16.391 8.50001 19.1252 8.50001H22.6668V12.75H19.8335C19.0543 12.75 18.4168 13.3875 18.4168 14.1667V17H22.6668V21.25H18.4168V31.0958C25.571 30.3875 31.1668 24.3525 31.1668 17Z"
                    fill="url(#grad-fb)"
                  />
                  <defs>
                    <linearGradient
                      id="grad-fb"
                      x1="17.0002"
                      y1="2.83334"
                      x2="17.0002"
                      y2="31.0958"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stopColor="#20D3FE" />
                      <stop offset="1" stopColor="#8857FE" />
                    </linearGradient>
                  </defs>
                </svg>
              </a>
              <a
                href="#"
                aria-label="Instagram"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-white/90"
              >
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 34 34"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M11.0502 2.83334H22.9502C27.4835 2.83334 31.1668 6.51668 31.1668 11.05V22.95C31.1668 25.1292 30.3011 27.2191 28.7602 28.7601C27.2193 30.301 25.1294 31.1667 22.9502 31.1667H11.0502C6.51683 31.1667 2.8335 27.4833 2.8335 22.95V11.05C2.8335 8.87082 3.69918 6.78087 5.2401 5.23995C6.78103 3.69903 8.87097 2.83334 11.0502 2.83334ZM10.7668 5.66668C9.41423 5.66668 8.11702 6.204 7.16059 7.16043C6.20415 8.11687 5.66683 9.41407 5.66683 10.7667V23.2333C5.66683 26.0525 7.94766 28.3333 10.7668 28.3333H23.2335C24.5861 28.3333 25.8833 27.796 26.8397 26.8396C27.7962 25.8832 28.3335 24.5859 28.3335 23.2333V10.7667C28.3335 7.94751 26.0527 5.66668 23.2335 5.66668H10.7668ZM24.4377 7.79168C24.9073 7.79168 25.3577 7.97825 25.6898 8.31034C26.0219 8.64244 26.2085 9.09286 26.2085 9.56251C26.2085 10.0322 26.0219 10.4826 25.6898 10.8147C25.3577 11.1468 24.9073 11.3333 24.4377 11.3333C23.968 11.3333 23.5176 11.1468 23.1855 10.8147C22.8534 10.4826 22.6668 10.0322 22.6668 9.56251C22.6668 9.09286 22.8534 8.64244 23.1855 8.31034C23.5176 7.97825 23.968 7.79168 24.4377 7.79168ZM17.0002 9.91668C18.8788 9.91668 20.6805 10.663 22.0088 11.9913C23.3372 13.3197 24.0835 15.1214 24.0835 17C24.0835 18.8786 23.3372 20.6803 22.0088 22.0087C20.6805 23.3371 18.8788 24.0833 17.0002 24.0833C15.1215 24.0833 13.3199 23.3371 11.9915 22.0087C10.6631 20.6803 9.91683 18.8786 9.91683 17C9.91683 15.1214 10.6631 13.3197 11.9915 11.9913C13.3199 10.663 15.1215 9.91668 17.0002 9.91668ZM17.0002 12.75C15.873 12.75 14.792 13.1978 13.995 13.9948C13.1979 14.7918 12.7502 15.8728 12.7502 17C12.7502 18.1272 13.1979 19.2082 13.995 20.0052C14.792 20.8022 15.873 21.25 17.0002 21.25C18.1273 21.25 19.2083 20.8022 20.0054 20.0052C20.8024 19.2082 21.2502 18.1272 21.2502 17C21.2502 15.8728 20.8024 14.7918 20.0054 13.9948C19.2083 13.1978 18.1273 12.75 17.0002 12.75Z"
                    fill="url(#grad-ig)"
                  />
                  <defs>
                    <linearGradient
                      id="grad-ig"
                      x1="17.0002"
                      y1="2.83334"
                      x2="17.0002"
                      y2="31.1667"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stopColor="#20D3FE" />
                      <stop offset="1" stopColor="#8857FE" />
                    </linearGradient>
                  </defs>
                </svg>
              </a>
              <a
                href="#"
                aria-label="LinkedIn"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-white/90"
              >
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 35 35"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M27.7083 4.375C28.4819 4.375 29.2237 4.68229 29.7707 5.22927C30.3177 5.77625 30.625 6.51812 30.625 7.29167V27.7083C30.625 28.4819 30.3177 29.2237 29.7707 29.7707C29.2237 30.3177 28.4819 30.625 27.7083 30.625H7.29167C6.51812 30.625 5.77625 30.3177 5.22927 29.7707C4.68229 29.2237 4.375 28.4819 4.375 27.7083V7.29167C4.375 6.51812 4.68229 5.77625 5.22927 5.22927C5.77625 4.68229 6.51812 4.375 7.29167 4.375H27.7083ZM26.9792 26.9792V19.25C26.9792 17.9891 26.4783 16.7799 25.5867 15.8883C24.6951 14.9967 23.4859 14.4958 22.225 14.4958C20.9854 14.4958 19.5417 15.2542 18.8417 16.3917V14.7729H14.7729V26.9792H18.8417V19.7896C18.8417 18.6667 19.7458 17.7479 20.8688 17.7479C21.4102 17.7479 21.9295 17.963 22.3124 18.3459C22.6953 18.7288 22.9104 19.2481 22.9104 19.7896V26.9792H26.9792ZM10.0333 12.4833C10.6831 12.4833 11.3063 12.2252 11.7657 11.7657C12.2252 11.3063 12.4833 10.6831 12.4833 10.0333C12.4833 8.67708 11.3896 7.56875 10.0333 7.56875C9.37969 7.56875 8.75281 7.82841 8.29061 8.29061C7.82841 8.75281 7.56875 9.37969 7.56875 10.0333C7.56875 11.3896 8.67708 12.4833 10.0333 12.4833ZM12.0604 26.9792V14.7729H8.02083V26.9792H12.0604Z"
                    fill="url(#grad-li)"
                  />
                  <defs>
                    <linearGradient
                      id="grad-li"
                      x1="17.5"
                      y1="4.375"
                      x2="17.5"
                      y2="30.625"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stopColor="#20D3FE" />
                      <stop offset="1" stopColor="#8857FE" />
                    </linearGradient>
                  </defs>
                </svg>
              </a>
            </div>
            <svg className="h-6 w-6 opacity-70" width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M4.75 9.54169L9.79167 4.5" stroke="white" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round"/><path d="M5.29167 4.66669H9.83333V9.20835" stroke="white" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round"/></svg>
          </div>
        </div>
      </div>
    </section>
  );
}
