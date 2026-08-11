import { useState } from "react";
import Header from "@/components/site/Header";
import Footer from "@/components/site/Footer";
import ScrollReveal from "@/components/ui/ScrollReveal";
import type { ContactResponse } from "@shared/api";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    subject: "",
    message: "",
  });
  const [errors, setErrors] = useState({
    phone: "",
    email: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{
    type: "success" | "error";
    message: string;
  } | null>(null);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    let value = e.target.value;

    if (e.target.name === "phone") {
      value = value.replace(/\D/g, "");
      if (value.length > 10) return;
    }

    setFormData((prev) => ({ ...prev, [e.target.name]: value }));
    if (e.target.name === "email" || e.target.name === "phone") {
      setErrors((prev) => ({ ...prev, [e.target.name]: "" }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitStatus(null);

    let valid = true;
    const newErrors = { phone: "", email: "" };

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      newErrors.email = "Please enter a valid email address";
      valid = false;
    }

    const phoneRegex = /^[\d+\-\s]{10,15}$/;
    if (!phoneRegex.test(formData.phone)) {
      newErrors.phone = "Please enter a valid phone number";
      valid = false;
    }

    setErrors(newErrors);
    if (!valid) return;

    setIsSubmitting(true);
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data: ContactResponse = await res.json();

      if (data.success) {
        setSubmitStatus({ type: "success", message: data.message });
        setFormData({ name: "", phone: "", email: "", subject: "", message: "" });
      } else {
        setSubmitStatus({ type: "error", message: data.message });
      }
    } catch {
      setSubmitStatus({
        type: "error",
        message: "Something went wrong. Please check your connection and try again.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-white">
      <Header />

      <main className="pb-64 pt-20 md:pt-24">
        <ScrollReveal distance={48}>
          {/* ── Hero ── */}
          <section className="px-6 pt-20 pb-24 text-center lg:px-16">
            <h1 className="font-poppins text-5xl leading-[1.1] text-[#242424] sm:text-6xl md:text-7xl lg:text-[90px] lg:leading-[1.1]">
              Let's{" "}
              <span className="font-semibold text-[#1C1C1C]">Build</span>{" "}
              Your
              <br />
              Next{" "}
              <span className="bg-brand-gradient bg-clip-text text-transparent font-semibold">
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
                {/* Group 1 (Name and Phone) */}
                <ScrollReveal delay={0.1}>
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
                        maxLength={10}
                        value={formData.phone}
                        onChange={handleChange}
                        className={`rounded-lg bg-gray-100 px-4 py-3 font-poppins text-sm text-[#1C1C1C] outline-none placeholder:text-gray-400 focus:ring-2 focus:ring-[#20D3FE]/40 ${errors.phone ? 'ring-2 ring-red-500' : ''}`}
                        placeholder=""
                      />
                      {errors.phone && (
                        <span className="font-poppins text-sm text-red-500 mt-1">{errors.phone}</span>
                      )}
                    </div>
                  </div>
                </ScrollReveal>

                {/* Group 2 (Email and Subject) */}
                <ScrollReveal delay={0.2}>
                  <div className="grid gap-6 md:grid-cols-2">
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
                        className={`rounded-lg bg-gray-100 px-4 py-3 font-poppins text-sm text-[#1C1C1C] outline-none placeholder:text-gray-400 focus:ring-2 focus:ring-[#20D3FE]/40 ${errors.email ? 'ring-2 ring-red-500' : ''}`}
                        placeholder=""
                      />
                      {errors.email && (
                        <span className="font-poppins text-sm text-red-500 mt-1">{errors.email}</span>
                      )}
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
                </ScrollReveal>

                {/* Group 3 (Message and Submit) */}
                <ScrollReveal delay={0.3}>
                  <div className="flex flex-col gap-6">
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
                        disabled={isSubmitting}
                        className="rounded-lg bg-brand-gradient px-12 py-3 font-poppins text-sm font-semibold tracking-widest text-white transition-opacity hover:opacity-90 disabled:cursor-not-allowed disabled:opacity-60"
                      >
                        {isSubmitting ? "SENDING..." : "SEND"}
                      </button>
                    </div>
                  </div>
                </ScrollReveal>
              </form>

              {/* Status Banner */}
              {submitStatus && (
                <div
                  className={`mt-6 rounded-lg px-5 py-4 font-poppins text-sm ${submitStatus.type === "success"
                      ? "bg-green-50 text-green-700 ring-1 ring-green-200"
                      : "bg-red-50 text-red-700 ring-1 ring-red-200"
                    }`}
                >
                  {submitStatus.message}
                </div>
              )}
            </div>
          </section>
        </ScrollReveal>
      </main>

      <Footer />
    </div>
  );
}
