import { useState } from "react";
import Header from "@/components/site/Header";
import Footer from "@/components/site/Footer";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: wire up form submission
  };

  return (
    <div className="min-h-screen bg-white">
      <Header />

      <main className="pb-64">
        {/* ── Hero ── */}
        <section className="px-6 pt-20 pb-24 text-center lg:px-16">
          <h1 className="font-poppins text-6xl font-normal leading-none md:text-7xl lg:text-8xl">
            Let's{" "}
            <span className="font-bold text-[#1C1C1C]">Build</span>{" "}
            Your
            <br />
            Next{" "}
            <span className="bg-brand-gradient bg-clip-text text-transparent font-bold">
              Big Thing
            </span>
          </h1>
        </section>

        {/* ── Form ── */}
        <section className="px-6 lg:px-16">
          <div className="mx-auto max-w-3xl">
            <h2 className="mb-10 text-center font-poppins text-4xl font-normal sm:text-5xl">
              Get In{" "}
              <span className="font-bold text-[#1C1C1C]">Touch</span>
            </h2>

            <form onSubmit={handleSubmit} className="flex flex-col gap-6">
              {/* 2-column grid */}
              <div className="grid gap-6 md:grid-cols-2">
                {/* Name */}
                <div className="flex flex-col gap-2">
                  <label
                    htmlFor="contact-name"
                    className="font-poppins text-sm font-medium text-[#1C1C1C]"
                  >
                    Name
                  </label>
                  <input
                    id="contact-name"
                    name="name"
                    type="text"
                    value={formData.name}
                    onChange={handleChange}
                    className="rounded-lg bg-gray-100 px-4 py-3 font-poppins text-sm text-[#1C1C1C] outline-none placeholder:text-gray-400 focus:ring-2 focus:ring-[#20D3FE]/40"
                    placeholder=""
                  />
                </div>

                {/* Phone */}
                <div className="flex flex-col gap-2">
                  <label
                    htmlFor="contact-phone"
                    className="font-poppins text-sm font-medium text-[#1C1C1C]"
                  >
                    Phone Number
                  </label>
                  <input
                    id="contact-phone"
                    name="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={handleChange}
                    className="rounded-lg bg-gray-100 px-4 py-3 font-poppins text-sm text-[#1C1C1C] outline-none placeholder:text-gray-400 focus:ring-2 focus:ring-[#20D3FE]/40"
                    placeholder=""
                  />
                </div>

                {/* Email */}
                <div className="flex flex-col gap-2">
                  <label
                    htmlFor="contact-email"
                    className="font-poppins text-sm font-medium text-[#1C1C1C]"
                  >
                    E-mail
                  </label>
                  <input
                    id="contact-email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="rounded-lg bg-gray-100 px-4 py-3 font-poppins text-sm text-[#1C1C1C] outline-none placeholder:text-gray-400 focus:ring-2 focus:ring-[#20D3FE]/40"
                    placeholder=""
                  />
                </div>

                {/* Subject */}
                <div className="flex flex-col gap-2">
                  <label
                    htmlFor="contact-subject"
                    className="font-poppins text-sm font-medium text-[#1C1C1C]"
                  >
                    Subject
                  </label>
                  <input
                    id="contact-subject"
                    name="subject"
                    type="text"
                    value={formData.subject}
                    onChange={handleChange}
                    className="rounded-lg bg-gray-100 px-4 py-3 font-poppins text-sm text-[#1C1C1C] outline-none placeholder:text-gray-400 focus:ring-2 focus:ring-[#20D3FE]/40"
                    placeholder=""
                  />
                </div>
              </div>

              {/* Message — full width */}
              <div className="flex flex-col gap-2">
                <label
                  htmlFor="contact-message"
                  className="font-poppins text-sm font-medium text-[#1C1C1C]"
                >
                  Message
                </label>
                <textarea
                  id="contact-message"
                  name="message"
                  rows={7}
                  value={formData.message}
                  onChange={handleChange}
                  className="resize-none rounded-lg bg-gray-100 px-4 py-3 font-poppins text-sm text-[#1C1C1C] outline-none placeholder:text-gray-400 focus:ring-2 focus:ring-[#20D3FE]/40"
                  placeholder=""
                />
              </div>

              {/* Submit */}
              <div className="flex justify-center pt-2">
                <button
                  id="contact-submit"
                  type="submit"
                  className="rounded-lg bg-brand-gradient px-12 py-3 font-poppins text-sm font-semibold tracking-widest text-white transition-opacity hover:opacity-90"
                >
                  SEND
                </button>
              </div>
            </form>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
