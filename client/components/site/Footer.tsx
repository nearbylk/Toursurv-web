export default function Footer() {
  return (
    <footer className="bg-brand-dark px-6 pb-10 pt-16 text-white lg:px-16">
      <div className="mx-auto max-w-[1440px]">
        <div className="flex flex-wrap items-start gap-x-16 gap-y-10">
          <div className="max-w-sm">
            <span className="bg-brand-gradient bg-clip-text font-poppins text-2xl font-bold text-transparent">
              Toursurv
            </span>
            <p className="mt-4 font-outfit text-base font-light text-white/80">
              Innovative software solutions providing organization operating
              across Sri Lanka, Bangladesh, and USA.
            </p>
          </div>

          <div>
            <h4 className="font-outfit text-lg font-bold">Services</h4>
            <ul className="mt-4 space-y-2 font-outfit text-base font-light text-white/80">
              <li>Website Development</li>
              <li>Mobile App Development</li>
              <li>Web App Development</li>
              <li>IoT Solutions</li>
            </ul>
          </div>

          <div>
            <h4 className="font-outfit text-lg font-bold">Contact</h4>
            <ul className="mt-4 space-y-2 font-outfit text-base font-light text-white/80">
              <li>toursurv@gmail.com</li>
              <li>0112-755050</li>
              <li>071-11108108</li>
            </ul>
          </div>

          <div>
            <h4 className="font-outfit text-lg font-bold">Quick Links</h4>
            <ul className="mt-4 space-y-2 font-outfit text-base font-light text-white/80">
              <li>
                <a href="#work" className="hover:text-white">
                  Portfolio
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-white">
                  Our products
                </a>
              </li>
              <li>
                <a href="#about" className="hover:text-white">
                  Team Member
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-white">
                  Contact Us
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t border-white/20 pt-6 text-center font-outfit text-sm font-light text-white/70 sm:text-right">
          © {new Date().getFullYear()} Toursurv (Pvt) Ltd. All rights
          reserved.
        </div>
      </div>
    </footer>
  );
}
